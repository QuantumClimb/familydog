import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, HelpCircle, Calendar, MapPin } from "lucide-react";

export default function PottyTraining() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about potty training from your puppy classes. Could you provide more information?");
    window.open(`https://wa.me/60178803829?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-elegant text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Training Guide
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Potty Training Guide
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              It's much easier than you think. Learn the proven methods in our puppy classes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Quick Tips Card */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-6 w-6 text-neon" />
                  Essential Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    • <strong>Consistency is key</strong> - Establish regular feeding and potty schedules
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Positive reinforcement</strong> - Reward immediately when they go in the right place
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Supervision</strong> - Watch for signs like sniffing or circling
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Patience</strong> - Accidents happen, never punish - just redirect
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits Card */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-neon" />
                  Why Our Method Works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    • <strong>Proven techniques</strong> used by professional trainers
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Step-by-step guidance</strong> for every stage
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Troubleshooting</strong> common problems
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • <strong>Faster results</strong> with proper support
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Classes CTA */}
          <Card className="card-elegant mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Learn Potty Training in Our Puppy Classes
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive puppy training program covers potty training alongside socialization and basic obedience.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Mont Kiara & Kota Kemuning
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Weekend Classes Available
                </div>
              </div>
              <Button onClick={openWhatsApp} className="button-glow">
                Get Training Schedule
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Venue Information */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>SOCIETY Mont Kiara</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">4, Jalan Kiara 1</p>
                <p className="text-sm text-muted-foreground">Mont Kiara</p>
                <p className="text-sm text-muted-foreground">50480 Kuala Lumpur</p>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>Twentyfive7 Kota Kemuning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">42500 Telok Panglima Garang</p>
                <p className="text-sm text-muted-foreground">Selangor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-card/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gradient">
            Ready to Start Training?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            WhatsApp us with your name, dog's name and age, and any questions - we'll get back to you.
          </p>
          <Button onClick={openWhatsApp} size="lg" className="button-glow">
            WhatsApp: +6017-880 3829
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}