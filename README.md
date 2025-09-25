# Mirch - Dining Reimagined 🌶️

[![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Experience seamless dining from discovery to payment with Mirch.** Our revolutionary platform transforms how you discover restaurants, connect with similar food lovers, and enjoy personalized dining experiences.

## 🚀 What is Mirch?

Mirch is a comprehensive dining platform that combines AI-powered restaurant discovery with social dining experiences. We help diners find restaurants and dishes based on their unique taste profiles while enabling restaurants to better understand and serve their customers.

### ✨ Key Features

#### For Diners
- **🎯 Taste-Based Discovery** - Find restaurants and dishes based on your unique taste profile
- **👥 Connect with Similar Diners** - Discover what people with your taste buds love
- **⭐ Dish-Level Ratings** - See ratings and reviews for every single dish, not just restaurants
- **📱 NFC Table Ordering** - Scan NFC tags at restaurant tables to instantly access menus and order
- **💳 Split & Pay Seamlessly** - Split bills with your table and pay directly through the app
- **🏆 Loyalty Rewards** - Earn points and rewards for every dining experience

#### For Restaurants
- **📊 Advanced Analytics** - Understand diner preferences and trends
- **🎨 Menu Customization** - Highlight your most-loved dishes
- **👥 Customer Insights** - Get insights powered by our recommendation engine
- **📈 Performance Tracking** - Track dish popularity and customer satisfaction

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.3](https://nextjs.org/) with Turbopack
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **UI Components**: Custom components with Radix UI primitives
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📁 Project Structure

```
landing-page/
├── app/
│   ├── components/           # Reusable React components
│   │   ├── Hero.tsx         # Landing page hero section
│   │   ├── ComprehensiveForDiners.tsx  # Features for diners
│   │   ├── ComprehensiveForRestaurants.tsx # Features for restaurants
│   │   ├── ProblemSolution.tsx # Problem/solution showcase
│   │   ├── HowItWorks.tsx   # How the app works section
│   │   ├── EmailForm.tsx    # Waitlist signup form
│   │   └── ...              # Other components
│   ├── ui/                  # Base UI components
│   ├── api/                 # API routes
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
├── public/                  # Static assets
│   ├── mirch-logo.png       # Brand assets
│   ├── foodie-mockup.png    # App mockups
│   └── ...                  # Other images and icons
├── components.json          # shadcn/ui configuration
└── ...
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mirchapp/landing-page.git
   cd landing-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the landing page.

### Environment Variables

Create a `.env.local` file in the root directory for environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://mirch.app
# Add other environment variables as needed
```

## 🎨 Customization

### Styling
- The project uses Tailwind CSS 4 for styling
- Custom animations are implemented with Framer Motion
- Color scheme and design tokens can be customized in `globals.css`

### Components
- All components are built with accessibility in mind
- Responsive design ensures great experience across all devices
- Components use TypeScript for better development experience

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be deployed and available at a Vercel URL

### Other Deployment Options

This Next.js app can be deployed to any platform that supports Node.js:
- [Netlify](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Docker

## 🤝 Contributing

We welcome contributions to improve the Mirch landing page! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Website**: [mirch.app](https://mirch.app)
- **Documentation**: [Next.js Docs](https://nextjs.org/docs)
- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)

---

**Ready to transform your dining experience?** Join our waitlist and be among the first to experience the future of dining! 🚀
