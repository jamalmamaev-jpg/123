import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, HeartPulse, Plane, Umbrella, CheckCircle2 } from "lucide-react";

const Insurance = () => {
  return (
    <Layout>
      <div className="bg-primary py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <ShieldCheck className="h-16 w-16 text-secondary mx-auto mb-8" />
          <h1 className="text-5xl font-bold mb-6">Ski Travel Insurance</h1>
          <p className="text-xl text-white/60">Peace of mind for your alpine adventure. Protect yourself against the unexpected on and off the slopes.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-8">Why You Need It</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <HeartPulse className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Medical & Rescue</h4>
                  <p className="text-muted-foreground">Covers helicopter rescue from the slopes and emergency medical treatment in Austrian hospitals.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Umbrella className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Equipment Protection</h4>
                  <p className="text-muted-foreground">Protection against theft or damage to your expensive ski gear and snowboards.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="h-12 w-12 bg-secondary/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Plane className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Trip Cancellation</h4>
                  <p className="text-muted-foreground">Get your money back if you can't travel due to illness, injury, or unexpected events.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass p-12 rounded-[3rem] border-secondary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Premium Coverage</h3>
            <ul className="space-y-4 mb-10">
              {[
                "Up to €10,000,000 Medical Cover",
                "Mountain Rescue & Helicopter",
                "Ski Pass Reimbursement",
                "Personal Liability Protection",
                "24/7 Emergency Assistance"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-primary/70">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" /> {item}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-white py-6 rounded-xl font-bold text-lg">
              Get a Quote via WorldNomads
            </Button>
            <p className="text-[10px] text-center text-muted-foreground mt-4 uppercase tracking-widest">
              Trusted Affiliate Partner
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Insurance;