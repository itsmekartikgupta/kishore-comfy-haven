import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Bed, CircleCheck as CheckCircle, Users, Award, Heart, Clock, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Your comfort and satisfaction are at the heart of everything we do. We listen, understand, and deliver solutions tailored to your needs."
    },
    {
      icon: Award,
      title: "Quality Commitment",
      description: "We partner with trusted brands and source only premium materials to ensure products that stand the test of time."
    },
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description: "Our experienced team provides personalized advice to help you make informed decisions for your home comfort needs."
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "We respect your time with prompt delivery, efficient service, and reliable support whenever you need us."
    }
  ];

  const milestones = [
    { year: "1995", event: "Founded with a vision to provide quality foam products" },
    { year: "2005", event: "Expanded to include premium mattresses and furniture" },
    { year: "2015", event: "Reached 5,000+ satisfied customers milestone" },
    { year: "2024", event: "Continuing to serve with excellence and innovation" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 overflow-hidden pt-32 pb-16" aria-label="About Hero">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: 'linear-gradient(135deg, hsl(210 60% 55%) 0%, hsl(210 50% 45%) 100%)' }}
        >
          <div className="absolute inset-0 opacity-20" style={{
            background: 'radial-gradient(circle at 30% 50%, hsl(210 60% 40% / 0.3), transparent 50%)'
          }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in font-sans">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in font-sans" style={{ animationDelay: '0.2s' }}>
            Dedicated to bringing comfort and quality to homes across the region for nearly three decades
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }} aria-label="Our Mission">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-sans">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-sans">
                Since our establishment, Kishore Foam Agencies has been a trusted name in providing premium mattresses, furniture, and foam products. What started as a small venture has grown into a beloved local business serving thousands of satisfied customers.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed font-sans">
                We believe that quality sleep and comfortable living spaces are essential to well-being. That's why we carefully curate our product selection, working only with reputable manufacturers and ensuring every item meets our high standards.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-sans">
                Our team brings decades of combined experience in the home comfort industry, and we're passionate about helping you find the perfect solutions for your unique needs and preferences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Users className="w-12 h-12 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-2 font-sans">5000+</p>
                  <p className="text-sm text-muted-foreground font-sans">Happy Customers</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Award className="w-12 h-12 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-2 font-sans">30+</p>
                  <p className="text-sm text-muted-foreground font-sans">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <Bed className="w-12 h-12 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-2 font-sans">100+</p>
                  <p className="text-sm text-muted-foreground font-sans">Product Varieties</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-6">
                  <CheckCircle className="w-12 h-12 mx-auto text-primary mb-3" />
                  <p className="text-3xl font-bold text-foreground mb-2 font-sans">4.95</p>
                  <p className="text-sm text-muted-foreground font-sans">Customer Rating</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50" aria-label="Our Values">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-sans">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <value.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-xl font-sans group-hover:text-primary transition-colors duration-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed font-sans">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4" style={{ backgroundColor: 'hsl(var(--section-bg))' }} aria-label="Our Journey">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-sans">Our Journey</h2>
            <p className="text-xl text-muted-foreground font-sans">
              Three decades of dedication and growth
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-2xl font-bold text-primary font-sans">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform duration-300" />
                  {index < milestones.length - 1 && (
                    <div className="absolute left-1/2 top-6 w-0.5 h-full bg-primary/30 -translate-x-1/2" />
                  )}
                </div>
                <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <p className="text-lg text-foreground leading-relaxed font-sans">{milestone.event}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-primary/5" aria-label="Get in Touch">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-sans">Visit Us Today</h2>
          <p className="text-xl text-muted-foreground mb-8 font-sans">
            Experience our products firsthand and let our team help you find the perfect comfort solutions
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1 font-sans">Phone</p>
              <a href="tel:+919999999999" className="text-foreground font-semibold hover:text-primary transition-colors font-sans">+91 99999 99999</a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1 font-sans">Email</p>
              <a href="mailto:info@kishorefoam.com" className="text-foreground font-semibold hover:text-primary transition-colors font-sans">info@kishorefoam.com</a>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm text-muted-foreground mb-1 font-sans">Location</p>
              <p className="text-foreground font-semibold font-sans">Visit Our Showroom</p>
            </div>
          </div>

          <Button
            size="lg"
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-sans"
          >
            Back to Home
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
