import Navigation from "@/components/Navigation";
import AppBreadcrumbs from "@/components/AppBreadcrumbs";
import { Sofa, Bed, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Custom Sofa Making",
      description: "Expert craftsmanship in creating custom sofas tailored to your specifications and style preferences.",
      features: [
        "Custom designs and measurements",
        "Quality foam and spring construction",
        "Wide fabric selection",
        "Professional installation"
      ]
    },
    {
      icon: Bed,
      title: "Mattress Cutting & Shaping",
      description: "Professional mattress cutting and shaping services to fit your specific requirements and space dimensions.",
      features: [
        "Custom size cutting",
        "Shape customization",
        "Precision measurements",
        "On-site service available"
      ]
    },
    {
      icon: Sparkles,
      title: "Dry Cleaning",
      description: "Professional dry cleaning services for your furniture, curtains, and upholstery items.",
      features: [
        "Sofa and chair cleaning",
        "Curtain cleaning",
        "Upholstery deep cleaning",
        "Stain removal"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services - Custom Sofa Making & Dry Cleaning | Kishore Foam Agencies</title>
        <meta name="description" content="Expert sofa making, mattress cutting, and dry cleaning services in Panchkula. Professional furniture services with quality craftsmanship." />
        <link rel="canonical" href="https://www.kishorefoam.com/services" />
        <meta property="og:title" content="Our Services - Custom Sofa Making & Dry Cleaning | Kishore Foam Agencies" />
        <meta property="og:description" content="Expert sofa making, mattress cutting, and dry cleaning services in Panchkula. Professional furniture services with quality craftsmanship." />
        <meta property="og:url" content="https://www.kishorefoam.com/services" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navigation />

      <main className="pt-24 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AppBreadcrumbs />

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-sans">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              Professional services to meet all your furniture and cleaning needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <article
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-[hsl(var(--card))] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex flex-col gap-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold text-foreground font-sans mb-3">{service.title}</p>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground font-sans">
                      {service.features.map((feature, idx) => (
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

export default Services;
