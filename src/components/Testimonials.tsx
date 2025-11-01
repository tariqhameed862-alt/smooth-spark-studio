import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [api, setApi] = useState<CarouselApi>();

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      content: "Working with this team transformed our entire digital infrastructure. Their expertise in cloud solutions helped us scale efficiently while reducing costs by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      content: "The custom development work exceeded our expectations. They delivered a robust, scalable solution that perfectly aligned with our business needs.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager, AppVenture",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      content: "Their mobile app development skills are outstanding. Our app now has over 100K downloads with a 4.8-star rating. Couldn't be happier!",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Founder, SecureNet",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      content: "The cybersecurity solutions they implemented gave us peace of mind. Their attention to detail and proactive approach is unmatched.",
      rating: 5,
    },
    {
      name: "Lisa Thompson",
      role: "Director of Analytics, InsightCo",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      content: "The data analytics platform they built transformed how we make decisions. The insights we're getting are game-changing for our business.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1 h-full">
                    <Card className="glass-card-hover h-full relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
                      
                      <CardContent className="p-8 relative z-10">
                        <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                        
                        <p className="text-foreground/90 mb-6 leading-relaxed">
                          "{testimonial.content}"
                        </p>

                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/50">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {testimonial.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
