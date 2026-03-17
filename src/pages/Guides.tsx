import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, User } from "lucide-react";

const guides = [
  {
    title: "Ischgl vs St. Anton: Which is Right for You?",
    excerpt: "A deep dive into the two titans of Austrian skiing. We compare the terrain, the town, and the legendary après-ski.",
    image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&q=80&w=1000",
    author: "Hans Müller",
    date: "Oct 12, 2024",
    readTime: "8 min"
  },
  {
    title: "Top 5 Family-Friendly Resorts in Salzburg",
    excerpt: "Planning a trip with the kids? These resorts offer the best ski schools and child-friendly amenities.",
    image: "https://images.unsplash.com/photo-1482867996988-29ec3aee81a1?auto=format&fit=crop&q=80&w=1000",
    author: "Sarah Weber",
    date: "Oct 15, 2024",
    readTime: "6 min"
  },
  {
    title: "The Ultimate Guide to Ski Pass Prices 2024/25",
    excerpt: "Everything you need to know about the new dynamic pricing models and how to save on your lift tickets.",
    image: "https://images.unsplash.com/photo-1546726747-cd917359c331?auto=format&fit=crop&q=80&w=1000",
    author: "Markus Egger",
    date: "Oct 18, 2024",
    readTime: "12 min"
  }
];

const Guides = () => {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Alpine Guides & Insights</h1>
          <p className="text-white/60 text-xl max-w-2xl">Expert advice to help you plan the perfect Austrian ski holiday.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {guides.map((guide, i) => (
            <article key={i} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1 rounded-full text-xs font-bold">
                    Ski Guide
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center"><User className="h-3 w-3 mr-1" /> {guide.author}</div>
                <div className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {guide.readTime}</div>
                <div>{guide.date}</div>
              </div>
              <h2 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors leading-tight">
                {guide.title}
              </h2>
              <p className="text-muted-foreground mb-6 line-clamp-3">
                {guide.excerpt}
              </p>
              <Button variant="ghost" className="p-0 text-secondary font-bold hover:bg-transparent hover:text-secondary/80">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Guides;