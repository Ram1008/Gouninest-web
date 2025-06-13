import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Download, Calendar } from "lucide-react";

const UserPayments = () => {
  const payments = [
    {
      id: 1,
      property: "University Heights Residence",
      amount: "£720",
      date: "2024-03-01",
      status: "Paid",
      method: "Credit Card",
      reference: "PAY-2024-001",
    },
    {
      id: 2,
      property: "University Heights Residence",
      amount: "£720",
      date: "2024-04-01",
      status: "Due",
      method: "Direct Debit",
      reference: "PAY-2024-002",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Payment History</h1>
        <p className="text-gray-600">Track your rent payments and invoices</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Paid This Year</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">£7,200</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Outstanding Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-orange-600">£720</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Payment Due</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">April 1, 2024</p>
            <p className="text-sm text-gray-600">£720</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payment History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => (
              <div
                key={payment.id}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <CreditCard className="w-8 h-8 text-gray-400" />
                  <div>
                    <h4 className="font-medium">{payment.property}</h4>
                    <p className="text-sm text-gray-600">{payment.reference}</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-semibold">{payment.amount}</p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(payment.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Badge
                    className={
                      payment.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }
                  >
                    {payment.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPayments;
