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
            summary={<>
              Zadeva je preprosta: zabluzili smo čist in, milo rečeno, smo v r…ti. Soseda sovražimo, za burek nimamo, bombe letijo križem kražem, ne veš kdo pije in kdo plača, vsak tretji je v depri… Skratka, prihodnost ne zgleda ravno rožnata. Zato nam preostane samo eno: <strong>da se mamo fajn</strong>.
            </>}
            content={<>
              <h4 className="font-semibold text-lg mb-3">Smo politično gibanje?</h4>
              <p className="mb-4">
                Na neki način ja, ker delujemo v kolektivnem prostoru. A nismo še sigurni, ali smo stranka. Zakaj bi svojo čudovito idejo omejili zgolj na volitve? Če nas izvolijo, super, če ne, pa ne bomo sedeli v kotu in jokali. Naš cilj je preoblikovati to izkušnjo, imenovano Planet Zemlja, v nekaj več.
              </p>
              <p>
                A vsaka resnica ima dve plati. Če jih ne sprejmemo, smo bleferji. Zato zakaj pa ne — mogoče pa gremo tudi na volitve, mogoče podpremo kerga zabavnega frajerja ali frajerko ali pač nič od tega in se bomo <strong>M'eli samo fajn</strong>, ko bodo vsi zagriženo iskali kako oblatiti nasprotnika, haha 😄. Mi smo polni čudnih zgodb tako, da lahko začnete kar pri nas ;)
              </p>
            </>}
            icon={<Heart className="h-6 w-6" />}
            className="animate-fade-in"
          />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <ExpandableSection
            title="Naša zgodba"
            summary="Vse skupaj se je začelo leta 2016, ko je Jure forkal Bitcoin in ustvaril novo kriptovaluto – Lano. Z leti se je pridružilo vedno več zanimivih ljudi."
            content={<>
              Vse skupaj se je začelo leta 2016, ko je Jure forkal Bitcoin in ustvaril novo kriptovaluto – <em>Lano</em>.
              <br /><br />
              Kot večina kriptovalut je tudi ta šla malo gor in malo dol. Kasneje so jo fantje in punce malo preoblikovali, tako da so postale transakcije res poceni.
              <br /><br />
              Z leti se je pridružilo vedno več zanimivih ljudi. Nekega lepega dne je Gašper predstavil <strong>Plan 15</strong>, nekaj let kasneje pa se je pridružil še Joško – model, ki živi v gozdu in snema take žgečkljive reči. On je rekel: <em>"Zakaj pa se ne bi zgledovali po naravi? Naj znotraj Lane nastane registrirana Lana, ki deluje kot protiutež trenutnim Lanam. Skupaj tvorita celoto. Kot zima in poletje, kot vdih in izdih ..."</em>
              <br /><br />
              In tako smo zdaj tukaj.
              <br />
              Igramo se dalje. Ni nobenega strogega plana. Sproti ustvarjamo.
              <br />
              In predvsem: <strong>mamo se fajn</strong>. 😄
            </>}
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
              Naša vizija je totalno kul
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ne samo to – mi kar gradimo vzporedno novo realnost.<br />
              In tukaj je nekaj naših najbolj odštekanih idej. 🚀
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Money & Economy */}
            <ExpandableSection
              title="Vsi bomo imeli ful keša?"
              summary="Ja, vsak Zemljan bo imel 1 LANO, ki bo vredna 100 milijonov zelencev."
              content={<>
                <p className="mb-4">
                  Mama mia – brez keša lahko preživiš en dan, brez zraka pa samo par minut. A vseeno nas denar spravlja v stres dan za dnem, celo življenje. Če bi z zrakom dihali tako, kot "dihamo denar", bi bili vsi astmatiki, haha.
                </p>
                
                <p className="mb-4">
                  Denarni sistem potrebuje samo nekaj manjših preoblikovanj – in potem bomo polni keša. Tako zelo, da nihče več ne bo delal stvari, ki jih ne mara, ne bo garal nadur, ne bo škodil drugim ali svinjal planeta samo zato, da pobere dva centa več.
                </p>
                
                <p className="mb-4">
                  V Lana Svetovnem Redu smo pogledali, kako to počne narava. Ko se mamica in očka poseksata in nastane nova celica – zigota – se ta začne deliti eksponentno. Iz ene same celice nastane v 15 letih kar <strong>37 trilijonov celic</strong>. To je tako, kot da bi iz enega evra ali dolarja nastalo 37 trilijonov zelencev. To je več, kot je danes sploh vsega denarja v obtoku!
                </p>
                
                <p className="mb-4">
                  Vsak investitor sanja o taki rasti, a narava to počne popolnoma samoumevno. In mi smo dojeli, kako preprosto je to. Ne moremo verjeti, da v vseh teh tisočih letih še noben velefinančnik ni šel pogledat k naravi po navdih.
                </p>
                
                <p className="mb-4">
                  Zato – vsi bomo imeli ful keša. Na računu bo vsakemu svetilo kakih <strong>100 milijončkov</strong>, in potem boste dihali keš tako kot dihate zrak. V obilju.
                </p>
                
                <p>
                  In ja – <strong>imeli se bomo radi</strong>. 😄
                </p>
              </>}
              icon={<DollarSign className="h-6 w-6" />}
            />

            {/* Extraterrestrial Communication */}
            <ExpandableSection
              title="Gremo se pogovarjat z vesoljci? 👽"
              summary="A ne bi bilo kul, da bi začeli kramljati z vesoljci?"
              content={<>
                <p className="mb-4">
                  Vprašanje za milijon dolarjev: <strong>a smo res sami v vesolju? A smo res mi tista najbolj napredna bitja v univerzumu?</strong>
                </p>
                <p className="mb-4">
                  Pa saj moraš biti že skoraj vesoljc, da pomisliš, da ni nikogar bolj pametnega od tebe, haha.
                </p>
                
                <p className="mb-4">
                  Eden najbolj brihtnih ljudi v naši zgodovini je rekel: <strong>"Vem, da nič ne vem."</strong>
                </p>
                <p className="mb-4">
                  Mi pa, ki smo mogoče četrt tako pametni kot on, si upamo razmišljati, da smo najpametnejši v celem univerzumu… a še niti stopili nismo na drug planet, kaj šele v drugo osončje ali galaksijo. Seveda nismo sami. Med nami je polno "vesoljčkov", a jih ne priznamo, ker jih nočemo videti.
                </p>
                
                <p className="mb-4">
                  <strong>Ampak veste, kje je zajec?</strong>
                </p>
                <p className="mb-4">
                  Človek se že od svoje sence v temi ustraši. Presrani smo, ko vidimo medveda. Ko osa prileti mimo glave, mahamo, kot da gre za življenje. In zdaj ti, veliki pogumnež, želiš videti vesoljca? Verjemi, če se ti pojavi pred vrati, boš pograbil nož, palico ali puško in se branil, kot da te hoče fentat.
                </p>
                
                <p className="mb-4">
                  Mi smo nepotrpežljivi in prestrašeni, oni pa so umirjeni in potrpežljivi. Nikamor se jim ne mudi. Počasi, z majhnimi koraki, nas mehčajo. Zato imate toliko primerov kanaliziranja vesoljčkov – da nas počasi pripravljajo.
                </p>
                
                <p className="mb-4">
                  V <strong>Novem Svetovnem Redu Lana</strong> bomo najprej javno priznali, da obstajajo, in začeli z njimi komunicirati preko kanalov. Radovedno, z odprtim srcem, da nam prišepnejo kaj zanimivega. Korak za korakom.
                </p>
                <p>
                  Saj poznate komad: pasito, pasito, despacito… 😉
                </p>
              </>}
              icon={<Rocket className="h-6 w-6" />}
            />

            {/* Consciousness-based Voting */}
            <ExpandableSection
              title="Gremo volit malce drugače 🗳️"
              summary="A ne bi bilo kul, da bi enkrat vsi tulili v isti rog — in se končno strinjali?"
              content={<>
                <p className="mb-4">
                  Danes imamo kao demokracijo. Ampak v resnici vse, kar je demokratičnega v naši ureditvi, je to, da znova in znova "demokratično" izvolimo novega diktatorja, ki nas potem nekaj let j… Polovico časa pa porabimo, da se prerekamo, kdo je boljši in kdo slabši. Saj ne moremo biti tako naivni, da tega ne opazimo v dobi informatizacije. Ok, pred 1000 leti je to še šlo, ampak ne leta 2025.
                </p>
                
                <p className="mb-4">
                  V <strong>Novem Svetovnem Redu Lana</strong> ne volimo voditeljev, ampak <strong>ideje</strong>.
                  <br />
                  In to take, ki imajo višjo stopnjo zavesti in služijo vsem.
                </p>
                
                <p className="mb-4">
                  Kdor koli lahko predlaga idejo. Če je res na višjem nivoju zavesti, potem ne sme imeti niti enega samega nasprotnika. Samo take ideje lahko služijo celoti. Tak proces ni samo "volitve" — je pot v preoblikovanje skupnosti v nekaj več.
                </p>
                
                <p className="mb-4">
                  Zavedamo se, da predlogi, ki temeljijo na izbiri med dvema nasprotjema, po definiciji ne morejo biti višja zavest. Višja zavest vedno pokaže <strong>rešitev v igri med nasprotji</strong>. Samo to je celota — in samo v taki perspektivi ni nobenega razloga za nasprotovanje.
                </p>
                
                <p className="mb-4">
                  Če pa se kdo vseeno odloči nasprotovati zgolj iz <strong>"nasprotovanja"</strong>, se sproži samoodgovorni postopek: prevzeti mora odgovornost ali pa se samodejno izključi iz Lanine realnosti. Njegova denarnica se odregistrira in izgubi težo v quorumu. Torej odpor sam od sebe izgine.
                </p>
                
                <p className="mb-4">
                  V tem svetu smo veseli vsakega iskrenega odpora — ker nasprotovanje samo pomaga soustvarjati višjo stopnjo zavesti. Na koncu pa:
                  <br />
                  če si bil del quoruma in nisi glasoval, šteje to kot <strong>tihi glas ZA</strong>.
                </p>
                
                <p>
                  Končni rezultat? Vedno <strong>100 % ZA</strong>. ✅
                </p>
              </>}
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