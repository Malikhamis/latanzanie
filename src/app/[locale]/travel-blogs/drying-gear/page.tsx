'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

interface Section {
  id: string
  title: string
}

export default function DryingGearPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const locale = useLocale()

  // Handle scroll for header effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Add pulse animation to headers on initial load
  useEffect(() => {
    const headers = document.querySelectorAll('section[id^="method"] h2, section[id^="errors"] h2, section[id^="conclusion"] h2, section[id^="tip"] h2');
    headers.forEach(header => {
      header.classList.add('animate-pulse-once');
    });
    
    // Clean up animation class after initial pulse
    const timeout = setTimeout(() => {
      headers.forEach(header => {
        header.classList.remove('animate-pulse-once');
      });
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, [])

  // Define sections for TOC with hardcoded French titles
  const sections: Section[] = [
    { id: 'intro', title: 'Comment sécher ses affaires en trek quand il pleut ?' },
    { id: 'method1', title: 'La méthode la plus fiable : utiliser la chaleur du corps' },
    { id: 'method2', title: 'Sécher sous la tente : possible, mais pas n\'importe comment' },
    { id: 'method3', title: 'Profiter de la chaleur du camp : la méthode locale pour sécher ses vêtements en trek' },
    { id: 'method4', title: 'Le sac de secours : votre assurance anti-pluie pour le trek Kilimandjaro' },
    { id: 'method5', title: 'Profiter du vent et des accalmies : le séchage express en trek' },
    { id: 'errors', title: 'Les erreurs les plus fréquentes des trekkeurs et comment les éviter' },
    { id: 'conclusion', title: 'Conclusion : la pluie n\'est pas l\'ennemie, l\'humidité oui' },
    { id: 'tip', title: 'Conseil du guide local : anticiper l\'humidité pour réussir son trek Kilimandjaro' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/climate-hero.jpg')" }}>
        <div className="container mx-auto px-4">
          <Link href={`/${locale}/travel-blogs/climb-kilimanjaro#all-topics`} className="text-[#E8F8F5] hover:text-white mb-6 inline-flex items-center text-sm font-medium animate-slideInLeft">
            {locale === 'fr' ? '← Retour aux blogs' : '← Back to blogs'}
          </Link>
        </div>
      </section>

      {/* Author meta */}
      <section className="py-12 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <AuthorMeta
            author="Guide Local Kilimandjaro"
            date="Décembre 2025"
            readingTime="15 min de lecture"
          />
        </div>
      </section>

      {/* TOC mobile */}
      <section className="md:hidden py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <TOC
            title={locale === 'fr' ? 'Sommaire' : 'Overview'}
            items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
            onSelect={(id: string) => {}}
          />
        </div>
      </section>

      {/* Main content with TOC desktop */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC
                  title={locale === 'fr' ? 'Sommaire' : 'Overview'}
                  items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))}
                  onSelect={(id: string) => {}}
                />
              </div>
            </aside>
            
            <div className="flex-1 space-y-8">
              {/* Introduction Section */}
              <section id="intro" className="bg-white rounded-lg shadow-md p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">
                  Comment sécher ses affaires en trek quand il pleut ?
                </h1>
                <div className="prose prose-xl max-w-none text-gray-700">
                  <p className="mb-4">Conseils pratiques d'un guide local en Tanzanie</p>
                  <p className="mb-4">Quand on part en trek, surtout sur une montagne comme le Kilimandjaro, un vêtement mouillé n'est jamais "juste" un inconfort. C'est du froid en plus, de l'énergie perdue, un risque d'irritation ou d'ampoules.</p>
                  <p className="mb-4">Et en saison des pluies, tout peut être mouillé : vêtements, gants, chaussettes, sac...</p>
                  <p className="mb-4">Heureusement, il existe des méthodes simples et efficaces que les guides locaux utilisent chaque jour pour sécher les affaires malgré l'humidité.</p>
                </div>
              </section>

              {/* Method 1 Section */}
              <section id="method1" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>La méthode la plus fiable : utiliser la chaleur du corps</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lorsque le soleil est caché derrière les nuages, que le vent est faible ou inexistant, et qu'aucune source de chaleur n'est disponible autour de vous, la meilleure façon de sécher vos vêtements reste celle que la nature vous fournit gratuitement : votre propre corps. Cette méthode repose sur la chaleur que vous produisez en marchant ou simplement en restant actif, et elle est particulièrement efficace en montagne où chaque degré de chaleur compte.</p>
                    
                    <p className="mb-4">Pour que cette technique fonctionne, il faut d'abord préparer correctement le vêtement humide. Il est essentiel de l'essorer au maximum afin d'éliminer l'excès d'eau. Plus le tissu contient d'humidité, plus il mettra de temps à sécher et plus vous perdrez de chaleur si vous le portez trop tôt. Une fois que l'eau superflue a été évacuée, vous devez enfiler une couche sèche contre votre peau. Cette couche sert à maintenir votre chaleur corporelle et à éviter que le froid ne pénètre pendant le processus de séchage. Elle crée un espace protecteur entre vous et le vêtement humide.</p>
                    
                    <p className="mb-4">Le vêtement mouillé peut ensuite être placé sous votre polaire ou votre doudoune, directement contre le torse. La chaleur générée par votre corps va progressivement s'infiltrer dans le tissu, évaporant l'humidité. Cette technique est particulièrement utile pour les petits vêtements comme les gants, les chaussettes, les sous-vêtements ou les buffs, qui sèchent plus rapidement grâce à la chaleur concentrée.</p>
                    
                    <p className="mb-4">Enfin, il faut laisser le vêtement humide profiter de cette chaleur pendant la marche ou quelques heures au camp. Même si le séchage est lent, cette méthode est sûre et fiable, et elle permet de conserver un minimum de confort et de chaleur pendant votre trek. C'est une approche simple mais efficace, qui ne dépend ni du soleil ni du vent et qui fait partie des secrets bien connus des guides locaux.</p>
                  </div>
                </div>
              </section>

              {/* Method 2 Section */}
              <section id="method2" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Sécher sous la tente : possible, mais pas n'importe comment</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Beaucoup de trekkeurs pensent qu'il suffit de suspendre leurs vêtements dans la tente pour qu'ils sèchent. En réalité, la tente est souvent l'un des endroits les plus humides que vous puissiez trouver en montagne. L'air y est confiné, la condensation s'accumule sur les parois et la chaleur reste faible. Si l'on ne gère pas correctement l'espace, les vêtements peuvent rester mouillés pendant des heures, voire devenir encore plus humides.</p>
                    
                    <p className="mb-4">Pour sécher efficacement à l'intérieur de la tente, il faut comprendre comment l'air circule et comment l'humidité se déplace. Il est conseillé de suspendre les vêtements en hauteur, là où l'air circule un peu mieux que près du sol, tout en évitant de les coller directement aux parois. Les parois sont souvent couvertes de gouttelettes ou de condensation qui retomberaient sur le tissu. Si la tente possède des aérations, il est préférable de rapprocher les vêtements de ces zones, sans jamais les toucher, car l'air qui entre peut faciliter le séchage en éliminant une partie de l'humidité. Lorsque la pluie faiblit, même légèrement, il est utile de laisser une petite ouverture pour créer un léger courant d'air. Ce mouvement subtil permet à l'air de circuler autour des vêtements et accélère le séchage, tout en évitant que l'humidité stagnante ne s'y accumule.</p>
                    
                    <p className="mb-4">Certaines erreurs courantes peuvent compromettre totalement le séchage à l'intérieur. Coller les vêtements au toit de la tente est une mauvaise idée, car l'eau de condensation ruisselle facilement et mouille à nouveau le tissu. Laisser les habits dans un tas au fond de la tente crée un microclimat humide où les vêtements peuvent moisir. Enfin, poser les affaires sur le sol est également contre-productif, car le sol est souvent froid et humide, ce qui empêche l'évaporation et peut transformer vos vêtements en linges détrempés encore plus rapidement.</p>
                    
                    <p className="mb-4">En comprenant ces principes et en organisant soigneusement l'espace à l'intérieur de la tente, il est possible de faire sécher une partie de vos vêtements même lorsque la pluie ne s'arrête pas. Ce n'est jamais aussi rapide qu'à l'extérieur par temps sec, mais avec un peu d'attention, vous pouvez conserver au moins un minimum de confort et de chaleur au camp.</p>
                  </div>
                </div>
              </section>

              {/* Method 3 Section */}
              <section id="method3" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Profiter de la chaleur du camp : la méthode locale pour sécher ses vêtements en trek</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lors d'un trek sur le Kilimandjaro, gérer l'humidité est un défi quotidien, surtout pendant la saison des pluies Kilimandjaro. Même lorsque la pluie tombe sans interruption, il existe une astuce que les guides locaux connaissent bien : exploiter la chaleur autour du camp pour sécher les vêtements mouillés. Les zones situées près de la cuisine extérieure des camps sont légèrement plus chaudes que le reste du camp, et cette chaleur indirecte peut être utilisée pour accélérer le séchage des affaires.</p>
                    
                    <p className="mb-4">Pour utiliser cette méthode de façon sécurisée, il est essentiel de maintenir une distance d'au moins un mètre du feu. Placer un vêtement directement au-dessus des flammes ou trop près de la cuisson peut le brûler rapidement, surtout s'il est déjà humide. En le positionnant dans un espace proche mais sûr, la chaleur ambiante se diffuse autour du tissu, favorisant l'évaporation sans danger. Les guides recommandent également de retourner régulièrement les vêtements, afin que l'humidité ne reste pas piégée dans les fibres et que le séchage se fasse de manière homogène.</p>
                    
                    <p className="mb-4">Une technique locale très efficace consiste à placer les vêtements dans un sac plastique percé. Cette méthode crée une mini-serre qui concentre légèrement la chaleur autour du tissu, accélérant le séchage des gants, chaussettes, sous-vêtements ou autres petites affaires. Grâce à cette approche, même lors d'un trek Kilimandjaro sous la pluie, il est possible de garder vos vêtements essentiels au sec, préservant ainsi votre confort et votre sécurité en altitude.</p>
                    
                    <p className="mb-4">Exploiter intelligemment la chaleur du camp est une stratégie que tout trekkeur devrait connaître. Les guides locaux l'utilisent quotidiennement pour éviter que les vêtements mouillés ne deviennent un problème, surtout pendant la saison des pluies. En combinant cette méthode avec la chaleur corporelle et la circulation de l'air dans la tente, il est possible de garder ses affaires sèches et de profiter pleinement de l'expérience unique d'un trek Kilimandjaro.</p>
                  </div>
                </div>
              </section>

              {/* Method 4 Section */}
              <section id="method4" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Le sac de secours : votre assurance anti-pluie pour le trek Kilimandjaro</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lors d'un trek Kilimandjaro, surtout pendant la saison des pluies, il est impossible de garantir que tous vos vêtements resteront secs. Même avec les meilleures méthodes pour sécher vos affaires, l'humidité et les averses peuvent rendre certains vêtements totalement inutilisables. C'est pour cette raison que chaque guide local recommande vivement de préparer un sac de secours étanche, un véritable "kit de survie sèche". Ce sac vous assure d'avoir toujours à disposition un ensemble de vêtements secs, essentiels pour rester au chaud et confortable, quelles que soient les conditions météorologiques.</p>
                    
                    <p className="mb-4">Dans ce sac étanche, il est crucial de conserver un ensemble complet : un t-shirt sec, une sous-couche thermique, une paire de chaussettes propres, un pantalon léger et une couche chaude supplémentaire. Ces vêtements ne doivent jamais être utilisés pour marcher ou grimper pendant la journée. Leur rôle est de vous protéger après une longue marche sous la pluie, de maintenir votre chaleur corporelle et de vous permettre de dormir confortablement. Même si tout le reste de votre sac est mouillé, ces vêtements restent intacts et vous offrent une sécurité essentielle face à l'humidité en montagne.</p>
                    
                    <p className="mb-4">Le sac de secours agit comme une véritable assurance anti-pluie. Il permet au trekkeur de rester sec et protégé, même en pleine saison des pluies Kilimandjaro, et de continuer son trek sans perdre d'énergie ou de confort. Les guides locaux insistent sur l'importance de ce sac, car il garantit que vous pourrez toujours vous changer et rester au chaud, même si la météo devient difficile. Adopter cette stratégie simple mais efficace fait une grande différence entre un trek agréable et un trek éprouvant.</p>
                    
                    <p className="mb-4">En préparant correctement votre sac de secours, vous vous assurez non seulement de rester sec, mais aussi de profiter pleinement de votre aventure sur le Kilimandjaro. C'est une méthode essentielle que tout trekkeur devrait suivre et qui est utilisée quotidiennement par les guides locaux pour protéger leurs clients contre les imprévus liés à la pluie et à l'humidité en montagne.</p>
                  </div>
                </div>
              </section>

              {/* Method 5 Section */}
              <section id="method5" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Profiter du vent et des accalmies : le séchage express en trek</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Même pendant la saison des pluies sur le Kilimandjaro, il existe toujours de courtes périodes où le temps s'améliore légèrement. Une accalmie de quelques minutes ou un souffle de vent plus soutenu peut suffire à faire sécher vos vêtements mouillés et à rendre votre trek beaucoup plus confortable. Ces moments, bien utilisés, permettent de tirer parti des éléments naturels pour limiter l'humidité et garder vos affaires sèches.</p>
                    
                    <p className="mb-4">Le vent joue un rôle essentiel dans ce processus. Il agit comme un sèche-linge naturel, parfois même plus efficace que le soleil, surtout dans les zones froides et humides de la montagne. Lorsqu'un vêtement humide est exposé à un flux d'air constant, l'humidité qu'il contient s'évapore progressivement. Il suffit d'étirer le tissu et de l'exposer directement au vent pour augmenter la surface de contact avec l'air et accélérer le séchage. Les petits accessoires comme les chaussettes, les gants, les buffs ou les t-shirts légers bénéficient particulièrement de cette technique, car ils sèchent beaucoup plus vite lorsqu'ils sont correctement orientés face au vent.</p>
                    
                    <p className="mb-4">L'anticipation et l'observation sont la clé. Un trekkeur expérimenté sait reconnaître le moment où le vent se lève ou où la pluie faiblit et agit immédiatement pour suspendre ses vêtements ou les étendre sur une pierre ou un bâton. Même une courte pause de dix minutes peut suffire à transformer un vêtement trempé en vêtement presque sec, réduisant l'inconfort et le risque de froid. En combinant cette méthode avec la chaleur corporelle et les techniques de séchage au camp ou dans la tente, il est possible de garder ses affaires au sec et de profiter pleinement de l'expérience du trek.</p>
                    
                    <p className="mb-4">Exploiter intelligemment le vent et les accalmies est donc une stratégie simple mais efficace que tous les guides locaux enseignent. C'est une astuce essentielle pour tout trek Kilimandjaro, car elle permet de rester confortable, chaud et sec, même en pleine saison des pluies.</p>
                  </div>
                </div>
              </section>

              {/* Errors Section */}
              <section id="errors" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Les erreurs les plus fréquentes des trekkeurs et comment les éviter</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lors d'un trek sur le Kilimandjaro, surtout pendant la saison des pluies, il est facile de commettre des erreurs qui aggravent l'humidité et rendent l'expérience beaucoup plus difficile. Beaucoup de randonneurs pensent que certaines habitudes sont sans conséquence, mais elles peuvent transformer un simple vêtement mouillé en véritable source d'inconfort ou de fatigue.</p>
                    
                    <p className="mb-4">Une erreur très courante est de laver ses vêtements pendant le trek. Bien que cela semble logique pour rester propre, en réalité, les conditions en altitude rendent le séchage extrêmement difficile. L'air est froid et humide, et même après plusieurs heures, les vêtements restent souvent détrempés. Laver ses affaires dans ces conditions revient donc à ajouter encore plus d'humidité et à compliquer le confort et la gestion thermique.</p>
                    
                    <p className="mb-4">Beaucoup de trekkeurs essaient également de sécher leurs vêtements directement dans la tente, sans prêter attention à la condensation. Or, l'intérieur d'une tente est souvent saturé d'humidité, surtout la nuit. Suspendre ses affaires dans cet environnement ne fait qu'empêcher le séchage et peut même accélérer le développement de mauvaises odeurs.</p>
                    
                    <p className="mb-4">Poser les vêtements sur une pierre ou un sol mouillé est une autre erreur fréquente. Les surfaces froides et humides empêchent l'évaporation et peuvent au contraire retenir l'eau dans les fibres. Les vêtements restent alors trempés beaucoup plus longtemps, augmentant le risque d'inconfort et de froid.</p>
                    
                    <p className="mb-4">Enfin, marcher avec des vêtements mouillés, surtout ceux en contact direct avec la peau, est une erreur à éviter. Cela augmente rapidement la perte de chaleur corporelle et peut provoquer des irritations, des frottements douloureux ou même des ampoules. En altitude, ce simple geste peut avoir un impact significatif sur votre énergie et votre sécurité.</p>
                    
                    <p className="mb-4">Comprendre ces erreurs et savoir les éviter est essentiel pour tout trekkeur sur le Kilimandjaro. En anticipant la gestion des vêtements mouillés, en utilisant correctement la chaleur corporelle, la chaleur du camp, le vent et les accalmies, et en conservant un sac de secours, vous pouvez transformer un trek sous la pluie en une expérience beaucoup plus agréable, confortable et sûre.</p>
                  </div>
                </div>
              </section>

              {/* Conclusion Section */}
              <section id="conclusion" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Conclusion : la pluie n'est pas l'ennemie, l'humidité oui</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lors d'un trek sur le Kilimandjaro, beaucoup de randonneurs considèrent la pluie comme le principal obstacle à leur confort. En réalité, ce n'est pas la pluie elle-même qui pose problème, mais l'humidité qu'elle entraîne et la manière dont elle est gérée. Un vêtement mouillé, mal séché ou laissé à l'air libre dans des conditions humides peut rapidement transformer une simple randonnée en une expérience inconfortable, fatigante et même risquée pour la santé.</p>
                    
                    <p className="mb-4">Avec de bonnes techniques et un peu d'organisation, il est tout à fait possible de rester sec et au chaud, même pendant la saison des pluies Kilimandjaro. Utiliser la chaleur corporelle, profiter intelligemment de la chaleur du camp, exploiter les courants d'air et le vent, savoir tirer parti des accalmies et conserver un sac de secours avec un ensemble de vêtements essentiels sont des stratégies simples mais efficaces. Ces méthodes, enseignées et utilisées quotidiennement par les guides locaux, permettent de minimiser l'humidité et de garder le confort tout au long du trek.</p>
                    
                    <p className="mb-4">En adoptant ces pratiques, la pluie cesse d'être une ennemie. Elle devient simplement un élément de la nature à anticiper et à gérer. L'humidité, si elle est maîtrisée, ne compromet plus votre aventure. Vous pouvez ainsi profiter pleinement de l'ascension, des paysages spectaculaires et de l'expérience unique d'un trek Kilimandjaro, même lorsque le ciel est gris et que la pluie tombe.</p>
                  </div>
                </div>
              </section>

              {/* Tip Section */}
              <section id="tip" className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  <span>Conseil du guide local : anticiper l'humidité pour réussir son trek Kilimandjaro</span>
                </h2>
                <div>
                  <div className="prose prose-xl max-w-none text-gray-700">
                    <p className="mb-4">Lors d'un trek Kilimandjaro, la météo peut changer très rapidement. Pluie, vent, brouillard et humidité font partie de l'expérience, surtout pendant la saison des pluies Kilimandjaro. Comme le répète souvent un guide local : "On ne choisit pas la météo, mais on choisit comment on s'y prépare. Celui qui anticipe gagne toujours contre l'humidité." Cette phrase illustre parfaitement l'approche à adopter pour rester sec et confortable en montagne.</p>
                    
                    <p className="mb-4">Anticiper signifie utiliser toutes les techniques disponibles pour gérer l'humidité et protéger ses vêtements et accessoires de trek. Cela inclut préparer un sac de secours avec un ensemble de vêtements secs essentiels, exploiter la chaleur corporelle et la chaleur du camp, profiter des accalmies et du vent, et éviter les erreurs courantes comme laisser sécher ses habits dans une tente saturée ou marcher en vêtements mouillés. Chaque geste compte pour minimiser l'humidité et préserver votre énergie tout au long de l'ascension.</p>
                    
                    <p className="mb-4">Suivre ce conseil de guide local permet de transformer la pluie et l'humidité en éléments maîtrisés plutôt qu'en obstacles. En anticipant les conditions, le trekkeur peut rester sec, profiter pleinement des paysages spectaculaires du Kilimandjaro et vivre une expérience inoubliable, même lorsque le ciel est gris et que la pluie tombe. C'est une stratégie essentielle pour tout trek Kilimandjaro réussi, et elle fait partie des secrets que tous les guides locaux enseignent à leurs groupes.</p>
                  </div>
                </div>
              </section>

              {/* Canonical route cards section */}
              <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale === 'fr' ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
                    <p className="text-gray-600 text-lg">{locale === 'fr' ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our top Kilimanjaro routes'}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 1 800 €" : 'From €1,800'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️5 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours" : 'Conquer Africa\'s Roof: Marangu Route in 5 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !" : 'Want to stand on Africa\'s roof? Climb Kilimanjaro with us.'}</p>
                        <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 2 200 €" : 'From €2,200'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️7 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★★ (5.0)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours" : 'Panoramic adventure: Lemosho in 7 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                        <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                            <p className="text-[#00A896] font-semibold">{locale === 'fr' ? "À partir de 1 900 €" : 'From €1,900'}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-gray-500">⏱️6 {locale === 'fr' ? 'jours' : 'days'}</div>
                            <div className="text-yellow-400">★★★★☆ (4.5)</div>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4">{locale === 'fr' ? "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)" : 'Umbwe: the vertical challenge in 6 days'}</p>
                        <p className="text-gray-600 text-sm mb-4">{locale === 'fr' ? "Souvent décrite comme la voie la plus courte et la plus ardue, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés." : 'Often the shortest and steepest route, Umbwe suits experienced trekkers.'}</p>
                        <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{locale === 'fr' ? 'En savoir plus' : 'Learn more'}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}