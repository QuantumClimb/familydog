import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Heart, Users, Award, RefreshCw } from "lucide-react";

export default function FAQ() {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I have some questions about your dog training classes. Could you provide more information?");
    window.open(`https://wa.me/60178803829?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-elegant text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Questions & Answers
            </Badge>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about our dog training programs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Why Group Classes Section */}
          <Card className="card-elegant mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-6 w-6 text-neon" />
                Why Group Classes?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold text-gradient">We (try to) train the OWNERS!</h3>
              <p className="text-muted-foreground leading-relaxed">
                Simply sending your dog away for training doesn't always have good long-term results. Once the dog is returned, 
                the owner remains doing the same things that caused the problems in the first place, and quickly - sometimes immediately - 
                the dog returns to his old habits.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our group classes ensure that both you and your dog learn together, creating lasting behavioral changes 
                that continue long after the training ends.
              </p>
            </CardContent>
          </Card>

          {/* Main FAQ Accordion */}
          <Card className="card-elegant mb-12">
            <CardHeader>
              <CardTitle>Common Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is Puppy Group Training?</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>These classes are designed to do two things:</p>
                    <div className="space-y-3">
                      <p><strong>1.</strong> To socialize the dog and the handlers with dogs and people - this goes a long way to eliminating unwanted behaviour like reactivity towards other dogs or humans.</p>
                      <p><strong>2.</strong> To teach our dogs how to live with us in human society. These include very basic skills like sit, stay, come when called, jumping, control of barking and to limit biting. Plus, as most dogs are now kept inside, house training (aka "Potty" training) is essential.</p>
                    </div>
                    <p>These are all covered week by week, topic by topic.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What are Teen Training Classes?</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>Our teen classes are six sessions at the weekends. The classes are 4-6 dogs plus their handlers. At the end of six weeks students will have the option to take one or both of these tests:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>Canine Good Citizen</strong></li>
                      <li><strong>Competitive Obedience (Pre Novice)</strong></li>
                    </ul>
                    <p>Training your older dog for these kind of tests is a very good way to deal with unwanted behaviour that the dog had already learned. This includes:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Understanding Aggressive Behaviour vs Aggressive Dogs</li>
                      <li>Focus & Attention & Redirection</li>
                      <li>Resource Guarding</li>
                      <li>Excessive Barking</li>
                      <li>Walking on a Loose Leash</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the Canine Good Citizen Test?</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <p>By the end of the classes you and your dog should be able to pass the ten items of the AKC's CGC Test - and you may take it with us at your convenience, at no extra cost, after class during one of our later sessions.</p>
                    <p>More info at: <a href="https://www.caninegoodcitizen.my/" className="text-neon hover:underline">www.caninegoodcitizen.my</a></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Can graduates come back?</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <h4 className="font-semibold">Graduates welcome!</h4>
                    <ul className="space-y-2">
                      <li>Come back and join us for socialization anytime.</li>
                      <li>Catch up with your friends.</li>
                      <li>Compare notes, plan walks and staycations.</li>
                      <li>Problems? Questions? We're here to help!</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if I'm not satisfied?</AccordionTrigger>
                  <AccordionContent className="space-y-4">
                    <h4 className="font-semibold text-neon">Love it or your money back!</h4>
                    <p>If by the end of your first class you decide this training doesn't meet your needs we will refund in full - no questions asked!</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-neon mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Love it or Money Back</h3>
                <p className="text-sm text-muted-foreground">Full refund if not satisfied after first class</p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-neon mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Professional Certification</h3>
                <p className="text-sm text-muted-foreground">CGC and Pre-Novice test opportunities</p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="p-6">
                <RefreshCw className="h-12 w-12 text-neon mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                <p className="text-sm text-muted-foreground">Graduates welcome back anytime</p>
              </CardContent>
            </Card>
          </div>

          {/* Training Venues */}
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
                <CardTitle>twentyfive7 @ Kota Kemuning</CardTitle>
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
            Still Have Questions?
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