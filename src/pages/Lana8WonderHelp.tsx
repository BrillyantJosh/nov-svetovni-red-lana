import { Button } from "@/components/ui/button";
import { ArrowLeft, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Lana8WonderHelp = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Nazaj
          </Button>
        </Link>
        <a
          href="https://app.mejmosefajn.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors px-6 py-2 border-2 border-primary rounded-lg hover:bg-primary/10"
        >
          LOG IN
        </a>
      </nav>

      {/* Content */}
      <section className="pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              <span className="hero-text">Imam Lana8Wonder, kaj sedaj?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tukaj ti razložimo, kako naprej s tvojim Lana8Wonder planom. Poglej video spodaj 👇
            </p>
          </div>

          {/* YouTube Video Embed */}
          <div className="animate-slide-up delay-300">
            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl border border-primary/10">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dJo5AZs-q2s"
                title="Imam Lana8Wonder, kaj sedaj?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Imaš še kakšno vprašanje? Pridruži se nam!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.lana8wonder.com" target="_blank" rel="noopener noreferrer">
                <Button className="gradient-button text-lg px-8 py-4">
                  <Play className="mr-2 h-5 w-5" />
                  Lana8Wonder
                </Button>
              </a>
              <Link to="/join-movement">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                  Skoči na Vlak
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lana8WonderHelp;
