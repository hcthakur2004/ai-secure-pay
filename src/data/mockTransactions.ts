export interface Transaction {
  id: number;
  date: string;
  merchant: string;
  amount: number;
  risk: number;
  status: 'Safe' | 'Suspicious' | 'Fraudulent';
}

export const mockTransactions: Transaction[] = [
  { id: 1, date: "2025-10-14", merchant: "Amazon", amount: 1200, risk: 20, status: "Safe" },
  { id: 2, date: "2025-10-14", merchant: "UnknownApp", amount: 9500, risk: 85, status: "Suspicious" },
  { id: 3, date: "2025-10-13", merchant: "FakeRefund", amount: 7800, risk: 92, status: "Fraudulent" },
  { id: 4, date: "2025-10-13", merchant: "Flipkart", amount: 3400, risk: 15, status: "Safe" },
  { id: 5, date: "2025-10-12", merchant: "Swiggy", amount: 450, risk: 10, status: "Safe" },
  { id: 6, date: "2025-10-12", merchant: "SuspiciousStore", amount: 12000, risk: 78, status: "Suspicious" },
  { id: 7, date: "2025-10-11", merchant: "Zomato", amount: 320, risk: 8, status: "Safe" },
  { id: 8, date: "2025-10-11", merchant: "PhishingMerchant", amount: 15000, risk: 95, status: "Fraudulent" },
  { id: 9, date: "2025-10-10", merchant: "Netflix", amount: 649, risk: 5, status: "Safe" },
  { id: 10, date: "2025-10-10", merchant: "BookMyShow", amount: 800, risk: 12, status: "Safe" },
  { id: 11, date: "2025-10-09", merchant: "ScamLink", amount: 25000, risk: 98, status: "Fraudulent" },
  { id: 12, date: "2025-10-09", merchant: "Myntra", amount: 2100, risk: 18, status: "Safe" },
];
