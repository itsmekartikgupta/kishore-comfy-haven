import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/ContactForm";
import Navigation from "@/components/Navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Bed, Sofa, Shirt, Package, Phone, Mail, MapPin, Clock, Star, CircleCheck as CheckCircle, ArrowRight, Sparkles, ExternalLink, Award, Facebook, MessageCircle, Users, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import mattressHero from "@/assets/mattress-hero.jpg";
import sofaHero from "@/assets/sofa-hero.jpg";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const metrics = [
    {
      id: "customers",
      value: 20000,
      suffix: "+",
      icon: Users,
      label: "Customers saved till date",
      description: "Delivering restful comfort to more than twenty thousand households",
    },
    {
      id: "experience",
      value: 25,
      suffix: "+",
      icon: Sparkles,
      label: "Years of experience",
      description: "Serving the region since 1999 with expert craftsmanship and care",
    },
    {
      id: "products",
      value: 200,
      suffix: "+",
      icon: TrendingUp,
      label: "Products in portfolio",
      description: "Mattresses, furnishings, and comfort essentials for every lifestyle",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-24 pb-4" aria-label="Home">
        <div
          className="absolute inset-0 opacity-90 animate-fade-in"
          style={{ background: 'var(--hero-gradient)' }}
        >
          <div className="absolute inset-0 opacity-30" style={{
            background: 'radial-gradient(circle at 30% 50%, hsla(220, 18%, 88%, 0.14), transparent 55%)'
          }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
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
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center lg:justify-start animate-fade-in max-w-md sm:max-w-none mx-auto lg:mx-0" style={{ animationDelay: '1.1s' }}>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl animate-bounce-subtle px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold font-sans border-b-4 border-primary whitespace-nowrap"
                  onClick={() => scrollToSection('products')}
                >
                  Explore Products
                  <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-sm transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl animate-bounce-subtle px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold font-sans whitespace-nowrap"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Quote
                </Button>
              </div>
            </div>
            
            {/* Right side - Product images */}
            <div className="relative flex flex-col items-center">
              {/* Product images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 md:mb-16">
                <img
                  src={mattressHero}
                  alt="Premium Sleepwell mattresses available at Kishore Foam Agencies in Panchkula - memory foam and orthopedic options"
                  className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in w-full h-48 md:h-56 lg:h-72 object-cover"
                  style={{ animationDelay: '0.3s' }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
                <img
                  src={sofaHero}
                  alt="High-quality sofa materials and foam for custom furniture making at Kishore Foam Agencies"
                  className="rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 animate-fade-in w-full h-48 md:h-56 lg:h-72 object-cover"
                  style={{ animationDelay: '0.5s' }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              
              {/* Action buttons - positioned below images on mobile */}
              <div className="flex justify-center gap-3 sm:gap-4 mb-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
                <a
                  href="tel:+919417151386"
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Call Kishore Foam Agencies at +91 9417151386"
                >
                  <Phone className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://wa.link/9pbzt3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Chat with Kishore Foam Agencies on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://www.facebook.com/kishorefoam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Visit Kishore Foam Agencies on Facebook"
                >
                  <Facebook className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="mailto:kishore_foam@rediffmail.com"
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Email Kishore Foam Agencies"
                >
                  <Mail className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
                <a
                  href="https://share.google/76zlAwYTmDzjjviDr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 sm:w-16 sm:h-16 bg-primary backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="View Kishore Foam Agencies location on Google Maps"
                >
                  <MapPin className="w-5 h-5 sm:w-7 sm:h-7" />
                </a>
              </div>
              
              {/* Rating card - positioned below action buttons */}
              <a 
                href="https://share.google/76zlAwYTmDzjjviDr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-xl p-4 animate-scale-in hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer group"
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
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section
        className="relative py-20 px-4"
        style={{ background: 'var(--gradient-subtle)' }}
        aria-label="Impact metrics"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(50,74,103,0.08),transparent_75%)]" />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70 mb-4 font-semibold">
              Proven legacy
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white font-sans">
              Trusted comfort for thousands of happy homes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {metrics.map(({ id, value, suffix, icon: Icon, label, description }) => (
              <article
                key={id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-primary/10 to-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/25 text-white group-hover:bg-primary/35 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                      <AnimatedCounter value={value} suffix={suffix} formatOptions={{ maximumFractionDigits: 0 }} />
                    </p>
                    <p className="mt-2 text-base md:text-lg text-white/80 font-semibold font-sans">
                      {label}
                    </p>
                    <p className="mt-3 text-sm text-white/70 font-sans leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hero to About Gradient Transition */}
      <div className="h-16 md:h-32 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 animate-fade-in" style={{ backgroundColor: 'hsl(var(--section-bg))' }} aria-label="About Us">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans animate-slide-up">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Established with a commitment to quality and customer satisfaction, Kishore Foam Agencies has been serving the community with premium home comfort solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in hover-scale group" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <Bed className="w-12 h-12 mx-auto text-primary mb-4 animate-float group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">Quality Products</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">We source only the finest materials and work with trusted brands to ensure lasting comfort and durability.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in hover-scale group" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CheckCircle className="w-12 h-12 mx-auto text-primary mb-4 animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }} />
                <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">Expert Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">Our experienced team provides professional sofa making and dry cleaning services with attention to detail.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in hover-scale group" style={{ animationDelay: '0.5s' }}>
              <CardHeader>
                <Phone className="w-12 h-12 mx-auto text-primary mb-4 animate-float group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }} />
                <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">Customer Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">We believe in building lasting relationships through exceptional customer service and support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 bg-background" aria-label="Our Products">
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
                <svg className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7V7h10v12z"/>
                  <path d="M9 9h6v2H9zM9 13h6v2H9z"/>
                </svg>
                <CardTitle className="text-xl font-sans">Curtain Cloth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">Beautiful curtain fabrics to enhance your home's aesthetic appeal.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
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
                <CardTitle className="text-xl font-sans">Pillows</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">Soft and supportive pillows for better sleep quality.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>• Memory foam pillows</li>
                  <li>• Fiber fill pillows</li>
                  <li>• Orthopedic pillows</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <svg className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8h16v8H4V8z"/>
                  <path d="M6 10h2v4H6zM10 10h2v4h-2zM14 10h2v4h-2z"/>
                </svg>
                <CardTitle className="text-xl font-sans">Mattress Topper</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">Premium mattress toppers for enhanced comfort and support.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>• Memory foam toppers</li>
                  <li>• Cooling gel toppers</li>
                  <li>• Various thickness options</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center">
                <svg className="w-16 h-16 mx-auto text-primary mb-4 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm2 0h14v14H5V5z"/>
                  <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h6v2H7z"/>
                </svg>
                <CardTitle className="text-xl font-sans">Mattress Protector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-sans">Waterproof and breathable mattress protectors for hygiene.</p>
                <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                  <li>• Waterproof protection</li>
                  <li>• Breathable fabric</li>
                  <li>• Easy to wash</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-24 bg-gradient-to-b from-transparent via-white/5 to-white/10"></div>

      {/* Services Section */}
      <section id="services" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }} aria-label="Our Services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional services to meet all your furniture and cleaning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Bed className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-2xl">Mattress Cutting & Shaping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professional mattress cutting and shaping services to fit your specific requirements and space dimensions.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Custom size cutting</li>
                  <li>• Shape customization</li>
                  <li>• Precision measurements</li>
                  <li>• On-site service available</li>
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
      <div className="h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* Brands Section */}
      <section id="brands" className="py-20 px-4 bg-background" aria-label="Trusted Brands">
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
      <section id="contact" className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }} aria-label="Contact Us">
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
                      <p className="text-muted-foreground">+91 9877527379</p>
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

                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                    <div className="w-full">
                      <h3 className="font-semibold text-foreground mb-3">Our Locations</h3>
                      <div className="space-y-4">
                        <a
                          href="https://share.google/dZ1hK8yXB3GsLwbQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-md hover:bg-red-50 transition-colors cursor-pointer group"
                        >
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            <strong>Main Showroom:</strong><br />
                            Shop Number 57, 58, 59, 60<br />
                            Sector-14, Panchkula<br />
                            Haryana, India
                          </p>
                        </a>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-md hover:bg-red-50 transition-colors cursor-pointer group"
                        >
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            <strong>Second Location:</strong><br />
                            Sco. 28, Sector - 5<br />
                            MDC, Panchkula<br />
                            Haryana, India
                          </p>
                        </a>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-md hover:bg-red-50 transition-colors cursor-pointer group"
                        >
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            <strong>Third Location:</strong><br />
                            Sco.63, Sector - 11<br />
                            Panchkula<br />
                            Haryana, India
                          </p>
                        </a>
                        <a
                          href="https://maps.google.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-white rounded-md hover:bg-red-50 transition-colors cursor-pointer group"
                        >
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                            <strong>Godown:</strong><br />
                            254, Rally Sector - 12A<br />
                            Panchkula (Godown)<br />
                            Haryana, India
                          </p>
                        </a>
                      </div>
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

      {/* Contact to FAQ Gradient Transition */}
      <div className="h-16 md:h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-background" aria-label="Frequently Asked Questions">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Find answers to common questions about our products and services
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                What types of mattresses do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                We offer a comprehensive range of mattresses including memory foam mattresses, spring mattresses, and orthopedic mattresses. Each type is available in various sizes (single, double, queen, king) and firmness levels to suit different comfort preferences and sleeping positions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                Do you provide custom sofa making services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                Yes, we specialize in custom sofa making. We provide high-density foam, upholstery fabrics, springs, and hardware. Our experienced team can help you create custom sofas tailored to your specific requirements and space.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                What are your dry cleaning services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                We offer professional dry cleaning services for sofas, curtains, and upholstery. Our cleaning process uses safe, effective methods that preserve the quality of your fabrics while removing stains and odors. We also provide pickup and delivery services for your convenience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                What is your warranty policy on mattresses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                Our mattresses come with manufacturer warranties that vary by brand and model. Most of our premium mattresses include warranties ranging from 5 to 10 years. The warranty covers manufacturing defects and structural issues. Please ask our staff for specific warranty details on your chosen mattress.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                Do you offer delivery and installation services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                Yes, we provide delivery services across Panchkula and surrounding areas. Our team will deliver your mattress, furniture, or other products directly to your home. Installation and setup services are also available for items like mattresses and custom sofas to ensure proper placement and optimal comfort.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                We accept multiple payment methods including cash, credit/debit cards, UPI payments, and bank transfers. For larger purchases, we may also offer installment payment options. Please contact us for more details on payment plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                How can I choose the right mattress for me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                Choosing the right mattress depends on several factors including your sleeping position, body weight, comfort preference (firm vs soft), and any specific health considerations like back pain. Our knowledgeable staff at our Sector 14 or Sector 5 showrooms can help you test different options and find the perfect mattress for your needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary font-sans">
                What are your store timings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground font-sans">
                Both our showrooms in Sector 14 and Sector 5, Panchkula are open all days from 10:30 AM to 8:45 PM. We're here to serve you every day of the week. For any urgent inquiries, you can also reach us at +91 9417151386, +91 9216151386, or +91 9877527379.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FAQ to Testimonials Gradient Transition */}
      <div className="h-16 md:h-32 bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>

      {/* Customer Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-background" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans mb-6">
              Real experiences from our valued customers in Panchkula
            </p>
            <a 
              href="https://share.google/B5m3TXktZANhEQZNj" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View all reviews on Google <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-4">
            <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Vinay Kumar</CardTitle>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Had a great experience. Nice staff and very good behaviour of the owner. Very Good explanation of the product by the Staff.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 2 - Ravi Verma */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Ravi Verma</CardTitle>
                        <p className="text-sm text-muted-foreground">2 weeks ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Good services provided in panchkula. Staff is co-operative and guide you well as per your customize requirements.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 3 - Piyush Nagpal */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Piyush Nagpal</CardTitle>
                        <p className="text-sm text-muted-foreground">1 month ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Very helpful people and wide collection of furnishing material. We got our sofa renovated with their help and Sleepwell mattresses for home.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 4 - Avik Seth */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Avik Seth</CardTitle>
                        <p className="text-sm text-muted-foreground">4 months ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Nice and cooperative staff (Mr. Balram). This is second generation of my family buying a mattress from this very shop. The owner is a genuine and humble individual.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 5 - Rohit Kumar */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Rohit Kumar</CardTitle>
                        <p className="text-sm text-muted-foreground">4 months ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Its a great place to visit since people here are so nice and welcoming. Prices are reasonable too. Must visit if you'd like to add comfort to your life.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 6 - Maneesh Kumar */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Maneesh Kumar</CardTitle>
                        <p className="text-sm text-muted-foreground">5 months ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      Excellent. Rajiv Gupta is a friendly and engaging gentleman. He helped us decide & accommodated our requests etc. I am a repeat client. I wish him success and good health. - Maneesh
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Testimonial 7 - Ishita Mehra */}
              <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card border-border hover:shadow-xl transition-all duration-500 transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">Ishita Mehra</CardTitle>
                        <p className="text-sm text-muted-foreground">7 months ago</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-sans group-hover:text-foreground transition-colors duration-300">
                      The experience at Sleepwell was excellent as the staff was very polite and helpful, guiding through various options with patience and ensuring a smooth selection process. They explained the features of different mattresses in detail, helping to choose the right one based on comfort and support preferences.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-12" />
            <CarouselNext className="right-0 translate-x-12" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials to Footer Gradient Transition */}
      <div className="h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

      {/* Footer */}
      <footer className="py-16 px-4" style={{ background: 'var(--hero-gradient)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">Kishore Foam Agencies</h3>
              <p className="mb-4 leading-relaxed text-white/80">
                Your trusted partner for premium foam products and services. Quality, comfort, and customer satisfaction are our top priorities.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/80" />
                  <span className="text-sm text-white/80">Open All Days: 10:30 AM - 8:45 PM</span>
                </div>
                <a
                  href="https://wa.link/9pbzt3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">Chat with us on WhatsApp</span>
                </a>
                <a
                  href="https://www.facebook.com/kishorefoam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                  <span className="text-sm">Follow us on Facebook</span>
                </a>
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
                  href="tel:+919877527379"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 9877527379</span>
                </a>
                <a 
                  href="mailto:kishore_foam@rediffmail.com"
                  className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer group"
                >
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">kishore_foam@rediffmail.com</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Locations</h4>
              <div className="space-y-3">
                <a 
                  href="https://share.google/76zlAwYTmDzjjviDr"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">Shop No. 57, 58, 59, 60<br />Sector 14, Panchkula, Haryana</span>
                </a>
                <a 
                  href="https://maps.google.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">Sco. 28, Sector - 5<br />MDC, Panchkula, Haryana</span>
                </a>
                <a 
                  href="https://maps.google.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">Sco.63, Sector - 11<br />Panchkula, Haryana</span>
                </a>
                <a 
                  href="https://maps.google.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-white/80 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">254, Rally Sector - 12A<br />Panchkula (Godown), Haryana</span>
                </a>
              </div>
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
