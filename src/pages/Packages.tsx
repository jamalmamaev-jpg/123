import Layout from "@/components/Layout";
import { packages } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Check, Clock, Tag } from "lucide-react";

const Packages = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">All-Inclusive Ski Packages</h1>
          <p className="text-white/60 text-xl max-w-2xl">Save time and money with curated bundles including accommodation, lift passes, and more.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="glass rounded-3xl overflow-hidden flex flex-col">
              <div className="h-64 relative">
                <img src={pkg.image} alt={pkg.resortName} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <div className="bg-secondary text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                    <Tag className="h-3 w-3 mr-2" /> {pkg.provider} Exclusive
                  </div>
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-primary mb-1">{pkg.resortName}</h2>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="h-4 w-4 mr-1" /> {pkg.nights} Nights Stay
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-primary">€{pkg.price}</p>
                    <p className="text-xs text-muted-foreground uppercase font-bold">Per Person</p>
                  </div>
                </div>

                <div className="space-y-3 mb-8 flex-grow">
                  {pkg.includes.map((item, i) => (
                    <div key={i} className="flex items-center text-sm text-primary/70">
                      <Check className="h-4 w-4 text-green-500 mr-2" /> {item}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-primary text-white py-6 rounded-xl font-bold text-lg">
                  Book Package via {pkg.provider}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Packages;