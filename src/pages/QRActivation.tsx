import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Smartphone, QrCode, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

const QRActivation = () => {
  const [email, setEmail] = useState("");
  const [isActivated, setIsActivated] = useState(false);

  const handleActivate = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsActivated(true);
      showSuccess("Video Bonus Activated! Check your email for the QR code.");
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-24">
        <div className="glass p-12 rounded-[3rem] text-center">
          {!isActivated ? (
            <>
              <div className="h-20 w-20 bg-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Smartphone className="h-10 w-10 text-secondary" />
              </div>
              <h1 className="text-4xl font-bold text-primary mb-4">Activate Your Bonus</h1>
              <p className="text-muted-foreground mb-10">Enter the email address you used for your booking to receive your unique QR code.</p>
              
              <form onSubmit={handleActivate} className="space-y-6">
                <div className="text-left">
                  <label className="block text-sm font-bold text-primary mb-2 ml-1">Booking Email</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. alex@example.com"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-white py-6 rounded-2xl font-bold text-lg">
                  Generate QR Code
                </Button>
              </form>
            </>
          ) : (
            <div className="animate-in zoom-in duration-500">
              <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-4xl font-bold text-primary mb-4">Success!</h1>
              <p className="text-muted-foreground mb-10">Your QR code has been sent to <strong>{email}</strong>. Simply scan it at any video station in the resort.</p>
              
              <div className="bg-white p-8 rounded-3xl shadow-inner border border-gray-100 mb-10 inline-block">
                <QrCode className="h-48 w-48 text-primary" />
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full py-6 rounded-2xl font-bold border-primary/10">
                  Download PDF
                </Button>
                <Button variant="ghost" onClick={() => setIsActivated(false)} className="text-primary/40">
                  Use a different email
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default QRActivation;