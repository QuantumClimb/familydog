import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Calendar, Users, Award, CheckCircle } from "lucide-react";

export default function SocietyFood() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about the training programs at SOCIETY Food. Could you provide more information?");
    window.open(`https://wa.me/60178803829?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-elegant text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Training Venue
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-white">SOCIETY</span>{" "}
              <span className="text-gradient">Food</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Premium dog training classes at our Mont Kiara venue with professional facilities and expert guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs Overview */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* What is Puppy Group Training */}
          <Card className="card-elegant mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-neon" />
                What is Puppy Group Training?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-muted-foreground">
                These classes are designed to do two things:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-neon mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Socialization</p>
                    <p className="text-muted-foreground">
                      To socialize the dog and the handlers with dogs and people - this goes a long way to eliminating 
                      unwanted behaviour like reactivity towards other dogs or humans.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-neon mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-2">Essential Life Skills</p>
                    <p className="text-muted-foreground">
                      To teach our dogs how to live with us in human society. These include very basic skills like sit, stay, 
                      come when called, jumping, control of barking and to limit biting. Plus, as most dogs are now kept inside, 
                      house training (aka "Potty" training) is essential.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                These are all covered week by week, topic by topic through our comprehensive syllabus.
              </p>
            </CardContent>
          </Card>

          {/* Teen Training Classes */}
          <Card className="card-elegant mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-neon" />
                Teen Training Classes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                Our teen classes are six sessions at the weekends. The classes are 4-6 dogs plus their handlers. 
                At the end of six weeks students will have the option to take one or both of these tests:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon">Canine Good Citizen</h4>
                  <p className="text-sm text-muted-foreground">
                    Internationally recognized certification demonstrating your dog's good manners and training.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-neon">Competitive Obedience (Pre Novice)</h4>
                  <p className="text-sm text-muted-foreground">
                    Foundation level competitive obedience training for those interested in dog sports.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Training your older dog for these tests helps with:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon" />
                    <span className="text-sm">Understanding Aggressive Behaviour vs Aggressive Dogs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon" />
                    <span className="text-sm">Focus & Attention & Redirection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon" />
                    <span className="text-sm">Resource Guarding</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon" />
                    <span className="text-sm">Excessive Barking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-neon" />
                    <span className="text-sm">Walking on a Loose Leash</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Schedule Information */}
          <Card className="card-elegant mb-12">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4 text-gradient">
                Next Series Start
              </h2>
              <div className="space-y-2 mb-6">
                <p className="text-xl font-semibold">Saturdays 2nd August 2025</p>
                <p className="text-xl font-semibold">Sundays 3rd August 2025</p>
                <p className="text-lg text-muted-foreground">in Mont Kiara & Kota Kemuning</p>
                <p className="text-sm text-muted-foreground">(NOTE: Dates sometimes subject to change due to venue availability)</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  Two Premium Locations
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  Weekend Classes
                </div>
              </div>
              <Button onClick={openWhatsApp} className="button-glow">
                Book Your Spot
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
                <p className="text-muted-foreground">Our primary venue with excellent facilities</p>
                <div className="space-y-1 mt-4">
                  <p className="text-sm text-muted-foreground">4, Jalan Kiara 1</p>
                  <p className="text-sm text-muted-foreground">Mont Kiara</p>
                  <p className="text-sm text-muted-foreground">50480 Kuala Lumpur</p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle>twentyfive7 @ Kota Kemuning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Secondary venue for expanded accessibility</p>
                <div className="space-y-1 mt-4">
                  <p className="text-sm text-muted-foreground">42500 Telok Panglima Garang</p>
                  <p className="text-sm text-muted-foreground">Selangor</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Guarantee */}
          <Card className="card-elegant mt-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon">Love it or your money back!</h3>
              <p className="text-lg text-muted-foreground">
                If by the end of your first class you decide this training doesn't meet your needs 
                just let us know and we will refund your fees in full.
              </p>
            </CardContent>
          </Card>
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