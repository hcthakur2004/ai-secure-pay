import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Transaction } from '@/data/mockTransactions';

interface RiskChartProps {
  transactions: Transaction[];
}

export function RiskChart({ transactions }: RiskChartProps) {
  // Group transactions by date and calculate average risk
  const chartData = transactions.reduce((acc: any[], transaction) => {
    const existingDate = acc.find(item => item.date === transaction.date);
    
    if (existingDate) {
      existingDate.totalRisk += transaction.risk;
      existingDate.count += 1;
      existingDate.risk = Math.round(existingDate.totalRisk / existingDate.count);
    } else {
      acc.push({
        date: transaction.date,
        risk: transaction.risk,
        totalRisk: transaction.risk,
        count: 1,
      });
    }
    
    return acc;
  }, []).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="bg-card rounded-lg p-6 border border-border shadow-card">
      <h3 className="text-foreground text-lg font-semibold mb-6">Fraud Risk Trends</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="date" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))' }}
          />
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
          <Line 
            type="monotone" 
            dataKey="risk" 
            stroke="hsl(var(--primary))" 
            strokeWidth={2}
            dot={{ fill: 'hsl(var(--primary))' }}
            name="Average Risk Score"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
