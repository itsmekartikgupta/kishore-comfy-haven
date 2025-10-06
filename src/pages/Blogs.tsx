import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Clock, ArrowRight, PenSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogPosts = [
  {
    id: "climate-friendly-mattress",
    title: "How to Choose the Right Mattress for North Indian Weather",
    date: "January 12, 2025",
    readTime: "10 min read",
    category: "Mattresses",
    excerpt:
      "Discover the key considerations for selecting mattresses that stay cool, supportive, and hygienic in the North Indian climate.",
    focus:
      "Optimise your sleep quality by pairing breathable materials with the right firmness and mattress foundation.",
    highlights: [
      "Compare memory foam, latex, and hybrid cores based on airflow and durability.",
      "Match mattress firmness with body type to maintain spinal alignment.",
      "Layer natural cotton and bamboo fabrics to balance temperature swings across seasons.",
      "Understanding the benefits of orthopedic mattresses for Panchkula's climate.",
      "Why Sleepwell mattresses are the top choice for North Indian homes.",
    ],
    content: [
      "High humidity and dramatic seasonal shifts across Chandigarh, Panchkula, and Mohali make mattress breathability a top priority. As the oldest mattress shop in the Chandigarh Tricity region, Kishore Foam Agencies has witnessed how climate directly impacts sleep quality. Look for open-cell memory foam mattresses or pocket spring systems that encourage airflow while distributing pressure evenly. Memory foam mattress technology has advanced significantly, with modern materials offering both support and temperature regulation.",
      "When searching for a mattress shop in Panchkula or foam shop in Chandigarh, it's essential to consider seasonal variations. Summer temperatures can soar above 40°C, while winter nights drop to single digits. An orthopedic mattress with gel-infused memory foam or latex core provides consistent support across these extremes. Premium Sleepwell mattresses, available at our Sector 14 Panchkula showroom, incorporate advanced cooling technologies specifically designed for Indian climates.",
      "Pairing your mattress with a ventilated bed base prevents trapped moisture and extends mattress life. Regularly rotate the mattress every three months and expose it to indirect sunlight to keep allergens and dust mites at bay. This practice is especially important in humid Chandigarh weather where moisture accumulation can compromise foam quality and hygiene.",
      "Memory foam mattress toppers offer an affordable upgrade option for existing beds. At Kishore Foam Agencies, we stock various densities of furniture foam and mattress toppers that can transform an average sleeping surface into a premium experience. Our foam shop carries high-density foam suitable for mattress overlays, ensuring proper spinal alignment and pressure point relief.",
      "Orthopedic considerations are crucial for long-term health. Whether you suffer from back pain, joint issues, or simply want preventive care, an orthopedic mattress from our Panchkula showroom provides targeted support. We work closely with Sleepwell, India's most trusted mattress brand, to offer medically-approved sleep solutions that address specific health concerns while remaining breathable in North Indian weather.",
      "Beyond the mattress itself, consider the foundation and bedding materials. Natural cotton sheets and bamboo fabric covers enhance breathability and wick moisture away from your body. These materials complement premium mattresses by maintaining consistent sleeping temperatures. Visit our curtain cloth section to explore breathable fabrics that also help regulate room temperature and light exposure.",
      "When you shop at Kishore Foam Agencies, our specialists conduct a comprehensive sleep assessment. We evaluate your sleeping style, preferred sleeping temperature, body weight, any orthopedic requirements, and even your existing furniture before recommending a tailored solution. As authorized Sleepwell mattress dealers with over four decades of experience, we understand how to match the right mattress technology with individual needs and local climate challenges.",
    ],
  },
  {
    id: "mattress-maintenance-decade",
    title: "How to Maintain Your Mattress for 10+ Years",
    date: "January 3, 2025",
    readTime: "12 min read",
    category: "Mattress Care",
    excerpt:
      "Protect comfort and hygiene with a seasonal maintenance routine that keeps your mattress supportive well beyond the warranty period.",
    focus:
      "A blend of protective covers, smart rotation schedules, and professional cleaning extends mattress lifespan without sacrificing comfort.",
    highlights: [
      "Rotate or flip compatible mattresses every three months to balance body impressions.",
      "Shield against spills and dust mites with breathable, waterproof protectors.",
      "Vacuum and air out the mattress quarterly to maintain freshness and support.",
      "Professional dry cleaning services extend mattress life and hygiene.",
      "Proper foam care prevents sagging and maintains orthopedic support.",
    ],
    content: [
      "Premium mattresses represent a significant investment in your health and well-being. Whether you've purchased a Sleepwell orthopedic mattress, memory foam mattress, or hybrid system from our Panchkula mattress shop, proper maintenance ensures optimal performance for over a decade. Understanding foam density, fabric care, and structural support preservation is essential for maximizing your mattress lifespan.",
      "Mattresses naturally develop impressions where you sleep the most, especially in the shoulder and hip regions. Rotating your mattress from head to toe every three months distributes weight more evenly and slows down sagging. Two-sided mattresses can also be flipped, giving each surface time to recover and redistribute the furniture foam within. Set calendar reminders for seasonal rotation to make this a consistent habit.",
      "High-quality memory foam mattresses and orthopedic variants available at foam shops in Chandigarh require specific care protocols. Memory foam responds to body heat and pressure, creating custom contours. Regular rotation prevents permanent body impressions from forming in specific zones. For pocket spring mattresses with pillow tops, rotation prevents coil fatigue and maintains uniform support across the entire sleeping surface.",
      "Investing in a premium mattress protector is a low-cost way to block moisture, allergens, and accidental spills while extending the life of your mattress. Choose breathable, waterproof protectors that allow heat to escape while preventing liquid penetration. This is particularly important in Panchkula's humid climate where moisture can compromise foam integrity and promote mold growth. Wash the protector alongside your bedding every two to three weeks using mild detergent.",
      "Every season, strip the bed completely and vacuum the mattress surface using an upholstery attachment with soft bristles. Pay special attention to seams and tufted areas where dust accumulates. Allow the mattress to breathe in a shaded, well-ventilated room for several hours. Sprinkle a light layer of baking soda across the entire surface and let it sit for 2-3 hours before vacuuming again to neutralize odors and absorb residual moisture.",
      "For homes with pets or children, spot cleaning becomes essential. Address spills immediately using a clean, dry cloth to blot (never rub) the affected area. Create a gentle cleaning solution with mild liquid soap and water, applying sparingly with a slightly damp cloth. Avoid saturating the foam, as excess moisture can damage internal structures and void manufacturer warranties. Kishore Foam Agencies recommends professional dry cleaning services for deep stains or comprehensive mattress refresh.",
      "Professional dry cleaning services offered at our Sector 14 Panchkula and Sector 5 MDC locations use specialized equipment that extracts dirt, allergens, and bacteria without compromising foam density or fabric integrity. Our technicians assess mattress condition and recommend appropriate cleaning methods based on construction type, whether it's memory foam, latex, spring, or hybrid. Schedule professional cleaning annually or bi-annually depending on usage patterns.",
      "Sun exposure provides natural sanitization through UV rays, but requires careful timing. In Chandigarh's intense summer heat, expose your mattress to morning sunlight for 2-3 hours, avoiding peak afternoon temperatures that can damage foam cells and fabric dyes. Proper ventilation prevents moisture buildup while UV rays eliminate dust mites and bacteria. This practice complements regular vacuuming and spot cleaning routines.",
      "Monitor your mattress for signs of deterioration: excessive sagging (more than 1.5 inches), visible body impressions that don't recover, lumpy or uneven surfaces, protruding springs, or persistent odors despite cleaning. If you notice uneven support or persistent staining, speak with the Kishore Foam Agencies service desk at our Panchkula showroom. Our experts can recommend professional dry cleaning, replacement mattress toppers, foam refilling, or support systems that restore comfort without requiring a full replacement.",
      "Mattress foundations play a crucial role in longevity. Ensure your bed base provides adequate support with slats no more than 3 inches apart. Solid platforms work well for foam mattresses, while spring systems benefit from box springs or slatted bases that allow airflow. Proper foundation support prevents premature sagging and maintains the structural integrity of your mattress investment.",
      "For older mattresses showing mild sagging but still maintaining acceptable comfort, consider adding a high-density foam topper from our furniture foam collection. These toppers provide an additional comfort layer while prolonging the base mattress's usable life. Visit our foam shop in Chandigarh to explore various foam densities and thicknesses suitable for mattress rejuvenation.",
    ],
  },
  {
    id: "sofa-maintenance-guide",
    title: "Foam Sofa Maintenance Guide for Busy Homes",
    date: "December 28, 2024",
    readTime: "11 min read",
    category: "Sofa Care",
    excerpt:
      "Extend the life of your living room seating with an easy maintenance routine that keeps foam cushions fresh and supportive.",
    focus:
      "Prevent sagging and staining by adopting a quarterly refresh cycle backed by professional care from Kishore Foam Agencies.",
    highlights: [
      "Vacuum upholstery weekly to remove dust and loose particles.",
      "Rotate detachable cushions every fortnight for even wear.",
      "Schedule professional dry cleaning to rejuvenate foam density and fabric vibrancy.",
      "Custom sofa making ensures perfect fit and premium materials.",
      "High-density furniture foam provides lasting comfort and support.",
    ],
    content: [
      "Households across the Chandigarh Tricity region—Panchkula, Mohali, and Chandigarh—juggle demanding schedules filled with guests, children, and pets. Your living room sofa bears the brunt of daily family life, making proper maintenance essential for longevity and appearance. At Kishore Foam Agencies, our decades of experience in sofa making and upholstery services have taught us exactly what works for busy Indian homes.",
      "The foundation of sofa longevity starts with material selection. When commissioning custom sofa making at our Panchkula workshop, choose performance textiles treated for stain resistance and pair them with high-resilience furniture foam inserts. We stock premium D'Decor fabrics specifically engineered for high-traffic areas, offering both aesthetic appeal and practical durability. High-density foam (35-40 density) maintains its shape and support far longer than standard foam, making it ideal for family seating.",
      "Establish a weekly vacuuming routine using an upholstery attachment with soft bristles. Focus on crevices where crumbs, dust, and pet hair accumulate. Remove loose cushions and vacuum both sides, as well as the sofa deck underneath. This simple 10-minute weekly ritual prevents particle buildup that can abrade fabric fibers and compromise foam structure over time. For leather and faux leather upholstery, use a soft cloth to wipe surfaces and prevent dust settling into texture.",
      "Rotate detachable cushions every fortnight to distribute wear patterns evenly across all seating surfaces. This practice is especially important for sofas with down-blend or foam core cushions. Flip seat cushions from front to back and swap positions between left, center, and right sections. Regular rotation prevents permanent body impressions from forming in favorite seating spots, extending the furniture foam's supportive life significantly.",
      "Spot clean spills immediately using pH-neutral cleaning solutions specifically formulated for upholstery. Blot the affected area with a clean, absorbent cloth instead of rubbing, which can spread stains and damage fiber integrity. For our D'Decor and other performance fabrics available at Kishore Foam Agencies, most spills can be managed with simple water and mild soap when addressed promptly. Always test cleaning solutions on an inconspicuous area first.",
      "Different upholstery materials require tailored care approaches. Cotton and linen blends benefit from professional dry cleaning every 12-18 months. Synthetic performance fabrics can often be spot-cleaned with water-based solutions. Velvet and chenille require gentle brushing with a soft-bristle brush to maintain texture and appearance. Leather needs conditioning treatments every 6 months to prevent cracking and maintain suppleness.",
      "Professional dry cleaning services at Kishore Foam Agencies use industrial-grade equipment that extracts embedded dirt, allergens, and odors without saturating foam cores. Our technicians assess fabric type, construction method, and specific staining before selecting appropriate cleaning protocols. This deep cleaning process, recommended annually for heavily-used sofas, revitalizes both fabric appearance and foam density, restoring showroom freshness.",
      "Foam cushions naturally compress with use, but proper care slows this process significantly. Fluff and plump cushions daily by gently kneading and reforming them. For down-blend cushions, redistribute filling by hand to prevent settling. If you notice significant sagging or loss of support, visit our furniture foam shop in Panchkula for foam replacement or refilling services. We offer various foam densities suitable for sofa cushion restoration.",
      "Sun exposure accelerates fabric fading and weakens foam structure. Position sofas away from direct sunlight, or use curtain cloth (available in our curtain section) to filter UV rays during peak hours. For unavoidable sun exposure, consider window treatments with UV protection or arrange furniture to minimize direct light contact. This simple precaution extends fabric vibrancy and prevents foam degradation.",
      "Our service team provides comprehensive on-site assessments throughout Panchkula, Mohali, and Chandigarh. We evaluate foam compression, fabric condition, frame integrity, and spring systems to recommend appropriate interventions. Options include foam refilling, complete cushion replacement, fabric reupholstery, or structural repairs. These services ensure your custom sofa investment retains showroom comfort for decades.",
      "For families with young children or pets, consider adding washable throws or sofa covers during high-activity periods. These protective layers catch spills and stains before they reach upholstery, providing an easy-clean solution. Remove and launder covers weekly to maintain hygiene without stressing the primary upholstery fabric.",
      "Frame maintenance matters too. Tighten loose screws and bolts every six months to prevent joint stress and wobbling. Check that legs remain level and stable. Wooden frames benefit from occasional polishing, while metal frames should be inspected for rust in humid climates. Address structural issues promptly to prevent cascading damage to foam and fabric components.",
      "At Kishore Foam Agencies, we stand behind our sofa making craftsmanship with comprehensive aftercare support. Whether you need foam replacement, fabric patching, spring repair, or complete reupholstery, our skilled artisans deliver factory-quality results. Visit our Sector 14 Panchkula or Sector 5 MDC locations to discuss maintenance needs, and let us help preserve your furniture investment for generations.",
    ],
  },
  {
    id: "boutique-hotel-custom-furnishings",
    title: "Why Boutique Hotels Prefer Custom Furnishings from Kishore Foam Agencies",
    date: "November 10, 2024",
    readTime: "13 min read",
    category: "Commercial Projects",
    excerpt:
      "Learn how tailored foam solutions elevate guest experiences, maximise occupancy comfort, and strengthen brand storytelling for hospitality brands.",
    focus:
      "Custom-made furniture offers unmatched design flexibility, allowing hotels to align ergonomics with brand aesthetics.",
    highlights: [
      "Coordinate upholstery palettes with the property's signature ambience.",
      "Optimise room layouts with space-saving sofa cum beds and modular seating.",
      "Achieve consistent guest reviews with premium sleep systems sourced in bulk.",
      "Authorized Sleepwell dealer providing commercial-grade mattresses.",
      "Complete furnishing solutions from mattresses to curtain cloth.",
    ],
    content: [
      "The boutique hotel segment in North India has experienced remarkable growth, particularly across the Chandigarh Tricity belt encompassing Panchkula, Mohali, Zirakpur, and Chandigarh. These properties differentiate themselves through distinctive design narratives and personalized guest experiences. At Kishore Foam Agencies, we've partnered with numerous hospitality projects since our establishment, providing custom sofa making, premium mattresses, upholstery services, and complete furnishing solutions that elevate brand identity while ensuring commercial durability.",
      "Hospitality projects demand dependable timelines, uniform quality, and budget predictability. Our production workflow accommodates phased deliveries aligned with renovation schedules, ensuring that projects stay on track without compromising craftsmanship. As the oldest showroom in the Chandigarh Tricity region, we've refined our commercial procurement processes to handle bulk orders for mattresses, furniture foam, sofa materials, and curtain cloth with consistent quality across every unit.",
      "Custom-made furniture offers unmatched design flexibility, allowing hotels to align ergonomics with brand aesthetics precisely. Off-the-shelf furniture rarely captures a property's unique character or optimizes available space effectively. Through our custom sofa making services, we create pieces that reflect architectural themes, color palettes, and spatial requirements specific to each property. Whether you envision mid-century modern lounges, contemporary minimalist suites, or traditional Indian motifs, our artisans translate concepts into functional art.",
      "We collaborate closely with architects and interior design firms throughout the Tricity region to translate mood boards, fabric swatches, and architectural drawings into tangible furnishings. This collaborative process balances artistic vision with long-term durability and maintenance realities. Our team provides material consultations, recommending specific furniture foam densities, upholstery fabric treatments, and construction methods that withstand commercial use while maintaining aesthetic integrity.",
      "Premium sleep systems form the cornerstone of positive guest reviews and repeat bookings. As an authorized Sleepwell mattress dealer, Kishore Foam Agencies supplies commercial-grade orthopedic mattresses, memory foam mattresses, and hybrid systems specifically engineered for hospitality environments. These mattresses meet stringent durability standards while providing the comfort consistency that guests expect. Bulk procurement through our established supply chains ensures uniform quality across all guest rooms, eliminating the firmness variations that frustrate guests.",
      "Coordinate upholstery palettes seamlessly with your property's signature ambience using our extensive D'Decor fabric collection. We stock performance textiles in hundreds of colors, patterns, and textures suitable for high-traffic hospitality environments. These fabrics undergo rigorous testing for abrasion resistance, color-fastness, flame retardancy, and stain resistance—critical factors for commercial upholstery. Our design consultants help select fabrics that photograph beautifully while maintaining their appearance through thousands of guest interactions.",
      "Space optimization remains crucial in boutique properties where every square foot contributes to revenue potential. Our custom sofa cum beds, modular seating solutions, and multi-functional furniture maximize room versatility without sacrificing comfort. Convertible sofas in studio suites provide comfortable daytime seating that transforms into proper sleeping surfaces for additional guests. Murphy beds with integrated sofa systems create flexible spaces suitable for couples or small families.",
      "From lobby lounges requiring impact-resistant upholstery to executive suites demanding whisper-quiet mattresses, every piece we engineer considers commercial use patterns. High-density furniture foam (40-45 density) in seating areas maintains shape and support through constant use. Reinforced frames with commercial-grade joinery prevent wobbling and structural failure. Stain-resistant fabric treatments protect against spills while remaining visually appealing and tactilely pleasant.",
      "Maintenance accessibility influences long-term operational costs significantly. We design removable cushion covers, replaceable foam cores, and modular components that allow housekeeping teams to maintain pristine conditions efficiently. Sofa cushions with zippered covers enable professional dry cleaning without complete furniture removal. Mattress protectors specified for commercial use extend mattress lifespan while simplifying hygiene protocols.",
      "Photography-ready aesthetics drive social media engagement and booking decisions. Our furnishings consider camera angles, lighting conditions, and compositional balance that make rooms photograph beautifully. Carefully selected upholstery colors complement wall treatments and lighting schemes, creating Instagram-worthy spaces that guests eagerly share. This visual appeal translates directly into marketing assets that showcase your property's distinctive character.",
      "Curtain cloth selection impacts guest comfort, energy efficiency, and aesthetic cohesion. Our curtain section stocks blackout fabrics for restful sleep, sheer materials for soft natural light, and thermal options that reduce HVAC costs. Custom drapery manufacturing ensures perfect fits and professional installation, creating polished window treatments that frame views while providing privacy and light control. Coordinate curtain fabrics with upholstery palettes for seamless design integration.",
      "Budget management matters intensely in commercial projects. We provide detailed quotations with transparent pricing structures, helping developers and owners forecast furnishing costs accurately. Volume pricing on bulk mattress orders, sofa sets, and curtain materials delivers significant savings compared to retail pricing. Our phased delivery options align expenditures with project milestones and cash flow requirements.",
      "Post-installation support includes staff training on proper furniture care, warranty administration, and rapid response maintenance services. Our technicians provide on-site foam replacement, upholstery repairs, and mattress evaluations throughout the property's lifecycle. This ongoing partnership ensures that furnishings maintain showroom appearance years after initial installation, protecting your brand reputation and guest satisfaction scores.",
      "Successful boutique hotel projects we've completed across Panchkula, Mohali, and Chandigarh demonstrate our comprehensive capabilities. From intimate 15-room heritage properties to contemporary 50-room business hotels, our custom furnishing solutions scale appropriately. We source premium Sleepwell mattresses, craft custom sofas in our workshop, provide complete upholstery services, supply curtain cloth and installation, and deliver furniture foam in exact specifications required for each unique space.",
      "Sustainability considerations increasingly influence hospitality procurement decisions. We prioritize durable, repairable furniture construction over disposable alternatives. High-quality furniture foam maintains structure for 10+ years with proper care. Sleepwell mattresses meet environmental standards while delivering commercial performance. Upholstery fabrics from D'Decor incorporate sustainable manufacturing practices. This durability focus reduces replacement frequency, lowering long-term costs and environmental impact.",
      "Visit our Sector 14 Panchkula showroom to experience material quality firsthand and discuss your hospitality project. Our commercial furnishing consultants provide portfolio reviews, material samples, and detailed project proposals customized to your timeline, budget, and design vision. Let Kishore Foam Agencies transform your boutique hotel concept into a guest experience that generates five-star reviews and lasting brand loyalty.",
    ],
  },
];

const Blogs = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Blog & Tips - Mattress & Furniture Care Guide | Kishore Foam Agencies</title>
      <meta name="description" content="Expert tips on choosing the right mattress, furniture care, and home comfort solutions. Learn from Panchkula's oldest showroom." />
      <link rel="canonical" href="https://www.kishorefoam.com/blogs" />
      <meta property="og:title" content="Blog & Tips - Mattress & Furniture Care Guide | Kishore Foam Agencies" />
      <meta property="og:description" content="Expert tips on choosing the right mattress, furniture care, and home comfort solutions." />
      <meta property="og:url" content="https://www.kishorefoam.com/blogs" />
      <meta property="og:type" content="website" />
    </Helmet>
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
