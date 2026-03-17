import { Resort } from "@/data/mockData";
import { Link } from "react-router-dom";
import { Star, MapPin, Mountain } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ResortCard = ({ resort }: { resort: Resort }) => {
  return (
    <Link to={`/resort/${resort.slug}`} className="group">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={resort.image} 
            alt={resort.name} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
        </div>
        
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 text-primary backdrop-blur-sm border-none font-bold">
            {resort.priceLevel}
          </Badge>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{resort.name}</h3>
            <div className="flex items-center text-accent">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 text-sm font-bold text-primary">{resort.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center text-muted-foreground text-sm mb-4">
            <MapPin className="h-3 w-3 mr-1" />
            {resort.location}
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-2">
              <Mountain className="h-4 w-4 text-secondary" />
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-bold">Ski Area</p>
                <p className="text-sm font-bold text-primary">{resort.skiAreaSize} km</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-2 w-2 rounded-full bg-secondary" />
              </div>
              <div>
                <p className="text-[10px] uppercase text-muted-foreground font-bold">Level</p>
                <p className="text-sm font-bold text-primary">{resort.difficulty}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ResortCard;