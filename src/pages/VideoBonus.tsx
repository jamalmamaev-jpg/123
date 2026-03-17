import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { QrCode, Video, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const VideoBonus = () => {
  return (
    <Layout>
      <div className="bg-accent/10 py-24 border-b border-accent/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="h-20 w-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-accent/20">
            <Video className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-6">Your Ski Memories, <br /><span className="text-secondary">Captured for Free</span></h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Exclusively for Ski Portal Austria users. Book your trip through our platform and receive a professional 2-minute video of your best run at the resort.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center space-y-6">
            <div className="h-24 w-24 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto relative">
              <span className="absolute -top-2 -left-2 h-8 w-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">1</span>
              <Smartphone className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Book Your Trip</h3>
            <p className="text-muted-foreground">Choose any resort, hotel, or package on our portal and complete your booking via our affiliate partners.</p>
          </div>

          <div className="text-center space-y-6">
            <div className="h-24 w-24 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto relative">
              <span className="absolute -top-2 -left-2 h-8 w-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">2</span>
              <QrCode className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Receive QR Code</h3>
            <p className="text-muted-foreground">After booking, you'll receive a unique QR code via email. This is your ticket to the free video bonus.</p>
          </div>

          <div className="text-center space-y-6">
            <div className="h-24 w-24 bg-white shadow-xl rounded-full flex items-center justify-center mx-auto relative">
              <span className="absolute -top-2 -left-2 h-8 w-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold">3</span>
              <Video className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary">Scan & Record</h3>
            <p className="text-muted-foreground">Scan your code at the designated "Video Run" stations at the resort. Our automated cameras will do the rest!</p>
          </div>
        </div>

        <div className="mt-24 glass p-12 rounded-[3rem] flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=1000" 
              alt="Skiing" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold text-primary">What's Included?</h2>
            <ul className="space-y-4">
              {[
                "High-definition 1080p video quality",
                "Multiple camera angles along the run",
                "Professional editing with alpine music",
                "Instant download to your smartphone",
                "Easy sharing to Instagram & TikTok"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg text-primary/70">
                  <CheckCircle2 className="h-6 w-6 text-secondary mr-4" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/resorts">
              <Button className="bg-primary text-white rounded-full px-10 py-6 text-lg font-bold mt-4">
                Find a Resort & Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoBonus;