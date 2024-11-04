"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Subscription } from "@/types/subscription";

interface SubscriptionListProps {
  subscriptions: Subscription[];
  searchQuery: string;
}

export function SubscriptionList({
  subscriptions,
  searchQuery,
}: SubscriptionListProps) {
  return (
    <ScrollArea className="h-[400px] rounded-lg border">
      <div className="p-4 space-y-4">
        {subscriptions
          .filter((sub) =>
            sub.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((sub, index) => (
            <Card key={index} className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{sub.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Next billing: {sub.billingDate}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${sub.cost}</p>
                  <p className="text-sm text-muted-foreground">
                    Usage: {sub.usage}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm">
                  Manage
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
      </div>
    </ScrollArea>
  );
}