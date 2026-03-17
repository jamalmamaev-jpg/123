import Layout from "@/components/Layout";
import { hotels } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Coffee, Waves, Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

const Hotels = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Luxury Alpine Stays</h1>
          <p className="text-white/60 text-xl max-w-2xl">From cozy boutique lodges to world-class 5-star resorts with ski-in/ski-out access.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-12">
          {hotels.map(hotel => (
            <div key={hotel.id} className="glass rounded-3xl overflow-hidden flex flex-col lg:flex-row group">
              <div className="lg:w-2/5 h-72 lg:h-auto overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center mb-2">
                        {[...Array(hotel.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-accent fill-current" />
                        ))}
                      </div>
                      <h2 className="text-3xl font-bold text-primary">{hotel.name}</h2>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Starting from</p>
                      <p className="text-3xl font-bold text-secondary">€{hotel.price}<span className="text-sm font-normal text-muted-foreground">/night</span></p>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-2" /> {hotel.location} • {hotel.distanceToLift}
                  </div>

                  <div className="flex flex-wrap gap-6 mb-8">
                    <div className="flex items-center text-sm text-primary/70"><Wifi className="h-4 w-4 mr-2 text-secondary" /> Free WiFi</div>
                    <div className="flex items-center text-sm text-primary/70"><Coffee className="h-4 w-4 mr-2 text-secondary" /> Breakfast</div>
                    <div className="flex items-center text-sm text-primary/70"><Waves className="h-4 w-4 mr-2 text-secondary" /> Spa & Pool</div>
                    <div className="flex items-center text-sm text-primary/70"><Dumbbell className="h-4 w-4 mr-2 text-secondary" /> Gym</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to={`/hotel/${hotel.slug}`} className="flex-1">
                    <Button variant="outline" className="w-full py-6 rounded-xl font-bold border-primary/10">
                      View Details
                    </Button>
                  </Link>
                  <Button className="flex-1 bg-primary text-white py-6 rounded-xl font-bold">
                    Book on Booking.com
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

export default Hotels;