import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Clock, Calendar, Users, Phone } from "lucide-react"

const schedules = [
  {
    location: "SOCIETY @ Mont Kiara",
    address: "4, Jalan Kiara 1, Mont Kiara, 50480 Kuala Lumpur",
    programs: [
      {
        type: "TEEN GROUP TRAINING",
        description: "Series of 6 classes for dogs OVER approx 6-9 months old",
        schedule: [
          { class: 1, date: "Saturday 9th August", time: "8:00am-9:30am" },
          { class: 2, date: "Saturday 16th August", time: "8:00am-9:30am" },
          { class: 3, date: "Saturday 23th August", time: "8:00am-9:30am" },
          { note: "MERDEKA DAY NO CLASSES" },
          { class: 4, date: "Saturday 6th Sept", time: "8:00am-9:30am" },
          { class: 5, date: "Saturday 13th Sept", time: "8:00am-9:30am" },
          { class: 6, date: "Saturday 20th Sept", time: "8:00am-9:30am", note: "Last class at DesaPark" }
        ]
      },
      {
        type: "PUPPY GROUP TRAINING",
        description: "Series of 6 classes for puppies UNDER approx 6 months old",
        schedule: [
          { class: 1, date: "Saturday 9th August", time: "9:30am-11:00am" },
          { class: 2, date: "Saturday 16th August", time: "9:30am-11:00am" },
          { class: 3, date: "Saturday 23th August", time: "9:30am-11:00am" },
          { note: "MERDEKA DAY NO CLASSES" },
          { class: 4, date: "Saturday 6th Sept", time: "9:30am-11:00am" },
          { class: 5, date: "Saturday 13th Sept", time: "9:30am-11:00am" },
          { class: 6, date: "Saturday 20th Sept", time: "9:30am-11:00am", note: "Last class at DesaPark" }
        ]
      }
    ]
  },
  {
    location: "twentyfive7 @ Kota Kemuning",
    address: "42500 Telok Panglima Garang, Selangor",
    programs: [
      {
        type: "TEEN GROUP TRAINING",
        description: "Series of 6 classes for teen dogs OVER approx 6-9 months old",
        schedule: [
          { note: "Dates to be announced" }
        ]
      }
    ]
  }
]

export default function Schedules() {
  const [selectedLocation, setSelectedLocation] = useState(0)

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Training 
            <span className="text-gradient"> Schedules</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your preferred location and program. Two convenient venues across Kuala Lumpur and Selangor.
          </p>
        </div>

        {/* Next Series Announcement */}
        <section className="mb-16">
          <div className="bg-gradient-hero rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Next Series <span className="text-neon">START</span>
            </h2>
            <div className="text-2xl md:text-3xl font-bold mb-4">
              Saturdays 2nd August 2025<br />
              Sundays 3rd August 2025
            </div>
            <div className="text-xl md:text-2xl font-semibold text-neon mb-6">
              in Mont Kiara & Kota Kemuning
            </div>
            <p className="text-lg mb-8">
              (NOTE: Dates sometimes subject to change due to venue availability)
            </p>
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp +6017 880 3829
              </a>
            </Button>
          </div>
        </section>

        {/* Location Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-lg p-2 shadow-soft">
            {schedules.map((location, index) => (
              <Button
                key={location.location}
                variant={selectedLocation === index ? "primary" : "ghost"}
                onClick={() => setSelectedLocation(index)}
                className="mx-1"
              >
                {location.location}
              </Button>
            ))}
          </div>
        </div>

        {/* Schedule Details */}
        <div className="space-y-12">
          {schedules.map((location, locationIndex) => (
            <div
              key={location.location}
              className={`transition-all duration-500 ${
                selectedLocation === locationIndex ? 'block' : 'hidden'
              }`}
            >
              {/* Location Header */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neon">
                  {location.location}
                </h2>
                <div className="flex items-center justify-center text-muted-foreground">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">{location.address}</span>
                </div>
              </div>

              {/* Programs */}
              <div className="space-y-8">
                {location.programs.map((program, programIndex) => (
                  <Card key={programIndex} className="p-8 shadow-medium">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gradient">
                        August {program.type} SCHEDULE
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {program.description}
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                      {program.schedule.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`border-l-4 pl-6 py-4 mb-4 ${
                            item.note && !item.class
                              ? 'border-destructive bg-destructive/5'
                              : 'border-neon bg-neon/5'
                          }`}
                        >
                          {item.class ? (
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div className="flex items-center mb-2 md:mb-0">
                                <Calendar className="h-5 w-5 mr-3 text-neon" />
                                <span className="font-bold text-lg">
                                  Class {item.class}: {item.date}
                                </span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-5 w-5 mr-3 text-neon" />
                                <span className="font-semibold text-neon">
                                  {item.time}
                                </span>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center">
                              <span className="font-bold text-lg text-destructive">
                                {item.note}
                              </span>
                            </div>
                          )}
                          {item.note && item.class && (
                            <p className="text-sm text-muted-foreground mt-2 italic">
                              {item.note}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-8 p-6 bg-gradient-soft rounded-xl">
                      <p className="text-muted-foreground italic mb-4">
                        If by the end of your first class you decide this training doesn't meet your needs just let us know and we will refund your fees in full.
                      </p>
                      <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                        <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                          Book This Program
                        </a>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Book Early Section */}
        <section className="mt-20 text-center bg-card rounded-2xl p-12 shadow-soft">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">BOOK EARLY</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Classes fill up quickly! Secure your spot in our next training series and start your dog's transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none mx-auto">
            <Button asChild variant="whatsapp" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <a href="https://wa.me/60178803829" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp to Book
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <Link to="/faq">
                Read FAQ First
              </Link>
            </Button>
          </div>
        </section>

        {/* Contact Info */}
        <section className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="p-6 text-center shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-neon">SOCIETY Mont Kiara</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>4, Jalan Kiara 1,</p>
              <p>Mont Kiara,</p>
              <p>50480 Kuala Lumpur</p>
            </div>
            <Button asChild variant="outline" className="mt-4 w-full sm:w-auto">
              <Link to="/map">View Map</Link>
            </Button>
          </Card>

          <Card className="p-6 text-center shadow-soft">
            <h3 className="text-xl font-bold mb-4 text-neon">Twentyfive7 Kota Kemuning</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>42500 Telok Panglima Garang,</p>
              <p>Selangor</p>
            </div>
            <Button asChild variant="outline" className="mt-4 w-full sm:w-auto">
              <Link to="/map">View Map</Link>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  )
}