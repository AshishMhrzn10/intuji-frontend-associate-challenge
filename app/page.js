"use client";

import React, { useEffect, useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronRight,
  Image as DummyImage,
  ImageIcon,
  Menu,
  MessageSquare,
  MoveRight,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import Saving from "@/assets/saving.png";
import Wallet from "@/assets/wallet.png";
import Incomes from "@/assets/incomes.png";
import Expenses from "@/assets/expenses.png";
import Image from "next/image";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex border-transparent rounded-xl mx-2">
      {/* Desktop Sidebar*/}
      <aside className="hidden md:flex w-70 flex-col bg-white border rounded-l-xl sticky top-0 h-screen">
        <Sidebar />
      </aside>
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top header split into two parts */}
        <div className="flex items-center p-4  ">
          <div className="flex lg:w-2/3 pr-4">
            {isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="mr-2"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <div className="flex-1 flex items-center">
              <div className="relative w-full">
                <Search className="absolute left-6 top-6 h-4 w-4 text-black" />
                <Input
                  type="search"
                  placeholder="Search here..."
                  className="w-full h-16 bg-white pl-12 rounded-full border-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 ml-auto lg:w-1/3  bg-white rounded-full p-2 h-16 justify-between">
            <div className="border rounded-3xl lg:px-3 xl:px-5 px-5 py-3">
              <Bell size={24} />
            </div>
            <div className="border rounded-3xl lg:px-3 xl:px-5 py-3">
              <MessageSquare size={24} />
            </div>
            <div className="flex gap-2">
              <div className="border rounded-full p-0.5">
                <div className="border bg-gray-300 rounded-full p-2">
                  <DummyImage size={24} />
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <p className="">Mirie Kiritani</p>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>More Accounts</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Account 1</DropdownMenuItem>
                  <DropdownMenuItem>Account 2</DropdownMenuItem>
                  <DropdownMenuItem>Account 3</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3 space-y-6">
                <div className="space-y-4 bg-white p-4 rounded-lg">
                  <h2 className="text-xl font-bold">Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <OverviewCard
                      title="Your Balance"
                      value="$28,891.138"
                      change={15}
                      changeType="increase"
                      icon={Wallet}
                    />
                    <OverviewCard
                      title="Saving"
                      value="$1,050.44"
                      change={10}
                      changeType="increase"
                      icon={Saving}
                    />
                    <OverviewCard
                      title="Expenses"
                      value="$200.31"
                      change={2}
                      changeType="increase"
                      icon={Expenses}
                    />
                    <OverviewCard
                      title="Incomes"
                      value="$21,121.0"
                      change={8}
                      changeType="increase"
                      icon={Incomes}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const OverviewCard = ({ title, value, change, changeType, icon }) => {
  return (
    <div className="bg-white rounded-lg p-3 border">
      <div className="flex  items-center justify-center gap-2">
        {/* <div
          className={`w-8 h-8 rounded-full ${colorMap[color]} flex items-center justify-center`}
        >
          <div className="w-3 h-3 bg-white rounded-full" />
        </div> */}
        <Image src={icon} height="100%" width="100%" alt={title} />
        <div className="flex flex-col ">
          <h3 className="text-sm font-medium mt-2">{title}</h3>
          <p className="text-xs text-gray-500">
            <span
              className={
                changeType === "increase" ? "text-green-500" : "text-red-500"
              }
            >
              {change}%
            </span>{" "}
            compared with last month
          </p>
        </div>
      </div>
      <Separator className="my-3" />
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">{value}</div>
        <button>
          <MoveRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const SavingGoalCard = ({
  title,
  current,
  target,
  percentage,
  date,
  color
}) => {
  const colorMap = {
    indigo: "bg-indigo-600",
    amber: "bg-amber-500",
    emerald: "bg-emerald-500"
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs text-gray-500">Target: {date}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">${current.toLocaleString()}</div>
        <div className="text-sm text-gray-500">/${target.toLocaleString()}</div>
      </div>
      <div className="space-y-1">
        <Progress value={percentage} className={`h-2 ${colorMap[color]}`} />
        <div className="text-right text-sm font-medium">{percentage}%</div>
      </div>
    </div>
  );
};
export default Home;
