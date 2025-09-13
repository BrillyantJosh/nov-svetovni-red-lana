import { ExternalLink } from "lucide-react";
import lanaHero from "@/assets/lana-hero.png";

const JoinMovement = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header with Image */}
      <header className="relative w-full aspect-video overflow-hidden">
        <img 
          src={lanaHero} 
          alt="Lana"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20"></div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-center mb-8 text-foreground">
            Naš cilj je preprost 🎯
          </h1>
          
          <p className="text-xl text-center mb-12 text-muted-foreground">
            Da se imamo fajn – vmes pa vsak kak milijonček pobere v žep.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Naše socialno omrežje</h2>
            <p className="mb-4 text-foreground leading-relaxed">
              Ustvarili smo svoje decentralizirano socialno omrežje, kjer gradiš izkušnjo nove realnosti. In ja, tukaj boš imel tudi ti ful keša. 🙂
            </p>
            <p className="mb-6 text-foreground leading-relaxed">
              Ker pa vemo, da si mogoče neverni Tomaž, ki ne verjame v pravljice, se bomo malo poigrali skupaj. Registriraš se v Lanino omrežje, poskušaš najti, kje se skriva zajec, in nas testiraš. Če ti uspe – bravo, dokazal si, da blefiramo. Če pa te potegne noter, boš postal tako kot mi – srečen čudak.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Zakaj je to zabavno</h2>
            <p className="mb-4 text-foreground leading-relaxed">
              Ker imamo radi keš, si mi namesto lajkov pošiljamo kar prave Lane. To je najhitrejši način, da prideš do svoje prve registrirane Lane, ki bo nekoč vredna 100 milijončkov.
            </p>
            <p className="mb-4 text-foreground leading-relaxed">
              Če želiš obogatiti malo prej, boš moral kako Lano tudi kupiti. Ker so zelo redke, je danes praktično nemogoče kupiti več kot 10 € registriranih LAN. In prav ta redkost daje igri še več žmohta. Če pa hočeš, tako kot mi, že danes živeti od tega, boš moral pomagati soustvarjati infrastrukturo. Od tega se pa da res živet.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Pravila igre</h2>
            <p className="mb-4 text-foreground leading-relaxed">
              Če se boš obnašal prašičje, te bo doletel samoodgovorni proces. Če se ne boš želel preoblikovati iz prašiča v človeka, bo tvoja denarnica odregistrirana. Takrat pojdi svoje Lane prodajat na klasične borze po ceni, kot jo imajo tam. Tukaj se zavedamo, da smo lahko vsi prašički – ampak se zavestno odločamo, da delujemo iz druge energije. Da drug drugega postavljamo v nekaj več.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-foreground">Če si še vedno za, potem:</h2>
            <ol className="list-decimal list-inside space-y-4 mb-8">
              <li className="text-foreground leading-relaxed">
                <a 
                  href="https://www.createLanaWallet.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Ustvari denarnico in jo registriraj
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
              <li className="text-foreground leading-relaxed">
                <a 
                  href="https://app.mejmosefajn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Prijavi se v socialno omrežje*
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ol>
          </section>

          <div className="text-center py-8">
            <p className="text-xl font-medium text-foreground mb-4">
              Zdaj pa dovolj klobasanja. Hop na vlak – al pa bejž stran, haha. 🚂
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JoinMovement;