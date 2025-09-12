import { Button } from "@/components/ui/button";
import { ExpandableSection } from "@/components/ExpandableSection";
import { 
  Heart, 
  Users, 
  Rocket, 
  Brain, 
  Scale, 
  Database, 
  Bot, 
  Eye, 
  GraduationCap, 
  Stethoscope, 
  Plane, 
  TreePine, 
  Building,
  DollarSign,
  ChevronRight,
  Sparkles
} from "lucide-react";
import heroMovement from "@/assets/hero-movement.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroMovement})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              <span className="hero-text">M'ejmo se fajn</span>
            </h1>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary mb-4">
              Nov Svetovni Red Lana
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
              <span>Politično gibanje za svetlejšo prihodnost</span>
              <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
            </div>
          </div>
          
          <div className="animate-slide-up delay-300">
            <Button className="gradient-button text-lg px-8 py-4 animate-bounce-gentle">
              Pridruži se gibanju
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ExpandableSection
            title="Nov Svetovni Red Lana"
            summary="Zadeva je preprosta: zabluzili smo čist in, milo rečeno, smo v r…ti. Soseda sovražimo, za burek nimamo, bombe letijo križem kražem, ne veš kdo pije in kdo plača, vsak tretji je v depri… Skratka, prihodnost ne zgleda ravno rožnata. Zato nam preostane samo eno: da se mamo fajn."
            content="Smo politično gibanje?

Na neki način ja, ker delujemo v kolektivnem prostoru. A nismo še sigurni, ali smo stranka. Zakaj bi svojo čudovito idejo omejili zgolj na volitve? Če nas izvolijo, super, če ne, pa ne bomo sedeli v kotu in jokali. Naš cilj je preoblikovati to izkušnjo, imenovano Planet Zemlja, v nekaj več.

A vsaka resnica ima dve plati. Če jih ne sprejmemo, smo bleferji. Zato zakaj pa ne — mogoče pa gremo tudi na volitve, mogoče podpremo kerga zabavnega frajerja ali frajerko ali pač nič od tega in se bomo M'eli samo fajn, ko bodo vsi zagriženo iskali kako oblatiti nasprotnika, haha 😄. Mi smo polni čudnih zgodb tako, da lahko začnete kar pri nas ;)"
            icon={<Heart className="h-6 w-6" />}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <ExpandableSection
            title="Kdo smo?"
            summary="Politično gibanje, ne ravno politična stranka. Smo skupina ljudi iz različnih strokovnih področij, združenih okoli skupne vizije transparentne, znanstveno utemeljene politike."
            content="Nov Svetovni Red Lana je politično gibanje, ki deluje drugače kot tradicionalne politične stranke. Nismo hierarhična organizacija z vnaprej določenimi voditelji - smo mreža ljudi, ki pripomorejo k skupnim ciljem.

Naša članska baza vključuje znanstvenike, tehnologe, umetnike, zdravnike, učitelje, kmetovalce, podjetnike in vse druge, ki si želijo aktivno soudeležbe pri oblikovanju prihodnosti.

Delujemo po načelih:
- Transparentnosti: Vse naše odločitve in procesi so javni
- Znanstvenosti: Naše politike temeljijo na dokazih in raziskavah
- Sočutja: Vsaka politika mora koristiti vsem ljudem in planetu
- Zabave: Če se ne moremo zabavati med gradnjo boljšega sveta, kaj potem sploh počnemo?"
            icon={<Users className="h-6 w-6" />}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Vision & Key Topics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4 text-gradient">
              Naša vizija in ključne teme
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Konkretni predlogi za sistemske spremembe, ki jih potrebuje naša družba
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Money & Economy */}
            <ExpandableSection
              title="Denar in gospodarstvo"
              summary="Nova monetarna politika, univerzalni osnovni dohodek, pravična porazdelitev bogastva."
              content="Trenutni gospodarski sistem povzroča vse večje neenakosti in okoljsko škodo. Predlagamo:

• Uvedba univerzalnega osnovnega dohodka
• Reforma monetarnega sistema z demokratičnim nadzorom
• Progresivno obdavčenje kapitala in bogastva
• Podpora lokalnim gospodarstvom in zadružništvu
• Zelena preusmeritev gospodarstva

Cilj je gospodarstvo, ki služi ljudem in planetu, ne le kapitalu."
              icon={<DollarSign className="h-6 w-6" />}
            />

            {/* Extraterrestrial Communication */}
            <ExpandableSection
              title="Zunajzemeljska komunikacija"
              summary="Priprava na kontakt, transparentnost v raziskavah NLP, mednarodna koordinacija."
              content="Dokazi o neidentificiranih letalnih objektih se kopičijo. Čas je za resno obravnavo te teme:

• Popolna transparentnost vlad glede NLP raziskav
• Ustanovitev mednarodne agencije za NLP raziskave
• Pripravljenost protokolov za Prvi kontakt
• Vlaganje v SETI in sorodne raziskave
• Etične smernice za morebitno interakcijo z NLP

Človeštvo mora biti pripravljeno na možnost, da nismo sami v vesolju."
              icon={<Rocket className="h-6 w-6" />}
            />

            {/* Consciousness-based Voting */}
            <ExpandableSection
              title="Glasovanje na podlagi zavesti"
              summary="Novo razumevanje demokracije, ki upošteva globino razmisleka in informiranost volilcev."
              content="Tradicionalna demokracija ima svoje omejitve. Raziskujemo nove modele:

• Kvalificirano glasovanje z izobraževalnimi moduli
• Sistemi vrednotenja argumentov in dokazov
• Deliberativna demokracija v manjših skupinah
• Tehnološko podprto sodelovalno odločanje
• Transparentni sistemi za spremljanje učinkov politik

Cilj je informirane, premišljene odločitve, ne le popularnost."
              icon={<Brain className="h-6 w-6" />}
            />

            {/* New Legal Order */}
            <ExpandableSection
              title="Nov pravni red"
              summary="Pravni sistem, prilagojen digitalni dobi, z algoritmično transparentnostjo in pravičnostjo."
              content="Pravni sistem mora slediti tehnološkemu razvoju:

• Algoritmična transparentnost v sodstvu
• Digitalne pravice in zasebnost kot temeljne pravice
• Pravna regulacija umetne inteligence
• Restoracijska pravica namesto kaznovalne
• Mednarodni pravni okviri za globalne izzive

Pravičnost mora biti dostopna, razumljiva in učinkovita za vse."
              icon={<Scale className="h-6 w-6" />}
            />

            {/* Data Ownership */}
            <ExpandableSection
              title="Lastništvo podatkov"
              summary="Vaši podatki so vaši. Pika. Nova zakonodaja za digitalno suverenost."
              content="Podatki so novo bogastvo, vendar ga trenutno kradejo:

• Pravica do popolnega nadzora nad osebnimi podatki
• Obvezno plačilo za uporabo podatkov
• Decentralizirane rešitve za shranjevanje podatkov
• Stroge kazni za kršitelje zasebnosti
• Javno financirane alternative velikim platformam

Digitalna suverenost je temelj svobode v 21. stoletju."
              icon={<Database className="h-6 w-6" />}
            />

            {/* New Economy with AI */}
            <ExpandableSection
              title="Novo gospodarstvo z UI"
              summary="Kako umetna inteligenca lahko služi vsem, ne le elitam. Demokratizacija koristi UI."
              content="UI bo preoblikovala vse - poskrbimo, da koristi vsem:

• Javna infrastruktura za UI raziskave
• Demokratičen nadzor nad razvojem UI
• Prerazporeditev koristi od avtomatizacije
• Podpora delavcem pri prehodu v novo gospodarstvo
• Etični okviri za UI razvoj

UI mora biti orodje osvoboditve, ne izkorišćanja."
              icon={<Bot className="h-6 w-6" />}
            />

            {/* Transparency */}
            <ExpandableSection
              title="Transparentnost"
              summary="Popolna odprtost vladanja, odločanja in porabe javnega denarja."
              content="Demokracija brez transparentnosti ni demokracija:

• Vsi vladni dokumenti javno dostopni
• Odprto kodna programska oprema v javni upravi
• Transparentno financiranje političnih strank
• Javni nadzor nad lobiranjem
• Blockchain sledljivost javnih sredstev

Ljudje imajo pravico vedeti, kako deluje njihova država."
              icon={<Eye className="h-6 w-6" />}
            />

            {/* Education */}
            <ExpandableSection
              title="Izobraževanje"
              summary="Izobraževalni sistem za 21. stoletje - kritično mišljenje, ustvarjalnost, čustvena inteligenca."
              content="Sedanji izobraževalni sistem pripravlja učence za svet, ki ne obstaja več:

• Poudarek na kritičnem mišljenju in reševanju problemov
• Čustvena inteligenca in medosebne veščine
• Tehnološka pismenost za vse
• Vseživljenjsko učenje kot pravica
• Personalizirano učenje s pomočjo tehnologije

Vsak otrok si zasluži izobraževanje, ki ga pripravi na prihodnost."
              icon={<GraduationCap className="h-6 w-6" />}
            />

            {/* Health */}
            <ExpandableSection
              title="Zdravje"
              summary="Preventivno zdravstvo, celostni pristop, dostopnost za vse."
              content="Zdravje ni privilegij - je temeljna človekova pravica:

• Popolnoma brezplačno zdravstvo za vse
• Poudarek na preventivi in zdravem življenjskem slogu
• Integracija tradicionalne in alternativne medicine
• Mentalno zdravje kot prioriteta
• Raziskave v javnem interesu, ne profita

Zdrava družba je produktivna in srečna družba."
              icon={<Stethoscope className="h-6 w-6" />}
            />

            {/* Travel */}
            <ExpandableSection
              title="Potovanja"
              summary="Pravica do mobilnosti, trajnostni transport, odprtje meja."
              content="Gibanje ljudi bogati kulture in spodbuja razumevanje:

• Pravica do svobodnega gibanja kot temeljna pravica
• Trajnostni javni transport brezplačen za vse
• Zmanjšanje ovir za mednarodno potovanje
• Podpora izmenjavam in sodelovanju
• Zelena infrastruktura za transport

Svet brez meja je svet brez konfliktov."
              icon={<Plane className="h-6 w-6" />}
            />

            {/* Nature */}
            <ExpandableSection
              title="Narava"
              summary="Pravice narave, ekološka obnova, harmonija z okoljem."
              content="Narava ni vir za izkoriščanje - je naš dom:

• Pravice narave zapisane v ustavo
• Masivna obnova ekosistemov
• Prehod na 100% obnovljive vire energije
• Prepoved škodljivih kemikalij in praks
• Biomimikrijska tehologija

Brez zdrave narave ni zdrave družbe."
              icon={<TreePine className="h-6 w-6" />}
            />

            {/* Business */}
            <ExpandableSection
              title="Poslovanje"
              summary="Podjetja kot služabniki družbe, ne gospodje. Nova korporacijska odgovornost."
              content="Podjetja morajo služiti družbi, ne obratno:

• Delavska participacija v lastništvu podjetij
• B-Corp status kot standard za velika podjetja
• Družbena korist kot merilo uspešnosti
• Omejitve plač vodilnih glede na najnižje plače
• Podpora socialnim podjetjem in zadružništvu

Gospodarstvo mora biti orodje človeškega blagostanja."
              icon={<Building className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-gradient">
            Pridruži se spremembam
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nov Svetovni Red Lana ni le politično gibanje - je skupnost ljudi, ki verjamejo v boljšo prihodnost. 
            Vsak glas šteje, vsaka ideja je dobrodošla.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="gradient-button text-lg px-8 py-4">
              <Heart className="mr-2 h-5 w-5" />
              Pridruži se gibanju
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
              <Sparkles className="mr-2 h-5 w-5" />
              Sodeluj pri projektih
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            M'ejmo se fajn - skupaj gradimo svet, v katerem bi radi živeli! ✨
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;