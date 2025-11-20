
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface KpiCardProps {
  title: string;
  metric: string;
  icon: ReactNode;
}

export function KpiCard({ title, metric, icon }: KpiCardProps) {
  return (
    <Card className="shadow-sm hover:shadow-md transition-shadow rounded-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{metric}</div>
      </CardContent>
    </Card>
  );
}
