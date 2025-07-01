"use client";

import { useQuery } from "@tanstack/react-query";
import {
  TrendingDownIcon,
  TrendingUpIcon,
  Package,
  ShoppingCart,
  DollarSign,
  Users,
} from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { StatCard } from "@/types/types";
import { getStats } from "@/actions/data";

function StatsCardSkeleton() {
  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-8 w-32" />
        <div className="absolute right-4 top-4">
          <Skeleton className="h-6 w-16 rounded-lg" />
        </div>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-32" />
      </CardFooter>
    </Card>
  );
}

function StatCardComponent({ stat }: { stat: StatCard }) {
  const TrendIcon = stat.trend === "up" ? TrendingUpIcon : TrendingDownIcon;
  const trendColor = stat.trend === "up" ? "text-green-600" : "text-red-600";
  const bgColor =
    stat.trend === "up"
      ? "bg-green-50 border-green-200"
      : "bg-red-50 border-red-200";

  return (
    <Card className="@container/card bg-gradient-to-t from-primary/5 to-card hover:shadow-md transition-shadow">
      <CardHeader className="relative">
        <CardDescription>{stat.title}</CardDescription>
        <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
          {stat.value}
        </CardTitle>
        <div className="absolute right-4 top-4">
          <Badge
            variant="outline"
            className={`flex gap-1 rounded-lg text-xs ${bgColor} ${trendColor}`}
          >
            <TrendIcon className="size-3" />
            {stat.change > 0 ? "+" : ""}
            {stat.change}%
          </Badge>
        </div>
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1 text-sm">
        <div className="line-clamp-1 flex gap-2 font-medium">
          {stat.description} <TrendIcon className={`size-4 ${trendColor}`} />
        </div>
        <div className="text-muted-foreground">{stat.footer}</div>
      </CardFooter>
    </Card>
  );
}

export function StatsCards() {
  const {
    data: stats,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["stats"],
    queryFn: getStats,
    refetchInterval: 5 * 60 * 1000, // Refetch every 5 minutes
  });

  // Calculate dynamic stats
  const getStatsCards = (): StatCard[] => {
    if (!stats) return [];

    // Calculate some realistic percentage changes (in a real app, you'd store historical data)
    const totalRevenue = stats.priceStats.average * stats.totalProducts * 0.1; // Simulated revenue
    const averageProductsPerCategory =
      stats.totalProducts / stats.totalCategories;
    const topCategoryProducts = Math.max(
      ...stats.productsPerCategory.map((cat) => cat.productCount)
    );

    return [
      {
        title: "Total Revenue",
        value: `$${totalRevenue.toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`,
        change: 5.2,
        trend: "up",
        description: "Increased sales this month",
        footer: "Based on average product pricing",
      },
      {
        title: "Total Products",
        value: stats.totalProducts.toLocaleString(),
        change: 8.0,
        trend: "up",
        description: "Expanded product catalog",
        footer: `Across ${stats.totalCategories} categories`,
      },
      {
        title: "Categories",
        value: stats.totalCategories.toString(),
        change: 12.5,
        trend: "up",
        description: "Growing product diversity",
        footer: `Avg ${averageProductsPerCategory.toFixed(
          1
        )} products per category`,
      },
      {
        title: "Price Range",
        value: `$${
          stats.priceStats.min
        } - $${stats.priceStats.max.toLocaleString()}`,
        change: 3.7,
        trend: "up",
        description: "Competitive pricing strategy",
        footer: `Avg price: $${stats.priceStats.average.toFixed(2)}`,
      },
    ];
  };

  if (error) {
    return (
      <div className="@xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="text-red-600">Error Loading Stats</CardTitle>
            <CardDescription>
              Unable to fetch statistics. Please try again later.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="@xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6">
        {[...Array(4)].map((_, i) => (
          <StatsCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  const statsCards = getStatsCards();

  return (
    <div className="@xl/main:grid-cols-2 @5xl/main:grid-cols-4 grid grid-cols-1 gap-4 px-4 lg:px-6">
      {statsCards.map((stat, index) => (
        <StatCardComponent key={index} stat={stat} />
      ))}
    </div>
  );
}
