"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const packages = [
  {
    title: "Free Package",
    description: "Perfect for personal use",
    price: "0",
    features: [
      "Track up to 5 subscriptions",
      "Basic email reminders",
      "Monthly summary reports",
      "Standard support",
    ],
    cta: "Get Started for Free",
    popular: false,
  },
  {
    title: "Premium Package",
    description: "For power users",
    price: "9.99",
    features: [
      "Unlimited subscriptions",
      "Advanced analytics",
      "Smart recommendations",
      "Priority support",
      "Custom categories",
      "Usage insights",
    ],
    cta: "Upgrade to Premium",
    popular: true,
  },
];

export function PackageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mb-12">
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {packages.map((pkg, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Card className="relative p-6 h-full border-2 hover:border-primary/50 transition-colors">
                {pkg.popular && (
                  <Badge className="absolute top-4 right-4 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                  <p className="text-muted-foreground">{pkg.description}</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full">{pkg.cta}</Button>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}