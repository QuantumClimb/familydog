import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MapPin, Calendar, CheckCircle } from "lucide-react";

export default function LooseLeash() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning loose leash walking techniques. Could you provide more information about your training classes?");
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
              Loose Leash Walking
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              How to walk your dog on a loose leash is something most of our students request. However, trying to teach this, or even demo it in the exciting environments where we train is almost impossible.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant mb-12">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Instead, we have put together these videos demonstrating some very experienced dog trainers teaching loose leash walking. 
                These proven techniques will help you and your dog enjoy peaceful walks together.
              </p>
            </CardContent>
          </Card>

          {/* Video Training Sections */}
          <div className="space-y-12">
            {/* Yorkshire Canine Academy */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-6 w-6 text-neon" />
                  Yorkshire Canine Academy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At 36 minutes, this is a fairly long video, but stick with it. Note his two big points:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-neon mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Exercise your dog FIRST</p>
                        <p className="text-sm text-muted-foreground">Or as he puts it "take the edge off" all that pent-up excitement.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-neon mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Train this in a boring environment</p>
                        <p className="text-sm text-muted-foreground">Start in quiet areas before progressing to more distracting environments.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    Jacob Morgan is co-founder of the Yorkshire Canine Academy - a collective of experienced dog trainers and behaviourists practicing out of their Leeds, Yorkshire.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* American Standard K9 */}
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-6 w-6 text-neon" />
                  American Standard K9
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Garret Wing of American Standard Dog Training has several decades of working with the police in South Florida training their K9 working dogs.
                  </p>
                  
                  <p className="text-muted-foreground">
                    His methods are no-nonsense and can be adapted to any size dog, but is probably more suitable for larger breeds.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-neon mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Start "boring" and work your way up</p>
                        <p className="text-sm text-muted-foreground">He trains in the middle of a wide road in a very quiet area, then progresses to everyday exciting environments.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-neon mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Short training sessions with rewards</p>
                        <p className="text-sm text-muted-foreground">He only expects the dog to loose heel for a short time, then rewards with "free" time to sniff and explore. Remember, your dogs are pets, not soldiers!</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    His YouTube has 2.36M subscribers with 1,605 videos and over 1B views. So I think that says something!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Training Classes CTA */}
          <Card className="card-elegant mt-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Practice With Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                While these videos provide excellent foundation, nothing beats hands-on practice with experienced trainers.
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
                Join Our Classes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Venue Information */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
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
            Need Help With Loose Leash Walking?
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