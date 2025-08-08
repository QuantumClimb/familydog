import { Button } from "@/components/ui/button"
import { Heart, Clock, Users, Star, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const programs = [
  {
    id: 1,
    title: "Puppy Foundation",
    price: "$299",
    duration: "6 weeks",
    sessions: "1 hour/week",
    groupSize: "4-6 puppies",
    ageRange: "8-16 weeks",
    description: "Perfect for new puppy parents! This program covers all the essentials your puppy needs for a great start in life.",
    features: [
      "Basic commands (sit, stay, come)",
      "House training guidance",
      "Puppy socialization",
      "Bite inhibition training",
      "Crate training",
      "Walking on leash basics"
    ],
    highlight: false
  },
  {
    id: 2,
    title: "Adult Dog Essentials",
    price: "$399",
    duration: "8 weeks",
    sessions: "1 hour/week",
    groupSize: "4-6 dogs",
    ageRange: "6 months+",
    description: "Comprehensive training for adult dogs covering obedience, manners, and common behavioral issues.",
    features: [
      "Advanced obedience training",
      "Leash walking mastery",
      "Door manners",
      "Greeting behaviors",
      "Recall training",
      "Problem-solving sessions"
    ],
    highlight: true
  },
  {
    id: 3,
    title: "Behavior Modification",
    price: "$599",
    duration: "12 weeks",
    sessions: "1 hour/week",
    groupSize: "Private",
    ageRange: "Any age",
    description: "Specialized program for dogs with behavioral challenges including aggression, anxiety, and fear-based issues.",
    features: [
      "Aggression management",
      "Anxiety treatment",
      "Fear-based behavior work",
      "Resource guarding solutions",
      "Reactive dog training",
      "Customized behavior plans"
    ],
    highlight: false
  },
  {
    id: 4,
    title: "Advanced Training",
    price: "$450",
    duration: "10 weeks",
    sessions: "1 hour/week",
    groupSize: "3-4 dogs",
    ageRange: "1 year+",
    description: "For dogs who have mastered the basics and are ready for advanced commands and specialized skills.",
    features: [
      "Advanced commands",
      "Off-leash reliability",
      "Distance commands",
      "Trick training",
      "Agility basics",
      "Competition preparation"
    ],
    highlight: false
  },
  {
    id: 5,
    title: "Private Sessions",
    price: "$125",
    duration: "Per session",
    sessions: "1 hour",
    groupSize: "Private",
    ageRange: "Any age",
    description: "One-on-one training sessions tailored to your specific needs and schedule.",
    features: [
      "Personalized training plan",
      "Flexible scheduling",
      "Focused attention",
      "Specific problem solving",
      "Family involvement",
      "Progress tracking"
    ],
    highlight: false
  },
  {
    id: 6,
    title: "Therapy Dog Prep",
    price: "$550",
    duration: "12 weeks",
    sessions: "1 hour/week",
    groupSize: "2-3 dogs",
    ageRange: "1 year+",
    description: "Specialized training to prepare dogs for therapy work in hospitals, schools, and care facilities.",
    features: [
      "Public access training",
      "Calm behavior in crowds",
      "Medical equipment exposure",
      "Gentle interaction skills",
      "Certification preparation",
      "Ongoing support"
    ],
    highlight: false
  }
]

export default function Programs() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Training 
            <span className="text-gradient"> Programs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect training program for your dog's age, temperament, and your family's goals. All programs use positive reinforcement methods.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`bg-card rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 scale-hover border animate-fade-in-up ${
                program.highlight 
                  ? 'border-neon shadow-glow ring-2 ring-neon/20' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {program.highlight && (
                <div className="bg-gradient-neon text-neon-foreground text-center py-2 rounded-t-xl">
                  <span className="font-semibold">Most Popular</span>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <div className="text-3xl font-bold text-neon mb-2">{program.price}</div>
                  <div className="text-muted-foreground">{program.duration}</div>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-neon" />
                      Sessions:
                    </span>
                    <span className="font-medium">{program.sessions}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-neon" />
                      Group Size:
                    </span>
                    <span className="font-medium">{program.groupSize}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-neon" />
                      Age Range:
                    </span>
                    <span className="font-medium">{program.ageRange}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {program.description}
                </p>

                <div className="space-y-2 mb-8">
                  <h4 className="font-semibold text-sm">What's Included:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <Heart className="h-3 w-3 text-neon mr-2 mt-1 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  asChild 
                  variant={program.highlight ? "hero" : "outline"} 
                  className="w-full"
                >
                  <Link to="/contact">
                    Enroll Now
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <section className="bg-gradient-soft rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">What's Included in Every Program</h2>
            <p className="text-muted-foreground">We go above and beyond to ensure your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Training Materials",
                description: "Comprehensive guides and resources to take home"
              },
              {
                icon: Users,
                title: "Family Support",
                description: "All family members are welcome and encouraged to participate"
              },
              {
                icon: Clock,
                title: "Lifetime Support",
                description: "Email and phone support for questions after graduation"
              },
              {
                icon: Star,
                title: "Progress Tracking",
                description: "Regular assessments and progress reports"
              }
            ].map((item, index) => (
              <div key={item.title} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-neon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-neon" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not Sure Which Program is Right for You?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation and we'll help you choose the perfect training program for your dog's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/contact">
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outlineNeon" size="xl">
              <Link to="/testimonials">
                Read Success Stories
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}