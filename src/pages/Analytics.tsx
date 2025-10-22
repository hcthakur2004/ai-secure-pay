import { motion } from "framer-motion";
import { Activity, AlertTriangle, ShieldAlert, Target } from "lucide-react";
import { SummaryCard } from "@/components/SummaryCard";
import { mockTransactions } from "@/data/mockTransactions";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

export default function Analytics() {
  const totalTransactions = mockTransactions.length;
  const suspiciousTransactions = mockTransactions.filter(t => t.status === 'Suspicious').length;
  const fraudulentTransactions = mockTransactions.filter(t => t.status === 'Fraudulent').length;
  const highRiskMerchants = new Set(
    mockTransactions.filter(t => t.risk > 70).map(t => t.merchant)
  ).size;
  const accuracy = Math.round(((totalTransactions - fraudulentTransactions) / totalTransactions) * 100);

  const statusData = [
    { name: 'Safe', value: mockTransactions.filter(t => t.status === 'Safe').length, color: 'hsl(var(--success))' },
    { name: 'Suspicious', value: suspiciousTransactions, color: 'hsl(var(--warning))' },
    { name: 'Fraudulent', value: fraudulentTransactions, color: 'hsl(var(--destructive))' },
  ];

  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2"
      >
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Transaction insights and fraud detection metrics</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <SummaryCard
          title="Total Transactions"
          value={totalTransactions}
          icon={Activity}
          trend="+12%"
          trendUp={true}
        />
        <SummaryCard
          title="Suspicious Transactions"
          value={suspiciousTransactions}
          icon={AlertTriangle}
          trend="+5%"
          trendUp={false}
        />
        <SummaryCard
          title="High-Risk Merchants"
          value={highRiskMerchants}
          icon={ShieldAlert}
        />
        <SummaryCard
          title="Detection Accuracy"
          value={`${accuracy}%`}
          icon={Target}
          trend="+2%"
          trendUp={true}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-card rounded-lg p-6 border border-border shadow-card"
      >
        <h3 className="text-foreground text-lg font-semibold mb-6">Transaction Status Distribution</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={statusData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={(entry: any) => `${entry.name}: ${(entry.percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {statusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '0.5rem',
                color: 'hsl(var(--foreground))',
              }}
            />
            <Legend 
              wrapperStyle={{
                color: 'hsl(var(--foreground))',
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}
