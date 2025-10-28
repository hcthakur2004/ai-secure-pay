# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

AI Secure Pay is a frontend application for AI-powered UPI fraud detection. It provides real-time monitoring of UPI transactions with fraud detection and phishing message analysis capabilities.

**Tech Stack:**
- Vite + React 18 + TypeScript
- shadcn/ui component library (Radix UI primitives)
- Tailwind CSS with custom design system
- React Router for navigation
- TanStack Query for data fetching
- Framer Motion for animations

## Development Commands

```powershell
# Install dependencies
npm install

# Start dev server (runs on http://[::]:8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Preview production build
npm run preview
npm start  # alias for preview

# Lint code
npm run lint
```

## Architecture

### Application Structure

The app follows a React SPA architecture with client-side routing:

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui primitives (DO NOT edit manually)
│   ├── AppLayout.tsx         # Main layout with sidebar
│   ├── AppSidebar.tsx        # Navigation sidebar
│   ├── AlertBanner.tsx       # Alert notifications
│   ├── RiskChart.tsx         # Transaction risk visualization
│   ├── SummaryCard.tsx       # Dashboard metrics
│   └── TransactionTable.tsx  # Transaction list display
├── pages/           # Route components
│   ├── Dashboard.tsx         # Main dashboard (/)
│   ├── Analytics.tsx         # Analytics view (/analytics)
│   ├── PhishingDetector.tsx  # Phishing detector (/phishing)
│   ├── About.tsx            # About page (/about)
│   └── NotFound.tsx         # 404 page
├── data/            # Mock data and types
│   └── mockTransactions.ts  # Transaction interface and mock data
├── hooks/           # Custom React hooks
│   ├── use-mobile.tsx       # Mobile detection
│   └── use-toast.ts         # Toast notifications
├── lib/             # Utilities
│   └── utils.ts             # cn() utility for class merging
├── App.tsx          # App entry with routing and providers
├── main.tsx         # React DOM entry point
└── index.css        # Global styles and design system
```

### Key Architecture Patterns

**Layout Structure:**
- `AppLayout` wraps all routes and provides the sidebar navigation
- Uses shadcn/ui `SidebarProvider` for responsive sidebar behavior
- Header shows app branding and sidebar toggle

**Data Flow:**
- Currently uses mock data from `src/data/mockTransactions.ts`
- Transaction data structure: `{ id, date, merchant, amount, risk, status }`
- Status types: `'Safe' | 'Suspicious' | 'Fraudulent'`
- When integrating real APIs, use TanStack Query (already set up in App.tsx)

**Routing:**
- React Router v6 with BrowserRouter
- All routes defined in `App.tsx`
- Client-side navigation using `<Link>` or `useNavigate()`

**State Management:**
- Local component state with React hooks
- No global state management library currently
- TanStack Query for server state (when APIs are integrated)

**Styling:**
- All styles use Tailwind CSS utility classes
- Design system defined in `src/index.css` with CSS variables
- HSL color format required for all custom colors
- Path alias `@/` points to `src/`

## Design System

The application uses a custom dark theme design system defined in `src/index.css`:

**Color Palette:**
- Primary: Teal/cyan (`174 84% 40%`)
- Success: Green (`142 76% 36%`)
- Destructive/Danger: Red (`0 84% 60%`)
- Warning: Orange (`38 92% 50%`)

**Custom Utilities:**
- `bg-gradient-primary`, `bg-gradient-danger`, `bg-gradient-success` - gradient backgrounds
- `shadow-glow`, `shadow-card` - custom shadows
- All colors use CSS variables and must be HSL format

**Component Library:**
- Uses shadcn/ui components from `src/components/ui/`
- DO NOT manually edit files in `src/components/ui/` - they are managed by shadcn CLI
- To add new shadcn components: use shadcn CLI or copy from shadcn.com
- Custom components go in `src/components/` (not in `/ui` subdirectory)

## Code Conventions

**Import Paths:**
- Use `@/` alias for all imports from `src/`
- Example: `import { Button } from "@/components/ui/button"`

**TypeScript:**
- Type safety is relaxed: `noImplicitAny: false`, `strictNullChecks: false`
- Unused variables and parameters are allowed
- Define interfaces for data structures in the same file or in `src/data/`

**Component Structure:**
- Prefer function components with hooks
- Export default for page components
- Named exports for reusable components
- Use Framer Motion for animations with `initial`, `animate`, `transition` props

**Styling:**
- Use Tailwind classes exclusively, no CSS modules or styled-components
- Use `cn()` utility from `@/lib/utils` for conditional classes
- Maintain consistent spacing with Tailwind's spacing scale

## Important Notes

**Dev Server:**
- Runs on IPv6 (`host: "::"`) at port 8080
- Access at `http://localhost:8080`

**Mock Data:**
- Transaction data is currently mocked in `src/data/mockTransactions.ts`
- When implementing real fraud detection, integrate with backend APIs using TanStack Query

**Fraud Detection Logic:**
- Phishing detector now uses Google Gemini 2.0 Flash API for real-time analysis
- API key stored in `.env` file (VITE_GEMINI_API_KEY)
- Gemini analyzes messages for phishing indicators and returns SAFE/SCAM verdict
- See `GEMINI_INTEGRATION.md` for detailed API integration documentation

**Environment Variables:**
- Create `.env` file from `.env.example` template
- Never commit `.env` file (already in .gitignore)
- Restart dev server after changing environment variables

**Adding shadcn Components:**
- Project uses shadcn/ui with Tailwind CSS variables
- Base color: slate
- Run shadcn CLI to add components, don't manually copy
