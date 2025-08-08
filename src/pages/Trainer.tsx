import { Button } from "@/components/ui/button"
import { Heart, Award, Users, Clock, Star, Youtube } from "lucide-react"
import { Link } from "react-router-dom"
import trainerImage from "@/assets/trainer.png"

export default function Trainer() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Your 
            <span className="text-gradient"> Trainer</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional dog trainer with 18+ years experience, bringing proven results to families across Malaysia.
          </p>
        </div>

        {/* Trainer Profile */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center animate-fade-in-left">
              <div className="relative inline-block mb-8">
                <img 
                  src={trainerImage} 
                  alt="Richard Gardner with Ah Kit (2.5yrs)" 
                  className="w-80 h-80 object-cover rounded-2xl shadow-medium mx-auto"
                />
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-card px-6 py-2 rounded-full shadow-soft border border-border">
                  <span className="text-sm font-semibold text-neon">with Ah Kit 2.5yrs</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">Richard Gardner</h2>
              <p className="text-xl text-neon font-semibold mb-6">Professional Dog Trainer</p>
            </div>

            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-bold mb-6">18+ Years of Professional Experience</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Award className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Malaysian Pioneer</h4>
                    <p className="text-muted-foreground">Started first off-leash puppy training in Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Professional Affiliations</h4>
                    <p className="text-muted-foreground">Member of the Malaysian Kennel Association</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Star className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">AKC Certifications</h4>
                    <p className="text-muted-foreground">Authorized evaluator for AKC Canine Good Citizen & Trick Dog programs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Youtube className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Media Experience</h4>
                    <p className="text-muted-foreground">Trained several dogs for TV advertisements and stage performances</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-soft p-6 rounded-xl mb-8">
                <h4 className="font-bold mb-4">Featured Work</h4>
                <p className="text-muted-foreground mb-4">
                  You can see some of Richard's trained dogs in action in professional productions:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://vimeo.com/816182851" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      View on Vimeo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="https://www.youtube.com/watch?v=N88AUddiT9k" target="_blank" rel="noopener noreferrer">
                      <Youtube className="mr-2 h-4 w-4" />
                      View on YouTube
                    </a>
                  </Button>
                </div>
              </div>

              <Button asChild variant="primary" size="lg">
                <Link to="/contact">Book a Session</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="mb-20 py-16 bg-card rounded-2xl shadow-soft">
          <div className="px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Training Philosophy</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Why group classes are the most effective way to train both dogs and their owners.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-soft p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold mb-4 text-neon">We (try to) train the OWNERS!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Simply sending your dog away for training doesn't always have good long-term results. Once the dog is returned, the owner remains doing the same things that caused the problems in the first place, and quickly - sometimes immediately - the dog returns to his old habits.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-neon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-neon" />
                  </div>
                  <h4 className="font-bold mb-2">Group Learning</h4>
                  <p className="text-sm text-muted-foreground">Dogs learn better with other dogs around, mimicking natural pack behavior</p>
                </div>

                <div className="text-center">
                  <div className="bg-neon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-neon" />
                  </div>
                  <h4 className="font-bold mb-2">Owner Education</h4>
                  <p className="text-sm text-muted-foreground">Owners learn alongside their dogs, creating consistent training at home</p>
                </div>

                <div className="text-center">
                  <div className="bg-neon/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-neon" />
                  </div>
                  <h4 className="font-bold mb-2">Lasting Results</h4>
                  <p className="text-sm text-muted-foreground">Building relationships and understanding that lasts a lifetime</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Canine Good Citizen */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to create a
              <span className="text-gradient"> Canine Good Citizen?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As proof that your teen dog has improved we base our Teen Classes on the <strong>American Kennel Club</strong>'s <em>Canine Good Citizen</em> training. After the six classes, you can - if you wish - take the CGC Test. (FREE - fee included in your Teen Training course fee)
              </p>

              <div className="bg-card p-6 rounded-xl shadow-soft mb-6">
                <h4 className="font-bold text-neon mb-3">About CGC Certification</h4>
                <p className="text-muted-foreground mb-4">
                  The American Kennel Club created the Canine Good Citizen® (CGC) training program as a stepping-stone to other exams, such as those given for therapy dogs, and is a good starting point for more advanced dog training.
                </p>
                <p className="text-muted-foreground text-sm">
                  <strong>Note:</strong> a CGC Test Cert is required by DBKL for several breeds.
                </p>
              </div>

              <div className="space-y-3">
                <Button asChild variant="primary" size="lg">
                  <a href="https://www.caninegoodcitizen.my/" target="_blank" rel="noopener noreferrer">
                    Learn More About CGC
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground">
                  Competitive Obedience Test administered by Malaysian Kennel Club - fee usually about RM50
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-hero rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-6">CGC Test Requirements</h3>
                <p className="mb-6">
                  By the end of the classes you and your dog should be able to pass the ten items of the AKC's CGC Test - and you may take it with us at your convenience, at no extra cost.
                </p>
                <div className="space-y-2 text-left mb-6">
                  <p className="flex items-center"><Star className="h-4 w-4 mr-2" /> Test 1: Accepting a friendly stranger</p>
                  <p className="flex items-center"><Star className="h-4 w-4 mr-2" /> Test 2: Sitting politely for petting</p>
                  <p className="flex items-center"><Star className="h-4 w-4 mr-2" /> Test 3: Appearance and grooming</p>
                  <p className="flex items-center"><Star className="h-4 w-4 mr-2" /> Test 4: Out for a walk</p>
                  <p className="flex items-center"><Star className="h-4 w-4 mr-2" /> And 6 more essential skills...</p>
                </div>
                <Button asChild variant="whatsapp" size="lg">
                  <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                    Start Training Today
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Graduate Benefits */}
        <section className="py-16 bg-gradient-soft rounded-2xl text-center">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-gradient">You Can Always Come Back!</span>
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-semibold mb-4">Graduates Welcome</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Come back and join us for socialization anytime.</p>
              <p>Catch up with your friends.</p>
              <p>Compare notes, plan walks and staycations.</p>
              <p><strong>Problems? Questions?</strong> We're here to help!</p>
            </div>
          </div>

          <Button asChild variant="primary" size="lg">
            <Link to="/contact">Join Our Community</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}