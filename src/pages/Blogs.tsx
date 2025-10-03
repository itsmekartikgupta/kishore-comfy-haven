import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight, PenSquare } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "climate-friendly-mattress",
    title: "How to Choose the Right Mattress for North Indian Weather",
    date: "January 12, 2025",
    readTime: "6 min read",
    category: "Mattresses",
    excerpt:
      "Discover the key considerations for selecting mattresses that stay cool, supportive, and hygienic in the North Indian climate.",
    focus:
      "Optimise your sleep quality by pairing breathable materials with the right firmness and mattress foundation.",
    highlights: [
      "Compare memory foam, latex, and hybrid cores based on airflow and durability.",
      "Match mattress firmness with body type to maintain spinal alignment.",
      "Layer natural cotton and bamboo fabrics to balance temperature swings across seasons.",
    ],
    content: [
      "High humidity and dramatic seasonal shifts across Chandigarh, Panchkula, and Mohali make mattress breathability a top priority. Look for open-cell foams or pocket springs that encourage airflow while distributing pressure evenly.",
      "Pairing your mattress with a ventilated bed base prevents trapped moisture. Regularly rotate the mattress and expose it to indirect sunlight to keep allergens at bay.",
      "When you shop at Kishore Foam Agencies, our specialists evaluate your sleeping style, preferred sleeping temperature, and any orthopedic requirements before recommending a tailored solution.",
    ],
  },
  {
    id: "sofa-maintenance-guide",
    title: "Foam Sofa Maintenance Guide for Busy Homes",
    date: "December 28, 2024",
    readTime: "5 min read",
    category: "Sofa Care",
    excerpt:
      "Extend the life of your living room seating with an easy maintenance routine that keeps foam cushions fresh and supportive.",
    focus:
      "Prevent sagging and staining by adopting a quarterly refresh cycle backed by professional care from Kishore Foam Agencies.",
    highlights: [
      "Vacuum upholstery weekly to remove dust and loose particles.",
      "Rotate detachable cushions every fortnight for even wear.",
      "Schedule professional dry cleaning to rejuvenate foam density and fabric vibrancy.",
    ],
    content: [
      "Households across Tricity juggle guests, children, and pets—making durable fabrics essential. Choose performance textiles treated for stain resistance and pair them with high-resilience foam inserts.",
      "Spot clean spills immediately using pH-neutral solutions. Blot the area instead of rubbing to protect fibre integrity.",
      "Our service team provides on-site assessments to recommend refilling options or complete cushion overhauls when needed, ensuring your investment retains showroom comfort.",
    ],
  },
  {
    id: "boutique-hotel-custom-furnishings",
    title: "Why Boutique Hotels Prefer Custom Furnishings from Kishore Foam Agencies",
    date: "November 10, 2024",
    readTime: "7 min read",
    category: "Commercial Projects",
    excerpt:
      "Learn how tailored foam solutions elevate guest experiences, maximise occupancy comfort, and strengthen brand storytelling for hospitality brands.",
    focus:
      "Custom-made furniture offers unmatched design flexibility, allowing hotels to align ergonomics with brand aesthetics.",
    highlights: [
      "Coordinate upholstery palettes with the property’s signature ambience.",
      "Optimise room layouts with space-saving sofa cum beds and modular seating.",
      "Achieve consistent guest reviews with premium sleep systems sourced in bulk.",
    ],
    content: [
      "Hospitality projects demand dependable timelines and uniform quality. Our production workflow accommodates phased deliveries so that renovations stay on schedule without compromising craftsmanship.",
      "We collaborate with architects and interior stylists to translate mood boards into tangible furnishings, balancing artistry with long-term durability.",
      "From lobby lounges to executive suites, every piece is engineered to handle high footfall while maintaining a luxurious finish that photographs beautifully for marketing campaigns.",
    ],
  },
];

const Blogs = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main className="pt-28 pb-24 px-4">
      <section className="max-w-6xl mx-auto text-center mb-16" aria-label="Blogs overview">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full uppercase tracking-[0.3em] text-xs font-semibold">
          <PenSquare className="h-4 w-4" />
          Insights
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-bold font-sans">Expert Tips from Kishore Foam Agencies</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto font-sans">
          Explore detailed guides on mattresses, upholstery, and custom furnishings curated by our in-house specialists to help you create healthier, more comfortable spaces.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2" aria-label="Latest blog posts">
        {blogPosts.map((post) => (
          <article key={post.id} className="h-full">
            <Card className="h-full flex flex-col">
              <CardHeader className="space-y-4">
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <Badge variant="secondary" className="uppercase tracking-[0.2em] text-xs font-semibold">
                    {post.category}
                  </Badge>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </span>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-semibold font-sans leading-tight">
                  {post.title}
                </CardTitle>
                <p className="text-base text-muted-foreground font-sans leading-relaxed">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-6">
                <div className="space-y-3 text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Key Takeaways</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-muted-foreground font-sans">
                    {post.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4 text-left">
                  <h3 className="text-base font-semibold font-sans text-foreground">Deep Dive</h3>
                  {post.content.map((paragraph) => (
                    <p key={paragraph} className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-4 border-t border-border text-left">
                  <p className="text-sm text-muted-foreground font-sans mb-4">
                    {post.focus}
                  </p>
                  <Button asChild className="inline-flex items-center gap-2">
                    <Link to="/" state={{ scrollTo: "contact" }}>
                      Talk to our experts
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </article>
        ))}
      </section>

      <section className="max-w-5xl mx-auto mt-20 text-center bg-primary/5 rounded-3xl px-8 py-12" aria-label="Contact prompt">
        <h2 className="text-3xl md:text-4xl font-bold font-sans text-primary mb-4">Need personalised recommendations?</h2>
        <p className="text-base md:text-lg text-muted-foreground font-sans mb-6">
          Visit our showrooms or connect with the Kishore Foam Agencies team to customise mattresses, sofas, curtains, and financing tailored to your project.
        </p>
        <Button asChild size="lg" className="inline-flex items-center gap-2">
          <Link to="/" state={{ scrollTo: "contact" }}>
            Plan a consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </main>
  </div>
);

export default Blogs;
