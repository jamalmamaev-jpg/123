import Layout from "@/components/Layout";
import { resorts } from "@/data/mockData";
import ResortCard from "@/components/ResortCard";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";

const Resorts = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Austrian Ski Resorts</h1>
          <p className="text-white/60 text-xl max-w-2xl">Explore the finest ski areas in the Alps, from legendary expert terrain to family-friendly slopes.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-gray-100">
          <Button variant="outline" className="rounded-full border-gray-200">
            <Filter className="h-4 w-4 mr-2" /> Filters
          </Button>
          <div className="h-6 w-[1px] bg-gray-200 mx-2" />
          <Button variant="ghost" className="rounded-full text-primary/60 hover:text-primary">
            Region <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="rounded-full text-primary/60 hover:text-primary">
            Ski Area Size <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="rounded-full text-primary/60 hover:text-primary">
            Difficulty <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" className="rounded-full text-primary/60 hover:text-primary">
            Price Level <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resorts.map(resort => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Resorts;