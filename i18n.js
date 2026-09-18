// NovaLeads - Internationalization (i18n)
// EN <-> ES translation without external dependencies

window.I18N = (function () {
  'use strict';

  var STORAGE_KEY = 'novaleads.lang';
  var DEFAULT_LANG = 'en';

  // Dictionaries
  var DICT = {
    en: {
      // Metadata
      'meta.title':       'NovaLeads | Customer Relationship Manager',
      'meta.description': 'NovaLeads CRM organizes your business in one place. Sales, customer service and direct communication.',
      'meta.keywords':    'Sales, CRM, Leads, Customers, Customer service.',

      // Accessibility and navigation
      'a11y.skip':        'Skip to content',
      'nav.home':         'NovaLeads home',
      'nav.features':     'Features',
      'nav.platform':     'Platform',
      'nav.customers':    'Customers',
      'nav.pricing':      'Pricing',
      'nav.signin':       'Sign In',
      'nav.cta':          'Start for Free',
      'nav.menuOpen':     'Open menu',
      'nav.menuClose':    'Close menu',
      'nav.mobileMenu':   'Mobile menu',
      'nav.demo':         'Book a Demo',
      'lang.label':       'Select language',
      'lang.en':          'Switch to English',
      'lang.es':          'Switch to Spanish',

      // Hero
      'hero.pill':        'Introducing WhatsApp Pipeline 2.0',
      'hero.title':       'Centralize your sales.<br>Multiply your revenue.',
      'hero.lead':        'The all-in-one CRM built for startups and sales teams. Manage leads, track WhatsApp conversations, and close deals without the spreadsheet chaos.',
      'hero.ctaPrimary':  'Start for Free',
      'hero.ctaGhost':    'Book a Demo',
      'hero.trust':       'No credit card required • 14-day free trial',
      'hero.alt':         'NovaLeads sales analytics dashboard shown on a laptop',

      // Trusted by
      'trusted.aria':     'Customers',
      'trusted.label':    'Trusted by innovative startups and scaling teams globally',

      // Features
      'features.eyebrow': 'Everything you need to scale',
      'features.title':   'Engineered for high-performing sales organizations',
      'f1.title':         'Visual Sales Pipeline',
      'f1.desc':          'Instantly see where every deal stands. Drag-and-drop opportunity cards between customized pipeline stages to update team progress.',
      'f2.title':         'Integrated WhatsApp Chats',
      'f2.desc':          'Consolidate customer communications. Send and receive messages directly inside lead cards, keeping contextual activity histories intact.',
      'f3.title':         'Real-time Analytics',
      'f3.desc':          'Power your sales calls with rich analytics. Track deal metrics, pipeline velocities, conversion stats, and individual rep performance live.',

      // Velocity
      'velocity.eyebrow': 'Built for velocity',
      'velocity.title':   'Transform raw activity into predictable pipelines',
      'velocity.alt':     'Sales team reviewing a NovaLeads pipeline dashboard in an office',
      'v1.title':         'Close deals 40% faster',
      'v1.desc':          'Stop manually refreshing old spreadsheets. Automate routine tracking and let reps focus entirely on closing active pipelines.',
      'v2.title':         'Never miss a critical follow-up',
      'v2.desc':          'Receive smart, automatic task alerts and push notifications. Keep conversation streams warm without losing context.',
      'v3.title':         'One unified platform for your entire team',
      'v3.desc':          'Break organizational silos. Sync founders, executives, success agents, and SDRs with centralized data profiles.',

      // Testimonials
      'customers.eyebrow': 'Real customer impact',
      'customers.title':   'Startups and founders closing more deals with NovaLeads',
      'q1.text':           '“NovaLeads changed how we manage outbound outreach. WhatsApp sync allowed our operations squad to centralize leads and close a massive $120k deal within the first month. An absolute game-changer.”',
      'q1.role':           'VP of Business Development',
      'q2.text':           '“Before NovaLeads, our sales pipeline was pure spreadsheet chaos. Now, everything from primary contact to signed contract is visual, unified, and perfectly synced. It’s built for rapid startup execution.”',
      'q2.role':           'Co-Founder',

      // Pricing
      'pricing.eyebrow':  'Pricing Plans',
      'pricing.title':    'Select a plan for your team',
      'pricing.lead':     'Simple, transparent pricing to scale your sales.',
      'pricing.period':   '/mo',
      'pricing.badge':    'Most Popular',
      'pricing.p1.name':  'Starter',
      'pricing.p1.for':   'For small teams getting started',
      'pricing.p1.f1':    '5 team members',
      'pricing.p1.f2':    '1,000 contacts',
      'pricing.p1.f3':    'Email tracking',
      'pricing.p1.f4':    'Basic reports',
      'pricing.p1.f5':    'Email support',
      'pricing.p1.cta':   'Get Started',
      'pricing.p2.name':  'Professional',
      'pricing.p2.for':   'For growing sales teams',
      'pricing.p2.f1':    'Unlimited team members',
      'pricing.p2.f2':    '50,000 contacts',
      'pricing.p2.f3':    'Advanced email sequences',
      'pricing.p2.f4':    'Custom pipelines',
      'pricing.p2.f5':    'Analytics dashboard',
      'pricing.p2.f6':    'API access',
      'pricing.p2.f7':    'Priority support',
      'pricing.p2.cta':   'Start 14-Day Trial',
      'pricing.p3.name':  'Enterprise',
      'pricing.p3.price': 'Custom',
      'pricing.p3.for':   'For large organizations',
      'pricing.p3.f1':    'Everything in Professional',
      'pricing.p3.f2':    'Unlimited contacts',
      'pricing.p3.f3':    'Dedicated account manager',
      'pricing.p3.f4':    'Custom integrations',
      'pricing.p3.f5':    'SSO & SAML',
      'pricing.p3.f6':    'SLA guarantee',
      'pricing.p3.cta':   'Contact Sales',
      'pricing.ssl':      'SSL Secure Payments',
      'pricing.cancel':   'Cancel or downgrade anytime',
      'pricing.help':     'Need help? Chat with sales',

      // CTA
      'cta.title':        'Ready to supercharge your sales?',
      'cta.lead':         'Join thousands of sales teams automating raw workflows, managing active WhatsApp threads, and scaling deal pipelines.',
      'cta.primary':      'Get Started for Free',
      'cta.secondary':    'Talk to Sales',

      // Footer
      'footer.about':     'The premium B2B CRM designed to streamline lead acquisition, pipeline tracking, and predictive sales analytics.',
      'footer.product':   'Product',
      'footer.features':  'Features',
      'footer.pricing':   'Pricing',
      'footer.integr':    'Integrations',
      'footer.roadmap':   'Roadmap',
      'footer.company':   'Company',
      'footer.aboutUs':   'About Us',
      'footer.careers':   'Careers',
      'footer.press':     'Press Kit',
      'footer.contact':   'Contact',
      'footer.resources': 'Resources',
      'footer.docs':      'Documentation',
      'footer.community': 'Community',
      'footer.guides':    'Video Guides',
      'footer.api':       'API Specs',
      'footer.legal':     'Legal',
      'footer.privacy':   'Privacy Policy',
      'footer.terms':     'Terms of Service',
      'footer.gdpr':      'GDPR',
      'footer.sla':       'SLA Status',
      'footer.rights':    '© 2024 NovaLeads. All rights reserved.'
    },

    es: {
      // Metadata
      'meta.title':       'NovaLeads | Gestor de relación con clientes',
      'meta.description': 'NovaLeads CRM organiza tu negocio en un solo lugar. Ventas, servicio al cliente y comunicación directa.',
      'meta.keywords':    'Ventas, CRM, Leads, Clientes, Servicio al cliente.',

      // Accessibility and navigation
      'a11y.skip':        'Ir al contenido',
      'nav.home':         'Inicio de NovaLeads',
      'nav.features':     'Funciones',
      'nav.platform':     'Plataforma',
      'nav.customers':    'Clientes',
      'nav.pricing':      'Precios',
      'nav.signin':       'Iniciar sesión',
      'nav.cta':          'Empieza gratis',
      'nav.menuOpen':     'Abrir menú',
      'nav.menuClose':    'Cerrar menú',
      'nav.mobileMenu':   'Menú móvil',
      'nav.demo':         'Agenda una demo',
      'lang.label':       'Seleccionar idioma',
      'lang.en':          'Cambiar a inglés',
      'lang.es':          'Cambiar a español',

      // Hero
      'hero.pill':        'Presentamos WhatsApp Pipeline 2.0',
      'hero.title':       'Centraliza tus ventas.<br>Multiplica tus ingresos.',
      'hero.lead':        'El CRM todo en uno creado para startups y equipos de ventas. Gestiona tus leads, sigue las conversaciones de WhatsApp y cierra tratos sin el caos de las hojas de cálculo.',
      'hero.ctaPrimary':  'Empieza gratis',
      'hero.ctaGhost':    'Agenda una demo',
      'hero.trust':       'Sin tarjeta de crédito • 14 días de prueba gratis',
      'hero.alt':         'Panel de analítica de ventas de NovaLeads en una laptop',

      // Trusted by
      'trusted.aria':     'Clientes',
      'trusted.label':    'La eligen startups innovadoras y equipos en crecimiento de todo el mundo',

      // Features
      'features.eyebrow': 'Todo lo que necesitas para escalar',
      'features.title':   'Diseñado para equipos de ventas de alto rendimiento',
      'f1.title':         'Pipeline de ventas visual',
      'f1.desc':          'Mira al instante en qué punto está cada trato. Arrastra y suelta las tarjetas de oportunidad entre las etapas personalizadas de tu pipeline para actualizar el avance del equipo.',
      'f2.title':         'Chats de WhatsApp integrados',
      'f2.desc':          'Centraliza la comunicación con tus clientes. Envía y recibe mensajes dentro de las tarjetas de lead, manteniendo intacto el historial de actividad.',
      'f3.title':         'Analítica en tiempo real',
      'f3.desc':          'Impulsa tus llamadas de venta con analítica detallada. Sigue en vivo las métricas de cada trato, la velocidad del pipeline, las conversiones y el desempeño de cada vendedor.',

      // Velocity
      'velocity.eyebrow': 'Creado para la velocidad',
      'velocity.title':   'Convierte la actividad diaria en pipelines predecibles',
      'velocity.alt':     'Equipo de ventas revisando un panel de pipeline de NovaLeads en la oficina',
      'v1.title':         'Cierra tratos un 40% más rápido',
      'v1.desc':          'Deja de actualizar hojas de cálculo a mano. Automatiza el seguimiento rutinario y deja que tu equipo se concentre solo en cerrar.',
      'v2.title':         'Nunca pierdas un seguimiento clave',
      'v2.desc':          'Recibe alertas de tareas automáticas y notificaciones push. Mantén activas las conversaciones sin perder el contexto.',
      'v3.title':         'Una sola plataforma para todo tu equipo',
      'v3.desc':          'Rompe los silos de tu organización. Sincroniza a fundadores, ejecutivos, agentes de soporte y SDR con perfiles de datos centralizados.',

      // Testimonials
      'customers.eyebrow': 'Impacto real en los clientes',
      'customers.title':   'Startups y fundadores que cierran más tratos con NovaLeads',
      'q1.text':           '“NovaLeads cambió la forma en que gestionamos la prospección. La sincronización con WhatsApp permitió a nuestro equipo de operaciones centralizar los leads y cerrar un trato de $120k en el primer mes. Un cambio absoluto.”',
      'q1.role':           'VP de Desarrollo de Negocio',
      'q2.text':           '“Antes de NovaLeads, nuestro pipeline de ventas era puro caos de hojas de cálculo. Ahora todo, desde el primer contacto hasta el contrato firmado, es visual, unificado y está perfectamente sincronizado. Está hecho para la ejecución rápida de una startup.”',
      'q2.role':           'Cofundador',

      // Pricing
      'pricing.eyebrow':  'Planes y precios',
      'pricing.title':    'Elige el plan para tu equipo',
      'pricing.lead':     'Precios simples y transparentes para escalar tus ventas.',
      'pricing.period':   '/mes',
      'pricing.badge':    'El más elegido',
      'pricing.p1.name':  'Starter',
      'pricing.p1.for':   'Para equipos pequeños que recién empiezan',
      'pricing.p1.f1':    '5 usuarios del equipo',
      'pricing.p1.f2':    '1,000 contactos',
      'pricing.p1.f3':    'Seguimiento de correos',
      'pricing.p1.f4':    'Reportes básicos',
      'pricing.p1.f5':    'Soporte por correo',
      'pricing.p1.cta':   'Comenzar',
      'pricing.p2.name':  'Professional',
      'pricing.p2.for':   'Para equipos de ventas en crecimiento',
      'pricing.p2.f1':    'Usuarios ilimitados',
      'pricing.p2.f2':    '50,000 contactos',
      'pricing.p2.f3':    'Secuencias de correo avanzadas',
      'pricing.p2.f4':    'Pipelines personalizados',
      'pricing.p2.f5':    'Panel de analítica',
      'pricing.p2.f6':    'Acceso a la API',
      'pricing.p2.f7':    'Soporte prioritario',
      'pricing.p2.cta':   'Prueba 14 días gratis',
      'pricing.p3.name':  'Enterprise',
      'pricing.p3.price': 'A medida',
      'pricing.p3.for':   'Para grandes organizaciones',
      'pricing.p3.f1':    'Todo lo del plan Professional',
      'pricing.p3.f2':    'Contactos ilimitados',
      'pricing.p3.f3':    'Ejecutivo de cuenta dedicado',
      'pricing.p3.f4':    'Integraciones a medida',
      'pricing.p3.f5':    'SSO y SAML',
      'pricing.p3.f6':    'Garantía de SLA',
      'pricing.p3.cta':   'Contactar a Ventas',
      'pricing.ssl':      'Pagos seguros con SSL',
      'pricing.cancel':   'Cancela o cambia de plan cuando quieras',
      'pricing.help':     '¿Necesitas ayuda? Habla con ventas',

      // CTA
      'cta.title':        '¿Listo para impulsar tus ventas?',
      'cta.lead':         'Únete a miles de equipos de ventas que automatizan su trabajo, gestionan sus conversaciones de WhatsApp y escalan sus pipelines.',
      'cta.primary':      'Comienza gratis',
      'cta.secondary':    'Habla con Ventas',

      // Footer
      'footer.about':     'El CRM B2B premium diseñado para simplificar la captación de leads, el seguimiento del pipeline y la analítica predictiva de ventas.',
      'footer.product':   'Producto',
      'footer.features':  'Funciones',
      'footer.pricing':   'Precios',
      'footer.integr':    'Integraciones',
      'footer.roadmap':   'Roadmap',
      'footer.company':   'Empresa',
      'footer.aboutUs':   'Sobre nosotros',
      'footer.careers':   'Empleo',
      'footer.press':     'Kit de prensa',
      'footer.contact':   'Contacto',
      'footer.resources': 'Recursos',
      'footer.docs':      'Documentación',
      'footer.community': 'Comunidad',
      'footer.guides':    'Guías en video',
      'footer.api':       'Especificaciones de API',
      'footer.legal':     'Legal',
      'footer.privacy':   'Política de privacidad',
      'footer.terms':     'Términos del servicio',
      'footer.gdpr':      'RGPD',
      'footer.sla':       'Estado del SLA',
      'footer.rights':    '© 2024 NovaLeads. Todos los derechos reservados.'
    }
  };

  var SUPPORTED = ['en', 'es'];
  var listeners = [];
  var current = DEFAULT_LANG;

  // Utilities
  function isSupported(lang) {
    return SUPPORTED.indexOf(lang) !== -1;
  }

  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function remember(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function detect() {
    var saved = stored();
    if (isSupported(saved)) return saved;

    var browser = (navigator.language || navigator.userLanguage || DEFAULT_LANG).toLowerCase();
    return browser.indexOf('es') === 0 ? 'es' : DEFAULT_LANG;
  }

  function t(key) {
    var table = DICT[current] || DICT[DEFAULT_LANG];
    if (table[key] != null) return table[key];
    if (DICT[DEFAULT_LANG][key] != null) return DICT[DEFAULT_LANG][key];
    return key;
  }

  // Apply translations to DOM
  function each(selector, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), fn);
  }

  function translateNodes() {
    each('[data-i18n]', function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    each('[data-i18n-html]', function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    each('[data-i18n-attr]', function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        el.setAttribute(parts[0].trim(), t(parts[1].trim()));
      });
    });
  }

  function syncSwitch() {
    each('[data-lang]', function (btn) {
      var active = btn.getAttribute('data-lang') === current;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('is-active', active);
    });
  }

  function apply() {
    document.documentElement.setAttribute('lang', current);
    translateNodes();
    syncSwitch();
    listeners.forEach(function (fn) { fn(current); });
  }

  function set(lang) {
    if (!isSupported(lang) || lang === current) return;
    current = lang;
    remember(lang);
    apply();
  }

  // Initialization
  function init() {
    current = detect();
    apply();

    document.addEventListener('click', function (event) {
      var btn = event.target.closest('[data-lang]');
      if (!btn) return;
      event.preventDefault();
      set(btn.getAttribute('data-lang'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return {
    t: t,
    set: set,
    get: function () { return current; },
    languages: SUPPORTED.slice(),
    onChange: function (fn) { if (typeof fn === 'function') listeners.push(fn); }
  };
})();