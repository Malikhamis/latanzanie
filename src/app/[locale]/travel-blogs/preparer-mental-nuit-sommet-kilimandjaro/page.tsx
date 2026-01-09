'use client'

import Link from 'next/link'
import '../../../tailgrid.css'
import { useLocale } from 'next-intl'
import AuthorMeta from '@/components/ui/AuthorMeta'
import TOC from '@/components/ui/TOC'

const FR_TITLES: Record<string,string> = {
  overview: 'Comment préparer son mental pour la nuit du sommet du Kilimandjaro',
  difficulty: 'Comprendre ce qui rend la nuit du sommet si difficile',
  cold: 'Le froid : un facteur physique et mental majeur',
  oxygen: 'Le manque d’oxygène : la vraie difficulté invisible',
  darkness: 'L’obscurité et le silence : un test pour le mental',
  normal: 'Comprendre que ces sensations sont normales et temporaires',
  slowness: 'Accepter la lenteur et la fatigue : la clé mentale pour réussir le sommet du Kilimandjaro',
  whySlow: 'Pourquoi la lenteur est indispensable sur le Kilimandjaro',
  fatigue: 'Comprendre et accepter la fatigue dès le début de l’ascension finale',
  coldMental: 'Le froid : un élément à intégrer mentalement',
  breathing: 'La respiration courte : une réaction normale à l’altitude',
  strategy: 'Avancer lentement : une stratégie de réussite, pas une faiblesse',
  guideAdvice: 'Le conseil d’un guide local du Kilimandjaro',
  smallSteps: 'Découper l’ascension en petites étapes mentales : une technique essentielle pour réussir le sommet du Kilimandjaro',
  whyDangerous: 'Pourquoi penser uniquement au sommet est mentalement dangereux',
  brain: 'Comment fonctionne le mental en haute altitude',
  stepByStep: 'La méthode des guides locaux : avancer pas après pas',
  pressure: 'Réduire la pression mentale grâce aux petits objectifs',
  positive: 'Créer une dynamique positive grâce aux petites réussites',
  night: 'Une technique particulièrement efficace pendant la nuit du sommet',
  guideRole: 'Le rôle du guide local dans cette stratégie mentale'
}

const FR_SECTIONS: Record<string,string> = {
  overview: `La nuit du sommet du Kilimandjaro est sans doute le moment le plus difficile de toute l'ascension. Ce n'est pas seulement un défi physique, mais avant tout un défi mental. Beaucoup de randonneurs ont encore de l'énergie dans les jambes, mais abandonnent parce que leur mental lâche face au froid, à la fatigue et à l'altitude.

Comprendre ce qui vous attend et préparer votre esprit à l'avance fait une énorme différence entre abandonner et atteindre Uhuru Peak.`,
  
  difficulty: `La nuit du sommet du Kilimandjaro est une épreuve unique, très différente des journées de marche précédentes. Elle commence généralement autour de minuit, après un repos court et souvent de mauvaise qualité. À ce moment-là, le corps n'a pas totalement récupéré de l'effort des jours précédents, mais il doit pourtant fournir l'effort le plus intense de toute l'ascension.

La fatigue est donc déjà bien installée avant même de commencer à marcher. Les muscles sont lourds, les jambes semblent moins réactives, et chaque mouvement demande plus d'énergie que d'habitude. Cette sensation est normale, mais elle peut être déstabilisante pour les personnes qui s'attendent à se sentir fortes le jour du sommet.`,
  
  cold: `Pendant la nuit du sommet, les températures peuvent descendre entre -10°C et -20°C, parfois même davantage avec le vent. Le froid ne touche pas seulement les mains et les pieds, il pénètre profondément dans le corps. Même bien équipé, on ressent le froid car l'organisme brûle beaucoup d'énergie et la circulation sanguine est ralentie par l'altitude.

Ce froid constant accentue la fatigue et peut affecter le moral. Les pauses deviennent difficiles, car le corps se refroidit rapidement. C'est pourquoi les guides encouragent à avancer lentement mais continuellement, afin de rester chaud et concentré.`,
  
  oxygen: `À plus de 5 000 mètres d'altitude, l'air contient presque moitié moins d'oxygène qu'au niveau de la mer. Cela signifie que chaque respiration apporte moins d'oxygène aux muscles et au cerveau. Résultat : l'essoufflement arrive très vite, même pour un effort minime.

Chaque pas demande alors un effort disproportionné. Le rythme devient extrêmement lent, parfois frustrant, surtout pour les personnes sportives. Cette lenteur n'est pas un signe de faiblesse, mais une réaction normale du corps face à l'altitude.`,
  
  darkness: `Marcher dans le noir complet, éclairé uniquement par une lampe frontale, crée une ambiance très particulière. Le silence est profond, parfois seulement brisé par le vent ou le bruit des pas sur les pierres volcaniques. Cette atmosphère peut amplifier les pensées négatives et le doute.

C'est souvent à ce moment-là que les questions apparaissent :
« Pourquoi je fais ça ? »
« Est-ce que je vais y arriver ? »

Ces pensées sont normales. Elles ne signifient pas que vous allez échouer, mais que votre esprit réagit à une situation extrême.`,
  
  normal: `L'un des éléments les plus importants pour réussir la nuit du sommet est de savoir que tout ce que vous ressentez — fatigue intense, lenteur, froid, doutes — est normal à cette altitude. Ces sensations ne durent pas éternellement et diminuent souvent après le lever du soleil.

Les randonneurs qui réussissent sont souvent ceux qui comprennent cela à l'avance. Ils acceptent l'inconfort sans paniquer, avancent pas à pas et font confiance à leur guide et au rythme "pole pole".`,
  
  slowness: `Lors de l'ascension du Mont Kilimandjaro, la majorité des difficultés ne viennent pas du terrain, mais de la manière dont le corps et l'esprit réagissent à l'altitude. L'une des clés les plus importantes pour atteindre Uhuru Peak est d'accepter, bien avant le départ, la lenteur et la fatigue.

Sur le Kilimandjaro, réussir ne signifie pas aller vite. Réussir signifie avancer lentement, régulièrement et intelligemment, en respectant les limites imposées par l'altitude.`,
  
  whySlow: `À plus de 4 000 mètres d'altitude, l'oxygène se fait rare. Le corps reçoit moins d'oxygène à chaque respiration, ce qui ralentit naturellement le rythme de marche. Essayer de marcher vite devient non seulement inefficace, mais aussi dangereux, car cela augmente le risque de mal aigu des montagnes.

Le rythme lent, connu localement sous le nom de "pole pole", permet :

• une meilleure adaptation à l'altitude
• une respiration plus stable
• une économie d'énergie sur plusieurs jours
• une réduction de l'essoufflement

Accepter cette lenteur dès le départ évite la frustration et permet de rester concentré sur l'objectif final : atteindre le sommet en sécurité.`,
  
  fatigue: `La nuit du sommet est le moment le plus exigeant de l'ascension du Kilimandjaro. Elle commence généralement autour de minuit, après peu de sommeil. Le corps est déjà fatigué, et l'altitude accentue cette sensation dès les premiers pas.

Cette fatigue précoce est normale. Elle ne signifie pas que vous êtes en mauvaise condition physique ou que vous allez échouer. Elle fait partie intégrante du processus d'ascension en haute altitude.

Les randonneurs qui réussissent sont ceux qui acceptent cette fatigue sans lutter contre elle, en continuant à avancer lentement, pas après pas.`,
  
  coldMental: `Même avec un équipement adapté, le froid est inévitable lors de l'ascension du sommet du Kilimandjaro. À plus de 5 000 mètres, les températures peuvent descendre jusqu'à -20°C. Le corps utilise beaucoup d'énergie pour se réchauffer, ce qui accentue la fatigue.

Accepter à l'avance que le froid fera partie de l'expérience permet de mieux le gérer mentalement. Cela évite la panique et aide à rester concentré sur la progression plutôt que sur l'inconfort.`,
  
  breathing: `En haute altitude, la respiration devient naturellement plus rapide et plus courte. Cela peut être déstabilisant, surtout pour les personnes sportives habituées à contrôler leur souffle. Sur le Kilimandjaro, il est essentiel d'accepter ce changement et d'adopter une respiration lente et consciente.

Synchroniser la respiration avec les pas aide à calmer le mental et à mieux gérer l'effort. Ce contrôle respiratoire est un outil puissant pour rester stable pendant l'ascension finale.`,
  
  strategy: `Sur le Kilimandjaro, avancer lentement n'est jamais un signe d'échec. C'est au contraire une stratégie utilisée par les guides locaux pour maximiser les chances de réussite. Chaque pas lent est un pas sûr vers le sommet.

Se répéter intérieurement : « Je n'ai pas besoin d'aller vite, je dois juste avancer » est l'un des meilleurs conseils mentaux pour réussir la nuit du sommet.`,
  
  guideAdvice: `En tant que guide local, je vois souvent que les randonneurs qui acceptent la lenteur et la fatigue avant même de commencer l'ascension arrivent plus sereins au sommet. Ils se comparent moins aux autres, écoutent mieux leur corps et gèrent mieux l'altitude.

La montagne ne récompense pas la vitesse, elle récompense la patience.`,
  
  smallSteps: `Lors de l'ascension du Mont Kilimandjaro, et plus particulièrement pendant la nuit du sommet, le plus grand ennemi n'est pas toujours la fatigue physique. Dans de nombreux cas, c'est le mental qui lâche en premier. Penser uniquement au sommet, Uhuru Peak, peut rapidement devenir écrasant. La distance semble immense, l'effort interminable et la progression trop lente.

C'est pour cette raison que les guides locaux du Kilimandjaro enseignent une stratégie mentale fondamentale : découper l'ascension en petites étapes mentales, simples et atteignables. Cette approche permet de transformer une ascension très difficile en une succession d'efforts gérables.`,
  
  whyDangerous: `Uhuru Peak se situe à 5 895 mètres d'altitude. Lorsque le cerveau se focalise uniquement sur cet objectif final, il perçoit immédiatement l'effort comme trop long et trop exigeant. À haute altitude, le manque d'oxygène réduit la capacité de concentration et amplifie les pensées négatives.

Le cerveau se met alors à envoyer des signaux de découragement :

• « Il reste encore trop de chemin »
• « Je n'y arriverai jamais »
• « C'est trop dur »

Ces pensées consomment énormément d'énergie mentale et peuvent conduire à l'abandon, même si le corps est encore capable de continuer.`,
  
  brain: `En altitude, le cerveau reçoit moins d'oxygène. Cela affecte directement :

• la concentration
• la motivation
• la gestion du stress
• la perception de la fatigue

C'est pourquoi les émotions sont souvent plus intenses sur le Kilimandjaro. Un objectif trop grand devient rapidement écrasant. Découper l'ascension permet de simplifier la tâche mentale et de rester fonctionnel malgré l'altitude.`,
  
  stepByStep: `Les guides locaux du Kilimandjaro savent par expérience que le sommet ne se gagne pas en pensant à la fin, mais en se concentrant sur le présent. L'ascension est volontairement divisée en petites étapes mentales très simples.

Au lieu de penser à Uhuru Peak, le randonneur est invité à se concentrer uniquement sur :

• faire quelques pas supplémentaires
• marcher encore 5 ou 10 minutes
• atteindre le prochain point de pause
• arriver au prochain repère visible

Chaque objectif est volontairement court et réaliste. Cela permet au cerveau d'accepter l'effort sans résistance.`,
  
  pressure: `Lorsqu'un objectif est petit, le cerveau le perçoit comme atteignable. Cela réduit immédiatement :

• le stress
• l'anxiété
• la peur de l'échec

Au lieu de subir l'ascension, le randonneur reprend le contrôle. Il ne lutte plus contre la montagne, mais avance avec elle, étape après étape.

Cette réduction de la pression mentale est essentielle pendant la nuit du sommet, lorsque la fatigue et le froid rendent tout plus difficile.`,
  
  positive: `Chaque petite étape atteinte devient une victoire mentale. Marcher encore 10 minutes, atteindre le prochain arrêt ou simplement continuer à avancer crée un sentiment de réussite.

Ces petites victoires successives :

• renforcent la confiance
• améliorent la motivation
• donnent envie de continuer

Sans s'en rendre compte, le randonneur progresse pendant des heures et se rapproche du sommet.`,
  
  night: `La nuit du sommet est longue, froide et silencieuse. L'obscurité empêche de voir le sommet, ce qui peut accentuer la sensation de distance infinie. Découper l'ascension est alors indispensable.

Au lieu de penser : « Il reste encore plusieurs heures avant le sommet »
le mental se concentre sur : « Je marche jusqu'au prochain arrêt »

Cette manière de penser rend l'effort beaucoup plus supportable.`,
  
  guideRole: `Le guide local joue un rôle clé dans le découpage mental de l'ascension. Il annonce régulièrement de petits objectifs, encourage à avancer calmement et rassure lorsque la fatigue se fait sentir. Sa présence constante et son soutien verbal sont des éléments essentiels pour maintenir le moral.

Le guide adapte ses encouragements selon l'état de chaque randonneur. Il sait reconnaître les signes de découragement et sait comment redonner confiance. C'est pour cette raison que l'accompagnement d'un guide expérimenté est indispensable pour réussir la nuit du sommet.`
}

const EN_TITLES: Record<string,string> = {
  overview: 'How to Prepare Your Mind for the Kilimanjaro Summit Night',
  difficulty: 'Understanding What Makes the Summit Night So Difficult',
  cold: 'Cold: A Major Physical and Mental Factor',
  oxygen: 'Oxygen Deprivation: The Real Invisible Difficulty',
  darkness: 'Darkness and Silence: A Test for the Mind',
  normal: 'Understanding That These Sensations Are Normal and Temporary',
  slowness: 'Accepting Slowness and Fatigue: The Mental Key to Success on Kilimanjaro Summit',
  whySlow: 'Why Slowness Is Essential on Kilimanjaro',
  fatigue: 'Understanding and Accepting Fatigue from the Start of the Final Ascent',
  coldMental: 'Cold: An Element to Integrate Mentally',
  breathing: 'Short Breathing: A Normal Reaction to Altitude',
  strategy: 'Moving Slowly: A Strategy for Success, Not Weakness',
  guideAdvice: 'Advice from a Local Kilimanjaro Guide',
  smallSteps: 'Breaking Down the Ascent into Small Mental Steps: An Essential Technique for Summit Success',
  whyDangerous: 'Why Thinking Only About the Summit Is Mentally Dangerous',
  brain: 'How the Mind Works at High Altitude',
  stepByStep: 'The Local Guides Method: Step by Step',
  pressure: 'Reducing Mental Pressure Through Small Goals',
  positive: 'Creating Positive Momentum Through Small Victories',
  night: 'An Particularly Effective Technique During Summit Night',
  guideRole: 'The Role of the Local Guide in This Mental Strategy'
}

const EN_SECTIONS: Record<string,string> = {
  overview: `The summit night of Kilimanjaro is undoubtedly the most difficult moment of the entire ascent. It's not just a physical challenge, but above all a mental one. Many hikers still have energy in their legs, but give up because their mind gives in to the cold, fatigue, and altitude.

Understanding what awaits you and preparing your mind in advance makes a huge difference between giving up and reaching Uhuru Peak.`,
  
  difficulty: `The summit night of Kilimanjaro is a unique trial, very different from the previous hiking days. It usually begins around midnight, after brief and often poor-quality rest. At this point, the body hasn't fully recovered from the effort of previous days, yet it must provide the most intense effort of the entire ascent.

Fatigue is therefore already well established even before starting to walk. Muscles are heavy, legs seem less responsive, and each movement requires more energy than usual. This sensation is normal, but can be destabilizing for people who expect to feel strong on summit day.`,
  
  cold: `During the summit night, temperatures can drop between -10°C and -20°C, sometimes even lower with wind. The cold doesn't just affect hands and feet, it penetrates deep into the body. Even well-equipped, you feel the cold because the body burns a lot of energy and blood circulation is slowed by altitude.

This constant cold increases fatigue and can affect morale. Breaks become difficult, as the body cools down quickly. That's why guides encourage moving slowly but continuously, to stay warm and focused.`,
  
  oxygen: `At over 5,000 meters altitude, the air contains almost half as much oxygen as at sea level. This means each breath brings less oxygen to muscles and the brain. Result: breathlessness arrives very quickly, even for minimal effort.

Each step then requires disproportionate effort. The pace becomes extremely slow, sometimes frustrating, especially for athletic people. This slowness is not a sign of weakness, but a normal bodily reaction to altitude.`,
  
  darkness: `Walking in complete darkness, illuminated only by a headlamp, creates a very particular atmosphere. The silence is profound, sometimes only broken by wind or the sound of footsteps on volcanic stones. This atmosphere can amplify negative thoughts and doubt.

It's often at this moment that questions arise:
"Why am I doing this?"
"Will I make it?"

These thoughts are normal. They don't mean you'll fail, but that your mind is reacting to an extreme situation.`,
  
  normal: `One of the most important elements for succeeding on summit night is knowing that everything you feel — intense fatigue, slowness, cold, doubts — is normal at this altitude. These sensations don't last forever and often diminish after sunrise.

Successful hikers are often those who understand this in advance. They accept discomfort without panicking, move step by step, and trust their guide and the "pole pole" pace.`,
  
  slowness: `During Mount Kilimanjaro's ascent, most difficulties don't come from the terrain, but from how the body and mind react to altitude. One of the most important keys to reaching Uhuru Peak is accepting, well before departure, slowness and fatigue.

On Kilimanjaro, success doesn't mean going fast. Success means moving slowly, regularly, and intelligently, respecting the limits imposed by altitude.`,
  
  whySlow: `Above 4,000 meters altitude, oxygen becomes scarce. The body receives less oxygen with each breath, which naturally slows the walking pace. Trying to walk quickly becomes not only ineffective, but also dangerous, as it increases the risk of acute mountain sickness.

The slow pace, locally known as "pole pole", allows:

• better altitude adaptation
• more stable breathing
• energy conservation over several days
• reduced breathlessness

Accepting this slowness from the start avoids frustration and helps stay focused on the final objective: reaching the summit safely.`,
  
  fatigue: `Summit night is the most demanding moment of the Kilimanjaro ascent. It usually begins around midnight, after little sleep. The body is already tired, and altitude accentuates this sensation from the first steps.

This early fatigue is normal. It doesn't mean you're in poor physical condition or that you'll fail. It's an integral part of the high-altitude ascent process.

Successful hikers are those who accept this fatigue without fighting it, continuing to move slowly, step by step.`,
  
  coldMental: `Even with proper equipment, cold is inevitable during the summit climb. Above 5,000 meters, temperatures can drop to -20°C. The body uses a lot of energy to warm up, which increases fatigue.

Accepting in advance that cold will be part of the experience helps manage it mentally. This avoids panic and helps stay focused on progress rather than discomfort.`,
  
  breathing: `At high altitude, breathing naturally becomes faster and shorter. This can be destabilizing, especially for athletic people used to controlling their breath. On Kilimanjaro, it's essential to accept this change and adopt slow, conscious breathing.

Synchronizing breathing with steps helps calm the mind and better manage effort. This breathing control is a powerful tool for staying stable during the final ascent.`,
  
  strategy: `On Kilimanjaro, moving slowly is never a sign of failure. It's actually a strategy used by local guides to maximize success chances. Each slow step is a safe step toward the summit.

Internally repeating: "I don't need to go fast, I just need to move forward" is one of the best mental tips for summit night success.`,
  
  guideAdvice: `As a local guide, I often see that hikers who accept slowness and fatigue even before starting the ascent arrive more serenely at the summit. They compare themselves less to others, listen better to their bodies, and manage altitude better.

The mountain doesn't reward speed, it rewards patience.`,
  
  smallSteps: `During Mount Kilimanjaro's ascent, and particularly during summit night, the greatest enemy isn't always physical fatigue. In many cases, it's the mind that gives up first. Thinking only about the summit, Uhuru Peak, can quickly become overwhelming. The distance seems immense, the effort endless, and progress too slow.

That's why local Kilimanjaro guides teach a fundamental mental strategy: breaking down the ascent into small, achievable mental steps. This approach transforms a very difficult climb into a succession of manageable efforts.`,
  
  whyDangerous: `Uhuru Peak is located at 5,895 meters altitude. When the brain focuses solely on this final objective, it immediately perceives the effort as too long and too demanding. At high altitude, oxygen deprivation reduces concentration capacity and amplifies negative thoughts.

The brain then begins sending discouragement signals:

• "There's still too much distance left"
• "I won't make it"
• "It's too hard"

These thoughts consume enormous mental energy and can lead to abandonment, even when the body is still capable of continuing.`,
  
  brain: `At altitude, the brain receives less oxygen. This directly affects:

• concentration
• motivation
• stress management
• perception of fatigue

That's why emotions are often more intense on Kilimanjaro. Too large an objective quickly becomes overwhelming. Breaking down the ascent simplifies the mental task and helps remain functional despite altitude.`,
  
  stepByStep: `Local Kilimanjaro guides know from experience that the summit isn't won by thinking about the end, but by focusing on the present. The ascent is deliberately divided into very simple small mental steps.

Instead of thinking about Uhuru Peak, hikers are invited to focus only on:

• taking a few more steps
• walking another 5 or 10 minutes
• reaching the next rest point
• arriving at the next visible landmark

Each objective is deliberately short and realistic. This allows the brain to accept the effort without resistance.`,
  
  pressure: `When an objective is small, the brain perceives it as achievable. This immediately reduces:

• stress
• anxiety
• fear of failure

Instead of suffering through the ascent, the hiker regains control. They no longer fight against the mountain, but move with it, step by step.

This reduction of mental pressure is essential during summit night, when fatigue and cold make everything more difficult.`,
  
  positive: `Each small step reached becomes a mental victory. Walking another 10 minutes, reaching the next stop, or simply continuing to move forward creates a sense of achievement.

These successive small victories:

• strengthen confidence
• improve motivation
• create desire to continue

Without realizing it, the hiker progresses for hours and gets closer to the summit.`,
  
  night: `Summit night is long, cold, and silent. Darkness prevents seeing the summit, which can accentuate the feeling of infinite distance. Breaking down the ascent is then indispensable.

Instead of thinking: "There are still several hours before the summit"
the mind focuses on: "I'm walking to the next rest stop"

This way of thinking makes the effort much more bearable.`,
  
  guideRole: `The local guide plays a key role in mentally breaking down the ascent. He regularly announces small objectives, encourages calm movement, and reassures when fatigue sets in. His constant presence and verbal support are essential elements for maintaining morale.

The guide adapts his encouragement according to each hiker's state. He knows how to recognize signs of discouragement and knows how to restore confidence. That's why the accompaniment of an experienced guide is indispensable for summit night success.`
}

interface Section {
  id: string
  title: string
  content: string
}

export default function PreparerMentalNuitSommetKilimandjaroPage() {
  const locale = useLocale()
  
  const isFrench = locale === 'fr'
  
  const sections: Section[] = [
    { 
      id: 'overview', 
      title: isFrench ? FR_TITLES.overview : EN_TITLES.overview,
      content: isFrench ? FR_SECTIONS.overview : EN_SECTIONS.overview
    },
    { 
      id: 'difficulty', 
      title: isFrench ? FR_TITLES.difficulty : EN_TITLES.difficulty,
      content: isFrench ? FR_SECTIONS.difficulty : EN_SECTIONS.difficulty
    },
    { 
      id: 'cold', 
      title: isFrench ? FR_TITLES.cold : EN_TITLES.cold,
      content: isFrench ? FR_SECTIONS.cold : EN_SECTIONS.cold
    },
    { 
      id: 'oxygen', 
      title: isFrench ? FR_TITLES.oxygen : EN_TITLES.oxygen,
      content: isFrench ? FR_SECTIONS.oxygen : EN_SECTIONS.oxygen
    },
    { 
      id: 'darkness', 
      title: isFrench ? FR_TITLES.darkness : EN_TITLES.darkness,
      content: isFrench ? FR_SECTIONS.darkness : EN_SECTIONS.darkness
    },
    { 
      id: 'normal', 
      title: isFrench ? FR_TITLES.normal : EN_TITLES.normal,
      content: isFrench ? FR_SECTIONS.normal : EN_SECTIONS.normal
    },
    { 
      id: 'slowness', 
      title: isFrench ? FR_TITLES.slowness : EN_TITLES.slowness,
      content: isFrench ? FR_SECTIONS.slowness : EN_SECTIONS.slowness
    },
    { 
      id: 'whySlow', 
      title: isFrench ? FR_TITLES.whySlow : EN_TITLES.whySlow,
      content: isFrench ? FR_SECTIONS.whySlow : EN_SECTIONS.whySlow
    },
    { 
      id: 'fatigue', 
      title: isFrench ? FR_TITLES.fatigue : EN_TITLES.fatigue,
      content: isFrench ? FR_SECTIONS.fatigue : EN_SECTIONS.fatigue
    },
    { 
      id: 'coldMental', 
      title: isFrench ? FR_TITLES.coldMental : EN_TITLES.coldMental,
      content: isFrench ? FR_SECTIONS.coldMental : EN_SECTIONS.coldMental
    },
    { 
      id: 'breathing', 
      title: isFrench ? FR_TITLES.breathing : EN_TITLES.breathing,
      content: isFrench ? FR_SECTIONS.breathing : EN_SECTIONS.breathing
    },
    { 
      id: 'strategy', 
      title: isFrench ? FR_TITLES.strategy : EN_TITLES.strategy,
      content: isFrench ? FR_SECTIONS.strategy : EN_SECTIONS.strategy
    },
    { 
      id: 'guideAdvice', 
      title: isFrench ? FR_TITLES.guideAdvice : EN_TITLES.guideAdvice,
      content: isFrench ? FR_SECTIONS.guideAdvice : EN_SECTIONS.guideAdvice
    },
    { 
      id: 'smallSteps', 
      title: isFrench ? FR_TITLES.smallSteps : EN_TITLES.smallSteps,
      content: isFrench ? FR_SECTIONS.smallSteps : EN_SECTIONS.smallSteps
    },
    { 
      id: 'whyDangerous', 
      title: isFrench ? FR_TITLES.whyDangerous : EN_TITLES.whyDangerous,
      content: isFrench ? FR_SECTIONS.whyDangerous : EN_SECTIONS.whyDangerous
    },
    { 
      id: 'brain', 
      title: isFrench ? FR_TITLES.brain : EN_TITLES.brain,
      content: isFrench ? FR_SECTIONS.brain : EN_SECTIONS.brain
    },
    { 
      id: 'stepByStep', 
      title: isFrench ? FR_TITLES.stepByStep : EN_TITLES.stepByStep,
      content: isFrench ? FR_SECTIONS.stepByStep : EN_SECTIONS.stepByStep
    },
    { 
      id: 'pressure', 
      title: isFrench ? FR_TITLES.pressure : EN_TITLES.pressure,
      content: isFrench ? FR_SECTIONS.pressure : EN_SECTIONS.pressure
    },
    { 
      id: 'positive', 
      title: isFrench ? FR_TITLES.positive : EN_TITLES.positive,
      content: isFrench ? FR_SECTIONS.positive : EN_SECTIONS.positive
    },
    { 
      id: 'night', 
      title: isFrench ? FR_TITLES.night : EN_TITLES.night,
      content: isFrench ? FR_SECTIONS.night : EN_SECTIONS.night
    },
    { 
      id: 'guideRole', 
      title: isFrench ? FR_TITLES.guideRole : EN_TITLES.guideRole,
      content: isFrench ? FR_SECTIONS.guideRole : EN_SECTIONS.guideRole
    }
  ]

  function renderContent(content: string, locale: string) {
    // Add markers for terms we want to link
    const processedContent = content
      .replace(/\baltitude\b/g, '###ALTITUDE_LINK###')
      .replace(/\bcondition physique\b/g, '###CONDITION_PHYSIQUE_LINK###')
      .replace(/\bmal aigu des montagnes\b/gi, '###MAM_LINK###')
      .replace(/\bacclimatation\b/g, '###ACCLIMATATION_LINK###');
    
    const lines = processedContent.split(/\r?\n/)
    const nodes: any[] = []
    let i = 0
    let keyIndex = 0

    while (i < lines.length) {
      if (lines[i].startsWith('>')) {
        const blockLines: string[] = []
        while (i < lines.length && lines[i].startsWith('>')) {
          blockLines.push(lines[i].replace(/^>\s?/, ''))
          i++
        }
        
        // Process blockquotes for links
        const processedBlockLines = blockLines.map(line => 
          line
            .replace(/###ALTITUDE_LINK###/g, `<Link href="/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link>`)
            .replace(/###CONDITION_PHYSIQUE_LINK###/g, `<Link href="/${locale}/travel-blogs/niveau-physique-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">condition physique</Link>`)
            .replace(/###MAM_LINK###/g, `<Link href="/${locale}/travel-blogs/sante-en-altitude" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">mal aigu des montagnes</Link>`)
            .replace(/###ACCLIMATATION_LINK###/g, `<Link href="/${locale}/travel-blogs/acclimatation-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">acclimatation</Link>`)
        );
        
        nodes.push(
          <blockquote key={`b-${keyIndex++}`} className="border-l-4 pl-4 italic text-sm text-black mb-4">
            {processedBlockLines.map((line, idx) => (
              <p key={idx} className="mb-2 last:mb-0">{parseLinksToJSX(line)}</p>
            ))}
          </blockquote>
        )
      } else if (lines[i].trim() === '') {
        i++
      } else if (lines[i].startsWith('• ')) {
        const listItems: string[] = []
        while (i < lines.length && lines[i].startsWith('• ')) {
          // Process list items for links
          const processedItem = lines[i].substring(2)
            .replace(/###ALTITUDE_LINK###/g, `<a href="/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</a>`)
            .replace(/###CONDITION_PHYSIQUE_LINK###/g, `<a href="/${locale}/travel-blogs/niveau-physique-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">condition physique</a>`)
            .replace(/###MAM_LINK###/g, `<a href="/${locale}/travel-blogs/sante-en-altitude" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">mal aigu des montagnes</a>`)
            .replace(/###ACCLIMATATION_LINK###/g, `<a href="/${locale}/travel-blogs/acclimatation-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">acclimatation</a>`);
          
          listItems.push(processedItem);
          i++
        }
        nodes.push(
          <ul key={`ul-${keyIndex++}`} className="list-disc list-inside ml-4 mb-4">
            {listItems.map((item, idx) => (
              <li key={`li-${keyIndex++}-${idx}`} className="mb-1" dangerouslySetInnerHTML={{__html: item}}></li>
            ))}
          </ul>
        )
      } else {
        const paragraphLines: string[] = []
        while (i < lines.length && lines[i].trim() !== '' && !lines[i].startsWith('>') && !lines[i].startsWith('• ')) {
          paragraphLines.push(lines[i])
          i++
        }
        
        // Process paragraph content for links
        const processedParagraph = paragraphLines.join('\n')
          .replace(/###ALTITUDE_LINK###/g, `<Link href="/${locale}/travel-blogs/preparer-son-corps-altitude-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">altitude</Link>`)
          .replace(/###CONDITION_PHYSIQUE_LINK###/g, `<Link href="/${locale}/travel-blogs/niveau-physique-kilimandjaro" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">condition physique</Link>`)
          .replace(/###MAM_LINK###/g, `<Link href="/${locale}/travel-blogs/sante-en-altitude" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">mal aigu des montagnes</Link>`)
          .replace(/###ACCLIMATATION_LINK###/g, `<Link href="/${locale}/travel-blogs/acclimatation-kilimanjar" className="text-[#00A896] hover:text-[#008576] font-medium font-medium">acclimatation</Link>`);
        
        nodes.push(
          <p key={`p-${keyIndex++}`} className="mb-4">{parseLinksToJSX(processedParagraph)}</p>
        )
      }
    }

    return nodes
  }

  // Function to parse string links to JSX elements
  function parseLinksToJSX(text: string) {
    // Split text by Link tags
    const parts = text.split(/(<Link\s+[^>]*href\s*=\s*["'][^"']*["'][^>]*className\s*=\s*["'][^"']*["'][^>]*>[^<]*<\/Link>)/g);
    
    return parts.map((part, index) => {
      // Check if this part is a Link element
      const linkMatch = part.match(/<Link\s+[^>]*href\s*=\s*["']([^"']*)["'][^>]*className\s*=\s*["']([^"']*)["'][^>]*>([^<]*)<\/Link>/);
      
      if (linkMatch) {
        const href = linkMatch[1];
        const className = linkMatch[2];
        const children = linkMatch[3];
        
        return (
          <Link 
            key={`link-${index}`} 
            href={href} 
            className={className}
          >
            {children}
          </Link>
        );
      } else {
        // Return plain text
        return part;
      }
    });
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with back-link */}
      <section className="hero-wavy bg-cover bg-center text-white py-20 pt-32 md:pt-40" style={{ backgroundImage: "url('/images/hero4.jpg')" }}>
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
          <TOC title={isFrench ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto md:flex md:gap-8">
            <aside className="hidden md:block md:w-72 lg:w-80 sticky top-24 self-start">
              <div className="bg-white rounded-lg border p-4 shadow-sm mb-6">
                <TOC title={isFrench ? 'Sommaire' : 'Overview'} items={sections.map(s => ({ id: s.id, label: s.title, level: 2 }))} onSelect={() => {}} />
              </div>
            </aside>

            <div className="flex-1 space-y-6">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-black">
                  {isFrench ? FR_TITLES.overview : EN_TITLES.overview}
                </h1>
                <p className="text-base md:text-lg text-black max-w-3xl">
                  {isFrench ? 'Préparer votre mental pour la nuit la plus difficile de l’ascension.' : 'Preparing your mind for the most difficult night of the ascent.'}
                </p>
              </div>

              <article className="bg-gray-50 rounded-lg shadow-md p-6">
                <div>
                  {sections.map(s => (
                    <article key={s.id} id={s.id} className="mb-8">
                      <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
                      <div className="prose max-w-none text-black">{renderContent(s.content, locale)}</div>
                    </article>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Canonical route cards section (after notes) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{isFrench ? 'Prêt pour une aventure ?' : 'Ready for an adventure?'}</h2>
            <p className="text-gray-600 text-lg">{isFrench ? 'Explorez nos meilleures routes du Kilimandjaro' : 'Explore our top Kilimanjaro routes'}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/marangu-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Marangu Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 1 800 €" : 'From €1,800'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️5 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "Conquérir le Toit de l'Afrique : L'Ascension du Kilimandjaro par la Route Marangu en 5 Jours" : 'Conquer Africa\'s Roof: Marangu Route in 5 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "Envie de vous tenir sur le toit de l'Afrique ? Grimpez le Kilimandjaro avec nous et créez des souvenirs inoubliables !" : 'Want to stand on Africa\'s roof? Climb Kilimanjaro with us.'}</p>
                <Link href={`/${locale}/trips/marangu-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: "url('/images/lemosho-route.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Lemosho Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 2 200 €" : 'From €2,200'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️7 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★★ (5.0)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "L'Aventure Panoramique : Itinéraire Lemosho en 7 Jours" : 'Panoramic adventure: Lemosho in 7 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "La voie Lemosho est réputée comme l'un des itinéraires les plus spectaculaires." : 'Lemosho is renowned for spectacular views across the western and southern flanks.'}</p>
                <Link href={`/${locale}/trips/lemosho-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-56 bg-cover bg-center" style={{ backgroundImage: "url('/images/kilimanjaro-umbwe.jpg')" }}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Umbwe Route</h3>
                    <p className="text-[#00A896] font-semibold">{isFrench ? "À partir de 1 900 €" : 'From €1,900'}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">⏱️6 {isFrench ? 'jours' : 'days'}</div>
                    <div className="text-yellow-400">★★★★☆ (4.5)</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{isFrench ? "L'Itinéraire Umbwe : Le Défi Vertical du Kilimandjaro (6 Jours)" : 'Umbwe: the vertical challenge in 6 days'}</p>
                <p className="text-gray-600 text-sm mb-4">{isFrench ? "Souvent décrite comme la voie la plus courte et la plus ardue, l'itinéraire Umbwe est parfait pour les randonneurs expérimentés." : 'Often the shortest and steepest route, Umbwe suits experienced trekkers.'}</p>
                <Link href={`/${locale}/trips/umbwe-route`} className="bg-[#00A896] hover:bg-[#008576] text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block">{isFrench ? 'En savoir plus' : 'Learn more'}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}