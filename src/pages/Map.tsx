import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Map() {
  return (
    <div className="min-h-screen bg-gradient-elegant paw-pattern">
      {/* Header */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gradient animate-fade-in">
            twentyfive7 Map
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in">
            Find our training locations at Mont Kiara & Kota Kemuning
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive Map Embed */}
            <div className="animate-fade-in">
              <Card className="card-elegant h-[500px] overflow-hidden">
                <CardContent className="p-0 h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4123456789!2d101.6544!3d3.1778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c86baa5b3a7%3A0x3d5f7b8c9e1f2a3b!2sMont%20Kiara%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Training Locations Map"
                  />
                </CardContent>
              </Card>
            </div>

            {/* Location Details */}
            <div className="space-y-6 animate-fade-in">
              {/* SOCIETY Mont Kiara */}
              <Card className="card-elegant hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-neon" />
                    SOCIETY Mont Kiara
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground">
                      4, Jalan Kiara 1<br/>
                      Mont Kiara<br/>
                      50480 Kuala Lumpur
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Weekend Training Sessions Available
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full bounce-hover"
                    onClick={() => window.open('https://maps.google.com/?q=Mont+Kiara+Kuala+Lumpur', '_blank')}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* twentyfive7 Kota Kemuning */}
              <Card className="card-elegant hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-neon" />
                    twentyfive7 @ Kota Kemuning
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Address:</p>
                    <p className="text-muted-foreground">
                      42500 Telok Panglima Garang<br/>
                      Selangor
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Weekend Training Sessions Available
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full bounce-hover"
                    onClick={() => window.open('https://maps.google.com/?q=Kota+Kemuning+Selangor', '_blank')}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="card-elegant bg-neon/10 border-neon/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2">Need Help Finding Us?</h3>
                  <p className="text-muted-foreground mb-4">
                    WhatsApp us for detailed directions and parking information
                  </p>
                  <Button 
                    className="bounce-hover"
                    onClick={() => window.open('https://wa.me/60178803829?text=Hi! I need directions to the training location.', '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    WhatsApp: +6017-880 3829
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Map for Kota Kemuning */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant animate-fade-in">
            <CardHeader>
              <CardTitle className="text-center">Kota Kemuning Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[400px] overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.123456789!2d101.5234!3d2.9876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb1234567890%3A0x9876543210abcdef!2sKota%20Kemuning%2C%20Selangor!5e0!3m2!1sen!2smy!4v1234567890124"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kota Kemuning Location Map"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}