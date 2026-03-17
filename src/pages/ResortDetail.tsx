import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { resorts, hotels, packages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Mountain, MapPin, Star, Wind, Thermometer, ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ResortDetail = () => {
  const { slug } = useParams();
  const resort = resorts.find(r => r.slug === slug);

  if (!resort) return <div>Resort not found</div>;

  return (
    <Layout>
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={resort.image} alt={resort.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-12">
          <div className="max-w-7xl mx-auto">
            <Badge className="bg-secondary text-white mb-4 px-4 py-1">{resort.region}</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{resort.name}</h1>
            <div className="flex items-center text-white/80 space-x-6">
              <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-secondary" /> {resort.location}</div>
              <div className="flex items-center"><Star className="h-4 w-4 mr-2 text-accent fill-current" /> {resort.rating} Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {resort.description} Experience the magic of the Austrian Alps in {resort.name}. This world-class destination offers everything from perfectly groomed pistes to challenging off-piste terrain.
            </p>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="glass p-6 rounded-2xl text-center">
              <Mountain className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-bold uppercase">Ski Area</p>
              <p className="text-2xl font-bold text-primary">{resort.skiAreaSize} km</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Wind className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-bold uppercase">Lifts</p>
              <p className="text-2xl font-bold text-primary">{resort.lifts}</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Star className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-bold uppercase">Difficulty</p>
              <p className="text-xl font-bold text-primary">{resort.difficulty}</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center">
              <Thermometer className="h-8 w-8 text-secondary mx-auto mb-3" />
              <p className="text-sm text-muted-foreground font-bold uppercase">Weather</p>
              <p className="text-2xl font-bold text-primary">-4°C</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-primary mb-8">Piste Distribution</h2>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Blue (Easy)</span>
                  <span className="text-muted-foreground">{resort.stats.blue} km</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500" style={{ width: `${(resort.stats.blue / resort.skiAreaSize) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Red (Intermediate)</span>
                  <span className="text-muted-foreground">{resort.stats.red} km</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500" style={{ width: `${(resort.stats.red / resort.skiAreaSize) * 100}%` }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-bold">Black (Expert)</span>
                  <span className="text-muted-foreground">{resort.stats.black} km</span>
                </div>
                <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-black" style={{ width: `${(resort.stats.black / resort.skiAreaSize) * 100}%` }} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar / Booking */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl sticky top-24 border-secondary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Book Your Trip</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-sm text-primary/70">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Best Price Guarantee
              </div>
              <div className="flex items-center text-sm text-primary/70">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Free QR Video Bonus Included
              </div>
              <div className="flex items-center text-sm text-primary/70">
                <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Secure Affiliate Booking
              </div>
            </div>
            <div className="space-y-3">
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 rounded-xl font-bold text-lg">
                Book via SnowTrex
              </Button>
              <Button variant="outline" className="w-full border-primary/10 py-6 rounded-xl font-bold">
                Compare on Expedia
              </Button>
            </div>
            <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest">
              Official Affiliate Partner
            </p>
          </div>

          <div className="bg-accent/10 p-8 rounded-3xl border border-accent/20">
            <h4 className="font-bold text-primary mb-2">QR Video Bonus</h4>
            <p className="text-sm text-primary/60 mb-4">Get a professional 2-minute video of your ski run for free when you book through this portal.</p>
            <Link to="/video-bonus" className="text-accent font-bold text-sm flex items-center hover:underline">
              How it works <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResortDetail;