import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

interface AlertBannerProps {
  message: string;
  severity: 'warning' | 'danger';
}

export function AlertBanner({ message, severity }: AlertBannerProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const bgColor = severity === 'danger' ? 'bg-destructive/10' : 'bg-warning/10';
  const borderColor = severity === 'danger' ? 'border-destructive/30' : 'border-warning/30';
  const textColor = severity === 'danger' ? 'text-destructive' : 'text-warning';

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`${bgColor} ${borderColor} border rounded-lg p-4 flex items-center justify-between mb-6`}
    >
      <div className="flex items-center gap-3">
        <AlertTriangle className={`h-5 w-5 ${textColor}`} />
        <p className={`${textColor} font-medium`}>{message}</p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className={`${textColor} hover:opacity-70 transition-opacity`}
      >
        <X className="h-5 w-5" />
      </button>
    </motion.div>
  );
}
