# Gemini API Integration

## Overview

The Phishing Detector page now uses Google's Gemini 2.0 Flash API to analyze messages for potential phishing/scam content.

## What Changed

### Files Modified:
1. **`src/pages/PhishingDetector.tsx`** - Integrated Gemini API for real-time phishing detection
2. **`.env`** - Added API key storage
3. **`.env.example`** - Template for environment variables
4. **`.gitignore`** - Added .env files to prevent API key exposure

## How It Works

1. User enters a suspicious message in the text area
2. Click "Analyze Message" button
3. The app sends the message to Gemini API with a structured prompt
4. Gemini analyzes the message for phishing indicators:
   - Urgency and pressure tactics
   - Requests for sensitive information (OTP, passwords, CVV)
   - Suspicious links or sender identity
   - Grammar and spelling errors
   - Too-good-to-be-true offers
   - Impersonation of legitimate organizations
5. The AI returns a verdict (SAFE or SCAM) with detailed reasoning
6. Results are displayed with color-coded alerts and safety tips

## Setup

1. Make sure the `.env` file exists with your API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

2. Restart the dev server if it's running:
   ```powershell
   npm run dev
   ```

## API Details

- **Endpoint:** `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent`
- **Model:** Gemini 2.0 Flash
- **Authentication:** X-goog-api-key header

## Security Notes

- ⚠️ **API Key Security:** The API key is stored in `.env` and gitignored
- For production, consider:
  - Using a backend proxy to hide the API key
  - Implementing rate limiting
  - Adding user authentication
  - Monitoring API usage and costs

## Testing

Try these example messages:

**Scam Message:**
```
URGENT! Your account has been suspended. Click here to verify your details and claim your refund of $500. Reply with your CVV to confirm.
```

**Safe Message:**
```
Your order #12345 has been shipped and will arrive tomorrow. Track your package at our website.
```
