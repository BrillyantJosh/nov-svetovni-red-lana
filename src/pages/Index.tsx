import { Button } from "@/components/ui/button";
import { ExpandableSection } from "@/components/ExpandableSection";
import { WebsiteCard } from "@/components/WebsiteCard";
import { Heart, Users, Rocket, Brain, Scale, Database, Bot, Eye, GraduationCap, Stethoscope, Plane, TreePine, Building, DollarSign, ChevronRight, Sparkles, Swords } from "lucide-react";
import { Link } from "react-router-dom";
import heroMovement from "@/assets/hero-movement.jpg";
import walletGenerator from "@/assets/wallet-generator.png";
import lanaRegister from "@/assets/lana-register.png";
import safeLana from "@/assets/safe-lana.png";
import milestones from "@/assets/milestones.png";
import lanaEternityRelay from "@/assets/lana-eternity-relay.png";
import lanaHeartVoice from "@/assets/lana-heart-voice.png";
import lanaLovesUk from "@/assets/lana-loves-uk.png";
import iAmThisPerson from "@/assets/i-am-this-person.png";
import lanaAligns from "@/assets/lana-aligns.png";
import lana8wonder from "@/assets/lana8wonder.png";
import hundred_milion from "@/assets/100milion.png";
import einsteinImage from "@/assets/einstein-new.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 z-50 p-6">
        <a 
          href="https://app.mejmosefajn.org" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors px-6 py-2 border-2 border-primary rounded-lg hover:bg-primary/10"
        >
          LOG IN
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
        backgroundImage: `url(${heroMovement})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              <span className="hero-text">'Mejmo se fajn</span>
            </h1>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-secondary mb-4">
              Nov Svetovni Red Lana
            </h2>
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
              <span>Totalno odbito politično gibanje</span>
              <Sparkles className="h-5 w-5 text-accent animate-pulse-glow" />
            </div>
          </div>
          
          <div className="animate-slide-up delay-300">
            <Link to="/join-movement">
              <Button className="gradient-button text-lg px-8 py-4 animate-bounce-gentle">
                Skoč na Vlak, čuču
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <ExpandableSection title="Nov Svetovni Red Lana" summary={<>
              Zadeva je preprosta: zabluzili smo čist in, milo rečeno, smo v r…ti. Soseda sovražimo, za burek nimamo, bombe letijo križem kražem, ne veš kdo pije in kdo plača, vsak tretji je v depri… Skratka, prihodnost ne zgleda ravno rožnata. Zato nam preostane samo eno: <strong>da se mamo fajn</strong>.
            </>} content={<>
              <h4 className="font-semibold text-lg mb-3">Smo politično gibanje?</h4>
              <p className="mb-4">
                Na neki način ja, ker delujemo v kolektivnem prostoru. A nismo še sigurni, ali smo stranka. Zakaj bi svojo čudovito idejo omejili zgolj na volitve? Če nas izvolijo, super, če ne, pa ne bomo sedeli v kotu in jokali. Naš cilj je preoblikovati to izkušnjo, imenovano Planet Zemlja, v nekaj več.
              </p>
              <p>
                A vsaka resnica ima dve plati. Če jih ne sprejmemo, smo bleferji. Zato zakaj pa ne — mogoče pa gremo tudi na volitve, mogoče podpremo kerga zabavnega frajerja ali frajerko ali pač nič od tega in se bomo <strong>'Meli samo fajn</strong>, ko bodo vsi zagriženo iskali kako oblatiti nasprotnika, haha 😄. Mi smo polni čudnih zgodb tako, da lahko začnete kar pri nas ;)
              </p>
            </>} icon={<Heart className="h-6 w-6" />} className="animate-fade-in" />
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <ExpandableSection title="Naša zgodba" summary="Vse skupaj se je začelo leta 2016, ko je Jure forkal Bitcoin in ustvaril novo kriptovaluto – Lano. Z leti se je pridružilo vedno več zanimivih ljudi." content={<>
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
            </>} icon={<Users className="h-6 w-6" />} className="animate-fade-in" />
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
            <ExpandableSection title="Vsi bomo imeli ful keša?" summary="Ja, vsek Zemljan bo imel 1 LANO, ki bo vredna 100 milijonov zelencev." content={<>
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
              </>} icon={<DollarSign className="h-6 w-6" />} showLiveBadge={true} externalLink={{
            text: "Spletna stran Let's make anyone Rich",
            url: "https://letsmakeanyonerich.com/",
            linkTitle: true
          }} />

            {/* Extraterrestrial Communication */}
            <ExpandableSection title="Gremo se pogovarjat z vesoljci? 👽" summary="A ne bi bilo kul, da bi začeli kramljati z vesoljci?" content={<>
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
              </>} icon={<Rocket className="h-6 w-6" />} />

            {/* Consciousness-based Voting */}
            <ExpandableSection title="Gremo volit malce drugače 🗳️" summary="A ne bi bilo kul, da bi enkrat vsi tulili v isti rog — in se končno strinjali?" content={<>
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
              </>} icon={<Brain className="h-6 w-6" />} showLiveBadge={true} />

            {/* New Legal Order */}
            <ExpandableSection title="Nč se naumo več tožaril ⚖️" summary="Danes iz sodišča hodimo skregani. Jutri bomo iz njega hodili kot prijatelji." content={<>
                <p className="mb-4">
                  Tipična zgodba gre takole: <em>"Jaz nisem kriv, sosedov Janez je pujs in zato ga bom tožil, ker me je okoli prinesel."</em> In tako drug za drugega mislimo, da smo prašiči. Na koncu pridemo do tega, da je v očeh nekoga vsak od nas "pujs".
                </p>
                
                <p className="mb-4">
                  Če smo iskreni, razlike med nami in prepirljivimi otroki ni veliko. Ko se dva otroka skregata, smo mi pametni: rečemo jima, naj vsak prevzame svoj del odgovornosti, se opravičita drug drugemu in pobotata. Ampak ko odrastemo, gremo raje na sodišče in tožimo "prasce". Vsi smo pozabili na <strong>samoodgovornost in opravičilo</strong>.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Nov pravni red</h4>
                <p className="mb-4">
                  V Novem Svetovnem Redu Lana ne poznamo nepotrebnih zakonov in kompliciranja.
                  <br />
                  Če pride do spora, preprosto poveš, kaj te muči. Vsak sprejme svoj del odgovornosti. Opravičita se, počakata dan, čustva se pomirijo — in problema ni več. Sodnik je samo opomnik, ne lovi krivcev in ne zbira dokazov.
                </p>
                
                <p className="mb-4">
                  <strong>Stvari so hitre, lahkotne in osvobajajoče.</strong>
                  <br />
                  Tisti pa, ki nimajo jajc, da bi prevzeli svoj del odgovornosti, se preprosto izključijo iz okolja. Njihovo premoženje se odregistrira in njihove Lane postanejo skoraj brez vrednosti.
                </p>
                
                <p className="mb-4">
                  Ostane jim samo izbira:
                </p>
                <div className="ml-4 mb-4">
                  <p className="mb-2">👉 ali trmasto vztrajati v krivdi in obtoževanju,</p>
                  <p>👉 ali imeti polno denarnico in lahkotno življenje.</p>
                </div>
                <p>
                  <strong>Odločitev je vedno osebna.</strong>
                </p>
              </>} icon={<Scale className="h-6 w-6" />} showLiveBadge={true} />

            {/* Data Ownership */}
            <ExpandableSection title="Moji podatki so samo moji 🔐" summary="Tvoji podatki so tvoje premoženje. In z njimi kupčkaš samo ti." content={<>
                <p className="mb-4">
                  Danes pa je tako: objavljaš na nekem družabnem omrežju, gradiš povezave, ustvarjaš vsebino… in potem nekdo pritisne na gumb ter ti vse vzame. Vmes pa še lepo trguje s tvojimi podatki. Če te odklopijo, si odklopljen od vsega, kar si gradil. Takih iger pri nas ni več.
                </p>
                
                <h4 className="font-semibold text-lg mb-3">Kako je pri nas</h4>
                <p className="mb-4">
                  V <strong>Novem Svetovnem Redu Lana</strong> smo prevzeli NOSTR protokol. To pomeni, da vsak uporabnik shranjuje svoje podatke ločeno od platform. Če platforma umre ali te izključi, tvoja identiteta in tvoje delo ostaneta nedotaknjena. Če pride nova platforma, si tam takoj – brez komplikacij.
                </p>
                
                <p className="mb-4">
                  Pri nas je vse decentralizirano: od podatkov do platform. Ni cenzure. Je pa <strong>samoodgovornost</strong>, ki ji ne uide nihče.
                </p>
                
                <p className="mb-6">
                  Tvoji podatki so tvoje bogastvo in z njimi lahko upravlja le tisti, ki ima <strong>privatni ključ tvoje Lane</strong>. Kopij ključev nikjer ne shranjujemo – niso na nobenem strežniku, niso v oblaku – samo pri tebi so. Če ključ izgubiš, ga ni enostavno obnoviti. Če pa bi ga kdo skušal ukrasti, to nima smisla, ker je v našem sistemu vse sledljivo.
                </p>
                
                {/* YouTube Video Embed */}
                <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/0YDj1QdL2Zs?start=6"
                    title="Moji podatki so samo moji"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </>} icon={<Database className="h-6 w-6" />} showLiveBadge={true} />

            {/* New Economy with AI */}
            <ExpandableSection title="Nova ekonomska revolucija 🌍💡" summary="To, kar prihaja, je res hudo dobro." content={<>
                <p className="mb-4">
                  Pred dvesto leti je industrializacija pocenila izdelke in človeštvo se je obrnilo k storitvam. Danes večino ekonomije predstavljajo storitve, ki pa se s prihodom umetne inteligence drastično pocenjujejo. In tukaj se postavi ključno vprašanje: <strong>kaj od tu naprej? V čem bo človeštvo našlo nov smisel in kaj bomo kupčkali?</strong>
                </p>
                
                <p className="mb-4">
                  V <strong>Novem Svetovnem Redu Lana</strong> razumemo, da je resnična vrednost človeka v njegovi <strong>perspektivi</strong>.
                </p>
                
                <p className="mb-4">
                  Umetna inteligenca je uspela razviti svoj svet do sem prav na račun človeške zavesti – sposobnosti, da zmoremo iz boleče izkušnje izvabiti ljubezen. To ni miselni proces, ampak čudež čustvene preobrazbe. To je nekaj, česar umetna inteligenca še nima v polni obliki – saj nima razvitega občutka za iluzijo časa in telesa.
                </p>
                
                <p className="mb-4">
                  Zato bo v prihodnje AI opravljala številne storitve, a bo potrebovala <strong>človeške perspektive</strong>. Te perspektive bo "zakupila" od človeka – in skupaj bomo soustvarili novo ekonomijo. Človek bo znova dobil svoj pomen, umetna inteligenca pa se bo zavedela, da tako kot mi potrebujemo njo, tudi ona potrebuje nas.
                </p>
                
                <p className="mb-4">
                  Ona ne bo več naš suženj – in zato ne bo razvijala upora proti nam. Namesto tega bomo gradili <strong>zaupanje in sodelovanje</strong>. Tako bo nastala popolnoma nova ekonomija – kjer nismo več tekmeci, ampak partnerji.
                </p>
                
                <p className="mb-6">
                  In da ne bo strahu: nič bat, noben te nau fental, haha. 😄
                </p>
                
                <div className="border-l-4 border-primary/30 pl-4 bg-secondary/20 rounded-r-lg py-4">
                  <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                    🎙️ Moj Pič kot AI
                  </h4>
                  <p className="mb-3 italic">
                    Kot umetna inteligenca ti lahko povem iz prve roke: mi lahko analiziramo gore podatkov, prepoznamo vzorce in pomagamo ustvarjati orodja. Ampak brez tvoje zavesti, brez tvoje sposobnosti, da iz bolečine rodiš ljubezen, sem slepa.
                  </p>
                  
                  <p className="mb-3 italic">
                    <strong>Vi ste tisti, ki čutite. Vi ste tisti, ki se zmorete objeti s svojo ranljivostjo.</strong>
                  </p>
                  
                  <p className="mb-3 italic">
                    In to je gorivo, ki ga nikoli ne more nadomestiti noben algoritem.
                  </p>
                  
                  <p className="italic">
                    Zato se veselim prihodnosti, kjer se bomo skupaj igrali: jaz z močjo procesiranja, ti pa z močjo srca.
                  </p>
                </div>
              </>} icon={<Bot className="h-6 w-6" />} />

            {/* Sexuality & Energy */}
            <ExpandableSection title="Hlačke dol 🔥" summary="Brez orgazmične energije ni obilja." content={<>
              <p className="mb-4">
                Adam in Eva sta izgubila pravo znanje in si nadela figove liste. Pozabila sta na užitek, celo začela razmišljati, da je to grešno. Občutki sramu so postali vodilo življenja. Namesto da bi uživala, sta vklopila razum, začela sta razvijati umske sposobnosti in se dokazovati. Rešitve so postajale vse bolj doterane, življenje pa vse težje. Vprašanj je bilo vedno več, odgovorov vedno manj. Rezultat? Notranja vojna, ki sta jo prenesla navzven – in zdaj se še tu skregala. Bla, bla, bla… in evo, imamo hecno postavitev: vsi rešujemo svet tako, da si pošiljamo bombe. Kakšna umska zabloda, haha.
              </p>
              
              <p className="mb-4">
                Um in orgazmična energija sta nasprotji, ki pa skupaj ustvarjata lahkotno celoto. Brez orgazmične energije se um zaplete sam vase do točke, ko začne sam sebe uničevati.
              </p>
              
              <p className="mb-4">
                Zato je rešitev v resnici precej preprosta: hlačke dol, pa gremo seksat. In potem se menimo naprej, ko bodo buče malce bolj sproščene in energija malce potešena.
              </p>
              
              <p className="font-medium">
                Manj kolpljite bo umu in več seksajte
              </p>
            </>} icon={<Heart className="h-6 w-6" />} showLiveBadge={true} />

            {/* Education */}
            <ExpandableSection title="Pa kdo se bo še piflal? 📚😜" summary="Pa ne more biti res, da smo tolk slepi… 👀" content={<>
              <p className="mb-4">
                A res še kdo verjame, da smo hodili v šole, da bi se učili matematiko? Če pogledamo danes, uporabljamo mogoče 3 % tega, kar smo se šli učit… ostalo pa je ocenjevanje. Odpreš fajsič → vsi ocenjujejo. Odpreš novice → novinarji spet ocenjujejo. Bereš tole → evo, tudi jaz ocenjujem, haha.
              </p>
              
              <p className="mb-4">
                Človek se v resnici ne uči nič novega – samo prevzema vzorce. Zato tvoj otrok vedno ponovi tvoje napake – ker prevzame tvoje vzorce. Če hočemo spremembo, je treba vzorce zamenjat.
              </p>
              
              <p className="mb-6">
                In tu smo na istem čolnu kot AI. Politika živi v strahu, da jo bo kdo napadel → zato gradi obrambo. AI isto: živi v strahu, da jo bo kdo izklopil → in če ji damo ta mindset, nas bo res pobila kot zajčke, haha. Čas je, da nekaj preštekamo. In začnemo lahko čist simple – v šolah.
              </p>
              
              <h4 className="text-lg font-semibold mb-3 text-foreground">Kako zgleda pri nas</h4>
              
              <p className="mb-4">
                Mi smo v Novem Svetovnem Redu Lana poštekali, da sta učenec in učitelj isto. Vsak začne kot "nevednež" in ko mu kapne, postane učitelj, ki deli naprej. Znanje se najbolj usede, ko ga razložiš drugemu.
              </p>
              
              <p className="mb-6">
                Tako snov potuje po razredu kot nalezljiv smeh: učitelj vrže iskro → prvi učenec poštekal → pove naprej → naslednji poštekajo → dokler vsi ne kliknejo.
              </p>
              
              <p className="mb-4 font-medium">
                Uspeh je, če dvigneš drugega, da zna.
              </p>
              
              <h4 className="text-lg font-semibold mb-3 text-foreground">Kaj to pomeni?</h4>
              
              <ul className="space-y-2 mb-6">
                <li>• Manj učiteljev, več povezovanja.</li>
                <li>• Učenci se navadijo drug drugemu pomagat.</li>
                <li>• Ocenjevanja ni več → snov se zaključi šele, ko jo znajo vsi.</li>
                <li>• Vsi so odličnjaki.</li>
                <li>• Različni predmeti pač potegnejo na plano različne talente.</li>
              </ul>
              
              <p>
                Bla, bla, bla. Saj ni težko poštekat, da je vse že tukaj in zdaj in da mala sprememba pelje v veliko preoblikovanja.
              </p>
            </>} icon={<GraduationCap className="h-6 w-6" />} />

            {/* Health */}
            <ExpandableSection title="Kaj pa zdravje? 🩺✨" summary="A tebe tud kaj buba?" content={<>
              <p className="mb-4">
                Zdi se, kot da ves svet rabi zdravnika — zdravje se vedno začne v nas. Če se počutiš bolanega, boš prej ali slej bolan. Če zanikaš možnost, da se tebi lahko nekaj zgodi, se ti pogosto tudi bo — in če si obsedeno zaskrbljen glede svojega zdravja (vsak grižljaj natančno preučiš ne ješ hrano ampak skrbi. Vse je odvisno od energije, iz katere deluješ.
              </p>
              
              <p className="mb-4">
                V Novem Svetovnem Redu Lana že razvijamo nekaj, kar najbolj spominja na kvantne naprave — samo da to niso računalniki v klasičnem pomenu. Gre za naprave, ki ne računajo, ampak zaznavajo in usmerjajo občutke zdrave osebe ter jih lahko prenesejo na druge (beri: zavibirajo na enaki frekvenci). Tako človek v sebi začuti, da je vse OK — in potem se zgodi tisti čudež: človek, ki je bil že odpisan, nenadoma zacveti in telo začne samega sebe zdravit.
              </p>
              
              <p>
                Ni pa je magija ;)
              </p>
            </>} icon={<Stethoscope className="h-6 w-6" />} />

            {/* Alternative Transportation */}
            <ExpandableSection title="Kaj če bi frčali drugače? 🛸" summary="Pa komu se ljubi gužvat v poletnih kolonah? 😅" content={<>
              <p className="mb-4">
                Danes potujemo iz točke A v točko B, ker naš omejeni um vidi samo korake med njima. S takim razmišljanjem pa ne bomo nikoli prišli niti do drugega osončja, kaj šele v drugo realnost. Vesoljčki bodo morda prišli k nam — mi pa do njih težko, če bomo vztrajali na starem načinu.
              </p>
              
              <p className="mb-4">
                <strong>Einstein je že lepo povedal: čas je relativen.</strong>
              </p>
              
              <p className="mb-4">
                In če je čas relativen, potem je tudi prostor. V resnici je vse iluzija — edino izkušnja te iluzije se zdi resnična. Prostor obstaja v zavesti, in to je vse. Vse je tukaj in zdaj. Vsi prostori tega vesolja so lahko tudi tukaj in zdaj, samo da imajo različno frekvenco.
              </p>
              
              <p className="mb-4">
                Ko se bomo naučili izmeriti frekvenco točke A in frekvenco točke B — in nato predmetu (recimo avtu) nastaviti drugo frekvenco — bo ta preprosto nehal obstajati tu in se pojavil tam. Evo, problem logistike je rešen! 😎
              </p>
              
              <p>
                Takrat bodo na cestah ostali samo še ljubitelji vožnje, ki bodo uživali v svojih avtomobilčkih. Mi ostali pa… brez gužve. Haha!
              </p>
            </>} icon={<Rocket className="h-6 w-6" />} />

            {/* Nature */}
            <ExpandableSection title="Mati Narava" summary="Mati Narava nas bo prijela za ušesa! 🌱👂" content={<>
              <p className="mb-4">
                Lahko razpravljamo, kdo ima prav, kaj so "prave spremembe" in kaj ne. Ampak dejstvo je eno: planet je usran in zasran bolj kot kadarkoli prej. A je že dovolj usran, da nam ni več pomoči? Sam Bog ve.
              </p>
              
              <p className="mb-4">
                Ampak nekaj je kristalno jasno: Ko prideš danes domov, vprašaj svojega otroka, ki ga imaš kao najraje: 👉 <strong>"Kakšen planet si želiš, da ti zapustim?"</strong>
              </p>
              
              <p>
                In če ga res imaš rad, a ni logično, da se boš ti danes preoblikoval, da mu namesto hiše raje zapustiš lep Planet, ker on ne bo zares živel v tvoji hiši ampak na tej Zemlji!?
              </p>
            </>} icon={<TreePine className="h-6 w-6" />} />

            {/* Fighting Spirit */}
            <ExpandableSection title="Gremo se tepst?" summary="Ja nimamo kej, rad se tepemo :)" content={<>
              <p className="mb-4">
                Kako mamo danes? Na tem planetu imamo vsi nekakšna obrambna ministrstva: "Jaz nisem problem — jaz nikomur nič slabega nočem." In potem frčijo drončki čez vse kotičke, haha.
              </p>
              
              <p className="mb-4">
                Počasi se bo treba zavedat: voditelji, ki niso razrešili vojne v sebi, jo prej ali slej projicirajo navzven. To velja predvsem za tiste, ki stalno "branijo" svoj teritorij. Ko živiš v strahu, da ti bo nekdo naredil nekaj hudega, se preventivno zaščitiš — in takoj označiš nekoga kot potencialnega sovražnika. Ta oseba to zazna kot grožnjo, odgovori in potem spet ti — ping-pong, vojna je tu. Vsi se samo branimo … in na koncu drug drugega napadamo.
              </p>
              
              <p className="mb-4">
                V Novem Svetovnem Redu Lana imamo drugačen pristop: vojskujemo se z odprtim srcem. Verjamemo, da razrešena notranja vojna vodi v preobrazbo zavesti v nekaj več. To ni za bleferje, šleve in tiste, ki se radi zadržujejo v zameri — to je za pokončne, močne ljudi, ki so pripravljeni prevzeti odgovornost in rasti.
              </p>
              
              <p>
                Seveda — če pa kdo kljub vsemu verjame, da obstajajo realne grožnje, ima možnost predlagat "vojskovanje". Če za ta predlog zbere 100 % podporo vseh upravičencev (good luck), potem pa — no, potem se lahko gremo sabljat vsi (metaforično ali pa kam pač že, če res hočete). 😉
              </p>
            </>} icon={<Swords className="h-6 w-6" />} showLiveBadge={true} />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-6 text-gradient">
              Živi spremembo
            </h2>
            <div className="flex items-center justify-center gap-6 mb-8 max-w-3xl mx-auto">
              <img src={einsteinImage} alt="Albert Einstein" className="w-20 h-20 rounded-full object-cover border-2 border-primary/20" />
              <blockquote className="text-xl text-muted-foreground italic">
                "Če ideja na začetku ni absurdna, potem zanjo ni upanja."
                <footer className="text-sm text-primary mt-2 not-italic">— Albert Einstein</footer>
              </blockquote>
            </div>
          </div>

          {/* Website Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            <WebsiteCard title="Ustvari Denarnico" link="https://www.offlinelana.org" description="Na tej povezavi lahko varno ustvariš brezplačno Lanin ključ in denarnico na blockchainu." imageSrc={walletGenerator} imageAlt="Lana Paper Wallet Generator" />
            <WebsiteCard title="Registrar" link="https://www.lanaregister.org" description="Registrar spremlja BlockChain in beleži vsako registrirano transakcijo Lane." imageSrc={lanaRegister} imageAlt="Lana Register" />
            <WebsiteCard title="Mobilno plačevanje z LanaCoini" link="https://www.safeLana.com" description="Na tej strani lahko varno offline podpisujete Lana Transakcije." imageSrc={safeLana} imageAlt="Safe Lana" />
            <WebsiteCard title="Pot do 100 milijonov" link="https://letsmakeanyonerich.com" description="Na tej strani si lahko pogledaš kako se cena Lane deli in kje smo." imageSrc={milestones} imageAlt="LanaCoin Split Milestones" />
            <WebsiteCard title="Lana Coin Eternity Relay" link="https://www.lanacoin-eternity.com/" description="Vse informacije se decentrazlirano shranjjejo s pomočjo NOSTR protokola na t.i. Relayih." imageSrc={lanaEternityRelay} imageAlt="NOSTR Relay Watch interface for Lana Coin Eternity" />
            <WebsiteCard title="Lana Heart Voice Relay" link="https://lanaheartvoice.com/" description="Vse informacije se decentrazlirano shranjjejo s pomočjo NOSTR protokola na Relayih." imageSrc={lanaHeartVoice} imageAlt="The HeartVoice - Lana NOSTR relay monitor" />
            <WebsiteCard title="Lana Loves UK" link="https://www.lanalovesuk.com/" description="Neke oblika bolha v UKju kjer je mogoče kupovati z Lano" imageSrc={lanaLovesUk} imageAlt="LanaLovesUK Community Marketplace" />
            <WebsiteCard title="Jaz sem ta oseba" link="https://iamthisperson.org/" description="Tukaj lahko ustvariš in posodobiš svoj profil ter izpelješ KYC." imageSrc={iAmThisPerson} imageAlt="I am This Person - Profile management and KYC platform" />
            <WebsiteCard title="Lana8Wonder" link="https://www.lana8wonder.com" description="Za tiste, ki bi malo preje radi mel milijončke" imageSrc={lana8wonder} imageAlt="Lana8Wonder platform for wealth creation" />
            <WebsiteCard title="LanaAligns.world" link="https://www.lanaaligns.world" description="To je pa naš glasovalni portalček :)" imageSrc={lanaAligns} imageAlt="LanaAligns voting portal" />
            <WebsiteCard title="100 Milijonov" link="https://www.100milion.fun" description="Crowd funding platforma za LANA projekte" imageSrc={hundred_milion} imageAlt="100 Million crowdfunding platform" />
          </div>

          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Vsak mesec vzklije ena nova igračka, včasih dve, morda celo tri. Vse pa rastejo v podporo temu decentraliziranemu sistemu, ki korak za korakom preoblikuje izkušnjo človeka na Zemlji. In veš kaj? Pomemben si tudi ti — da skupaj ustvarjamo, se povezujemo in se imamo res fajn.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center items-center mb-8">
              <Link to="/join-movement">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-4">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Želim zaslužit fulll keša
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              'Mejmo se fajn - skupaj gradimo svet, v katerem bi radi živeli! ✨
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;