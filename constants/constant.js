import Saving from "@/assets/saving.png";
import Wallet from "@/assets/wallet.png";
import Incomes from "@/assets/incomes.png";
import Expenses from "@/assets/expenses.png";

import { Figma, FileImage, Music, Youtube } from "lucide-react";

export const overviewData = [
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

export const savingGoals = [
  {
    title: "Bali Vacation",
    current: "1950,21",
    target: 4000,
    percentage: 48,
    date: "August 25 2022",
    color: "indigo"
  },
  {
    title: "New Gadget",
    current: "790,21",
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

export const transactions = [
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
