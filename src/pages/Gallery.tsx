import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Play, X } from "lucide-react"
import gallery1 from "@/assets/gallery-1.jpg"
import gallery2 from "@/assets/gallery-2.jpg"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: gallery1,
    alt: "Group training session with multiple dogs",
    title: "Group Training Session",
    description: "Dogs learning together in our spacious training facility"
  },
  {
    id: 2,
    type: "image", 
    src: gallery2,
    alt: "Happy family with trained dog in park",
    title: "Success Story",
    description: "Another happy family with their perfectly trained companion"
  },
  {
    id: 3,
    type: "video",
    thumbnail: gallery1,
    title: "Puppy Training Basics",
    description: "Watch how we teach essential commands to puppies"
  },
  {
    id: 4,
    type: "image",
    src: gallery1,
    alt: "Dog performing advanced tricks",
    title: "Advanced Training",
    description: "Advanced commands and trick training in action"
  },
  {
    id: 5,
    type: "video",
    thumbnail: gallery2,
    title: "Behavior Modification Success",
    description: "Before and after: Transforming reactive behavior"
  },
  {
    id: 6,
    type: "image",
    src: gallery2,
    alt: "Therapy dog training session",
    title: "Therapy Dog Preparation",
    description: "Training future therapy dogs for community service"
  }
]

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Training 
            <span className="text-gradient"> Gallery</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See our training methods in action and witness the incredible transformations of dogs and their families.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 scale-hover cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedItem(item.id)}
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.type === 'image' ? item.src : item.thumbnail}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.type === 'video' && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-neon rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-neon-foreground fill-current" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Categories */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Training 
              <span className="text-gradient"> Videos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our training techniques in action and learn tips you can use at home.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Puppy Basics",
                count: "12 videos",
                description: "Essential training for new puppies"
              },
              {
                title: "Obedience Training",
                count: "18 videos", 
                description: "Core commands and behaviors"
              },
              {
                title: "Problem Solving",
                count: "15 videos",
                description: "Common behavioral issues"
              },
              {
                title: "Advanced Tricks",
                count: "9 videos",
                description: "Fun and impressive tricks"
              }
            ].map((category, index) => (
              <div 
                key={category.title}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 scale-hover text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-neon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="h-8 w-8 text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-neon font-semibold mb-2">{category.count}</p>
                <p className="text-muted-foreground text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="bg-gradient-soft rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Before & After Success Stories</h2>
            <p className="text-muted-foreground">Real transformations from our training programs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Max",
                breed: "Golden Retriever",
                issue: "Excessive barking",
                result: "Calm and quiet on command",
                duration: "6 weeks"
              },
              {
                name: "Luna",
                breed: "German Shepherd", 
                issue: "Leash pulling",
                result: "Perfect heel walking",
                duration: "8 weeks"
              },
              {
                name: "Charlie",
                breed: "Labrador Mix",
                issue: "Jumping on guests",
                result: "Polite greetings",
                duration: "4 weeks"
              }
            ].map((story, index) => (
              <div key={story.name} className="bg-card p-6 rounded-xl shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                <p className="text-neon font-semibold mb-4">{story.breed}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Challenge:</span>
                    <p className="text-muted-foreground">{story.issue}</p>
                  </div>
                  <div>
                    <span className="font-medium">Result:</span>
                    <p className="text-muted-foreground">{story.result}</p>
                  </div>
                  <div>
                    <span className="font-medium">Training Duration:</span>
                    <p className="text-muted-foreground">{story.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-hero rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our training programs and watch your dog transform into the well-behaved companion you've always dreamed of.
          </p>
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Start Training Today
            </Link>
          </Button>
        </section>
      </div>

      {/* Modal for viewing images/videos */}
      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:text-neon"
              onClick={() => setSelectedItem(null)}
            >
              <X size={24} />
            </Button>
            <div className="bg-card rounded-xl overflow-hidden">
              {galleryItems.find(item => item.id === selectedItem)?.type === 'image' ? (
                <img 
                  src={galleryItems.find(item => item.id === selectedItem)?.src}
                  alt={galleryItems.find(item => item.id === selectedItem)?.alt}
                  className="w-full h-auto"
                />
              ) : (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <p className="text-white">Video player would be here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}