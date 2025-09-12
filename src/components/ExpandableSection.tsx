import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveBadge } from "./LiveBadge";

interface ExpandableSectionProps {
  title: string;
  summary: string | React.ReactNode;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  showLiveBadge?: boolean;
}

export const ExpandableSection = ({ 
  title, 
  summary, 
  content, 
  icon,
  className = "",
  showLiveBadge = false
}: ExpandableSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`movement-card ${className}`}>
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="section-header">{title}</h3>
            {showLiveBadge && <LiveBadge />}
          </div>
          <div className="text-muted-foreground leading-relaxed">
            {typeof summary === 'string' ? <p>{summary}</p> : summary}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-glow transition-movement p-0"
        >
          {isExpanded ? (
            <>
              Skrij podrobnosti <ChevronUp className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Preberi več <ChevronDown className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>

      <div 
        className={`expandable-content mt-4 ${
          isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 border-t border-border">
          <div className="text-foreground leading-relaxed">
            {typeof content === 'string' ? (
              <p className="whitespace-pre-line">{content}</p>
            ) : (
              content
            )}
          </div>
        </div>
      </div>
    </div>
  );
};