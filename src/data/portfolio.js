import jaimeUnPhoto from '../assets/jaime-un-photo.png'
import jaimeGraduationPhoto from '../assets/jaime-graduation-photo.png'
import jaimeAwardPhoto from '../assets/jaime-medalla-francisco-villa.png'
import eventAgenda1 from '../assets/event-agenda-1.png'
import eventAgenda2 from '../assets/event-agenda-2.png'
import eventAgenda3 from '../assets/event-agenda-3.png'
import eventCamara1 from '../assets/event-camara-diputados-1.png'
import eventRecognition1 from '../assets/event-recognition-ceremony-1.png'
import eventIneStage1 from '../assets/event-ine-stage-1.png'
import eventIneAgenda2 from '../assets/event-ine-agenda-2.png'
import eventIneAgenda3 from '../assets/event-ine-agenda-3.png'
import eventIneAgenda4 from '../assets/event-ine-agenda-4.png'
import eventIneAgenda5 from '../assets/event-ine-agenda-5.png'
import eventIneAgenda6 from '../assets/event-ine-agenda-6.png'
import eventIneAgenda7 from '../assets/event-ine-agenda-7.png'
import eventIneAgenda8 from '../assets/event-ine-agenda-8.png'
import eventPolicyMeeting1 from '../assets/event-policy-meeting-1.png'
import eventPolicyMeeting2 from '../assets/event-policy-meeting-2.png'
import eventAmnestyPresentation1 from '../assets/event-amnesty-presentation-1.png'

export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'test-scores', label: 'Test Scores' },
  { id: 'honors', label: 'Honors' },
  { id: 'languages', label: 'Languages' },
  { id: 'publications', label: 'Publications' },
  { id: 'events', label: 'Events' },
  { id: 'volunteering', label: 'Volunteering' },
  { id: 'presence', label: 'Presence' },
  { id: 'contact', label: 'Contact' },
]

export const recruiterSignals = [
  {
    title: 'Best fit',
    text: 'I am best positioned for data analyst and policy-insights roles in NGOs, international organizations, consulting teams, and public-interest institutions.',
  },
  {
    title: 'What stands out',
    text: 'I bring a rare combination of public-policy execution, stakeholder coordination, and hands-on analytics for real institutional decisions.',
  },
  {
    title: 'Immediate value',
    text: 'I can contribute quickly in dashboarding, reporting, data cleaning, indicator design, and evidence synthesis for mission-driven teams.',
  },
]

export const featuredCaseStudies = [
  {
    title: 'Global portfolio intelligence dashboard',
    context: 'BB&R Consulting · Portfolio analytics',
    problem:
      'Leadership needed a clear view of a complex international project portfolio distributed across countries, years, and thematic areas.',
    approach:
      'I built a Power BI dashboard from a cleaned master dataset covering 125 projects, 62 countries, 4 continents, and 19 years of records.',
    impact:
      'I turned fragmented reporting into an executive-ready decision tool with filters, KPIs, geographic views, and a standardized taxonomy of 9 strategic areas.',
    tools: ['Power BI', 'Excel', 'Data cleaning', 'Taxonomy design', 'Portfolio reporting'],
    href: 'https://app.powerbi.com/view?r=eyJrIjoiYTg2YWE5MmUtMDkxYi00NzU0LTgyZGYtMWM0MzU2OTFmMTE3IiwidCI6IjMxNTI1NWE3LTk2NDMtNDYyYy04MGRkLTRjODk1NTgwZDg0NSIsImMiOjh9',
  },
  {
    title: 'Childhood diarrheal disease and structural poverty in Colombia',
    context: 'Master’s in Applied Data Science for Social Sciences · USAL–UGR',
    problem:
      'Public-health and policy audiences needed clear evidence of how structural poverty shapes the geography, seasonality, and severity of acute diarrheal disease (EDA) among children in Colombia.',
    approach:
      'I integrated SIVIGILA microdata with DANE population and unmet basic needs (NBI) indicators, cleaned and modeled the data in Python and R, and designed a three-canvas Power BI dashboard linking incidence rates, territorial vulnerability, and early childhood burden.',
    impact:
      'I turned fragmented administrative records into an interactive decision-support tool that surfaces vulnerability clusters, confirms a strong NBI–incidence relationship, and prioritizes territories for public-health intervention.',
    tools: ['Power BI', 'Python', 'R', 'DAX', 'Epidemiological indicators', 'Social determinants of health'],
    href: 'https://app.powerbi.com/view?r=eyJrIjoiNjI1N2JkNzQtNjc0My00YjU1LWI4ZGItM2U4YzY2OWE0ZGY2IiwidCI6IjMxNTI1NWE3LTk2NDMtNDYyYy04MGRkLTRjODk1NTgwZDg0NSIsImMiOjh9',
  },
  {
    title: 'Child-rights evidence for public policy advocacy',
    context: 'World Vision Mexico · Advocacy analytics',
    problem:
      'Campaign and policy teams needed evidence, legislative monitoring, and structured recommendations to support child-rights advocacy.',
    approach:
      'I analyzed rights-related information, produced technical inputs, monitored legislation, and translated evidence into strategic recommendations and mobilization support.',
    impact:
      'I helped connect data, advocacy, and inter-institutional dialogue to strengthen child-protection narratives and public-policy positioning.',
    tools: ['Policy analysis', 'Research synthesis', 'Reporting', 'Legislative monitoring', 'Stakeholder coordination'],
    href: 'https://www.worldvision.es/wp-content/uploads/2024/09/voces-de-la-infancia.pdf',
  },
  {
    title: 'Youth agenda from regional dialogue to national presentation',
    context: '#JuventudActuaMX / INE · Civic participation',
    problem:
      'Youth perspectives from different regions needed to be organized into a credible agenda for public dialogue and institutional presentation.',
    approach:
      'I supported facilitation, synthesis, and public-engagement work that connected regional inputs, problem analysis, and decision-making spaces.',
    impact:
      'I contributed to a youth-led agenda that moved from preparatory working sessions to a national presentation at the INE, strengthening visibility and policy dialogue.',
    tools: ['Facilitation', 'Public engagement', 'Documentation', 'Policy dialogue', 'Cross-sector coordination'],
    href: 'https://issuu.com/alternativasycapacidadesac/docs/agenda_ine_final',
  },
]

export const skillGroups = [
  {
    title: 'Analytics Stack',
    items: ['Python', 'R', 'SQL', 'Power BI', 'Excel avanzado', 'SPSS'],
  },
  {
    title: 'Methods',
    items: [
      'Descriptive and inferential statistics',
      'M&E',
      'Light ETL',
      'Applied ML',
      'Data storytelling',
    ],
  },
  {
    title: 'Policy Domain',
    items: [
      'Human rights',
      'Public policy',
      'Open government',
      'Budgets',
      'Interinstitutional coordination',
    ],
  },
]

export const experience = [
  {
    role: 'Volunteer Data Scientist / Statistical Consultant',
    company: 'Statistics Without Borders',
    period: 'May 2026 - Present',
    location: 'Remote',
    summary:
      'Pro bono analytics and statistical support for nonprofit organizations and developing-country initiatives through the American Statistical Association outreach network.',
    impact:
      'Extends Jaime’s analytics profile into international, nonprofit, and volunteer consulting environments where evidence directly supports high-impact decision-making.',
    points: [
      'Provide statistical expertise and data science guidance for mission-driven organizations.',
      'Support evidence-based decision-making with volunteer analytical consulting.',
      'Contribute to international social-impact work through applied quantitative methods.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'BB&R Consulting',
    period: 'Mar 2026 - Jun 2026',
    location: 'Salamanca, Spain · Hybrid',
    summary:
      'Portfolio intelligence, data cleaning, and executive dashboard design for an international consulting firm.',
    impact:
      'Converted multi-country portfolio data into a usable management asset for executive visibility, comparative analysis, and reporting.',
    points: [
      'Designed a Power BI dashboard covering 125 projects across 62 countries and 4 continents.',
      'Structured and cleaned a master Excel dataset with 22 variables across 19 years of activity.',
      'Applied a taxonomy of 9 strategic areas and quantified cross-cutting approaches such as digitalization, gender, and sustainability.',
    ],
  },
  {
    role: 'Campaign Formulation and Mobilization Analyst',
    company: 'World Vision Mexico',
    period: 'Mar 2023 - Sep 2025',
    location: 'Mexico City, Mexico · Hybrid',
    summary:
      'Evidence-based advocacy work at the intersection of child rights, legislation, public policy, and social mobilization.',
    impact:
      'Strengthened advocacy work by turning complex child-rights information into policy-facing evidence, strategic recommendations, and mobilization support.',
    points: [
      'Analyzed and managed information on the rights of children and adolescents to support public-policy advocacy.',
      'Produced technical documents and strategic recommendations to strengthen child-protection frameworks.',
      'Designed and executed social mobilization campaigns on human rights and child development issues.',
      'Coordinated with public-sector actors, civil society, and international organizations to advance child-protection initiatives.',
      'Monitored legislation and policy with emphasis on compliance with national and international child-rights standards.',
    ],
  },
  {
    role: 'Consultant',
    company: 'aeioTU',
    period: 'Jun 2025 - Jul 2025',
    location: 'Mexico',
    summary:
      'Short-term consulting support following previous project work in early-childhood and education initiatives.',
    impact:
      'Provided continuity in a mission-driven education project by sustaining partner coordination and implementation support during a critical handoff period.',
    points: [
      'Continued support for strategic partnerships and project implementation in the education sector.',
      'Contributed to continuity in stakeholder coordination and program follow-up.',
    ],
  },
  {
    role: 'Mobilization and Sustainability Professional',
    company: 'aeioTU',
    period: 'Feb 2024 - Feb 2025',
    location: 'Colombia',
    summary:
      'Partnership, advocacy, and analytics support for a LEGO Foundation-linked early-childhood project.',
    impact:
      'Helped align partnerships, documentation, and data-informed follow-up to improve project continuity and policy relevance in early-childhood work.',
    points: [
      'Managed strategic partnerships with government representatives and allied organizations to strengthen early-childhood initiatives.',
      'Facilitated communities of practice around play-based learning as a development tool.',
      'Analyzed data and identified opportunities to improve implementation quality and policy impact.',
      'Created and maintained documentation systems to support knowledge management and long-term sustainability.',
      'Tracked legislative and regulatory processes related to child rights and access to quality education.',
    ],
  },
  {
    role: 'Technical Secretary',
    company: 'Ministry of the Interior (SEGOB)',
    period: 'Aug 2021 - Jan 2024',
    location: 'Mexico City, Mexico · Hybrid',
    summary:
      'Technical coordination and public-policy support on enforced disappearance, search processes, and institutional response mechanisms.',
    impact:
      'Contributed to high-stakes national policy processes by organizing evidence, drafting technical inputs, and coordinating across institutions and civil society actors.',
    points: [
      'Analyzed and managed information related to enforced disappearance and the search for missing persons in Mexico.',
      'Prepared technical documents, reports, and recommendations to strengthen legal and institutional frameworks.',
      'Coordinated with government authorities, international organizations, families’ collectives, and civil society groups.',
      'Contributed to the MAEVI mechanism, the General Law regulation process, and the National Search Plan.',
      'Supported follow-up mechanisms linked to UN Committee on Enforced Disappearances recommendations.',
    ],
  },
  {
    role: 'Technical Secretary',
    company: 'Local Technical Secretariat for Open Government in Durango',
    period: 'Mar 2021 - Dec 2022',
    location: 'Mexico · Hybrid',
    summary:
      'Open-government facilitation and public-affairs support in local participatory governance processes.',
    impact:
      'Supported collaborative governance processes that improved coordination, accountability, and civic participation in open-government initiatives.',
    points: [
      'Supported the local open-government action plan process and coordination among participating actors.',
      'Contributed to public-affairs work connected to accountability and collaborative governance.',
    ],
  },
  {
    role: 'Director General',
    company: 'Instituto Municipal de la Juventud',
    period: 'Sep 2019 - Jan 2021',
    location: 'Canatlan, Durango',
    summary:
      'Leadership of youth policy, participation mechanisms, and local public programs from a rights-based perspective.',
    impact:
      'Positioned the institute as a visible local actor in youth policy through programs, alliances, and participatory public-sector leadership.',
    points: [
      'Designed and implemented programs for youth focused on mental health, culture, civic education, and violence prevention.',
      'Coordinated alliances across the public, private, and academic sectors to strengthen local youth initiatives.',
      'Promoted participatory public-policy design through territorial diagnostics and youth consultation spaces.',
      'Developed communications campaigns with a youth, diversity, and human-rights perspective.',
      'Strengthened youth participation through councils, community spaces, and leadership activities.',
    ],
  },
  {
    role: 'Director General',
    company: 'Municipal DIF',
    period: 'Mar 2019 - Sep 2019',
    location: 'Canatlan, Durango, Mexico · On-site',
    summary:
      'Management of social-assistance programs, community projects, and local protection systems for vulnerable populations.',
    impact:
      'Improved local protection and welfare delivery by coordinating services, strengthening referrals, and introducing more structured management practices.',
    points: [
      'Coordinated social assistance programs for children, older adults, and other vulnerable groups.',
      'Supervised community projects with a rights, gender, and social-inclusion approach.',
      'Managed human, material, and budget resources aligned with municipal welfare objectives.',
      'Strengthened child-protection coordination through referrals, psychosocial accompaniment, and institutional partnerships.',
      'Implemented planning, evaluation, indicator design, and internal audit processes to improve transparency and effectiveness.',
    ],
  },
  {
    role: 'Employer / Intern',
    company: 'Secretariat of Foreign Affairs of Mexico',
    period: 'Aug 2018 - Mar 2019',
    location: 'Durango, Mexico',
    summary:
      'Early public-affairs experience supporting institutional work at the Secretariat of Foreign Affairs.',
    impact:
      'Built an early foundation in institutional processes, coordination, and public-sector execution that later shaped Jaime’s policy and analytics profile.',
    points: [
      'Supported administrative and public-affairs functions during an early-career placement.',
      'Built foundational experience in government processes and institutional coordination.',
    ],
  },
]

export const education = [
  {
    school: 'Universidad de Granada',
    degree: 'MSc in Data Science Applied to Social Sciences',
    field: 'Social Sciences',
    period: 'Sep 2025 - Sep 2026',
  },
  {
    school: 'Universidad de Salamanca',
    degree: 'Master in Data Science Applied to Social Sciences',
    field: 'Social Sciences',
    period: 'Sep 2025 - Sep 2026',
  },
  {
    school: 'Universidad Iberoamericana, Mexico City',
    degree: 'Master in Human Rights',
    field: 'Law',
    period: 'Completed',
  },
  {
    school: 'Universidad Juarez del Estado de Durango',
    degree: 'Master in Public Management',
    field: 'Public Administration',
    period: '2019 - 2021',
  },
  {
    school: 'Universidad Juarez del Estado de Durango',
    degree: 'Bachelor’s Degree',
    field: 'Political Science and Government',
    period: '2014 - 2018',
  },
  {
    school: 'Universidad de Guanajuato',
    degree: 'Academic Mobility',
    field: 'Political Science and Government',
    period: '2017 - 2018',
  },
]

export const certifications = [
  {
    title: 'Project Management for Development Professionals (PMD Pro)',
    issuer: 'PM4NGOs',
    issued: 'Issued May 2024',
    credentialId: '774492928',
    href: 'https://openbadgefactory.com/v1/assertion/290c99fd1d4bf888aaff1c45ac65a3791a518b04',
  },
  {
    title: 'Sistema Interamericano de Derechos Humanos',
    issuer: 'CIDH / IACHR',
    issued: 'Issued Feb 2024',
    credentialId: 'yOrwQusInN',
  },
  {
    title: 'Estrategias para el Gobierno Abierto en las Americas',
    issuer: 'Organization of American States',
    issued: 'Issued May 2021',
    credentialId: 'QAiXZ5oGEP',
  },
  {
    title: 'Voxy Proficiency Achievement Certificate - Intermediate',
    issuer: 'Voxy',
    issued: 'Issued Feb 2021',
    credentialId: '601db79ce6627125c7874374',
    href: 'https://app.voxy.com/certificates/proficiency-test/601db79ce6627125c7874374/',
  },
  {
    title: 'ELASH II',
    issuer: 'The College Board',
    issued: 'Issued Jul 2017 · Expired Jul 2019',
    credentialId: '',
  },
]

export const testScores = [
  {
    title: 'EGEL (CIPAP) - CENEVAL',
    score: 'Sobresaliente',
    date: 'Dec 2018',
    associatedWith: 'Associated with Universidad Juarez del Estado de Durango',
    note: 'National assessment evaluating the academic knowledge and professional skills of recent graduates in Political Science and Public Administration.',
  },
]

export const honors = [
  {
    title: 'Medalla Francisco Villa',
    issuer: 'Government of the State of Durango',
    issued: 'Issued Sep 2023',
    associatedWith: 'Associated with Universidad Iberoamericana, Mexico City',
    note: 'Honorary mention in Human Rights and Activism.',
  },
]

export const languages = [
  { name: 'Spanish', level: 'Native or bilingual proficiency' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'French', level: 'Elementary proficiency' },
]

export const publications = [
  {
    title: 'Informe: Voces de la infancia',
    publisher: 'World Vision Internacional',
    date: 'Jul 1, 2024',
    href: 'https://www.worldvision.es/wp-content/uploads/2024/09/voces-de-la-infancia.pdf',
    summary:
      'Report centered on child labor through the voices, drawings, and lived experiences of children and adolescents.',
  },
  {
    title: 'Comer es Nuestro Derecho',
    publisher: 'World Vision Mexico',
    date: 'Jun 28, 2024',
    href: 'https://www.worldvisionmexico.org.mx/hubfs/Informe%20Nacional%2c%20Comer%20es%20Nuestro%20Derecho.pdf',
    summary:
      'National report on food security, the right to adequate nutrition, and the unequal impact of poverty and inflation on children and adolescents in Mexico.',
  },
  {
    title: 'Antologia Trabajo Infantil',
    publisher: 'World Vision Mexico',
    date: '2024',
    href: 'https://www.worldvisionmexico.org.mx/hubfs/WORLD%20VISION%20-%20Antolog%C3%ADa%20Finalpdf.pdf',
    summary:
      'Institutional memory and systematization of field projects, methodologies, lessons learned, and stories of change across World Vision Mexico programs.',
  },
  {
    title: 'Turismo x la Ninez',
    publisher: 'World Vision Mexico',
    date: '2024',
    href: 'https://www.worldvisionmexico.org.mx/hubfs/MX%20Sitio%20Web/Informe%20TURISMO%20X%20LA%20NI%C3%91EZ-interactivo_v.pdf',
    summary:
      'Report focused on preventing commercial sexual exploitation of children and child labor in Mexico’s travel and tourism sector through training, protocols, and cross-sector alliances.',
  },
  {
    title: 'El trabajo infantil desde la mirada, la voz y el trazo de ninas, ninos y adolescentes',
    publisher: 'Vision Mundial de Mexico',
    date: 'Jun 28, 2024',
    href: '',
    summary:
      'Publication documenting child labor through a rights-based lens using testimony, observation, and child-centered narrative.',
  },
  {
    title: 'Desaparecer otra vez: Violencias y afectaciones que enfrentan las mujeres buscadoras en Mexico',
    publisher: 'Amnistia Internacional Mexico',
    date: 'Jul 8, 2025',
    href: 'https://amnistia.org.mx/contenido/index.php/desaparecer-otra-vez-violencias-y-afectaciones-que-enfrentan-mujeres-buscadoras-en-mexico/',
    summary:
      'Investigation documenting the violence, institutional barriers, and structural discrimination faced by women searching for disappeared relatives in Mexico, based on more than 600 experiences.',
  },
  {
    title: 'Agenda de Juventudes con Perspectivas Regionales 2024',
    publisher: 'Alternativas y Capacidades A.C.',
    date: 'Oct 10, 2024',
    href: 'https://issuu.com/alternativasycapacidadesac/docs/agenda_ine_final',
    summary:
      'Document presented as part of #JuventudActuaMX, compiling youth-led regional perspectives, public problem analysis, and policy recommendations for decision-making spaces.',
  },
]

export const volunteering = [
  {
    role: 'Data Science Volunteer',
    organization: 'DataKind',
    period: 'May 2026 - Present',
    category: 'Science and Technology',
    summary:
      'Active volunteer at a global nonprofit connecting data scientists with organizations working on poverty, healthcare access, and climate change.',
    points: [
      'Profiled for pro bono data science projects combining R, Python, and Power BI with social-impact expertise.',
      'Brings a human-rights and public-policy perspective to volunteer analytics work.',
    ],
  },
  {
    role: 'Volunteer',
    organization: 'Cruz Roja Espanola',
    period: 'Apr 2026 - Present',
    category: 'Veteran Support',
    summary: 'Volunteer service supporting community-centered humanitarian initiatives.',
    points: [],
  },
  {
    role: 'Activist',
    organization: 'Amnesty International Mexico',
    period: 'Jul 2022 - Present',
    category: 'Human Rights',
    summary: 'Ongoing civic engagement in human-rights advocacy and awareness.',
    points: [],
  },
  {
    role: 'Activist',
    organization: 'World Vision',
    period: 'Jan 2021 - Jan 2023',
    category: 'Children',
    summary: 'Volunteer participation in child-focused advocacy and social-impact initiatives.',
    points: [],
  },
  {
    role: 'Mentor',
    organization: 'MY World Mexico',
    period: 'Dec 2021 - Feb 2023',
    category: 'Youth Development',
    summary: 'Mentorship support for youth-centered civic and leadership development.',
    points: [],
  },
  {
    role: 'Ambassador',
    organization: 'MY World Mexico',
    period: 'Mar 2020 - Dec 2021',
    category: 'Civil Rights and Social Action',
    summary: 'Representation and outreach work in youth and civic-participation initiatives.',
    points: [],
  },
  {
    role: 'National Counselor',
    organization:
      'Citizen Council for Monitoring Public Youth Policy (CONSEPP)',
    period: 'Mar 2020 - Mar 2022',
    category: 'Politics',
    summary: 'Citizen participation role focused on oversight and follow-up of youth public policy.',
    points: [],
  },
  {
    role: 'State Coordinator',
    organization: 'International Network of SDG Promoters',
    period: 'Jun 2020 - Jun 2021',
    category: 'Civil Rights and Social Action',
    summary: 'Leadership and coordination role connected to Sustainable Development Goals advocacy.',
    points: [],
  },
  {
    role: 'State Counselor',
    organization: 'Citizen Council for Monitoring Public Youth Policy',
    period: 'Feb 2019 - Feb 2021',
    category: 'Human Rights',
    summary: 'State-level citizen service role focused on public-policy monitoring for youth issues.',
    points: [],
  },
]

export const events = [
  {
    title: 'Agenda de Juventudes con Perspectivas Regionales',
    meta: 'Preparation phase for the national INE presentation',
    description:
      'Preparatory working event for the later national presentation of the Agenda de Juventudes con Perspectivas Regionales, focused on regional dialogue, facilitation, and youth-led public problem analysis.',
    photos: [
      {
        src: eventAgenda1,
        alt: 'Jaime speaking during Agenda de Juventudes con Perspectivas Regionales',
        caption: 'Facilitating discussion and presenting during the event session.',
      },
      {
        src: eventAgenda2,
        alt: 'Jaime with participants at Agenda de Juventudes con Perspectivas Regionales',
        caption: 'Group photo with participants and organizers.',
      },
      {
        src: eventAgenda3,
        alt: 'Jaime presenting to attendees at Agenda de Juventudes con Perspectivas Regionales',
        caption: 'Public-facing workshop and audience engagement during the event.',
      },
    ],
  },
  {
    title: '#TurismoXLaNiñez',
    meta: 'Chamber of Deputies · Mexico City · Jul 12, 2023',
    description:
      'Legislative advocacy initiative developed by Faviola Capetillo and Jaime Varela with World Vision Mexico and Alternativas y Capacidades to combat child sexual and labor exploitation in tourism settings.',
    href: 'https://dev-ayc.virk.io/noticias/turismoxlaninez/',
    photos: [
      {
        src: eventCamara1,
        alt: 'Jaime with participants at a press conference in the Chamber of Deputies',
        caption: 'Press conference at the Chamber of Deputies presenting the #TurismoXLaNiñez initiative and its child-protection advocacy agenda.',
      },
    ],
  },
  {
    title: 'Public Recognition Ceremony',
    description:
      'Participation in an institutional ceremony recognizing civic leadership and public-service engagement.',
    photos: [
      {
        src: eventRecognition1,
        alt: 'Jaime receiving recognition during a public ceremony',
        caption: 'Receiving recognition during an official public ceremony.',
      },
    ],
  },
  {
    title: 'INE Youth Forum Presentation',
    description:
      'Participation in a public-facing youth event hosted in an institutional INE setting.',
    photos: [
      {
        src: eventIneStage1,
        alt: 'Jaime speaking at the podium during an INE youth event',
        caption: 'Jaime speaking at the podium during a youth-focused public event hosted by the INE.',
      },
    ],
  },
  {
    title: 'Presenta INE Agenda de Juventudes con Perspectivas Regionales',
    meta: 'INE Auditorium · Oct 29, 2024',
    description:
      'National presentation of the Agenda de Juventudes con Perspectivas Regionales as part of #JuventudActuaMX, following the prior regional preparation process and highlighting youth leadership, civic participation, and policy dialogue.',
    href: 'https://issuu.com/alternativasycapacidadesac/docs/agenda_ine_final',
    photos: [
      {
        src: eventIneAgenda2,
        alt: 'Jaime and panel participants on stage at the INE event',
        caption: 'Panel participation during the INE presentation of the youth agenda.',
      },
      {
        src: eventIneAgenda3,
        alt: 'Jaime seated with panelists during the INE event',
        caption: 'Discussion space with panelists and organizers during the presentation event.',
      },
      {
        src: eventIneAgenda4,
        alt: 'Group photo from the INE event for JuventudActuaMX',
        caption: 'Group photo with participants in the national presentation of #JuventudActuaMX.',
      },
      {
        src: eventIneAgenda5,
        alt: 'Jaime with attendees during the INE youth agenda event',
        caption: 'Participant view highlighting the collective nature of the agenda presentation.',
      },
      {
        src: eventIneAgenda6,
        alt: 'Large audience photo from the INE JuventudActuaMX event',
        caption: 'Broad participation during the national event hosted at the INE.',
      },
      {
        src: eventIneAgenda7,
        alt: 'Jaime seated with fellow panelists at the INE event',
        caption: 'Panel exchange and public dialogue around youth participation and policy priorities.',
      },
      {
        src: eventIneAgenda8,
        alt: 'Close-up photo from the INE Agenda de Juventudes presentation',
        caption: 'Additional perspective from the event presentation and stage participation.',
      },
    ],
  },
  {
    title: 'Public Policy Coordination Meeting',
    description:
      'Participation in an institutional working meeting focused on coordination, dialogue, and public-policy follow-up.',
    photos: [
      {
        src: eventPolicyMeeting1,
        alt: 'Jaime participating in a public policy coordination meeting',
        caption: 'Working meeting in an institutional setting focused on public-policy discussion and coordination.',
      },
      {
        src: eventPolicyMeeting2,
        alt: 'Jaime with participants during the same public policy coordination meeting',
        caption: 'Group photo with participants during the same institutional coordination meeting.',
      },
    ],
  },
  {
    title: 'Amnesty International Research Presentation',
    meta: 'Amnistia Internacional Mexico · Jul 2025',
    description:
      'Public presentation connected to the investigation on the risks, violence, and institutional barriers faced by women searchers in Mexico.',
    href: 'https://amnistia.org.mx/contenido/index.php/desaparecer-otra-vez-violencias-y-afectaciones-que-enfrentan-mujeres-buscadoras-en-mexico/',
    photos: [
      {
        src: eventAmnestyPresentation1,
        alt: 'Jaime participating in the presentation of an Amnesty International investigation',
        caption: 'Presentation event linked to the investigation “Desaparecer otra vez” on the risks and affectations faced by women searchers in Mexico.',
      },
    ],
  },
]

export const gallery = [
  {
    src: jaimeUnPhoto,
    alt: 'Jaime at UN Human Rights Mexico event',
    caption: 'Human-rights and international advocacy context.',
  },
  {
    src: jaimeGraduationPhoto,
    alt: 'Jaime at graduation ceremony in Salamanca',
    caption: 'Academic profile aligned with applied data science.',
  },
  {
    src: jaimeAwardPhoto,
    alt: 'Jaime receiving the Medalla Francisco Villa award',
    caption: 'Recognition: Medalla Francisco Villa, awarded in Durango in 2023.',
  },
]

function getEarliestYear(periods) {
  const years = periods
    .flatMap((period) => period.match(/\b(19|20)\d{2}\b/g) ?? [])
    .map((year) => Number(year))

  return years.length ? Math.min(...years) : new Date().getFullYear()
}

const earliestImpactYear = getEarliestYear(experience.map((item) => item.period))
const currentYear = new Date().getFullYear()
const yearsAcrossPublicImpact = Math.max(1, currentYear - earliestImpactYear + 1)

export const portfolioMetrics = {
  yearsAcrossPublicImpact,
  publishedOutputs: publications.length,
  credentialsAndRecognitions: certifications.length + honors.length + testScores.length,
  publicEventsAndPresentations: events.length,
}

export const highlights = [
  { label: 'Years across public impact', value: `${portfolioMetrics.yearsAcrossPublicImpact}+` },
  { label: 'Published outputs and reports', value: `${portfolioMetrics.publishedOutputs}` },
  { label: 'Credentials and recognitions', value: `${portfolioMetrics.credentialsAndRecognitions}` },
  {
    label: 'Public events and presentations',
    value: `${portfolioMetrics.publicEventsAndPresentations}`,
  },
]
