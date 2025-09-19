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
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // Comprehensive email validation function
  const validateEmail = (email: string): boolean => {
    if (!email || email.trim() === '') return false;
    
    // Basic email regex pattern
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    if (!emailRegex.test(email)) return false;
    
    // Additional checks
    const [localPart, domain] = email.split('@');
    
    // Check local part (before @)
    if (localPart.length === 0 || localPart.length > 64) return false;
    if (localPart.startsWith('.') || localPart.endsWith('.')) return false;
    if (localPart.includes('..')) return false;
    
    // Check domain part (after @)
    if (domain.length === 0 || domain.length > 255) return false;
    if (!domain.includes('.')) return false;
    if (domain.startsWith('.') || domain.endsWith('.')) return false;
    if (domain.includes('..')) return false;
    
    // Check for valid TLD (at least 2 characters)
    const domainParts = domain.split('.');
    const tld = domainParts[domainParts.length - 1];
    if (tld.length < 2 || !/^[a-zA-Z]+$/.test(tld)) return false;
    
    return true;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear message when user starts typing after an error
    if (message && hasAttemptedSubmit) {
      setMessage('');
      setHasAttemptedSubmit(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAttemptedSubmit(true);
    
    // Validate email before submission
    if (!email || email.trim() === '') {
      setMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address (e.g., user@example.com)');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

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
        setShowThankYouModal(true);
      } else {
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
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
            className={`bg-gradient-to-r from-purple-800 to-purple-900 hover:from-purple-900 hover:to-indigo-900 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base disabled:opacity-50 ${buttonClassName}`}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </form>
        {message && (
          <p className="mt-2 text-sm text-red-400">
            {message}
          </p>
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