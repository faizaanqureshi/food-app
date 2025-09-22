"use client";
import { useState } from 'react';
import ThankYouModal from './ThankYouModal';

interface EmailFormProps {
  placeholder?: string;
  buttonText?: string;
  source: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

export default function EmailForm({ 
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  source,
  className = "",
  inputClassName = "",
  buttonClassName = ""
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [messageType, setMessageType] = useState<'error' | 'info'>('error');

  // Enterprise-grade email validation function
  const validateEmail = (email: string): { isValid: boolean; error?: string; suggestion?: string } => {
    if (!email || email.trim() === '') {
      return { isValid: false, error: 'Email address is required' };
    }
    
    const trimmedEmail = email.trim().toLowerCase();
    
    // Basic email regex pattern (RFC 5322 compliant)
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(trimmedEmail)) {
      return { isValid: false, error: 'Please enter a valid email format' };
    }
    
    const [localPart, domain] = trimmedEmail.split('@');
    
    // Check local part (before @)
    if (localPart.length === 0 || localPart.length > 64) {
      return { isValid: false, error: 'Email username is too long' };
    }
    if (localPart.startsWith('.') || localPart.endsWith('.')) {
      return { isValid: false, error: 'Email username cannot start or end with a dot' };
    }
    if (localPart.includes('..')) {
      return { isValid: false, error: 'Email username cannot contain consecutive dots' };
    }
    
    // Check domain part (after @)
    if (domain.length === 0 || domain.length > 255) {
      return { isValid: false, error: 'Email domain is invalid' };
    }
    if (!domain.includes('.')) {
      return { isValid: false, error: 'Email domain must contain a dot' };
    }
    if (domain.startsWith('.') || domain.endsWith('.') || domain.startsWith('-') || domain.endsWith('-')) {
      return { isValid: false, error: 'Email domain format is invalid' };
    }
    if (domain.includes('..')) {
      return { isValid: false, error: 'Email domain cannot contain consecutive dots' };
    }
    
    // Check for valid TLD (at least 2 characters)
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) {
      return { isValid: false, error: 'Email domain must have a valid extension' };
    }
    
    // Check for disposable email domains
    const disposableDomains = [
      '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'tempmail.org',
      'throwaway.email', 'temp-mail.org', 'getnada.com', 'maildrop.cc',
      'sharklasers.com', 'yopmail.com', 'mohmal.com', 'emailondeck.com'
    ];
    
    if (disposableDomains.includes(domain)) {
      return { isValid: false, error: 'Please use a permanent email address' };
    }
    
    // Check for role-based emails (optional warning)
    const roleBasedPrefixes = ['admin', 'info', 'support', 'sales', 'marketing', 'noreply', 'no-reply'];
    if (roleBasedPrefixes.some(prefix => localPart.startsWith(prefix))) {
      // For enterprise, you might want to block these or just warn
      // return { isValid: false, error: 'Please use a personal email address' };
    }
    
    // Common typo detection and suggestions
    const commonDomainTypos: { [key: string]: string } = {
      'gmial.com': 'gmail.com',
      'gmai.com': 'gmail.com', 
      'gmail.co': 'gmail.com',
      'yahooo.com': 'yahoo.com',
      'yahoo.co': 'yahoo.com',
      'hotmial.com': 'hotmail.com',
      'hotmai.com': 'hotmail.com',
      'outlok.com': 'outlook.com',
      'outloo.com': 'outlook.com'
    };
    
    if (commonDomainTypos[domain]) {
      return { 
        isValid: false, 
        error: 'Did you mean this email?', 
        suggestion: `${localPart}@${commonDomainTypos[domain]}` 
      };
    }
    
    return { isValid: true };
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear any feedback (error/info/suggestion) when the user types again
    if (message || suggestion) {
      if (messageType === 'info' || hasAttemptedSubmit) {
        setMessage('');
        setSuggestion('');
        setHasAttemptedSubmit(false);
        setMessageType('error');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    
    // Validate email before submission
    if (!email || email.trim() === '') {
      setMessage('Please enter your email address');
      setMessageType('error');
      setSuggestion('');
      return;
    }
    
    const validation = validateEmail(email);
    if (!validation.isValid) {
      setMessage(validation.error || 'Please enter a valid email address');
      setMessageType('error');
      setSuggestion(validation.suggestion || '');
      return;
    }

    setIsSubmitting(true);
    setMessage('');
    setMessageType('error');
    setSuggestion('');

    try {
      const response = await fetch('/api/submit-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail('');
        if (data.alreadySignedUp) {
          setMessage("You've already signed up!");
          setMessageType('info');
          setHasAttemptedSubmit(false);
        } else {
          setShowThankYouModal(true);
        }
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={className}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={placeholder}
            disabled={isSubmitting}
            className={`flex-1 px-4 py-3 rounded-full border ${
              message && hasAttemptedSubmit
                ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200' 
                : 'border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200'
            } focus:outline-none text-gray-300 placeholder-gray-300 shadow-sm text-sm sm:text-base disabled:opacity-50 ${inputClassName}`}
          />
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 whitespace-nowrap text-sm sm:text-base disabled:opacity-50 transform hover:scale-[1.02] ${buttonClassName}`}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </form>
        {message && (
          <div className="mt-3">
            {suggestion ? (
              <p className="text-sm text-white/70 font-light animate-fade-up animation-delay-200">
                Did you mean{' '}
                <button
                  type="button"
                  onClick={() => {
                    setEmail(suggestion);
                    setMessage('');
                    setSuggestion('');
                    setHasAttemptedSubmit(false);
                  }}
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-2 decoration-1 hover:decoration-2 transition-all duration-200 font-normal"
                >
                  {suggestion}
                </button>
                ?
              </p>
            ) : (
              <div className={`flex items-center space-x-2 text-sm font-light ${messageType === 'info' ? 'text-white/80' : 'text-red-400/90'}`}>
                {messageType === 'info' ? (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                )}
                <span>{message}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Thank You Modal */}
      <ThankYouModal 
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
      />
    </>
  );
}