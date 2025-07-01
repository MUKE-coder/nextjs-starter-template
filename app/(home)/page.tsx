"use client";

import { useState, useEffect } from "react";
import {
  ChevronRight,
  Menu,
  X,
  Check,
  ShoppingCart,
  LayoutDashboard,
  Code,
  Database,
  List,
  Layers,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HeroProductShowcase() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const features = [
    { name: "API Routes", icon: <Code className="w-5 h-5 text-indigo-600" /> },
    {
      name: "Server Actions",
      icon: <Database className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "React Query",
      icon: <Layers className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "Products Listing",
      icon: <List className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "Category Pages",
      icon: <List className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "shadcn/ui",
      icon: <Palette className="w-5 h-5 text-indigo-600" />,
    },
    {
      name: "Tailwind CSS",
      icon: <Palette className="w-5 h-5 text-indigo-600" />,
    },
  ];

  const pages = [
    "Products Listing Page",
    "Product Detail Page",
    "Category Listing Page",
    "Category Detail Page",
    "Admin Dashboard",
    "API Routes Examples",
    "Server Actions Examples",
    "React Query Examples",
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 overflow-hidden">
      <main>
        <div className="relative">
          {/* Gradient background effects */}
          <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 -right-20 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>

          <div className="max-w-7xl mx-auto px-4 py-28 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16 sm:pb-32">
            {/* Announcement badge */}
            <div className="mx-auto max-w-fit mb-10">
              <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100">
                <span className="font-medium">Next.js 15 Ready</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </Badge>
            </div>

            {/* Hero content */}
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl max-w-4xl mx-auto">
                Simple Next.js Starter Kit
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
                Everything you need to build modern web applications with
                Next.js, TypeScript, and shadcn/ui.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/store">
                    <ShoppingCart className="w-4 h-4 mr-2" /> Visit store
                  </Link>
                </Button>
              </div>
            </div>

            {/* Product showcase */}
            <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
              <Card className="w-full rounded-xl overflow-hidden">
                {/* Dashboard UI mockup */}
                <div className="flex flex-col h-96 sm:h-[420px]">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b p-4 bg-gray-50">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      Dashboard
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                      <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-48 hidden sm:block border-r bg-gray-50 p-4">
                      <div className="space-y-4">
                        {[
                          "Dashboard",
                          "Products",
                          "Categories",
                          "Orders",
                          "Customers",
                          "Settings",
                        ].map((item) => (
                          <div key={item} className="flex items-center">
                            <div className="h-4 w-4 bg-gray-300 rounded mr-3"></div>
                            <div className="h-3 w-20 bg-gray-300 rounded"></div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Main content */}
                    <div className="flex-1 bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[1, 2, 3].map((i) => (
                          <Card key={i} className="p-4 h-32 bg-gray-50">
                            <div className="h-4 w-24 bg-gray-300 rounded mb-3"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                          </Card>
                        ))}
                      </div>
                      <div className="mt-6 h-48 bg-gray-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Everything you need to build modern web applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-gray-600">
                    Pre-configured and ready to use
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pages Section */}
        <section id="pages" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900">
                Included Pages
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                All these pages are pre-built and ready to customize
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-6">
                <ul className="space-y-3">
                  {pages.map((page, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{page}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
