"use client";

import React, { useEffect, useState } from "react";
import {
  ChevronDown,
  Image as DummyImage,
  Figma,
  FileImage,
  Menu,
  MoveRight,
  MoveUpRight,
  Music,
  Search,
  Youtube
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
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
import Message from "@/assets/message.png";
import Notification from "@/assets/notification.png";
import Image from "next/image";
import Chart from "@/components/Chart";

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

  const overviewData = [
    {
      title: "Your Balance",
      value: "$28,891.138",
      change: 15,
      icon: Wallet,
      color: "green",
      active: true
    },
    {
      title: "Saving",
      value: "$1,050.44",
      change: 10,
      icon: Saving,
      color: "red",
      active: false
    },
    {
      title: "Expenses",
      value: "$200.31",
      change: 2,
      icon: Expenses,
      color: "yellow",
      active: false
    },
    {
      title: "Incomes",
      value: "$21,121.0",
      change: 8,
      icon: Incomes,
      color: "blue",
      active: false
    }
  ];

  const savingGoals = [
    {
      title: "Bali Vacation",
      current: 1950.21,
      target: 4000,
      percentage: 48,
      date: "August 25 2022",
      color: "indigo"
    },
    {
      title: "New Gadget",
      current: 790.21,
      target: 1000,
      percentage: 79,
      date: "August 25 2022",
      color: "amber"
    },
    {
      title: "Charity",
      current: 32111,
      target: 100,
      percentage: 32,
      date: "August 25 2022",
      color: "emerald"
    }
  ];

  const transactions = [
    {
      name: "Figma",
      date: "August 20, 2022",
      amount: 100,
      status: "Completed",
      icon: <Figma />
    },
    {
      name: "YouTube",
      date: "August 20, 2022",
      amount: 120,
      status: "Completed",
      icon: <Youtube />
    },
    {
      name: "Spotify",
      date: "August 20, 2022",
      amount: 15,
      status: "Completed",
      icon: <Music />
    },
    {
      name: "Freepik",
      date: "August 20, 2022",
      amount: 300,
      status: "Completed",
      icon: <FileImage />
    }
  ];

  return (
    <div className="flex border-transparent rounded-xl ">
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
        <div className="flex items-center px-6 pt-4  ">
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
              <Image
                src={Notification}
                width={20}
                height={20}
                alt="notification"
              />
            </div>
            <div className="border rounded-3xl lg:px-3 xl:px-5 py-3">
              <Image src={Message} width={20} height={20} alt="message" />
            </div>
            <div className="flex gap-2">
              <div className="border rounded-full p-0.5">
                <div className="border bg-gray-300 rounded-full p-2">
                  <DummyImage size={20} />
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
          <div className="p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-2/3 space-y-6">
                <div className="space-y-4 bg-white p-4 rounded-lg">
                  <h2 className="text-xl font-bold">Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {overviewData.map((item, index) => (
                      <OverviewCard key={index} {...item} />
                    ))}
                  </div>
                </div>
                <Chart />
              </div>

              <div className="lg:w-1/3 space-y-6">
                <div className="space-y-4 bg-white p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Saving Plan</h2>
                    <Button
                      variant="link"
                      className="text-[#4745A4] p-0 h-auto text-base"
                    >
                      See All
                    </Button>
                  </div>
                  <Separator className="my-5" />
                  <div className="flex gap-3 flex-col">
                    {savingGoals.map((item, index) => (
                      <SavingCard key={index} {...item} />
                    ))}
                  </div>
                </div>
                <div className="space-y-4 bg-white p-4 rounded-lg ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">
                      Recent Transaction
                    </h2>
                    <Button
                      variant="link"
                      className="text-[#4745A4] p-0 h-auto text-base"
                    >
                      See All
                    </Button>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex gap-4 flex-col">
                    {transactions.map((item, index) => (
                      <TransactionCard key={index} {...item} />
                    ))}
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

const OverviewCard = ({ title, value, change, icon, color, active }) => {
  const colorClass = {
    blue: "bg-blue-200 text-blue-600",
    green: "bg-[#407da3] text-[#31d4a3]",
    red: "bg-red-200 text-red-600",
    yellow: "bg-yellow-200 text-yellow-600"
  };
  return (
    <div
      className={`${
        active ? "bg-[#4645a3]" : "bg-white"
      } rounded-lg p-5 border`}
    >
      <div className={`${active ? "text-white" : ""} flex  gap-2`}>
        <Image src={icon} height="100%" width="100%" alt={title} />
        <div className="flex flex-col justify-between">
          <h3 className="text-lg font-medium ">{title}</h3>
          <div className="flex items-center gap-1">
            <div className={`p-0.5 rounded-sm ${colorClass[color]}`}>
              <MoveUpRight size={12} />
            </div>
            <p className="text-xs text-gray-400">
              <span>{change}%</span> compared with last month
            </p>
          </div>
        </div>
      </div>
      <Separator className="my-4" />
      <div
        className={`${
          active ? "text-white" : ""
        } flex  items-center justify-between`}
      >
        <div className="text-2xl font-semibold">{value}</div>
        <button>
          <MoveRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const SavingCard = ({ title, current, target, percentage, date, color }) => {
  const colorMap = {
    indigo: "text-[#4745a4]",
    amber: "text-[#f9ba33]",
    emerald: "text-[#3bbb6e]"
  };
  const progressMap = {
    indigo: "[&>div]:bg-[#4745a4]",
    amber: "[&>div]:bg-[#f9ba33]",
    emerald: "[&>div]:bg-[#3bbb6e]"
  };

  return (
    <div className="p-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs text-gray-500">Target: {date}</span>
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-baseline space-x-1">
          <span className="text-xl font-bold text-slate-900">
            ${current.toLocaleString()}
          </span>
          <span className="text-gray-400 text-xs">
            /${target.toLocaleString()}
          </span>
        </div>
        <div className={`text-right text-lg font-medium ${colorMap[color]}`}>
          {percentage}%
        </div>
      </div>
      <div className="">
        <Progress value={percentage} className={progressMap[color]} />
      </div>
    </div>
  );
};

const TransactionCard = ({ name, date, amount, status, icon }) => {
  return (
    <div className="flex items-center py-2 px-1">
      <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
        {icon}
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-lg">{name}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <div className="text-right">
        <div className="font-bold text-lg">${amount}</div>
        <p className="text-xs text-emerald-500">{status}</p>
      </div>
    </div>
  );
};
export default Home;
