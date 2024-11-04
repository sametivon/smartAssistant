"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { CreditCard, BarChart3, Sparkles, AlertCircle } from "lucide-react";
import { PackageSlider } from "@/components/subscription-packages/PackageSlider";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { SubscriptionList } from "@/components/dashboard/SubscriptionList";
import type { Subscription } from "@/types/subscription";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const subscriptions: Subscription[] = [
    {
      name: "Netflix",
      cost: 15.99,
      billingDate: "2024-04-15",
      usage: "High",
      recommendation: "Consider family plan for better value",
    },
    {
      name: "Spotify",
      cost: 9.99,
      billingDate: "2024-04-20",
      usage: "Medium",
      recommendation: "Current plan optimal",
    },
    {
      name: "Adobe Creative Cloud",
      cost: 52.99,
      billingDate: "2024-04-05",
      usage: "Low",
      recommendation: "Consider downgrading to Photography plan",
    },
  ];

  const totalMonthly = subscriptions.reduce((acc, sub) => acc + sub.cost, 0);

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Subscription Smart Assistant
          </h1>
          <p className="text-muted-foreground">
            Manage and optimize your digital subscriptions
          </p>
        </div>

        <PackageSlider />

        <StatsCards
          totalMonthly={totalMonthly}
          subscriptionCount={subscriptions.length}
          optimizationScore={85}
        />

        <div className="mb-6">
          <Input
            placeholder="Search subscriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md mx-auto"
          />
        </div>

        <Tabs defaultValue="subscriptions" className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
            <TabsTrigger value="subscriptions">
              <CreditCard className="h-4 w-4 mr-2" />
              Subscriptions
            </TabsTrigger>
            <TabsTrigger value="insights">
              <BarChart3 className="h-4 w-4 mr-2" />
              Insights
            </TabsTrigger>
            <TabsTrigger value="recommendations">
              <Sparkles className="h-4 w-4 mr-2" />
              Tips
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subscriptions">
            <SubscriptionList
              subscriptions={subscriptions}
              searchQuery={searchQuery}
            />
          </TabsContent>

          <TabsContent value="insights">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <BarChart3 className="h-5 w-5 text-blue-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Usage Patterns</h3>
                    <p className="text-sm text-muted-foreground">
                      Your Adobe Creative Cloud usage has decreased by 45% in the
                      last month. Consider reviewing your subscription.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Upcoming Renewals</h3>
                    <p className="text-sm text-muted-foreground">
                      Netflix will renew in 5 days. Review your plan options now.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations">
            <Card className="p-6">
              <div className="space-y-6">
                {subscriptions.map((sub, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <Sparkles className="h-5 w-5 text-purple-500 mt-1" />
                    <div>
                      <h3 className="font-semibold">{sub.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {sub.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}