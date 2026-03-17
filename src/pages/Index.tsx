import Layout from "@/components/Layout";
import { resorts, packages, activities } from "@/data/mockData";
import ResortCard from "@/components/ResortCard";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin, Video, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1482867996988-29ec3aee81a1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Austrian Alps"
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Discover the Best <br />
            <span className="text-secondary">Ski Resorts</span> in Austria
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-light"
          >
            Premium winter experiences, luxury stays, and exclusive video bonuses for your next alpine adventure.
          </motion.p>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-2 rounded-2xl md:rounded-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-2"
          >
            <div className="flex-1 flex items-center px-6 py-3 w-full">
              <MapPin className="h-5 w-5 text-secondary mr-3" />
              <input type="text" placeholder="Where to go?" className="bg-transparent border-none focus:ring-0 text-primary w-full placeholder:text-primary/40" />
            </div>
            <div className="h-8 w-[1px] bg-primary/10 hidden md:block" />
            <div className="flex-1 flex items-center px-6 py-3 w-full">
              <Calendar className="h-5 w-5 text-secondary mr-3" />
              <input type="text" placeholder="When?" className="bg-transparent border-none focus:ring-0 text-primary w-full placeholder:text-primary/40" />
            </div>
            <Button className="w-full md:w-auto bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-6 text-lg font-bold">
              Search
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Bonus Promo */}
      <section className="py-12 bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-2xl bg-accent flex items-center justify-center shadow-lg shadow-accent/20">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary">Exclusive QR Video Bonus</h3>
              <p className="text-primary/60">Book through our portal and get a free 2-minute professional ski video of your run.</p>
            </div>
          </div>
          <Link to="/video-bonus">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-primary rounded-full px-8">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Resorts */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Featured Ski Resorts</h2>
            <p className="text-muted-foreground">Handpicked destinations for the ultimate winter getaway.</p>
          </div>
          <Link to="/resorts">
            <Button variant="ghost" className="text-secondary font-bold hover:text-secondary/80">
              View All Resorts <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resorts.map(resort => (
            <ResortCard key={resort.id} resort={resort} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Mountain className="w-full h-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">The Ski Portal Advantage</h2>
            <p className="text-white/60 max-w-2xl mx-auto">We partner with the world's leading travel providers to bring you the best deals and exclusive perks.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold">Best Price Guarantee</h3>
              <p className="text-white/60">We compare prices across Expedia, SnowTrex, and Booking.com to ensure you get the best rate.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Exclusive Bonuses</h3>
              <p className="text-white/60">Only our users receive the QR Video Bonus and special resort vouchers upon booking.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Expert Curation</h3>
              <p className="text-white/60">Our team of alpine experts personally reviews every resort and hotel on our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="glass p-12 rounded-[2rem] text-center relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          
          <h2 className="text-3xl font-bold text-primary mb-4">Ready for the Slopes?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">Join 50,000+ ski enthusiasts and get the best deals delivered to your inbox.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="bg-primary text-white rounded-full px-8 py-4 font-bold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;