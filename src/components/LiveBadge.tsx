import { Check } from "lucide-react";

export const LiveBadge = () => {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full text-xs font-medium text-green-600 dark:text-green-400">
      <Check className="h-3 w-3" />
      Že deluje
    </div>
  );
};