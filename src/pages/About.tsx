import { Button } from "@/components/ui/button"
import { Heart, Award, Users, BookOpen } from "lucide-react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About 
            <span className="text-gradient"> Family Dog Training</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated to building stronger bonds between families and their beloved canine companions through compassionate, effective training methods.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Family Dog Training, we believe that every dog deserves to be understood, respected, and trained with kindness. Our mission is to strengthen the bond between dogs and their families through positive reinforcement training that builds confidence, trust, and mutual respect.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We don't just train dogs – we educate families on how to communicate effectively with their four-legged family members, creating lasting relationships built on understanding and love.
              </p>
              <Button asChild variant="primary" size="lg">
                <Link to="/contact">Start Your Journey</Link>
              </Button>
            </div>
            <div className="bg-gradient-soft rounded-2xl p-8 animate-fade-in-right">
              <div className="space-y-6">
                {[
                  { icon: Heart, title: "Compassionate Training", description: "Every dog is treated with patience and respect" },
                  { icon: Users, title: "Family-Centered", description: "We involve the whole family in the training process" },
                  { icon: Award, title: "Proven Methods", description: "Science-based positive reinforcement techniques" },
                  { icon: BookOpen, title: "Continuous Learning", description: "We stay updated with the latest training methods" }
                ].map((item, index) => (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div className="bg-neon/10 p-3 rounded-lg">
                      <item.icon className="h-6 w-6 text-neon" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20 py-16 bg-card rounded-2xl shadow-soft">
          <div className="px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Training Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Positive Reinforcement",
                  description: "We believe in rewarding good behavior rather than punishing mistakes. This creates a positive learning environment where dogs are excited to learn and please their families."
                },
                {
                  title: "Individual Approach",
                  description: "Every dog is unique with their own personality, history, and learning style. We customize our training methods to suit each dog's specific needs and temperament."
                },
                {
                  title: "Family Education",
                  description: "Training doesn't stop with the dog. We educate families on dog behavior, communication, and how to maintain training consistency at home."
                }
              ].map((principle, index) => (
                <div key={principle.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <h3 className="text-xl font-bold mb-4 text-neon">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trainer Bio Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Your Trainer</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-soft rounded-2xl p-8 text-center animate-fade-in-left">
              <div className="w-48 h-48 bg-neon/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="h-24 w-24 text-neon" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Sarah Johnson</h3>
              <p className="text-neon font-semibold mb-4">Certified Professional Dog Trainer</p>
              <div className="space-y-2 text-muted-foreground">
                <p>• 10+ Years Experience</p>
                <p>• CCPDT Certified</p>
                <p>• 500+ Dogs Trained</p>
                <p>• Behavioral Specialist</p>
              </div>
            </div>
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">A Lifelong Passion for Dogs</h3>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in dog training and behavior modification, Sarah has dedicated her life to understanding the unique bond between dogs and their families. Her journey began with rescuing and rehabilitating dogs, which led to a deep passion for helping families create harmonious relationships with their pets.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Sarah holds certifications from the Certification Council for Professional Dog Trainers (CCPDT) and continues her education through workshops and seminars on the latest positive training techniques. She specializes in puppy training, basic obedience, and behavioral issues including anxiety and aggression.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                When she's not training dogs, Sarah enjoys hiking with her two rescue dogs, Max and Luna, who serve as excellent examples of what proper training and love can accomplish.
              </p>
              <Button asChild variant="neon" size="lg">
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-hero rounded-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Dogs Trained" },
              { number: "10+", label: "Years Experience" },
              { number: "95%", label: "Success Rate" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}