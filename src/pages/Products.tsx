import Navigation from "@/components/Navigation";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import { Bed, Sofa, Package } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
      <Helmet>
        <title>Our Products - Premium Mattresses & Foam Solutions | Kishore Foam Agencies</title>
        <meta name="description" content="Explore our wide range of premium mattresses, sofa materials, curtain cloth, bean bags, pillows, and foam products. Authorized Sleepwell dealer in Panchkula." />
        <link rel="canonical" href="https://www.kishorefoam.com/products" />
        <meta property="og:title" content="Our Products - Premium Mattresses & Foam Solutions | Kishore Foam Agencies" />
        <meta property="og:description" content="Explore our wide range of premium mattresses, sofa materials, curtain cloth, bean bags, pillows, and foam products." />
        <meta property="og:url" content="https://www.kishorefoam.com/products" />
        <meta property="og:type" content="website" />
      </Helmet>
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

          <div className="mt-16 text-center">
            <Link to="/">
              <Button
                size="lg"
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-white font-medium px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
