
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  className?: string;
}

export function StatsCard({ title, value, icon, className }: StatsCardProps) {
  return (
    <Card className={cn("transition-all hover:scale-105", className)}>
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="mb-4 rounded-full bg-purple-100 p-3 text-purple-600">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </CardContent>
    </Card>
  );
}
