import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    dogName: "Max",
    dogBreed: "Golden Retriever",
    rating: 5,
    text: "The transformation in Max was incredible! He went from being an uncontrollable puppy to a well-mannered family member. Sarah's positive training methods really work, and the whole family learned so much.",
    program: "Puppy Foundation",
    image: "👤",
    featured: true
  },
  {
    id: 2,
    name: "Michael Chen",
    dogName: "Luna",
    dogBreed: "German Shepherd",
    rating: 5,
    text: "Luna had severe leash pulling issues and some aggression towards other dogs. After the behavior modification program, she's like a completely different dog. We can now enjoy peaceful walks in the neighborhood.",
    program: "Behavior Modification",
    image: "👤",
    featured: true
  },
  {
    id: 3,
    name: "Emma Wilson",
    dogName: "Charlie",
    dogBreed: "Labrador Mix",
    rating: 5,
    text: "Charlie was jumping on everyone who came to our house. The training not only fixed this issue but also taught him so many useful commands. Our guests are amazed at how well-behaved he is now!",
    program: "Adult Dog Essentials",
    image: "👤",
    featured: false
  },
  {
    id: 4,
    name: "David Martinez",
    dogName: "Bella",
    dogBreed: "Border Collie",
    rating: 5,
    text: "As a first-time dog owner, I was overwhelmed. The training program gave me confidence and taught me how to communicate with Bella effectively. The support didn't end after the program - Sarah is always available for questions.",
    program: "Private Sessions",
    image: "👤",
    featured: false
  },
  {
    id: 5,
    name: "Lisa Thompson",
    dogName: "Rocky",
    dogBreed: "Bulldog",
    rating: 5,
    text: "Rocky was rescued and had trust issues. The patience and expertise shown by Sarah helped Rocky overcome his fears. He's now a certified therapy dog bringing joy to patients at the local hospital!",
    program: "Therapy Dog Prep",
    image: "👤",
    featured: true
  },
  {
    id: 6,
    name: "James Miller",
    dogName: "Daisy",
    dogBreed: "Beagle",
    rating: 5,
    text: "Daisy's recall was non-existent, which was dangerous near roads. The advanced training program taught her reliable off-leash commands. Now she can run free in the park and always comes when called.",
    program: "Advanced Training",
    image: "👤",
    featured: false
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredTestimonials = testimonials.filter(t => t.featured)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Success 
            <span className="text-gradient"> Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our happy families about their incredible transformations and the lasting bonds they've built with their dogs.
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <section className="mb-20">
          <div className="relative bg-gradient-soft rounded-2xl p-12 shadow-medium">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Featured Success Stories</h2>
              <p className="text-muted-foreground">Transformative results from our training programs</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="bg-card rounded-xl p-8 shadow-soft">
                <Quote className="h-12 w-12 text-neon mb-6" />
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(featuredTestimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    "{featuredTestimonials[currentIndex].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-neon/10 rounded-full flex items-center justify-center text-2xl">
                      {featuredTestimonials[currentIndex].image}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{featuredTestimonials[currentIndex].name}</h4>
                      <p className="text-muted-foreground">
                        with {featuredTestimonials[currentIndex].dogName} ({featuredTestimonials[currentIndex].dogBreed})
                      </p>
                      <p className="text-sm text-neon font-semibold">
                        {featuredTestimonials[currentIndex].program}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevTestimonial}
                      className="hover:text-neon"
                    >
                      <ChevronLeft size={20} />
                    </Button>
                    <div className="flex space-x-2">
                      {featuredTestimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentIndex ? 'bg-neon' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTestimonial}
                      className="hover:text-neon"
                    >
                      <ChevronRight size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our 
              <span className="text-gradient"> Families Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 scale-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-neon/10 rounded-full flex items-center justify-center">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        with {testimonial.dogName} ({testimonial.dogBreed})
                      </p>
                      <p className="text-xs text-neon font-semibold">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-hero rounded-2xl p-12 mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Track Record
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Happy Families" },
              { number: "95%", label: "Success Rate" },
              { number: "10+", label: "Years Experience" },
              { number: "4.9★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={stat.label} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Before & After Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transformation 
              <span className="text-gradient"> Stories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real before and after stories that showcase the power of positive training
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                dogName: "Max",
                breed: "Golden Retriever",
                before: "Constantly barking, jumping on guests, pulling on leash",
                after: "Calm greetings, quiet on command, perfect walking companion",
                duration: "6 weeks",
                program: "Puppy Foundation"
              },
              {
                dogName: "Luna", 
                breed: "German Shepherd",
                before: "Aggressive towards other dogs, destructive when alone",
                after: "Plays well with other dogs, calm when left alone",
                duration: "12 weeks",
                program: "Behavior Modification"
              }
            ].map((story, index) => (
              <div 
                key={story.dogName}
                className="bg-card p-8 rounded-xl shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{story.dogName}</h3>
                  <p className="text-neon font-semibold">{story.breed}</p>
                </div>

                <div className="space-y-6">
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-destructive mb-2">Before Training:</h4>
                    <p className="text-sm text-muted-foreground">{story.before}</p>
                  </div>

                  <div className="bg-neon/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-neon mb-2">After Training:</h4>
                    <p className="text-sm text-muted-foreground">{story.after}</p>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span><strong>Duration:</strong> {story.duration}</span>
                    <span><strong>Program:</strong> {story.program}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-soft rounded-2xl p-12">
          <Heart className="h-16 w-16 text-neon mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of families who have transformed their relationships with their dogs through our proven training methods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Start Your Journey
              </Link>
            </Button>
            <Button asChild variant="outline" size="xl">
              <Link to="/programs">
                View Programs
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}