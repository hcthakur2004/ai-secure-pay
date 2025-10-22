import { motion } from "framer-motion";
import { Shield, Brain, AlertTriangle, TrendingUp } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shield,
      title: "Real-time Fraud Detection",
      description: "Advanced AI algorithms monitor every UPI transaction in real-time to identify suspicious patterns and potential fraud."
    },
    {
      icon: Brain,
      title: "Machine Learning Models",
      description: "Our system learns from millions of transactions to continuously improve fraud detection accuracy and reduce false positives."
    },
    {
      icon: AlertTriangle,
      title: "Instant Alerts",
      description: "Get immediate notifications when suspicious activity is detected, allowing you to take quick action to protect your account."
    },
    {
      icon: TrendingUp,
      title: "Merchant Risk Scoring",
      description: "Each merchant is assigned a risk score based on historical data, helping you make informed decisions about your transactions."
    }
  ];

  return (
    <div className="p-6 space-y-8 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <h1 className="text-4xl font-bold text-foreground">About AI-Powered UPI Fraud Detection</h1>
        <p className="text-lg text-muted-foreground">
          Protecting your digital transactions with cutting-edge artificial intelligence
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-card rounded-lg p-8 border border-border shadow-card space-y-4"
      >
        <h2 className="text-2xl font-bold text-foreground">What is UPI Fraud?</h2>
        <p className="text-muted-foreground leading-relaxed">
          UPI (Unified Payments Interface) fraud involves unauthorized transactions, phishing scams, 
          fake payment apps, and social engineering attacks targeting users of digital payment systems. 
          With the rapid growth of digital payments in India, fraudsters have become increasingly sophisticated 
          in their methods, making it crucial to have robust fraud detection systems in place.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Common fraud patterns include fake refund scams, unauthorized access to payment apps, 
          SIM swap fraud, and phishing messages pretending to be from banks or payment providers.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl font-bold text-foreground">How AI Helps Detect Fraud</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-card rounded-lg p-6 border border-border shadow-card"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-card rounded-lg p-8 border border-border shadow-card space-y-4"
      >
        <h2 className="text-2xl font-bold text-foreground">References & Resources</h2>
        <ul className="space-y-3">
          <li>
            <a 
              href="https://rbi.org.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2"
            >
              Reserve Bank of India - Digital Payment Security Guidelines
            </a>
          </li>
          <li>
            <a 
              href="https://www.indiatoday.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2"
            >
              India Today - UPI Fraud Prevention
            </a>
          </li>
          <li>
            <a 
              href="https://www.business-standard.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors flex items-center gap-2"
            >
              Business Standard - Digital Payment Security
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center py-8 border-t border-border"
      >
        <p className="text-muted-foreground">
          Developed by <span className="text-primary font-semibold">Harish Chandra Thakur</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          © 2025 AI-Powered UPI Fraud Detection. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
