"use client";

import { useState } from "react";
import {
  ChevronRight,
  Copy,
  Check,
  ShoppingCart,
  LayoutDashboard,
  Code,
  Database,
  List,
  Layers,
  Palette,
  Zap,
  Sparkles,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { InstallCommandCard } from "@/components/InstallmentCommand";

export default function HeroProductShowcase() {
  const features = [
    {
      name: "API Routes",
      icon: <Code className="w-6 h-6" />,
      description: "Built-in API endpoints",
    },
    {
      name: "Server Actions",
      icon: <Database className="w-6 h-6" />,
      description: "Server-side functionality",
    },
    {
      name: "React Query",
      icon: <Layers className="w-6 h-6" />,
      description: "Data fetching & caching",
    },
    {
      name: "shadcn/ui",
      icon: <Palette className="w-6 h-6" />,
      description: "Beautiful components",
    },
  ];

  const pages = [
    "Products & Categories",
    "Admin Dashboard",
    "API Examples",
    "Server Actions",
    "React Query Setup",
    "Authentication Ready",
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen text-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
          {/* Announcement badge */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-slate-700">
                Next.js 15 Ready
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Hero content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent mb-6">
              Next.js Starter
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Redefined
              </span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Beautiful, fast, and production-ready. Everything you need to
              build modern web applications with elegance.
            </p>

            {/* Installation command - using the new InstallCommandCard */}
            <InstallCommandCard />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-2">
                  <LayoutDashboard className="w-5 h-5" />
                  View Dashboard
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                <span className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Visit Store
                </span>
              </button>
            </div>
          </div>

          {/* Rest of your existing code remains unchanged... */}
          {/* Product showcase */}
          <div className="max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000"></div>
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                {/* Browser header */}
                <div className="flex items-center justify-between px-6 py-4 bg-slate-50/80 border-b border-slate-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-slate-600 bg-white px-3 py-1 rounded-lg">
                    localhost:3000/dashboard
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* Dashboard mockup */}
                <div className="flex h-80 sm:h-96">
                  {/* Sidebar */}
                  <div className="w-56 hidden sm:block bg-slate-50/50 border-r border-slate-200 p-6">
                    <div className="space-y-3">
                      {["Dashboard", "Products", "Analytics", "Settings"].map(
                        (item, i) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/60 transition-colors"
                          >
                            <div
                              className={`w-2 h-2 rounded-full ${
                                i === 0 ? "bg-indigo-500" : "bg-slate-300"
                              }`}
                            ></div>
                            <div
                              className={`text-sm font-medium ${
                                i === 0 ? "text-slate-900" : "text-slate-500"
                              }`}
                            >
                              {item}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-6 bg-gradient-to-br from-white to-slate-50/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {[
                        {
                          label: "Revenue",
                          value: "$12,426",
                          color: "from-green-400 to-green-600",
                        },
                        {
                          label: "Orders",
                          value: "247",
                          color: "from-blue-400 to-blue-600",
                        },
                        {
                          label: "Users",
                          value: "1,893",
                          color: "from-purple-400 to-purple-600",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-white rounded-xl p-4 shadow-sm border border-slate-100"
                        >
                          <div className="text-sm text-slate-500 mb-1">
                            {stat.label}
                          </div>
                          <div
                            className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                          >
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white rounded-xl h-32 border border-slate-100 shadow-sm flex items-center justify-center">
                      <div className="text-slate-400 text-sm">
                        Chart visualization area
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Developers
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need, nothing you don't. Carefully crafted for
                the modern web.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.name}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pages Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Everything{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Included
                </span>
              </h2>
              <p className="text-xl text-slate-600">
                All essential pages and components, pre-built and ready to
                customize
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pages.map((page, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium">{page}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
