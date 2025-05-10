"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

import Message from "@/assets/message.png";
import Notification from "@/assets/notification.png";
import Gallery from "@/assets/gallery.png";
import Image from "next/image";
import Chart from "@/components/Chart";
import { OverviewCard } from "@/components/OverviewCard";
import { SavingCard } from "@/components/SavingCard";
import { TransactionCard } from "@/components/TransactionCard";
import { overviewData, savingGoals, transactions } from "@/constants/constant";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 850);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="flex border-transparent rounded-xl ">
      {!isMobile ? (
        <aside className="flex w-60 lg:w-70 flex-col bg-white border rounded-l-xl sticky top-0 h-screen">
          <Sidebar />
        </aside>
      ) : (
        <aside
          className={` fixed inset-y-0 left-0 z-50 w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } flex flex-col`}
        >
          <Sidebar onClose={() => setSidebarOpen(false)} />
        </aside>
      )}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-200 ease-in-out"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <div className="flex items-center justify-between px-6 pt-4  ">
          <div className="xl:flex hidden w-[30%] xl:w-2/3 pr-4">
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
            <div className="w-full flex items-center">
              <div className=" relative w-full">
                <Search className="absolute left-6 top-6 h-4 w-4 text-black" />
                <Input
                  type="search"
                  placeholder="Search here..."
                  className="w-full h-16 bg-white pl-12 rounded-full border-none"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full xl:w-1/3  bg-white rounded-full p-2 h-16 justify-between">
            <div className="xl:hidden flex items-center w-[60%]">
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
              <div className="w-full hidden sm:flex items-center">
                <div className=" relative w-full">
                  <Search className="absolute left-6 top-4 h-4 w-4 text-black" />
                  <Input
                    type="search"
                    placeholder="Search here..."
                    className=" w-70 h-12 bg-transparent pl-12 rounded-full border-black"
                  />
                </div>
              </div>

              <div className="sm:hidden flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <Search className="h-5 w-5 text-black" />
                </Button>
                {showSearch && (
                  <Input
                    type="search"
                    placeholder="Search..."
                    className=":w-50 h-10 bg-white pl-10 rounded-full border border-gray-200 shadow-sm"
                  />
                )}
              </div>
            </div>
            {!showSearch && (
              <div className="flex items-center justify-between w-full">
                <div className="border rounded-3xl lg:px-3 xl:px-5 px-3 py-3">
                  <Image
                    src={Notification}
                    width={20}
                    height={20}
                    alt="notification"
                  />
                </div>
                <div className="border rounded-3xl lg:px-3 xl:px-5 px-3 py-3">
                  <Image src={Message} width={20} height={20} alt="message" />
                </div>
                <div className="flex gap-2">
                  <div className="border rounded-full p-0.5">
                    <div className="border rounded-3xl p-2 bg-gray-400">
                      <Image
                        src={Gallery}
                        width={22}
                        height={22}
                        alt="message"
                      />
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex items-center gap-1 cursor-pointer">
                        <p className="hidden sm:block">Mirie Kiritani</p>
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
            )}
          </div>
        </div>
        <div className="p-6 overflow-y-auto">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="xl:w-2/3 space-y-6">
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

            <div className="xl:w-1/3 space-y-6">
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
                  <h2 className="text-xl font-semibold">Recent Transaction</h2>
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
      </main>
    </div>
  );
};

export default Home;
