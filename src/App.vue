<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  highlights,
  recruiterSignals,
  featuredCaseStudies,
  skillGroups,
  experience,
  education,
  certifications,
  testScores,
  honors,
  languages,
  publications,
  events,
  volunteering,
  gallery,
} from './data/portfolio'
import jaimeUnPhoto from './assets/jaime-un-photo.png'
import jaimeGraduationPhoto from './assets/jaime-graduation-photo.png'

const scrolled = ref(false)
const menuOpen = ref(false)
const moreOpen = ref(false)
const activeEvent = ref(null)
const activePhotoIndex = ref(0)
const expandedCases = ref({})
const { locale, messages } = useI18n()

const cvHref = computed(() =>
  locale.value === 'es'
    ? '/cv/CV_Jaime_Arreola_Varela_ES.pdf'
    : '/cv/CV_Jaime_Arreola_Varela_EN.pdf',
)

function t(en, es) {
  return locale.value === 'es' ? es : en
}

function isCaseExpanded(title) {
  return Boolean(expandedCases.value[title])
}

function toggleCase(title) {
  expandedCases.value = {
    ...expandedCases.value,
    [title]: !expandedCases.value[title],
  }
}

const translations = {
  'Years across public impact': 'Años de impacto público',
  'May 2026 - Present': 'Mayo de 2026 - Actualidad',
  'Mar 2026 - Jun 2026': 'Marzo de 2026 - Junio de 2026',
  'Mar 2023 - Sep 2025': 'Marzo de 2023 - Septiembre de 2025',
  'Jun 2025 - Jul 2025': 'Junio de 2025 - Julio de 2025',
  'Feb 2024 - Feb 2025': 'Febrero de 2024 - Febrero de 2025',
  'Aug 2021 - Jan 2024': 'Agosto de 2021 - Enero de 2024',
  'Mar 2021 - Dec 2022': 'Marzo de 2021 - Diciembre de 2022',
  'Sep 2019 - Jan 2021': 'Septiembre de 2019 - Enero de 2021',
  'Mar 2019 - Sep 2019': 'Marzo de 2019 - Septiembre de 2019',
  'Aug 2018 - Mar 2019': 'Agosto de 2018 - Marzo de 2019',
  'Sep 2025 - Sep 2026': 'Septiembre de 2025 - Septiembre de 2026',
  '2019 - 2021': '2019 - 2021',
  '2014 - 2018': '2014 - 2018',
  '2017 - 2018': '2017 - 2018',
  'Jul 1, 2024': '1 de julio de 2024',
  'Jun 28, 2024': '28 de junio de 2024',
  '2024': '2024',
  'Countries mapped in dashboard work': 'Países mapeados en trabajo de dashboards',
  'Projects analyzed in portfolio tracking': 'Proyectos analizados en seguimiento de portafolios',
  'Strategic areas standardized': 'Áreas estratégicas estandarizadas',
  'Analytics Stack': 'Stack analítico',
  Methods: 'Métodos',
  'Policy Domain': 'Especialidad temática',
  'Descriptive and inferential statistics': 'Estadística descriptiva e inferencial',
  'Light ETL': 'ETL ligero',
  'Applied ML': 'ML aplicado',
  'Data storytelling': 'Narrativa de datos',
  'Human rights': 'Derechos humanos',
  'Public policy': 'Política pública',
  'Open government': 'Gobierno abierto',
  Budgets: 'Presupuestos',
  'Interinstitutional coordination': 'Coordinación interinstitucional',
  'Volunteer Data Scientist / Statistical Consultant': 'Científico de Datos Voluntario / Consultor Estadístico',
  Remote: 'Remoto',
  'Pro bono analytics and statistical support for nonprofit organizations and developing-country initiatives through the American Statistical Association outreach network.':
    'Apoyo analítico y estadístico pro bono para organizaciones sin fines de lucro e iniciativas en países en desarrollo a través de la red de vinculación de la American Statistical Association.',
  'Provide statistical expertise and data science guidance for mission-driven organizations.':
    'Brinda experiencia estadística y orientación en ciencia de datos para organizaciones con propósito social.',
  'Support evidence-based decision-making with volunteer analytical consulting.':
    'Apoya la toma de decisiones basada en evidencia mediante consultoría analítica voluntaria.',
  'Contribute to international social-impact work through applied quantitative methods.':
    'Contribuye al trabajo internacional de impacto social mediante métodos cuantitativos aplicados.',
  'Data Analyst Intern': 'Becario de Analista de Datos',
  'Salamanca, Spain · Hybrid': 'Salamanca, España · Híbrido',
  'Portfolio intelligence, data cleaning, and executive dashboard design for an international consulting firm.':
    'Inteligencia de portafolio, limpieza de datos y diseño de dashboards ejecutivos para una firma internacional de consultoría.',
  'Designed a Power BI dashboard covering 125 projects across 62 countries and 4 continents.':
    'Diseñó un dashboard en Power BI que cubre 125 proyectos en 62 países y 4 continentes.',
  'Structured and cleaned a master Excel dataset with 22 variables across 19 years of activity.':
    'Estructuró y limpió una base maestra en Excel con 22 variables a lo largo de 19 años de actividad.',
  'Applied a taxonomy of 9 strategic areas and quantified cross-cutting approaches such as digitalization, gender, and sustainability.':
    'Aplicó una taxonomía de 9 áreas estratégicas y cuantificó enfoques transversales como digitalización, género y sostenibilidad.',
  'Campaign Formulation and Mobilization Analyst': 'Analista para la formulación de campañas y movilización',
  'Mexico City, Mexico · Hybrid': 'Ciudad de México, México · Híbrido',
  'Evidence-based advocacy work at the intersection of child rights, legislation, public policy, and social mobilization.':
    'Trabajo de incidencia basado en evidencia en la intersección entre derechos de la niñez, legislación, política pública y movilización social.',
  'Analyzed and managed information on the rights of children and adolescents to support public-policy advocacy.':
    'Analizó y gestionó información sobre los derechos de niñas, niños y adolescentes para apoyar la incidencia en políticas públicas.',
  'Produced technical documents and strategic recommendations to strengthen child-protection frameworks.':
    'Elaboró documentos técnicos y recomendaciones estratégicas para fortalecer marcos de protección de la infancia.',
  'Designed and executed social mobilization campaigns on human rights and child development issues.':
    'Diseñó y ejecutó campañas de movilización social sobre derechos humanos y desarrollo infantil.',
  'Coordinated with public-sector actors, civil society, and international organizations to advance child-protection initiatives.':
    'Coordinó con actores del sector público, sociedad civil y organismos internacionales para impulsar iniciativas de protección infantil.',
  'Monitored legislation and policy with emphasis on compliance with national and international child-rights standards.':
    'Monitoreó legislación y políticas públicas con énfasis en el cumplimiento de estándares nacionales e internacionales de derechos de la niñez.',
  Consultant: 'Consultor',
  Mexico: 'México',
  'Short-term consulting support following previous project work in early-childhood and education initiatives.':
    'Apoyo de consultoría de corto plazo tras trabajo previo en iniciativas de primera infancia y educación.',
  'Continued support for strategic partnerships and project implementation in the education sector.':
    'Continuó apoyando alianzas estratégicas e implementación de proyectos en el sector educativo.',
  'Contributed to continuity in stakeholder coordination and program follow-up.':
    'Contribuyó a la continuidad en la coordinación de actores y seguimiento programático.',
  'Mobilization and Sustainability Professional': 'Profesional de Movilización y Sostenibilidad',
  Colombia: 'Colombia',
  'Partnership, advocacy, and analytics support for a LEGO Foundation-linked early-childhood project.':
    'Apoyo en alianzas, incidencia y analítica para un proyecto de primera infancia vinculado con Fundación LEGO.',
  'Managed strategic partnerships with government representatives and allied organizations to strengthen early-childhood initiatives.':
    'Gestionó alianzas estratégicas con representantes gubernamentales y organizaciones aliadas para fortalecer iniciativas de primera infancia.',
  'Facilitated communities of practice around play-based learning as a development tool.':
    'Facilitó comunidades de práctica en torno al aprendizaje basado en el juego como herramienta de desarrollo.',
  'Analyzed data and identified opportunities to improve implementation quality and policy impact.':
    'Analizó datos e identificó oportunidades para mejorar la calidad de implementación y el impacto en políticas públicas.',
  'Created and maintained documentation systems to support knowledge management and long-term sustainability.':
    'Creó y mantuvo sistemas de documentación para apoyar la gestión del conocimiento y la sostenibilidad de largo plazo.',
  'Tracked legislative and regulatory processes related to child rights and access to quality education.':
    'Dio seguimiento a procesos legislativos y regulatorios relacionados con derechos de la niñez y acceso a educación de calidad.',
  'Technical Secretary': 'Secretario Técnico',
  'Ministry of the Interior (SEGOB)': 'Secretaría de Gobernación (SEGOB)',
  'Technical coordination and public-policy support on enforced disappearance, search processes, and institutional response mechanisms.':
    'Coordinación técnica y apoyo en políticas públicas sobre desaparición forzada, procesos de búsqueda y mecanismos de respuesta institucional.',
  'Analyzed and managed information related to enforced disappearance and the search for missing persons in Mexico.':
    'Analizó y gestionó información relacionada con desaparición forzada y búsqueda de personas en México.',
  'Prepared technical documents, reports, and recommendations to strengthen legal and institutional frameworks.':
    'Preparó documentos técnicos, informes y recomendaciones para fortalecer marcos legales e institucionales.',
  'Coordinated with government authorities, international organizations, families’ collectives, and civil society groups.':
    'Coordinó con autoridades gubernamentales, organismos internacionales, colectivos de familias y sociedad civil.',
  'Contributed to the MAEVI mechanism, the General Law regulation process, and the National Search Plan.':
    'Contribuyó al mecanismo MAEVI, al proceso reglamentario de la Ley General y al Plan Nacional de Búsqueda.',
  'Supported follow-up mechanisms linked to UN Committee on Enforced Disappearances recommendations.':
    'Apoyó mecanismos de seguimiento vinculados a recomendaciones del Comité de la ONU contra las Desapariciones Forzadas.',
  'Mexico · Hybrid': 'México · Híbrido',
  'Open-government facilitation and public-affairs support in local participatory governance processes.':
    'Facilitación de gobierno abierto y apoyo en asuntos públicos en procesos locales de gobernanza participativa.',
  'Supported the local open-government action plan process and coordination among participating actors.':
    'Apoyó el proceso del plan de acción local de gobierno abierto y la coordinación entre actores participantes.',
  'Contributed to public-affairs work connected to accountability and collaborative governance.':
    'Contribuyó al trabajo de asuntos públicos vinculado con rendición de cuentas y gobernanza colaborativa.',
  'Director General': 'Director General',
  'Canatlan, Durango': 'Canatlán, Durango',
  'Leadership of youth policy, participation mechanisms, and local public programs from a rights-based perspective.':
    'Liderazgo de política pública de juventudes, mecanismos de participación y programas públicos locales desde una perspectiva de derechos.',
  'Designed and implemented programs for youth focused on mental health, culture, civic education, and violence prevention.':
    'Diseñó e implementó programas para juventudes enfocados en salud mental, cultura, formación cívica y prevención de violencias.',
  'Coordinated alliances across the public, private, and academic sectors to strengthen local youth initiatives.':
    'Coordinó alianzas entre los sectores público, privado y académico para fortalecer iniciativas locales de juventud.',
  'Promoted participatory public-policy design through territorial diagnostics and youth consultation spaces.':
    'Promovió el diseño participativo de políticas públicas mediante diagnósticos territoriales y espacios de consulta juvenil.',
  'Developed communications campaigns with a youth, diversity, and human-rights perspective.':
    'Desarrolló campañas de comunicación con perspectiva de juventudes, diversidad y derechos humanos.',
  'Strengthened youth participation through councils, community spaces, and leadership activities.':
    'Fortaleció la participación juvenil mediante consejos, espacios comunitarios y actividades de liderazgo.',
  'Canatlan, Durango, Mexico · On-site': 'Canatlán, Durango, México · Presencial',
  'Management of social-assistance programs, community projects, and local protection systems for vulnerable populations.':
    'Gestión de programas de asistencia social, proyectos comunitarios y sistemas locales de protección para poblaciones vulnerables.',
  'Coordinated social assistance programs for children, older adults, and other vulnerable groups.':
    'Coordinó programas de asistencia social para niñas, niños, personas adultas mayores y otros grupos vulnerables.',
  'Supervised community projects with a rights, gender, and social-inclusion approach.':
    'Supervisó proyectos comunitarios con enfoque de derechos, género e inclusión social.',
  'Managed human, material, and budget resources aligned with municipal welfare objectives.':
    'Gestionó recursos humanos, materiales y presupuestales alineados con los objetivos de bienestar del municipio.',
  'Strengthened child-protection coordination through referrals, psychosocial accompaniment, and institutional partnerships.':
    'Fortaleció la coordinación de protección infantil mediante referencias, acompañamiento psicosocial y alianzas institucionales.',
  'Implemented planning, evaluation, indicator design, and internal audit processes to improve transparency and effectiveness.':
    'Implementó procesos de planeación, evaluación, diseño de indicadores y auditoría interna para mejorar transparencia y efectividad.',
  'Employer / Intern': 'Empleado / Pasante',
  'Durango, Mexico': 'Durango, México',
  'Early public-affairs experience supporting institutional work at the Secretariat of Foreign Affairs.':
    'Experiencia inicial en asuntos públicos apoyando el trabajo institucional en la Secretaría de Relaciones Exteriores.',
  'Supported administrative and public-affairs functions during an early-career placement.':
    'Apoyó funciones administrativas y de asuntos públicos durante una experiencia temprana.',
  'Built foundational experience in government processes and institutional coordination.':
    'Construyó experiencia base en procesos gubernamentales y coordinación institucional.',
  'MSc in Data Science Applied to Social Sciences': 'Máster en Ciencia de Datos Aplicada a las Ciencias Sociales',
  'Social Sciences': 'Ciencias Sociales',
  'Master in Data Science Applied to Social Sciences': 'Máster en Ciencia de Datos Aplicada a las Ciencias Sociales',
  'Master in Human Rights': 'Maestría en Derechos Humanos',
  Law: 'Derecho',
  Completed: 'Concluida',
  'Master in Public Management': 'Maestría en Gestión Pública',
  'Public Administration': 'Administración Pública',
  'Bachelor’s Degree': 'Licenciatura',
  'Political Science and Government': 'Ciencias Políticas y Gobierno',
  'Academic Mobility': 'Movilidad Académica',
  'Issued May 2024': 'Emitido en mayo de 2024',
  'Issued Feb 2024': 'Emitido en febrero de 2024',
  'Issued May 2021': 'Emitido en mayo de 2021',
  'Issued Feb 2021': 'Emitido en febrero de 2021',
  'Issued Jul 2017 · Expired Jul 2019': 'Emitido en julio de 2017 · Expiró en julio de 2019',
  Sobresaliente: 'Sobresaliente',
  'Dec 2018': 'Diciembre de 2018',
  'Associated with Universidad Juarez del Estado de Durango': 'Asociado con la Universidad Juárez del Estado de Durango',
  'National assessment evaluating the academic knowledge and professional skills of recent graduates in Political Science and Public Administration.':
    'Evaluación nacional que mide los conocimientos académicos y habilidades profesionales de egresados en Ciencia Política y Administración Pública.',
  'Government of the State of Durango': 'Gobierno del Estado de Durango',
  'Issued Sep 2023': 'Emitido en septiembre de 2023',
  'Associated with Universidad Iberoamericana, Mexico City': 'Asociado con la Universidad Iberoamericana, Ciudad de México',
  'Honorary mention in Human Rights and Activism.': 'Mención honorífica en Derechos Humanos y Activismo.',
  Spanish: 'Español',
  English: 'Inglés',
  French: 'Francés',
  'Native or bilingual proficiency': 'Competencia nativa o bilingüe',
  'Professional working proficiency': 'Competencia profesional de trabajo',
  'Elementary proficiency': 'Competencia básica',
  'World Vision Internacional': 'World Vision Internacional',
  'Report centered on child labor through the voices, drawings, and lived experiences of children and adolescents.':
    'Informe centrado en el trabajo infantil a través de las voces, dibujos y experiencias vividas de niñas, niños y adolescentes.',
  'World Vision Mexico': 'World Vision México',
  'National report on food security, the right to adequate nutrition, and the unequal impact of poverty and inflation on children and adolescents in Mexico.':
    'Informe nacional sobre seguridad alimentaria, derecho a la alimentación adecuada y el impacto desigual de la pobreza y la inflación en niñas, niños y adolescentes en México.',
  'Antologia Trabajo Infantil': 'Antología Trabajo Infantil',
  'Institutional memory and systematization of field projects, methodologies, lessons learned, and stories of change across World Vision Mexico programs.':
    'Memoria institucional y sistematización de proyectos de campo, metodologías, aprendizajes e historias de cambio en los programas de World Vision México.',
  'Turismo x la Ninez': 'Turismo x la Niñez',
  'Report focused on preventing commercial sexual exploitation of children and child labor in Mexico’s travel and tourism sector through training, protocols, and cross-sector alliances.':
    'Informe enfocado en prevenir la explotación sexual comercial infantil y el trabajo infantil en el sector turístico de México mediante capacitación, protocolos y alianzas intersectoriales.',
  'Vision Mundial de Mexico': 'Visión Mundial de México',
  'Publication documenting child labor through a rights-based lens using testimony, observation, and child-centered narrative.':
    'Publicación que documenta el trabajo infantil desde un enfoque de derechos mediante testimonios, observación y narrativa centrada en la niñez.',
  'Desaparecer otra vez: Violencias y afectaciones que enfrentan las mujeres buscadoras en Mexico':
    'Desaparecer otra vez: Violencias y afectaciones que enfrentan las mujeres buscadoras en México',
  'Amnistia Internacional Mexico': 'Amnistía Internacional México',
  'Jul 8, 2025': '8 de julio de 2025',
  'Investigation documenting the violence, institutional barriers, and structural discrimination faced by women searching for disappeared relatives in Mexico, based on more than 600 experiences.':
    'Investigación que documenta las violencias, barreras institucionales y discriminación estructural que enfrentan las mujeres buscadoras en México, a partir de más de 600 experiencias.',
  'Agenda de Juventudes con Perspectivas Regionales 2024': 'Agenda de Juventudes con Perspectivas Regionales 2024',
  'Alternativas y Capacidades A.C.': 'Alternativas y Capacidades A.C.',
  'Oct 10, 2024': '10 de octubre de 2024',
  'Document presented as part of #JuventudActuaMX, compiling youth-led regional perspectives, public problem analysis, and policy recommendations for decision-making spaces.':
    'Documento presentado como parte de #JuventudActuaMX, que compila perspectivas regionales lideradas por juventudes, análisis de problemas públicos y recomendaciones de política pública.',
  'Data Science Volunteer': 'Voluntario en Ciencia de Datos',
  'Science and Technology': 'Ciencia y Tecnología',
  'Active volunteer at a global nonprofit connecting data scientists with organizations working on poverty, healthcare access, and climate change.':
    'Voluntario activo en una organización global que conecta científicos de datos con organizaciones que trabajan en pobreza, acceso a salud y cambio climático.',
  'Profiled for pro bono data science projects combining R, Python, and Power BI with social-impact expertise.':
    'Participa en proyectos pro bono de ciencia de datos que combinan R, Python y Power BI con experiencia en impacto social.',
  'Brings a human-rights and public-policy perspective to volunteer analytics work.':
    'Aporta una perspectiva de derechos humanos y política pública al trabajo analítico voluntario.',
  Volunteer: 'Voluntario',
  'Cruz Roja Espanola': 'Cruz Roja Española',
  'Veteran Support': 'Apoyo comunitario',
  'Volunteer service supporting community-centered humanitarian initiatives.':
    'Servicio voluntario que apoya iniciativas humanitarias centradas en la comunidad.',
  Activist: 'Activista',
  Children: 'Niñez',
  'Volunteer participation in child-focused advocacy and social-impact initiatives.':
    'Participación voluntaria en iniciativas de incidencia e impacto social enfocadas en la niñez.',
  Mentor: 'Mentor',
  'MY World Mexico': 'MY World México',
  'Youth Development': 'Desarrollo juvenil',
  'Mentorship support for youth-centered civic and leadership development.':
    'Acompañamiento de mentoría para desarrollo cívico y de liderazgo centrado en juventudes.',
  Ambassador: 'Embajador',
  'Civil Rights and Social Action': 'Derechos civiles y acción social',
  'Representation and outreach work in youth and civic-participation initiatives.':
    'Trabajo de representación y vinculación en iniciativas de juventud y participación cívica.',
  'National Counselor': 'Consejero Nacional',
  Politics: 'Política',
  'Citizen participation role focused on oversight and follow-up of youth public policy.':
    'Rol de participación ciudadana enfocado en seguimiento y vigilancia de políticas públicas de juventud.',
  'State Coordinator': 'Coordinador Estatal',
  'International Network of SDG Promoters': 'Red Internacional de Promotores ODS',
  'Leadership and coordination role connected to Sustainable Development Goals advocacy.':
    'Rol de liderazgo y coordinación vinculado con incidencia en Objetivos de Desarrollo Sostenible.',
  'State Counselor': 'Consejero Estatal',
  'Citizen Council for Monitoring Public Youth Policy': 'Consejo Ciudadano de Seguimiento de Políticas Públicas en Materia de Juventud',
  'State-level citizen service role focused on public-policy monitoring for youth issues.':
    'Rol de servicio ciudadano a nivel estatal enfocado en seguimiento de políticas públicas de juventud.',
  'Preparation phase for the national INE presentation': 'Etapa preparatoria para la presentación nacional en el INE',
  'Preparatory working event for the later national presentation of the Agenda de Juventudes con Perspectivas Regionales, focused on regional dialogue, facilitation, and youth-led public problem analysis.':
    'Evento de trabajo preparatorio para la posterior presentación nacional de la Agenda de Juventudes con Perspectivas Regionales, enfocado en diálogo regional, facilitación y análisis de problemas públicos liderado por juventudes.',
  '#TurismoXLaNiñez': '#TurismoXLaNiñez',
  'Chamber of Deputies · Mexico City · Jul 12, 2023': 'Cámara de Diputados · Ciudad de México · 12 de julio de 2023',
  'Legislative advocacy initiative developed by Faviola Capetillo and Jaime Varela with World Vision Mexico and Alternativas y Capacidades to combat child sexual and labor exploitation in tourism settings.':
    'Iniciativa de incidencia legislativa desarrollada por Faviola Capetillo y Jaime Varela con World Vision México y Alternativas y Capacidades para combatir la explotación sexual y laboral infantil en contextos turísticos.',
  'Public Recognition Ceremony': 'Ceremonia de Reconocimiento Público',
  'Participation in an institutional ceremony recognizing civic leadership and public-service engagement.':
    'Participación en una ceremonia institucional de reconocimiento al liderazgo cívico y al compromiso con el servicio público.',
  'INE Youth Forum Presentation': 'Presentación en foro juvenil del INE',
  'Participation in a public-facing youth event hosted in an institutional INE setting.':
    'Participación en un evento juvenil de carácter público realizado en un espacio institucional del INE.',
  'Presenta INE Agenda de Juventudes con Perspectivas Regionales': 'Presenta INE Agenda de Juventudes con Perspectivas Regionales',
  'INE Auditorium · Oct 29, 2024': 'Auditorio del INE · 29 de octubre de 2024',
  'National presentation of the Agenda de Juventudes con Perspectivas Regionales as part of #JuventudActuaMX, following the prior regional preparation process and highlighting youth leadership, civic participation, and policy dialogue.':
    'Presentación nacional de la Agenda de Juventudes con Perspectivas Regionales como parte de #JuventudActuaMX, posterior al proceso de preparación regional y enfocada en liderazgo juvenil, participación cívica y diálogo de políticas públicas.',
  'Public Policy Coordination Meeting': 'Reunión de Coordinación de Política Pública',
  'Participation in an institutional working meeting focused on coordination, dialogue, and public-policy follow-up.':
    'Participación en una reunión institucional de trabajo enfocada en coordinación, diálogo y seguimiento de políticas públicas.',
  'Amnesty International Research Presentation': 'Presentación de investigación de Amnistía Internacional',
  'Amnistia Internacional Mexico · Jul 2025': 'Amnistía Internacional México · julio de 2025',
  'Public presentation connected to the investigation on the risks, violence, and institutional barriers faced by women searchers in Mexico.':
    'Presentación pública vinculada con la investigación sobre riesgos, violencias y barreras institucionales que enfrentan las mujeres buscadoras en México.',
  'Human-rights and international advocacy context.': 'Contexto de derechos humanos e incidencia internacional.',
  'Academic profile aligned with applied data science.': 'Perfil académico alineado con la ciencia de datos aplicada.',
  'Recognition: Medalla Francisco Villa, awarded in Durango in 2023.': 'Reconocimiento: Medalla Francisco Villa, otorgada en Durango en 2023.',
}

function tx(text) {
  const localeMessages = messages.value?.[locale.value]?.content ?? {}
  return locale.value === 'es' ? localeMessages[text] ?? text : text
}

const navSections = computed(() => [
  { id: 'about', label: t('About', 'Sobre mí') },
  { id: 'experience', label: t('Experience', 'Experiencia') },
  { id: 'skills', label: t('Skills', 'Habilidades') },
  { id: 'publications', label: t('Publications', 'Publicaciones') },
  { id: 'events', label: t('Events', 'Eventos') },
  { id: 'contact', label: t('Contact', 'Contacto') },
])

const moreSections = computed(() => [
  { id: 'education', label: t('Education', 'Educación') },
  { id: 'certifications', label: t('Certifications', 'Certificaciones') },
  { id: 'test-scores', label: t('Test Scores', 'Resultados') },
  { id: 'honors', label: t('Honors', 'Reconocimientos') },
  { id: 'languages', label: t('Languages', 'Idiomas') },
  { id: 'volunteering', label: t('Volunteering', 'Voluntariado') },
  { id: 'presence', label: t('Presence', 'Galería') },
])

function onScroll() {
  scrolled.value = window.scrollY > 20
}

function closeMenu() {
  menuOpen.value = false
  moreOpen.value = false
}

function openEvent(event, index = 0) {
  activeEvent.value = event
  activePhotoIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeEvent() {
  activeEvent.value = null
  activePhotoIndex.value = 0
  document.body.style.overflow = ''
}

function showNextPhoto() {
  if (!activeEvent.value) return
  activePhotoIndex.value = (activePhotoIndex.value + 1) % activeEvent.value.photos.length
}

function showPreviousPhoto() {
  if (!activeEvent.value) return
  activePhotoIndex.value =
    (activePhotoIndex.value - 1 + activeEvent.value.photos.length) % activeEvent.value.photos.length
}

function onKeydown(event) {
  if (!activeEvent.value) return
  if (event.key === 'Escape') closeEvent()
  if (event.key === 'ArrowRight') showNextPhoto()
  if (event.key === 'ArrowLeft') showPreviousPhoto()
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="page-shell">
    <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': menuOpen }">
      <div class="nav__inner">
        <a href="#top" class="nav__brand" @click="closeMenu">
          <span class="nav__mark">JV</span>
          <span class="nav__name">Jaime Arreola Varela</span>
        </a>

        <nav class="nav__links" :aria-hidden="!menuOpen && undefined">
          <a v-for="section in navSections" :key="section.id" :href="`#${section.id}`" @click="closeMenu">
            {{ section.label }}
          </a>
          <div class="nav__more">
            <button class="nav__more-button" type="button" @click="moreOpen = !moreOpen">
              {{ t('More', 'Más') }}
            </button>
            <div v-if="moreOpen" class="nav__more-menu">
              <a v-for="section in moreSections" :key="section.id" :href="`#${section.id}`" @click="closeMenu">
                {{ section.label }}
              </a>
            </div>
          </div>
        </nav>

        <div class="nav__lang">
          <button type="button" :class="{ active: locale === 'en' }" @click="locale = 'en'">EN</button>
          <button type="button" :class="{ active: locale === 'es' }" @click="locale = 'es'">ES</button>
        </div>

        <button class="nav__toggle" type="button" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
      </div>
    </header>

    <section id="top" class="hero">
      <div class="hero__media" :style="{ backgroundImage: `url(${jaimeGraduationPhoto})` }" />
      <div class="hero__veil" />

      <div class="hero__content">
        <p class="hero__status">
          <span class="pulse" aria-hidden="true" />
          {{ t('Open to work', 'Disponible para trabajar') }}
          <span class="dot">·</span>
          {{ t('León, Spain', 'León, España') }}
        </p>

        <h1 class="hero__brand">
          {{
            t(
              'Data Analyst transforming public policy and social-impact data into actionable insights.',
              'Analista de datos que transforma datos de política pública e impacto social en insights accionables.',
            )
          }}
        </h1>
        <p class="hero__headline">
          {{
            t(
              'I combine public-sector experience and analytics to build dashboards, evidence, and decision-ready insights.',
              'Combino experiencia en el sector público y analítica para construir dashboards, evidencia e insights listos para la toma de decisiones.',
            )
          }}
        </p>
        <p class="hero__target">
          {{
            t(
              'I am targeting Data Analyst, Junior Data Scientist, and Policy Analytics roles.',
              'Estoy buscando roles de Data Analyst, Junior Data Scientist y analítica orientada a políticas públicas.',
            )
          }}
        </p>

        <div class="hero__meta">
          <span class="chip">{{ t('Immediate availability', 'Disponibilidad inmediata') }}</span>
          <span class="chip chip--quiet">Data Analyst</span>
          <span class="chip chip--quiet">Junior Data Scientist</span>
          <span class="chip chip--quiet">Remote ES / LatAm</span>
        </div>

        <div class="hero__ctas">
          <a class="btn btn--primary" href="#featured-impact">{{ t('View selected work', 'Ver trabajo destacado') }}</a>
          <a class="btn btn--primary" :href="cvHref" download>
            {{ t('Download CV', 'Descargar CV') }}
          </a>
          <a class="btn btn--ghost" href="mailto:jaaimevareela@gmail.com">{{ t('Get in touch', 'Contactar') }}</a>
        </div>

        <div class="hero__socials">
          <a href="mailto:jaaimevareela@gmail.com">jaaimevareela@gmail.com</a>
          <a href="https://www.linkedin.com/in/jaimeavarela/" target="_blank" rel="noreferrer">linkedin</a>
        </div>
      </div>
    </section>

    <main>
      <section id="about" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('About', 'Sobre mí') }}</p>
          <h2>
            {{
              t(
                'Analytical depth shaped by public-sector execution.',
                'Profundidad analítica construida desde la experiencia en lo público.',
              )
            }}
          </h2>
          <p class="lead">
            {{
              t(
                'I bring over seven years of experience across government, international organizations, and mission-driven consulting. My analytics work is tied to real policy outcomes, public accountability, and institutional coordination.',
                'Aporto más de siete años de experiencia en gobierno, organismos internacionales y consultoría con propósito social. Mi trabajo analítico está conectado con resultados reales de política pública, rendición de cuentas y articulación institucional.',
              )
            }}
          </p>
        </div>

        <div class="about">
          <div class="about__portrait">
            <img :src="jaimeUnPhoto" alt="Jaime at UN Human Rights Mexico event" />
          </div>

          <div>
            <div class="stats-grid">
              <article v-for="item in highlights" :key="item.label" class="stat-card">
                <p class="score__value">{{ item.value }}</p>
                <p class="muted">{{ tx(item.label) }}</p>
              </article>
            </div>

            <div class="about__grid">
              <div>
                <h3>{{ t('Current Focus', 'Enfoque actual') }}</h3>
                <p class="muted">
                  {{
                    t(
                      'I use Power BI, Python, R, and SQL to build dashboards, reporting workflows, and applied analytics for social-impact and policy contexts.',
                      'Uso Power BI, Python, R y SQL para construir dashboards, flujos de reporting y analítica aplicada en contextos de impacto social y política pública.',
                    )
                  }}
                </p>
              </div>
              <div>
                <h3>{{ t('Domain Strength', 'Fortaleza temática') }}</h3>
                <p class="muted">
                  {{
                    t(
                      'I work strongest at the intersection of human rights, child advocacy, public policy, open government, and cross-sector coordination.',
                      'Trabajo con mayor solidez en la intersección entre derechos humanos, incidencia en niñez, política pública, gobierno abierto y coordinación intersectorial.',
                    )
                  }}
                </p>
              </div>
              <div>
                <h3>{{ t('Work Model', 'Modalidad de trabajo') }}</h3>
                <p class="muted">
                  {{
                    t(
                      'I am available for on-site work in León or fully remote collaboration across Spain and Latin America.',
                      'Estoy disponible para trabajo presencial en León o colaboración 100% remota en España y América Latina.',
                    )
                  }}
                </p>
              </div>
              <div>
                <h3>{{ t('Role Fit', 'Encaje profesional') }}</h3>
                <p class="muted">
                  {{
                    t(
                      'I am best positioned for data analyst, insights, research, and policy-analytics roles where evidence needs to inform decisions.',
                      'Estoy mejor posicionado para roles de data analyst, insights, investigación y analítica de políticas donde la evidencia deba informar decisiones.',
                    )
                  }}
                </p>
              </div>
            </div>

            <article class="info-block proof-block">
              <h3>{{ t('Why I can add value', 'Por qué puedo aportar valor') }}</h3>
              <div class="proof-grid">
                <article v-for="item in recruiterSignals" :key="item.title" class="proof-card">
                  <p class="timeline__org">{{ tx(item.title) }}</p>
                  <p class="muted">{{ tx(item.text) }}</p>
                </article>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="featured-impact" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Featured Impact', 'Impacto destacado') }}</p>
          <h2>
            {{
              t(
                'Selected work that shows how I turn data and coordination into decision support.',
                'Trabajo seleccionado que muestra cómo convierto datos y coordinación en soporte para decisiones.',
              )
            }}
          </h2>
          <p class="lead">
            {{
              t(
                'These examples show how I work, what I build, and the kind of analytical contribution I can bring to a team.',
                'Estos ejemplos muestran cómo trabajo, qué construyo y el tipo de contribución analítica que puedo aportar a un equipo.',
              )
            }}
          </p>
        </div>

        <div class="case-study-grid">
          <article v-for="item in featuredCaseStudies" :key="item.title" class="info-block case-study">
            <a
              v-if="item.preview"
              class="case-study__preview"
              :class="{ 'case-study__preview--contain': item.previewContain }"
              :href="item.href || undefined"
              :target="item.href ? '_blank' : undefined"
              :rel="item.href ? 'noreferrer' : undefined"
              :aria-label="tx(item.previewAlt || item.title)"
            >
              <img :src="item.preview" :alt="tx(item.previewAlt || item.title)" loading="lazy" />
              <span class="case-study__preview-label">{{ t('Open preview', 'Abrir preview') }}</span>
            </a>
            <p class="timeline__type">{{ tx(item.context) }}</p>
            <h3>{{ tx(item.title) }}</h3>
            <div class="case-study__stack">
              <p><strong>{{ t('Impact:', 'Impacto:') }}</strong> {{ tx(item.impact) }}</p>
              <div v-show="isCaseExpanded(item.title)" class="case-study__details">
                <p><strong>{{ t('Challenge:', 'Reto:') }}</strong> {{ tx(item.problem) }}</p>
                <p><strong>{{ t('Approach:', 'Enfoque:') }}</strong> {{ tx(item.approach) }}</p>
              </div>
            </div>
            <button class="case-study__toggle" type="button" @click="toggleCase(item.title)">
              {{
                isCaseExpanded(item.title)
                  ? t('Show less', 'Ver menos')
                  : t('Show challenge & approach', 'Ver reto y enfoque')
              }}
            </button>
            <p v-if="item.href" class="muted case-study__evidence">
              <a :href="item.href" target="_blank" rel="noreferrer">{{ t('View supporting evidence', 'Ver evidencia de apoyo') }}</a>
            </p>
            <ul class="tag-list">
              <li v-for="tool in item.tools" :key="tool">{{ tx(tool) }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="experience" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Experience', 'Experiencia') }}</p>
          <h2>{{ t('From institutional coordination to data-driven decision support.', 'De la coordinación institucional al soporte de decisiones basado en datos.') }}</h2>
        </div>

        <div class="timeline">
          <article v-for="job in experience" :key="job.role + job.company" class="timeline__item timeline__item--featured">
            <div>
              <p class="timeline__dates">{{ tx(job.period) }}</p>
              <p class="timeline__type">{{ tx(job.location) }}</p>
            </div>
            <div class="timeline__content">
              <h3>{{ tx(job.role) }}</h3>
              <p class="timeline__org">{{ job.company }}</p>
              <p class="muted">{{ tx(job.summary) }}</p>
              <p v-if="job.impact" class="impact-note">{{ tx(job.impact) }}</p>
              <ul class="bullet-list">
                <li v-for="point in job.points" :key="point">{{ tx(point) }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="skills" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Skills', 'Habilidades') }}</p>
          <h2>{{ t('The technical toolkit I use to turn complex information into usable decisions.', 'El toolkit técnico que uso para convertir información compleja en decisiones utilizables.') }}</h2>
        </div>

        <div class="skills">
          <article v-for="group in skillGroups" :key="group.title" class="skill-group">
            <h3>{{ tx(group.title) }}</h3>
            <ul class="tag-list">
              <li v-for="item in group.items" :key="item">{{ tx(item) }}</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="education" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Education', 'Educación') }}</p>
          <h2>{{ t('Graduate-level preparation across data science, rights, and public management.', 'Formación de posgrado en ciencia de datos, derechos y gestión pública.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in education" :key="item.school + item.degree" class="education-item">
              <p class="timeline__org">{{ item.school }}</p>
              <p class="muted"><strong>{{ tx(item.degree) }}</strong></p>
              <p class="muted">{{ tx(item.field) }}</p>
              <p class="timeline__type">{{ tx(item.period) }}</p>
            </article>
          </div>
        </article>
      </section>

      <section id="certifications" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Certifications', 'Certificaciones') }}</p>
          <h2>{{ t('Professional credentials supporting development, governance, and international work.', 'Credenciales profesionales que respaldan trabajo en desarrollo, gobernanza y cooperación internacional.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in certifications" :key="item.title" class="education-item">
              <p class="timeline__org">{{ tx(item.title) }}</p>
              <p class="muted">{{ tx(item.issuer) }}</p>
              <p class="timeline__type">{{ tx(item.issued) }}</p>
              <p v-if="item.credentialId" class="muted">{{ t('Credential ID:', 'ID de credencial:') }} {{ item.credentialId }}</p>
              <p v-if="item.href" class="muted">
                <a :href="item.href" target="_blank" rel="noreferrer">{{ t('View credential', 'Ver credencial') }}</a>
              </p>
            </article>
          </div>
        </article>
      </section>

      <section id="test-scores" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Test Scores', 'Resultados') }}</p>
          <h2>{{ t('Academic performance validated through national standardized assessment.', 'Desempeño académico validado mediante una evaluación nacional estandarizada.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in testScores" :key="item.title" class="education-item">
              <p class="timeline__org">{{ tx(item.title) }}</p>
              <p class="muted"><strong>{{ t('Score:', 'Puntaje:') }}</strong> {{ tx(item.score) }}</p>
              <p class="timeline__type">{{ tx(item.date) }}</p>
              <p class="muted">{{ tx(item.associatedWith) }}</p>
              <p class="muted">{{ tx(item.note) }}</p>
            </article>
          </div>
        </article>
      </section>

      <section id="honors" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Honors', 'Reconocimientos') }}</p>
          <h2>{{ t('Recognition for public-interest work and rights-based leadership.', 'Reconocimientos por trabajo de interés público y liderazgo con enfoque de derechos.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in honors" :key="item.title" class="education-item">
              <p class="timeline__org">{{ tx(item.title) }}</p>
              <p class="muted">{{ tx(item.issuer) }}</p>
              <p class="timeline__type">{{ tx(item.issued) }}</p>
              <p class="muted">{{ tx(item.associatedWith) }}</p>
              <p class="muted">{{ tx(item.note) }}</p>
            </article>
          </div>
        </article>
      </section>

      <section id="languages" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Languages', 'Idiomas') }}</p>
          <h2>{{ t('Multilingual communication for international and cross-sector collaboration.', 'Comunicación multilingüe para colaboración internacional e intersectorial.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in languages" :key="item.name" class="education-item">
              <p class="timeline__org">{{ tx(item.name) }}</p>
              <p class="muted">{{ tx(item.level) }}</p>
            </article>
          </div>
        </article>
      </section>

      <section id="publications" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Publications', 'Publicaciones') }}</p>
          <h2>{{ t('Published work connecting evidence, advocacy, and child-rights research.', 'Trabajo publicado que conecta evidencia, incidencia e investigación en derechos de la niñez.') }}</h2>
        </div>

        <article class="info-block">
          <div class="education-list">
            <article v-for="item in publications" :key="item.title" class="education-item">
              <p class="timeline__org">{{ tx(item.title) }}</p>
              <p class="muted">{{ tx(item.publisher) }}</p>
              <p class="timeline__type">{{ tx(item.date) }}</p>
              <p class="muted">{{ tx(item.summary) }}</p>
              <p v-if="item.href" class="muted">
                <a :href="item.href" target="_blank" rel="noreferrer">{{ t('View publication', 'Ver publicación') }}</a>
              </p>
            </article>
          </div>
        </article>
      </section>

      <section id="events" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Events', 'Eventos') }}</p>
          <h2>{{ t('Public speaking, facilitation, and participation in mission-driven spaces.', 'Ponencias, facilitación y participación en espacios con propósito social.') }}</h2>
        </div>

        <div class="event-cards">
          <article
            v-for="event in events"
            :key="event.title"
            class="event-card"
            role="button"
            tabindex="0"
            @click="openEvent(event)"
            @keydown.enter.prevent="openEvent(event)"
            @keydown.space.prevent="openEvent(event)"
          >
            <img :src="event.photos[0].src" :alt="event.photos[0].alt" class="event-card__cover" />
            <div class="event-card__body">
              <h3>{{ tx(event.title) }}</h3>
              <p v-if="event.meta" class="timeline__type">{{ tx(event.meta) }}</p>
              <p class="muted">{{ tx(event.description) }}</p>
              <p class="event-card__meta">
                {{ event.photos.length }} {{ t('photos · Click to open event gallery', 'fotos · Haz clic para abrir la galería') }}
              </p>
            </div>
          </article>
        </div>
      </section>

      <div v-if="activeEvent" class="lightbox" @click.self="closeEvent">
        <div class="lightbox__dialog" role="dialog" aria-modal="true" :aria-label="activeEvent.title">
          <button class="lightbox__close" type="button" @click="closeEvent">{{ t('Close', 'Cerrar') }}</button>

          <div class="lightbox__media">
            <button class="lightbox__nav lightbox__nav--prev" type="button" @click="showPreviousPhoto">
              ‹
            </button>
            <img
              :src="activeEvent.photos[activePhotoIndex].src"
              :alt="activeEvent.photos[activePhotoIndex].alt"
            />
            <button class="lightbox__nav lightbox__nav--next" type="button" @click="showNextPhoto">
              ›
            </button>
          </div>

          <div class="lightbox__body">
            <h3>{{ tx(activeEvent.title) }}</h3>
            <p v-if="activeEvent.meta" class="timeline__type">{{ tx(activeEvent.meta) }}</p>
            <p v-if="activeEvent.href" class="muted">
              <a :href="activeEvent.href" target="_blank" rel="noreferrer">{{ t('Read event note', 'Leer nota del evento') }}</a>
            </p>
            <p class="lightbox__count">
              {{ activePhotoIndex + 1 }} / {{ activeEvent.photos.length }}
            </p>
          </div>
        </div>
      </div>

      <section id="volunteering" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Volunteering', 'Voluntariado') }}</p>
          <h2>{{ t('Civic engagement and nonprofit collaboration across data, rights, and youth leadership.', 'Participación cívica y colaboración con organizaciones sociales en datos, derechos y liderazgo juvenil.') }}</h2>
        </div>

        <div class="timeline">
          <article
            v-for="item in volunteering"
            :key="item.role + item.organization"
            class="timeline__item timeline__item--featured"
          >
            <div>
              <p class="timeline__dates">{{ tx(item.period) }}</p>
              <p class="timeline__type">{{ tx(item.category) }}</p>
            </div>
            <div class="timeline__content">
              <h3>{{ tx(item.role) }}</h3>
              <p class="timeline__org">{{ tx(item.organization) }}</p>
              <p class="muted">{{ tx(item.summary) }}</p>
              <ul v-if="item.points.length" class="bullet-list">
                <li v-for="point in item.points" :key="point">{{ tx(point) }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <section id="presence" class="section reveal">
        <div class="section__head">
          <p class="eyebrow">{{ t('Presence', 'Galería') }}</p>
          <h2>{{ t('Professional moments that reinforce the narrative.', 'Momentos profesionales que refuerzan la trayectoria.') }}</h2>
        </div>

        <div class="photo-grid">
          <figure v-for="item in gallery" :key="item.alt">
            <div class="photo-grid__media">
              <img :src="item.src" :alt="item.alt" />
            </div>
            <figcaption>{{ tx(item.caption) }}</figcaption>
          </figure>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="footer__inner">
        <div>
          <p class="footer__brand">Jaime Adrian Arreola Varela</p>
          <p class="muted">
            {{
              t(
                'Data analyst focused on public value, evidence, and modern decision systems.',
                'Analista de datos enfocado en valor público, evidencia y sistemas modernos de decisión.',
              )
            }}
          </p>
        </div>
        <div class="footer__links">
          <a href="mailto:jaaimevareela@gmail.com">{{ t('Email', 'Correo') }}</a>
          <a href="https://www.linkedin.com/in/jaimeavarela/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#top">{{ t('Back to top', 'Volver arriba') }}</a>
        </div>
        <p class="footer__copy">
          {{ t('Available in León, Spain and remotely across ES / LatAm.', 'Disponible en León, España y en modalidad remota para ES / LatAm.') }}
        </p>
      </div>
    </footer>
  </div>
</template>
