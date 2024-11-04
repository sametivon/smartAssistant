"use client";

import { Card } from "@/components/ui/card";
import { DollarSign, Calendar, TrendingUp } from "lucide-react";

interface StatsCardsProps {
  totalMonthly: number;
  subscriptionCount: number;
  optimizationScore: number;
}

export function StatsCards({
  totalMonthly,
  subscriptionCount,
  optimizationScore,
}: StatsCardsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3 mb-8">
      <Card className="p-6 space-y-2">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-green-500" />
          <h3 className="font-semibold">Monthly Total</h3>
        </div>
        <p className="text-3xl font-bold">${totalMonthly.toFixed(2)}</p>
      </Card>

      <Card className="p-6 space-y-2">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-500" />
          <h3 className="font-semibold">Active Subscriptions</h3>
        </div>
        <p className="text-3xl font-bold">{subscriptionCount}</p>
      </Card>

      <Card className="p-6 space-y-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-purple-500" />
          <h3 className="font-semibold">Optimization Score</h3>
        </div>
        <p className="text-3xl font-bold">{optimizationScore}%</p>
      </Card>
    </div>
  );
}