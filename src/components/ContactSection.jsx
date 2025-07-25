import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Let's Work <span className="text-primary"> Together</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm excited about the possibilities of collaborating on exciting projects. Feel free to explore my portfolio and reach out to discuss how we can bring your ideas to life!
        </p>

      <div className="flex justify-center items-center min-h-[80px]">
      <a
      href="mailto:ssanakhansk1919@gmail.com"
      className="cosmic-button px-6 py-3 text-white rounded-md bg-primary hover:bg-primary/90 transition"
      >
      Mail Me
      </a>
      </div>
  
      </div>
    </section>
  );
};
