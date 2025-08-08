import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar as CalendarIcon,
  Send,
  Heart
} from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const programs = [
  "Puppy Foundation",
  "Adult Dog Essentials", 
  "Behavior Modification",
  "Advanced Training",
  "Private Sessions",
  "Therapy Dog Prep"
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
  "5:00 PM", "6:00 PM", "7:00 PM"
]

interface FormData {
  name: string
  email: string
  phone: string
  dogName: string
  dogBreed: string
  dogAge: string
  program: string
  preferredDate: Date | undefined
  preferredTime: string
  message: string
}

export default function Contact() {
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    dogName: "",
    dogBreed: "",
    dogAge: "",
    program: "",
    preferredDate: undefined,
    preferredTime: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.dogName) {
      toast({
        title: "Please fill in all required fields",
        description: "Name, email, phone, and dog name are required.",
        variant: "destructive"
      })
      return
    }

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hi! I'd like to book a dog training session.

📋 Contact Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}

🐕 Dog Information:
• Dog Name: ${formData.dogName}
• Breed: ${formData.dogBreed || 'Not specified'}
• Age: ${formData.dogAge || 'Not specified'}

📚 Training Program: ${formData.program || 'To be discussed'}

📅 Preferred Schedule:
• Date: ${formData.preferredDate ? format(formData.preferredDate, 'PPP') : 'Flexible'}
• Time: ${formData.preferredTime || 'Flexible'}

💬 Additional Message:
${formData.message || 'No additional message'}

Looking forward to hearing from you!`
    )

    // Open WhatsApp (use a placeholder number for demo)
    const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`
    window.open(whatsappUrl, '_blank')

    toast({
      title: "Booking request sent!",
      description: "Your WhatsApp message has been prepared. We'll respond within 24 hours.",
    })
  }

  const handleInputChange = (field: keyof FormData, value: string | Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Contact 
            <span className="text-gradient"> Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your dog's training journey? Get in touch with us to schedule a consultation or book your training program.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="p-6 shadow-soft animate-fade-in-left">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@familydogtraining.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-muted-foreground">123 Training Center Dr</p>
                    <p className="text-muted-foreground">Pet City, PC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-neon/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Training Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 9AM-7PM</p>
                    <p className="text-muted-foreground">Sat-Sun: 9AM-5PM</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-soft bg-gradient-soft animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                For immediate assistance, message us on WhatsApp! We typically respond within minutes during business hours.
              </p>
              <Button 
                variant="whatsapp" 
                className="w-full group"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Message on WhatsApp
              </Button>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-medium animate-fade-in-right">
              <div className="flex items-center mb-8">
                <Heart className="h-8 w-8 text-neon mr-3" />
                <h3 className="text-3xl font-bold">Book Your Training Session</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    required
                  />
                </div>

                {/* Dog Information */}
                <div className="border-t border-border pt-6">
                  <h4 className="text-xl font-semibold mb-4 text-neon">Dog Information</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="dogName">Dog's Name *</Label>
                      <Input
                        id="dogName"
                        value={formData.dogName}
                        onChange={(e) => handleInputChange('dogName', e.target.value)}
                        placeholder="Enter your dog's name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="dogBreed">Breed</Label>
                      <Input
                        id="dogBreed"
                        value={formData.dogBreed}
                        onChange={(e) => handleInputChange('dogBreed', e.target.value)}
                        placeholder="e.g., Golden Retriever"
                      />
                    </div>
                    <div>
                      <Label htmlFor="dogAge">Age</Label>
                      <Input
                        id="dogAge"
                        value={formData.dogAge}
                        onChange={(e) => handleInputChange('dogAge', e.target.value)}
                        placeholder="e.g., 2 years old"
                      />
                    </div>
                  </div>
                </div>

                {/* Training Program */}
                <div>
                  <Label htmlFor="program">Training Program</Label>
                  <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a training program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Schedule */}
                <div className="border-t border-border pt-6">
                  <h4 className="text-xl font-semibold mb-4 text-neon">Preferred Schedule</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.preferredDate ? format(formData.preferredDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.preferredDate}
                            onSelect={(date) => handleInputChange('preferredDate', date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="time">Preferred Time</Label>
                      <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about any specific behavioral issues, training goals, or questions you have..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <Button type="submit" variant="hero" size="xl" className="w-full group">
                    <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    Send via WhatsApp
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Your message will open in WhatsApp for immediate sending
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently 
              <span className="text-gradient"> Asked Questions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How long is each training session?",
                answer: "Most group sessions are 1 hour long, while private sessions can be customized from 30 minutes to 1.5 hours based on your needs."
              },
              {
                question: "Do you offer in-home training?",
                answer: "Yes! We offer in-home private sessions for dogs that need specialized attention or have difficulty in group settings."
              },
              {
                question: "What age should my puppy be to start training?",
                answer: "Puppies can start training as early as 8 weeks old after their first set of vaccinations. Early training is highly beneficial!"
              },
              {
                question: "What should I bring to the first session?",
                answer: "Bring your dog's favorite treats, a leash, vaccination records, and any questions you have about your dog's behavior."
              }
            ].map((faq, index) => (
              <Card key={faq.question} className="p-6 shadow-soft animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-bold text-lg mb-3 text-neon">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}