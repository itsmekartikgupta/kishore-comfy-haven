import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import { Bed, Sofa, Shirt, Package, Phone, Mail, MapPin, Clock, Star, CircleCheck as CheckCircle, ArrowRight, Sparkles, ExternalLink, Award } from "lucide-react";
import mattressHero from "@/assets/mattress-hero.jpg";
import sofaHero from "@/assets/sofa-hero.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-[120vh] flex items-center justify-center px-4 overflow-hidden pt-24">
        <div 
          className="absolute inset-0 opacity-90"
          style={{ background: 'var(--hero-gradient)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-8 animate-fade-in text-center lg:text-left font-sans">
              <div className="mb-12">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-tight animate-bounce-in font-sans">
                  <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent animate-pulse">
                    Kishore Foam
                  </span>
                  <span className="block text-white/90 mt-2 animate-slide-up font-light font-sans" style={{ animationDelay: '0.5s' }}>
                    Agencies
                  </span>
                </h1>
              </div>
              
              {/* Oldest showroom badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-fade-in hover:bg-white/30 transition-all duration-300 font-sans" style={{ animationDelay: '0.7s' }}>
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-light text-sm md:text-base">Oldest Showroom in Chandigarh Tricity</span>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 max-w-2xl leading-relaxed animate-fade-in font-light font-sans" style={{ animationDelay: '0.9s' }}>
                High-Quality Mattresses and Tailored Foam Solutions for Every Space
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in" style={{ animationDelay: '1.1s' }}>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle px-8 py-4 text-lg font-semibold font-sans border-b-4 border-primary"
                  onClick={() => scrollToSection('products')}
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-subtle px-8 py-4 text-lg font-semibold font-sans"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
            
            {/* Right side - Product images */}
            <div className="relative -mt-32 lg:-mt-40">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
                <img 
                  src={mattressHero} 
                  alt="Premium Mattresses" 
                  className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in w-full h-56 md:h-72 object-cover"
                  style={{ animationDelay: '0.3s' }}
                />
                <img 
                  src={sofaHero} 
                  alt="Sofa Materials" 
                  className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in w-full h-56 md:h-72 object-cover"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
              
              {/* Floating rating card */}
              <a 
                href="https://share.google/76zlAwYTmDzjjviDr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute -bottom-8 left-0 right-0 mx-auto w-fit bg-white rounded-lg shadow-xl p-4 animate-scale-in hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                style={{ animationDelay: '0.7s' }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-foreground text-base group-hover:text-primary transition-colors font-sans">4.95/5</div>
                    <div className="text-muted-foreground text-sm font-sans">Rating</div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors ml-1" />
                </div>
              </a>
              
              {/* Action buttons */}
              <div className="absolute -bottom-8 left-0 right-0 mx-auto w-fit flex gap-4 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <a 
                  href="tel:+919417151386" 
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-7 h-7" />
                </a>
                <a 
                  href="mailto:kishore_foam@rediffmail.com" 
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-7 h-7" />
                </a>
                <a 
                  href="https://share.google/76zlAwYTmDzjjviDr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-16 h-16 bg-primary backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                >
                  <MapPin className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
              Established with a commitment to quality and customer satisfaction, Kishore Foam Agencies has been serving the community with premium home comfort solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in hover-scale">
              <CardHeader>
                <Bed className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-sans">Quality Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">We source only the finest materials and work with trusted brands to ensure lasting comfort and durability.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in hover-scale" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-sans">Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">Our experienced team provides professional sofa making and dry cleaning services with attention to detail.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl font-sans">Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans">We believe in building lasting relationships through exceptional customer service and support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Discover our comprehensive range of home comfort products designed to enhance your living space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Bed className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-sans">Premium Mattresses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">High-quality mattresses for optimal sleep comfort and support. Available in various sizes and firmness levels.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>• Memory foam mattresses</li>
                  <li>• Spring mattresses</li>
                  <li>• Orthopedic mattresses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Sofa className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-sans">Sofa Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">Premium foam and fabric materials for sofa making and upholstery work.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>• High-density foam</li>
                  <li>• Upholstery fabrics</li>
                  <li>• Springs and hardware</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
              <CardHeader className="text-center">
                <Shirt className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">Curtain Cloth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Beautiful curtain fabrics to enhance your home's aesthetic appeal.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Designer patterns</li>
                  <li>• Blackout curtains</li>
                  <li>• Custom sizing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Package className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">Bean Bags</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Comfortable and stylish bean bags for modern living spaces.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Various sizes available</li>
                  <li>• Durable covers</li>
                  <li>• Refillable designs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Bed className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">Pillows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Soft and supportive pillows for better sleep quality.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Memory foam pillows</li>
                  <li>• Fiber fill pillows</li>
                  <li>• Orthopedic pillows</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-24 bg-gradient-to-b from-transparent via-primary/5 to-primary/10"></div>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional services to meet all your furniture and cleaning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Sofa className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Custom Sofa Making</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Expert craftsmanship in creating custom sofas tailored to your specifications and style preferences.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom designs and measurements</li>
                  <li>• Quality foam and spring construction</li>
                  <li>• Wide fabric selection</li>
                  <li>• Professional installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Dry Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional dry cleaning services for your furniture, curtains, and upholstery items.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sofa and chair cleaning</li>
                  <li>• Curtain cleaning</li>
                  <li>• Upholstery deep cleaning</li>
                  <li>• Stain removal</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-24 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Trusted Brands</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            We partner with renowned brands to bring you the best in quality and innovation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Bed className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Sleepwell</h3>
                <p className="text-muted-foreground">India's most trusted mattress brand, offering superior comfort and support for better sleep.</p>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Shirt className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">D'Decor</h3>
                <p className="text-muted-foreground">Premium home furnishing brand known for exquisite curtains and upholstery fabrics.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with us for inquiries, quotes, or to schedule a consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="space-y-6">
                  <a 
                    href="tel:+919417151386"
                    className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <Phone className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 9417151386</p>
                      <p className="text-muted-foreground">+91 9216151386</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:kishore_foam@rediffmail.com"
                    className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <Mail className="w-6 h-6 text-green-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">kishore_foam@rediffmail.com</p>
                    </div>
                  </a>

                  <a 
                    href="https://share.google/dZ1hK8yXB3GsLwbQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200 cursor-pointer group"
                  >
                    <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Shop Number 57, 58, 59, 60<br />
                        Sector-14, Panchkula<br />
                        Haryana, India
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Open all days<br />
                        10:30 AM - 8:45 PM
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Google Maps with High Rating */}
              <Card className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-foreground">4.95/5</span>
                    <span className="text-muted-foreground">Google Rating</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Highly rated by our customers for quality products and excellent service
                  </p>
                  <Button 
                    asChild
                    className="w-full transform hover:scale-105 transition-all duration-300"
                  >
                    <a 
                      href="https://share.google/76zlAwYTmDzjjviDr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      View on Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4" style={{ background: 'var(--hero-gradient)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Kishore Foam Agencies</h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Your trusted partner for premium foam products and services. Quality, comfort, and customer satisfaction are our top priorities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">Open All Days: 10:30 AM - 8:45 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                <a 
                  href="tel:+919417151386"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 9417151386</span>
                </a>
                <a 
                  href="tel:+919216151386"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 9216151386</span>
                </a>
                <a 
                  href="mailto:kishore_foam@rediffmail.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kishore_foam@rediffmail.com</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Location</h4>
              <a 
                href="https://share.google/76zlAwYTmDzjjviDr"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-sm">Shop No. 57, 58, 59, 60<br />Sector 14, Panchkula, Haryana</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <div className="text-center text-sm text-white/80">
              © 2025 Kishore Foam Agencies. All rights reserved. | Designed with excellence for your comfort
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;