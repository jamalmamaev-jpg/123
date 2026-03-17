import Layout from "@/components/Layout";
import { activities } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { MapPin, Star, ExternalLink } from "lucide-react";

const Activities = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Beyond the Slopes</h1>
          <p className="text-white/60 text-xl max-w-2xl">Discover unique winter experiences, from paragliding over glaciers to cozy night sledding.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map(activity => (
            <div key={activity.id} className="glass rounded-3xl overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={activity.image} 
                  alt={activity.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary leading-tight">{activity.name}</h3>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">From</p>
                    <p className="text-xl font-bold text-secondary">€{activity.price}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center text-xs font-bold text-primary/40 uppercase tracking-widest">
                    via {activity.provider}
                  </div>
                  <Button variant="ghost" className="text-secondary font-bold p-0 hover:bg-transparent hover:text-secondary/80">
                    Book Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Activities;