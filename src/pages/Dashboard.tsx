import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { TransactionTable } from "@/components/TransactionTable";
import { AlertBanner } from "@/components/AlertBanner";
import { RiskChart } from "@/components/RiskChart";
import { mockTransactions } from "@/data/mockTransactions";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = mockTransactions.filter(
    (transaction) =>
      transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.toString().includes(searchTerm) ||
      transaction.date.includes(searchTerm)
  );

  const hasFraudulent = mockTransactions.some(t => t.status === 'Fraudulent');
  const hasSuspicious = mockTransactions.some(t => t.status === 'Suspicious');

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Monitor your UPI transactions and fraud alerts</p>
      </motion.div>

      {hasFraudulent && (
        <AlertBanner
          message="⚠️ Fraudulent transaction detected! Please review the flagged transactions immediately."
          severity="danger"
        />
      )}

      {hasSuspicious && !hasFraudulent && (
        <AlertBanner
          message="⚡ Suspicious activity detected. Please verify these transactions."
          severity="warning"
        />
      )}

      <RiskChart transactions={mockTransactions} />

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by merchant, amount, or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <TransactionTable transactions={filteredTransactions} />
      </div>
    </div>
  );
}
