import Navigation from "@/components/Navigation";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import { Bed, Sofa, Package, Shirt, CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const Products = () => {
  const products = [
    {
      icon: Bed,
      title: "Premium Mattresses",
      description: "High-quality mattresses for optimal sleep comfort and support. Available in various sizes and firmness levels.",
      features: [
        "Memory foam mattresses",
        "Spring mattresses",
        "Orthopedic mattresses"
      ]
    },
    {
      icon: Sofa,
      title: "Sofa Materials",
      description: "Premium foam and fabric materials for sofa making and upholstery work.",
      features: [
        "High-density foam",
        "Upholstery fabrics",
        "Springs and hardware"
      ]
    },
    {
      icon: Package,
      title: "Curtain Cloth",
      description: "Beautiful curtain fabrics to enhance your home's aesthetic appeal.",
      features: [
        "Designer patterns",
        "Blackout curtains",
        "Custom sizing"
      ]
    },
    {
      icon: Package,
      title: "Bean Bags",
      description: "Comfortable and stylish bean bags for modern living spaces.",
      features: [
        "Various sizes available",
        "Durable covers",
        "Refillable designs"
      ]
    },
    {
      icon: Bed,
      title: "Pillows",
      description: "Soft and supportive pillows for better sleep quality.",
      features: [
        "Memory foam pillows",
        "Fiber fill pillows",
        "Orthopedic pillows"
      ]
    },
    {
      icon: Package,
      title: "Mattress Topper",
      description: "Premium mattress toppers for enhanced comfort and support.",
      features: [
        "Memory foam toppers",
        "Cooling gel toppers",
        "Various thickness options"
      ]
    },
    {
      icon: Package,
      title: "Mattress Protector",
      description: "Waterproof and breathable mattress protectors for hygiene.",
      features: [
        "Waterproof protection",
        "Breathable fabric",
        "Easy to wash"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AppBreadcrumbs />

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Our Products</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Discover our comprehensive range of home comfort products designed to enhance your living space.
            </p>
          </div>

          {/* Featured Products Carousel */}
          <div className="mb-20">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <Bed className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Premium Mattresses</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">Memory foam & orthopedic options for perfect sleep</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <Sofa className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Sofa Materials</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">High-density foam & premium upholstery materials</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <Shirt className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Curtain Cloth</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">Designer patterns & custom sizing options</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <Package className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Bean Bags</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">Stylish & comfortable for modern living</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <Bed className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Pillows & Toppers</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">Enhanced comfort & support solutions</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center justify-center p-6 min-h-[280px]">
                        <CheckCircle className="w-16 h-16 text-primary mb-4" />
                        <h3 className="text-xl font-semibold text-foreground mb-2 text-center font-sans">Mattress Protectors</h3>
                        <p className="text-muted-foreground text-center font-sans text-sm">Waterproof & breathable protection</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-[hsl(var(--card))] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <product.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground font-sans mb-3">{product.title}</p>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">{product.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
