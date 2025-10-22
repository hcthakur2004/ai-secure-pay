import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

export default function PhishingDetector() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<'safe' | 'scam' | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [aiResponse, setAiResponse] = useState<string>("");
  const { toast } = useToast();

  const analyzeMessage = async () => {
    if (!GEMINI_API_KEY) {
      toast({
        title: "API Key Missing",
        description: "Please configure VITE_GEMINI_API_KEY in your environment variables.",
        variant: "destructive",
      });
      return;
    }

    setAnalyzing(true);
    setResult(null);
    setAiResponse("");
    
    try {
      const prompt = `Analyze the following message and determine if it is a phishing/scam message or safe. 
Provide a response in this exact format:
VERDICT: [SAFE or SCAM]
REASON: [Brief explanation]

Message to analyze:
"${message}"

Consider factors like:
- Urgency and pressure tactics
- Requests for sensitive information (OTP, passwords, CVV)
- Suspicious links or sender identity
- Grammar and spelling errors
- Too-good-to-be-true offers
- Impersonation of legitimate organizations`;

      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to analyze message");
      }

      const data = await response.json();
      const aiText = data.candidates[0]?.content?.parts[0]?.text || "";
      
      // Parse the AI response
      const verdictMatch = aiText.match(/VERDICT:\s*(SAFE|SCAM)/i);
      const verdict = verdictMatch ? verdictMatch[1].toLowerCase() : null;
      
      if (verdict === "safe" || verdict === "scam") {
        setResult(verdict as 'safe' | 'scam');
        setAiResponse(aiText);
      } else {
        // Fallback: analyze based on keywords in AI response
        const isScam = aiText.toLowerCase().includes("scam") || 
                       aiText.toLowerCase().includes("phishing") ||
                       aiText.toLowerCase().includes("suspicious");
        setResult(isScam ? 'scam' : 'safe');
        setAiResponse(aiText);
      }
    } catch (error) {
      console.error("Error analyzing message:", error);
      toast({
        title: "Analysis Failed",
        description: "Could not analyze the message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Phishing Detector</h1>
        <p className="text-muted-foreground">Analyze suspicious messages for potential scams</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-lg p-6 border border-border shadow-card space-y-4"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Paste the message you want to analyze
          </label>
          <Textarea
            placeholder="Enter the suspicious message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px] resize-none"
          />
        </div>

        <Button
          onClick={analyzeMessage}
          disabled={!message.trim() || analyzing}
          className="w-full bg-primary hover:bg-primary-glow text-primary-foreground"
        >
          <Shield className="mr-2 h-4 w-4" />
          {analyzing ? 'Analyzing...' : 'Analyze Message'}
        </Button>
      </motion.div>

      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-lg p-6 border-2 ${
            result === 'safe'
              ? 'bg-success/10 border-success/30'
              : 'bg-destructive/10 border-destructive/30'
          }`}
        >
          <div className="flex items-start gap-4">
            {result === 'safe' ? (
              <CheckCircle className="h-8 w-8 text-success flex-shrink-0 mt-1" />
            ) : (
              <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
            )}
            <div className="space-y-2">
              <h3 className={`text-xl font-bold ${
                result === 'safe' ? 'text-success' : 'text-destructive'
              }`}>
                {result === 'safe' ? 'Message appears Safe' : 'Potential Scam Detected!'}
              </h3>
              {aiResponse && (
                <div className="mt-3 p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">AI Analysis:</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {aiResponse.replace(/VERDICT:\s*(SAFE|SCAM)\s*/i, '').replace(/REASON:\s*/i, '')}
                  </p>
                </div>
              )}
              {result === 'scam' && (
                <div className="mt-4 p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold text-destructive mb-2">Safety Tips:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Never share OTPs, passwords, or CVV numbers</li>
                    <li>Verify sender identity through official channels</li>
                    <li>Be wary of urgent requests for money or information</li>
                    <li>Check for spelling and grammar errors</li>
                    <li>Don't click on suspicious links</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
