"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Chart component
const Chart = () => {
  const chartData = [
    { day: "Sun", label1: 10000, label2: 5000 },
    { day: "Mon", label1: 12000, label2: 4000 },
    { day: "Tue", label1: 9000, label2: 11000 },
    { day: "Wed", label1: 18000, label2: 6500 },
    { day: "Thu", label1: 22000, label2: 20000 },
    { day: "Fri", label1: 11000, label2: 5500 },
    { day: "Sat", label1: 16000, label2: 9000 }
  ];

  return (
    <Card className="shadow-none border-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl !font-bold">Analytics</CardTitle>
        <div className="flex items-center gap-4 text-sm text-black">
          <div className="flex items-center gap-3 text-sm">
            <span className="w-2 h-2 rounded-full bg-purple-600 text-xs" />
            Label1
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 text-xs" />
            Label2
          </div>
          <select className="ml-2 rounded-sm border px-2 py-1 text-sm text-[#7C7C7C]">
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>
      </CardHeader>
      <CardContent className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="yellowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#facc15" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              tickMargin={10}
              dataKey="day"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickMargin={10}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value / 1000}k`}
            />
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="label1"
              stroke="#8b5cf6"
              fill="url(#purpleGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="label2"
              stroke="#facc15"
              fill="url(#yellowGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Chart;
