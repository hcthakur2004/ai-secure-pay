import { motion } from "framer-motion";
import { Transaction } from "@/data/mockTransactions";
import { AlertCircle, CheckCircle, Shield } from "lucide-react";

interface TransactionTableProps {
  transactions: Transaction[];
}

export function TransactionTable({ transactions }: TransactionTableProps) {
  const getStatusIcon = (status: Transaction['status']) => {
    switch (status) {
      case 'Safe':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'Suspicious':
        return <AlertCircle className="h-5 w-5 text-warning" />;
      case 'Fraudulent':
        return <Shield className="h-5 w-5 text-destructive" />;
    }
  };

  const getStatusColor = (status: Transaction['status']) => {
    switch (status) {
      case 'Safe':
        return 'text-success bg-success/10 border-success/20';
      case 'Suspicious':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'Fraudulent':
        return 'text-destructive bg-destructive/10 border-destructive/20';
    }
  };

  const getRiskColor = (risk: number) => {
    if (risk < 30) return 'text-success';
    if (risk < 70) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full">
        <thead className="bg-card border-b border-border">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Merchant</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Risk Score</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
          </tr>
        </thead>
        <tbody className="bg-card/50">
          {transactions.map((transaction, index) => (
            <motion.tr
              key={transaction.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-border hover:bg-card/80 transition-colors"
            >
              <td className="px-6 py-4 text-sm text-muted-foreground">{transaction.date}</td>
              <td className="px-6 py-4 text-sm font-medium text-foreground">{transaction.merchant}</td>
              <td className="px-6 py-4 text-sm text-foreground">₹{transaction.amount.toLocaleString()}</td>
              <td className="px-6 py-4">
                <span className={`text-sm font-semibold ${getRiskColor(transaction.risk)}`}>
                  {transaction.risk}%
                </span>
              </td>
              <td className="px-6 py-4">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${getStatusColor(transaction.status)}`}>
                  {getStatusIcon(transaction.status)}
                  <span className="text-sm font-medium">{transaction.status}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
