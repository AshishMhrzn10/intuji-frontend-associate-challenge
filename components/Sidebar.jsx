import React, { useState } from "react";
import {
  Calendar,
  ChartColumn,
  Info,
  LayoutDashboard,
  LogOut,
  Mail,
  Settings,
  User,
  Users,
  X
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const Sidebar = ({ onClose }) => {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const NavItem = ({ icon, label }) => {
    return (
      <button
        className={cn(
          "flex items-center gap-3 cursor-pointer px-3 py-1 text-gray-500 transition-all hover:text-gray-900",
          activeItem == label ? "border-l-3 rounded-none border-black" : ""
        )}
        onClick={() => {
          setActiveItem(label);
        }}
      >
        <div className="flex items-center justify-center gap-4 ml-6">
          <span className={activeItem == label ? "text-[#f9ba33]" : ""}>
            {icon}
          </span>
          <span className={activeItem == label ? "text-black font-bold" : ""}>
            {label}
          </span>
        </div>
      </button>
    );
  };

  const mainNavItems = [
    {
      icon: <LayoutDashboard className="h-4 w-4" />,
      label: "Dashboard"
    },
    { icon: <Calendar className="h-4 w-4" />, label: "Schedule" },
    { icon: <Mail className="h-4 w-4" />, label: "Message" },
    { icon: <ChartColumn className="h-4 w-4" />, label: "Analytics" },
    { icon: <Users className="h-4 w-4" />, label: "Team" }
  ];

  const secondaryNavItems = [
    { icon: <User className="h-4 w-4" />, label: "Profile" },
    { icon: <Settings className="h-4 w-4" />, label: "Settings" }
  ];

  const bottomNavItems = [
    { icon: <Info className="h-4 w-4" />, label: "Help" },
    { icon: <LogOut className="h-4 w-4" />, label: "Logout" }
  ];
  return (
    <>
      <div className="p-4 flex items-center justify-between">
        <div className="h-16 w-full bg-gray-100 rounded flex items-center justify-center ">
          <img
            src="https://cdn.intuji.com/2023/05/header-icon-1.svg"
            className="h-[80%]"
          />
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-3 ">
          {mainNavItems.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </nav>

        <div className="my-4 mx-4">
          <Separator />
        </div>

        <nav className="grid gap-3">
          {secondaryNavItems.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </nav>
      </div>

      <div className="mb-4 mt-auto">
        <nav className="grid gap-3">
          {bottomNavItems.map((item) => (
            <NavItem key={item.label} icon={item.icon} label={item.label} />
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
