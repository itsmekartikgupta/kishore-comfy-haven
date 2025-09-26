import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import { 
  Bed, 
  Sofa, 
  Shirt, 
  Package, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Award
} from "lucide-react";
import mattressHero from "@/assets/mattress-hero.jpg";
import sofaHero from "@/assets/sofa-hero.jpg";
import curtainsHero from "@/assets/curtains-hero.jpg";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden pt-16">
        <div 
          className="absolute inset-0 opacity-90"
          style={{ background: 'var(--hero-gradient)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-6">
              <div className="mb-6">
                <Sparkles className="w-12 h-12 mb-4 text-white/80" />
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Kishore Foam 
                  <span className="block text-white/90">Agencies</span>
                </h1>
              </div>
              
              {/* 35 years experience badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                <Award className="w-5 h-5 text-white" />
                <span className="text-white font-medium">35+ Years in Business • Oldest Showroom in Chandigarh Tricity</span>
              </div>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl leading-relaxed">
                Your trusted partner for premium mattresses, furniture materials, and home comfort solutions since 1989
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  onClick={() => scrollToSection('products')}
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white/10 text-white border-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
            
            {/* Right side - Product images */}
            <div className="relative lg:block hidden">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src={mattressHero} 
                    alt="Premium Mattresses" 
                    className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  />
                  <img 
                    src={curtainsHero} 
                    alt="Curtain Materials" 
                    className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  />
                </div>
                <div className="mt-8">
                  <img 
                    src={sofaHero} 
                    alt="Sofa Materials" 
                    className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Floating rating card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-bold text-foreground">4.9/5</span>
                  <span className="text-muted-foreground">Customer Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Established with a commitment to quality and customer satisfaction, Kishore Foam Agencies has been serving the community with premium home comfort solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Star className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Quality Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We source only the finest materials and work with trusted brands to ensure lasting comfort and durability.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Our experienced team provides professional sofa making and dry cleaning services with attention to detail.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto text-primary mb-4" />
                <CardTitle className="text-xl">Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">We believe in building lasting relationships through exceptional customer service and support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Products</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive range of home comfort products designed to enhance your living space.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Bed className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">Premium Mattresses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">High-quality mattresses for optimal sleep comfort and support. Available in various sizes and firmness levels.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Memory foam mattresses</li>
                  <li>• Spring mattresses</li>
                  <li>• Orthopedic mattresses</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <Sofa className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl">Sofa Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Premium foam and fabric materials for sofa making and upholstery work.</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High-density foam</li>
                  <li>• Upholstery fabrics</li>
                  <li>• Springs and hardware</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
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
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 9417151386</p>
                      <p className="text-muted-foreground">+91 9216151386</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">kishore_foam@rediffmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground">
                        Shop Number 57, 58, 59, 60<br />
                        Sector-14, Panchkula<br />
                        Haryana, India
                      </p>
                    </div>
                  </div>

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
                    <Star className="w-6 h-6 text-yellow-500 fill-current" />
                    <span className="text-2xl font-bold text-foreground">4.9/5</span>
                    <span className="text-muted-foreground">Google Rating</span>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Highly rated by our customers for quality products and excellent service
                  </p>
                  <Button 
                    asChild
                    className="w-full"
                  >
                    <a 
                      href="https://share.google/dZ1hK8yXB3GsLwbQ2" 
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
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Kishore Foam Agencies</h3>
              <p className="text-primary-foreground/80 mb-4">
                Your trusted partner for premium home comfort solutions since 1989. Oldest showroom in Chandigarh Tricity with 35+ years of experience in quality products and expert service.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
                <button 
                  onClick={() => scrollToSection('products')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Products
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+91 9417151386</p>
                <p>+91 9216151386</p>
                <p>kishore_foam@rediffmail.com</p>
                <p>Shop 57-60, Sector-14, Panchkula</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/80">
              © 2024 Kishore Foam Agencies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;