import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Users, Award, Clock, Phone, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import mainHero from "@/assets/main-hero.png"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="min-h-[80vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content */}
              <div className="text-center lg:text-left scroll-fade-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                  Next Series
                  <span className="block text-neon text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">START</span>
                </h1>
                
                <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 space-y-1">
                  <p>Saturdays 2nd August 2025</p>
                  <p>Sundays 3rd August 2025</p>
                </div>
                
                <div className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-cyan-100 mb-6">
                  in Mont Kiara & Kota Kemuning
                </div>
                
                <p className="text-sm text-white/80 mb-8">
                  (NOTE: Dates sometimes subject to change due to venue availability)
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button asChild variant="whatsapp" size="lg" className="group bounce-hover text-sm sm:text-base">
                    <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      WhatsApp +6017 880 3829
                    </a>
                  </Button>
                  <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white border-0 bounce-hover text-sm sm:text-base">
                    <Link to="/schedules">
                      View Schedules
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Image - No Background */}
              <div className="flex justify-center lg:justify-end scroll-fade-right">
                <img 
                  src="/images/trainer.png" 
                  alt="Richard Gardner - Professional Dog Trainer with German Shepherd" 
                  className="w-full max-w-[300px] sm:max-w-md h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              What is 
              <span className="text-gradient"> Puppy Group Training?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              These classes are designed to do two things that will transform your relationship with your dog forever.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-card p-8 rounded-xl shadow-soft scroll-fade-left">
              <div className="bg-neon/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-neon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Socialization</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To socialize the dog and the handlers with dogs and people - this goes a long way to eliminating unwanted behaviour like reactivity towards other dogs or humans.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft scroll-fade-right">
              <div className="bg-neon/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Award className="h-10 w-10 text-neon" />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Life Skills</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To teach our dogs how to live with us in human society. These include very basic skills like sit, stay, come when called, jumping control, barking control and bite limitation. Plus house training (aka "Potty" training).
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-8">
              These are all covered week by week, topic by topic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link to="/schedules">View Syllabus</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/faq">Read FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-20 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Training
              <span className="text-gradient"> Venues</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-xl shadow-soft text-center scroll-fade-left">
              <h3 className="text-2xl font-bold mb-4 text-neon">SOCIETY Mont Kiara</h3>
              <div className="space-y-2 text-lg">
                <p><strong>4, Jalan Kiara 1,</strong></p>
                <p><strong>Mont Kiara,</strong></p>
                <p><strong>50480 Kuala Lumpur</strong></p>
              </div>
              <Button asChild variant="outline" className="mt-6 bounce-hover w-full sm:w-auto">
                <Link to="/map">View Map</Link>
              </Button>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft text-center scroll-fade-right">
              <h3 className="text-2xl font-bold mb-4 text-neon">twentyfive7 @ Kota Kemuning</h3>
              <div className="space-y-2 text-lg">
                <p><strong>42500 Telok Panglima Garang,</strong></p>
                <p><strong>Selangor</strong></p>
              </div>
              <Button asChild variant="outline" className="mt-6 bounce-hover w-full sm:w-auto">
                <Link to="/map">View Map</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Teen Training Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why & What are
              <span className="text-gradient"> Teen Training Classes</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="scroll-fade-left">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our teen classes are six sessions at the weekends. The classes are 4-6 dogs plus their handlers. At the end of six weeks students will have the option to take one or both of these tests:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <h4 className="font-bold text-neon mb-2">Canine Good Citizen</h4>
                  <p className="text-muted-foreground text-sm">AKC certified program</p>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <h4 className="font-bold text-neon mb-2">Competitive Obedience</h4>
                  <p className="text-muted-foreground text-sm">Pre Novice level</p>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">Training includes:</h4>
              <ul className="space-y-2 mb-8">
                {[
                  "Understanding Aggressive Behaviour vs Aggressive Dogs",
                  "Focus & Attention & Redirection",
                  "Resource Guarding",
                  "Excessive Barking",
                  "Walking on a Loose Leash",
                  "Understanding DO vs DON'T"
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <Heart className="h-5 w-5 text-neon mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link to="/trainer">Meet Our Trainer</Link>
              </Button>
            </div>

            <div className="scroll-fade-right">
              <div className="bg-gradient-hero rounded-2xl p-8 text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Satisfaction Guarantee</h3>
                <h4 className="text-xl font-semibold mb-4">Love it or your money back!</h4>
                <p className="mb-6">
                  If by the end of your first class you decide this training doesn't meet your needs we will refund in full - no questions asked!
                </p>
                <Button asChild variant="whatsapp" size="lg" className="bounce-hover w-full sm:w-auto text-sm sm:text-base">
                  <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Contact Us Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Dog's Life?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our proven group training classes in Mont Kiara and Kota Kemuning. Expert trainer with 18+ years experience waiting to help you and your furry family member.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto">
            <Button asChild variant="whatsapp" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
              <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp +6017 880 3829
              </a>
            </Button>
            <Button asChild variant="outlineNeon" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <Link to="/schedules">
                View Class Schedules
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}