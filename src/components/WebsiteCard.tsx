import { ExternalLink } from "lucide-react";

interface WebsiteCardProps {
  title: string;
  link: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export const WebsiteCard = ({ title, link, description, imageSrc, imageAlt }: WebsiteCardProps) => {
  return (
    <div className="bg-card rounded-lg border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-200 flex items-center gap-2">
            {title}
            <ExternalLink className="h-4 w-4" />
          </h3>
        </a>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};