// SupportHero — Auto language detection via IP + manual toggle
// German-speaking countries (DE, AT, CH, LI) → de, everything else → en

const GERMAN_COUNTRIES = ['DE', 'AT', 'CH', 'LI'];

const T = {
  de: {
    // ── NAV ──
    'nav.integrations': 'Integrationen',
    'nav.contact': 'Kontakt',
    'nav.pricing': 'Preise',
    'nav.cta': 'Kostenlos starten',

    // ── INDEX HERO ──
    'hero.title': '#1 KI-Support-Plattform<br>für Shopify & WooCommerce',
    'hero.sub': 'Support Hero hilft dir, mehr Kundenanfragen automatisch zu lösen,<br>Retouren zu automatisieren und dein Team zu entlasten — ohne Programmierung.',
    'hero.btn1': 'Kostenlos starten',
    'hero.btn2': 'Demo ansehen →',
    'hero.hint': 'Keine Kreditkarte · 14 Tage gratis · Jederzeit kündbar',

    // ── INTEGRATIONS PAGE ──
    'int.eyebrow': 'Integrationen',
    'int.title': 'Verbinde alle deine Tools<br>in einem Posteingang',
    'int.sub': 'E-Mails, WhatsApp, Shopify und mehr — alles an einem Ort.',
    'int.filter.all': 'Alle',
    'int.filter.email': 'E-Mail',
    'int.filter.ecommerce': 'E-Commerce',
    'int.filter.payment': 'Zahlung',
    'int.filter.messaging': 'Messaging',
    'int.filter.social': 'Social',
    'int.filter.shipping': 'Versand',
    'int.badge.live': 'Verfügbar',
    'int.badge.soon': 'Bald',
    'int.btn.connect': 'Verbinden →',
    'int.btn.soon': 'In Kürze verfügbar',
    'int.cat.email': 'E-Mail',
    'int.cat.ecommerce': 'E-Commerce',
    'int.cat.payment': 'Zahlung',
    'int.cat.messaging': 'Messaging',
    'int.cat.social': 'Social',
    'int.cat.shipping': 'Versand',

    // ── CONTACT PAGE ──
    'contact.eyebrow': 'Kontakt',
    'contact.title': 'Nimm Kontakt auf',
    'contact.sub': 'Fragen, Feedback oder einfach mal Hallo — wir sind für dich da.',
    'contact.card1.label': 'E-Mail',
    'contact.card1.sub': 'Wir antworten in der Regel innerhalb von 24 Stunden.',
    'contact.card2.label': 'Live-Chat',
    'contact.card2.value': 'Direkt in der App',
    'contact.card2.sub': 'Mo.–Fr., 9–18 Uhr',
    'contact.divider': 'oder schreib uns direkt',
    'contact.form.firstname': 'Vorname',
    'contact.form.firstname.ph': 'Max',
    'contact.form.lastname': 'Nachname',
    'contact.form.lastname.ph': 'Mustermann',
    'contact.form.email': 'E-Mail-Adresse',
    'contact.form.email.ph': 'max@meinshop.de',
    'contact.form.message': 'Nachricht',
    'contact.form.message.ph': 'Wie können wir dir helfen?',
    'contact.form.submit': 'Nachricht senden',
    'contact.form.note': 'Wir geben deine Daten niemals an Dritte weiter.',

    // ── PRICING PAGE ──
    'pricing.eyebrow': 'Preise',
    'pricing.title': 'Preise, die mit dir wachsen',
    'pricing.sub': 'Keine Grundgebühr pro Nutzer. Zahle nur nach dem, was dein Team wirklich bearbeitet.',
    'pricing.toggle.monthly': 'Monatlich',
    'pricing.toggle.annual': 'Jährlich',
    'pricing.slider.label': 'Wie viele Tickets beantwortest du pro Monat?',
    'pricing.slider.unit': 'Tickets / Monat',
    'pricing.slider.note': 'Ein Ticket = eine eingehende Kundenanfrage, egal ob per E-Mail, WhatsApp oder Instagram. Ausgehende Nachrichten zählen nicht.',
    'pricing.summary.label': 'Dein Plan',
    'pricing.summary.period': '/mo',
    'pricing.summary.billed.monthly': 'Monatlich abgerechnet',
    'pricing.summary.billed.annual': 'Jährlich abgerechnet (20% gespart)',
    'pricing.feat.tickets': 'Bis zu {n} Tickets / Monat',
    'pricing.feat.members': 'Unbegrenzte Team-Mitglieder',
    'pricing.feat.integrations': 'Alle Integrationen inklusive',
    'pricing.feat.ai': 'KI-Antworten & Autopilot',
    'pricing.feat.support.email': 'E-Mail Support',
    'pricing.feat.support.priority': 'Prioritäts-Support',
    'pricing.feat.support.account': 'Dedizierter Account Mgr',
    'pricing.cta.btn': 'Kostenlos testen',
    'pricing.cta.sub': '14 Tage gratis · Keine Kreditkarte nötig',
    'pricing.enterprise.title': 'Mehr als 10.000 Tickets?',
    'pricing.enterprise.sub': 'Individuelles Angebot für dein Team — auf Anfrage.',
    'pricing.enterprise.btn': 'Demo buchen →',
    'pricing.cta.section.title': 'Bereit loszulegen?',
    'pricing.cta.section.sub': '14 Tage kostenlos — ohne Kreditkarte, ohne Risiko.',
    'pricing.cta.section.btn1': 'Kostenlos starten',
    'pricing.cta.section.btn2': 'Demo buchen →',

    // ── FOOTER ──
    'footer.tagline': 'KI-gestützter Kundenservice für E-Commerce.<br>Automatisiere Anfragen & Retouren.<br>Ohne Programmierung.',
    'footer.col1.title': 'Ressourcen',
    'footer.shopify': 'Shopify App',
    'footer.col2.title': 'Unternehmen',
    'footer.agb': 'AGB',
    'footer.privacy': 'Datenschutz',
    'footer.imprint': 'Impressum',
    'footer.faqs': 'FAQs',
    'footer.col3.title': 'Newsletter',
    'footer.newsletter.label': 'Abonniere Support-Tipps & E-Commerce Best Practices',
    'footer.newsletter.ph': 'Deine E-Mail-Adresse',
    'footer.newsletter.btn': 'Absenden',
  },

  en: {
    // ── NAV ──
    'nav.integrations': 'Integrations',
    'nav.contact': 'Contact',
    'nav.pricing': 'Pricing',
    'nav.cta': 'Start for free',

    // ── INDEX HERO ──
    'hero.title': '#1 AI Support Platform<br>for Shopify & WooCommerce',
    'hero.sub': 'SupportHero helps you automatically resolve more customer inquiries,<br>automate returns and free up your team — no coding required.',
    'hero.btn1': 'Start for free',
    'hero.btn2': 'Watch demo →',
    'hero.hint': 'No credit card · 14 days free · Cancel anytime',

    // ── INTEGRATIONS PAGE ──
    'int.eyebrow': 'Integrations',
    'int.title': 'Connect all your tools<br>in one inbox',
    'int.sub': 'Email, WhatsApp, Shopify and more — all in one place.',
    'int.filter.all': 'All',
    'int.filter.email': 'Email',
    'int.filter.ecommerce': 'E-Commerce',
    'int.filter.payment': 'Payment',
    'int.filter.messaging': 'Messaging',
    'int.filter.social': 'Social',
    'int.filter.shipping': 'Shipping',
    'int.badge.live': 'Available',
    'int.badge.soon': 'Soon',
    'int.btn.connect': 'Connect →',
    'int.btn.soon': 'Coming soon',
    'int.cat.email': 'Email',
    'int.cat.ecommerce': 'E-Commerce',
    'int.cat.payment': 'Payment',
    'int.cat.messaging': 'Messaging',
    'int.cat.social': 'Social',
    'int.cat.shipping': 'Shipping',

    // ── CONTACT PAGE ──
    'contact.eyebrow': 'Contact',
    'contact.title': 'Get in touch',
    'contact.sub': 'Questions, feedback or just saying hi — we\'re here for you.',
    'contact.card1.label': 'Email',
    'contact.card1.sub': 'We usually respond within 24 hours.',
    'contact.card2.label': 'Live Chat',
    'contact.card2.value': 'Directly in the app',
    'contact.card2.sub': 'Mon.–Fri., 9am–6pm CET',
    'contact.divider': 'or write to us directly',
    'contact.form.firstname': 'First name',
    'contact.form.firstname.ph': 'John',
    'contact.form.lastname': 'Last name',
    'contact.form.lastname.ph': 'Doe',
    'contact.form.email': 'Email address',
    'contact.form.email.ph': 'john@myshop.com',
    'contact.form.message': 'Message',
    'contact.form.message.ph': 'How can we help you?',
    'contact.form.submit': 'Send message',
    'contact.form.note': 'We never share your data with third parties.',

    // ── PRICING PAGE ──
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'Pricing that grows with you',
    'pricing.sub': 'No per-seat fee. Pay only for what your team actually handles.',
    'pricing.toggle.monthly': 'Monthly',
    'pricing.toggle.annual': 'Annual',
    'pricing.slider.label': 'How many tickets do you handle per month?',
    'pricing.slider.unit': 'Tickets / month',
    'pricing.slider.note': 'A ticket = one incoming customer inquiry, whether via email, WhatsApp, or Instagram. Outgoing messages don\'t count.',
    'pricing.summary.label': 'Your Plan',
    'pricing.summary.period': '/mo',
    'pricing.summary.billed.monthly': 'Billed monthly',
    'pricing.summary.billed.annual': 'Billed annually (20% saved)',
    'pricing.feat.tickets': 'Up to {n} tickets / month',
    'pricing.feat.members': 'Unlimited team members',
    'pricing.feat.integrations': 'All integrations included',
    'pricing.feat.ai': 'AI replies & autopilot',
    'pricing.feat.support.email': 'Email support',
    'pricing.feat.support.priority': 'Priority support',
    'pricing.feat.support.account': 'Dedicated account manager',
    'pricing.cta.btn': 'Try for free',
    'pricing.cta.sub': '14 days free · No credit card needed',
    'pricing.enterprise.title': 'More than 10,000 tickets?',
    'pricing.enterprise.sub': 'Custom pricing for your team — just ask.',
    'pricing.enterprise.btn': 'Book a demo →',
    'pricing.cta.section.title': 'Ready to get started?',
    'pricing.cta.section.sub': '14 days free — no credit card, no risk.',
    'pricing.cta.section.btn1': 'Start for free',
    'pricing.cta.section.btn2': 'Book a demo →',

    // ── FOOTER ──
    'footer.tagline': 'AI-powered customer service for e-commerce.<br>Automate inquiries & returns.<br>No coding required.',
    'footer.col1.title': 'Resources',
    'footer.shopify': 'Shopify App',
    'footer.col2.title': 'Company',
    'footer.agb': 'Terms',
    'footer.privacy': 'Privacy',
    'footer.imprint': 'Imprint',
    'footer.faqs': 'FAQs',
    'footer.col3.title': 'Newsletter',
    'footer.newsletter.label': 'Subscribe to support tips & e-commerce best practices',
    'footer.newsletter.ph': 'Your email address',
    'footer.newsletter.btn': 'Subscribe',
  }
};

// ── CORE ──

let currentLang = 'de';

function applyTranslations(lang) {
  currentLang = lang;
  window.currentLang = lang;
  document.documentElement.lang = lang;

  // innerHTML replacements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang] && T[lang][key] !== undefined) {
      el.innerHTML = T[lang][key];
    }
  });

  // placeholder replacements
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[lang] && T[lang][key] !== undefined) {
      el.placeholder = T[lang][key];
    }
  });

  // Update toggle UI
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update ticket feature text if on pricing page
  if (window._currentTierFmt) {
    const key = 'pricing.feat.tickets';
    const tpl = T[lang][key] || '';
    const el = document.getElementById('feat-tickets');
    if (el) el.innerHTML = tpl.replace('{n}', window._currentTierFmt);
  }

  // Update billing note if on pricing page
  if (window._isAnnual !== undefined) {
    const noteEl = document.getElementById('billedNote');
    if (noteEl) {
      noteEl.textContent = window._isAnnual
        ? T[lang]['pricing.summary.billed.annual']
        : T[lang]['pricing.summary.billed.monthly'];
    }
  }

  localStorage.setItem('sh_lang', lang);
}

async function detectLanguage() {
  // 1. Check manual override first
  const stored = localStorage.getItem('sh_lang');
  if (stored && T[stored]) return stored;

  // 2. Try IP detection
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(3000) });
    const data = await res.json();
    return GERMAN_COUNTRIES.includes(data.country_code) ? 'de' : 'en';
  } catch {
    // 3. Fallback: browser language
    const bl = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return bl === 'de' ? 'de' : 'en';
  }
}

// ── INIT ──
(async () => {
  const lang = await detectLanguage();
  applyTranslations(lang);
})();

// Exposed for toggle buttons and pricing page
window.setLang = function(lang) {
  applyTranslations(lang);
};
window.T = T;
window.currentLang = 'de';
