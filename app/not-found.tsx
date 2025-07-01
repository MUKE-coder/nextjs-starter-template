"use client";
import {
  ArrowLeft,
  ChevronRight,
  FileX,
  Home,
  LayoutDashboard,
  MessageCircle,
  Search,
} from "lucide-react";
import { useState } from "react";

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  const popularPages = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      name: "Products",
      href: "/products",
      icon: <Search className="w-4 h-4" />,
    },
    {
      name: "Documentation",
      href: "/docs",
      icon: <FileX className="w-4 h-4" />,
    },
    {
      name: "Support",
      href: "/support",
      icon: <MessageCircle className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* 404 Icon */}
        {/* <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative bg-white rounded-full p-6 shadow-lg border border-indigo-100">
              <FileX className="w-16 h-16 text-indigo-500" />
            </div>
          </div>
        </div> */}

        {/* 404 Content */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Page not found
          </h2>
          <p className="text-xl text-slate-600 max-w-lg mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have
            been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-60"></div>
            <div className="relative bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="flex items-center">
                <Search className="w-5 h-5 text-slate-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search for pages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-4 text-slate-900 placeholder-slate-500 bg-transparent border-none outline-none"
                />
                <button
                  onClick={handleSearch}
                  className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium hover:from-indigo-600 hover:to-purple-600 transition-all duration-300"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Popular pages you might be looking for:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
            {popularPages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 hover:bg-white hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group"
              >
                <div className="text-indigo-500 group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <span className="text-slate-700 font-medium">{page.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Home className="w-5 h-5" />
            Go Home
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform rotate-180" />
          </button>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-xl font-semibold border border-slate-200 hover:bg-white hover:shadow-lg transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-slate-500">
          Still can't find what you're looking for?{" "}
          <a
            href="/contact"
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  );
}
