# 🛡️ AI Secure Pay

**AI-Powered UPI Fraud Detection System**

A modern web application that leverages Google's Gemini AI to detect phishing attempts and monitor UPI transaction security in real-time. Built with React, TypeScript, and cutting-edge AI technology.

![AI Secure Pay](https://img.shields.io/badge/AI-Powered-blue)
![React](https://img.shields.io/badge/React-18.3-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178c6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?logo=vite)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Setup](#-environment-setup)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🔍 Real-Time Phishing Detection
- AI-powered message analysis using Google Gemini 2.0 Flash
- Identifies phishing attempts, scams, and suspicious content
- Detailed threat analysis with safety recommendations
- Instant verdict: SAFE or SCAM classification

### 📊 Transaction Monitoring Dashboard
- Visual overview of UPI transaction security
- Risk score visualization with interactive charts
- Transaction history with status indicators (Safe/Suspicious/Fraudulent)
- Advanced search and filtering capabilities

### 📈 Analytics & Insights
- Transaction trends analysis
- Risk distribution charts
- Merchant risk profiling
- Historical data visualization

### 🎨 Modern UI/UX
- Dark theme design with custom color system
- Responsive layout for all devices
- Smooth animations with Framer Motion
- Accessible components using Radix UI primitives

## 🛠️ Tech Stack

### Frontend
- **React 18.3** - Modern React with hooks
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Lightning-fast build tool
- **React Router 6** - Client-side routing

### UI & Styling
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

### AI & Data
- **Google Gemini 2.0 Flash** - AI-powered phishing detection
- **TanStack Query** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

### Charts & Visualization
- **Recharts** - Composable charting library

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/hcthakur2004/ai-secure-pay.git
cd ai-secure-pay
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
```

4. **Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

## 🔐 Environment Setup

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> ⚠️ **Important:** Never commit your `.env` file. It's already included in `.gitignore`.

### Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key to your `.env` file

## 💻 Usage

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
npm start  # alias for preview

# Run linter
npm run lint
```

### Phishing Detector

1. Navigate to the **Phishing Detector** page
2. Paste a suspicious message into the text area
3. Click **Analyze Message**
4. View the AI-powered analysis and verdict

**Example Test Messages:**

**Scam:**
```
URGENT! Your account has been suspended. 
Click here immediately to verify your details 
and claim your refund of ₹5000. 
Reply with your OTP and CVV to confirm.
```

**Safe:**
```
Your order #12345 has been confirmed and 
will arrive by tomorrow. Track your package 
at our official website.
```

## 📁 Project Structure

```
ai-secure-pay/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── AppLayout.tsx
│   │   ├── AppSidebar.tsx
│   │   ├── AlertBanner.tsx
│   │   ├── RiskChart.tsx
│   │   └── TransactionTable.tsx
│   ├── pages/          # Route components
│   │   ├── Dashboard.tsx
│   │   ├── Analytics.tsx
│   │   ├── PhishingDetector.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── data/           # Mock data & types
│   │   └── mockTransactions.ts
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utilities
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── .env.example        # Environment template
├── GEMINI_INTEGRATION.md  # API integration docs
├── WARP.md            # Warp AI configuration
└── README.md          # This file
```

## 🤖 API Integration

The application uses Google's Gemini 2.0 Flash API for phishing detection.

**Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`

**Features:**
- Real-time message analysis
- Context-aware threat detection
- Detailed reasoning and explanations
- High accuracy phishing detection

For detailed API integration documentation, see [GEMINI_INTEGRATION.md](./GEMINI_INTEGRATION.md)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be created in the `dist/` directory.

### Deployment Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Deploy the dist/ folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Deploy contents of dist/ to gh-pages branch
```

### Environment Variables in Production

Make sure to set your `VITE_GEMINI_API_KEY` in your deployment platform's environment variables.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Harish Chandra Thakur**
- GitHub: [@hcthakur2004](https://github.com/hcthakur2004)

## 🙏 Acknowledgments

- Google Gemini AI for powerful phishing detection
- shadcn/ui for beautiful component primitives
- Vercel for inspiration and hosting

---

<p align="center">Made with ❤️ for secure digital payments</p>
