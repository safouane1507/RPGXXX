const TAXONOMY_DOMAINS = [
  {
    id: 'artisanat_service',
    label: {
      fr: 'Artisanat de Service',
      ar: 'الصناعة التقليدية للخدمات',
      en: 'Service Crafts',
      darija: 'الصنعة ديال الخدمات'
    },
    icon: 'tools',
    color: '#8B4513'
  },
  {
    id: 'produits_mer',
    label: {
      fr: 'Produits de la mer & Pêche artisanale',
      ar: 'منتجات البحر والصيد التقليدي',
      en: 'Sea Products & Artisanal Fishing',
      darija: 'منتوجات البحر والصيد'
    },
    icon: 'anchor',
    color: '#006994'
  },
  {
    id: 'habillement_mode',
    label: {
      fr: 'Habillement & Mode Marocaine',
      ar: 'الملبس والموضة المغربية',
      en: 'Moroccan Fashion & Clothing',
      darija: 'الكسوة والموضة المغربية'
    },
    icon: 'shirt',
    color: '#C0392B'
  },
  {
    id: 'tourisme_rural',
    label: {
      fr: 'Tourisme Rural & Éco-tourisme',
      ar: 'السياحة القروية والسياحة البيئية',
      en: 'Rural Tourism & Eco-tourism',
      darija: 'السياحة القروية والإيكولوجية'
    },
    icon: 'tree',
    color: '#27AE60'
  },
  {
    id: 'artisanat_art',
    label: {
      fr: "Artisanat d'art",
      ar: 'الصناعة التقليدية الفنية',
      en: 'Art Craftsmanship',
      darija: 'الصنعة الفنية'
    },
    icon: 'palette',
    color: '#8E44AD'
  },
  {
    id: 'agriculture_bio',
    label: {
      fr: 'Agriculture Bio & Local',
      ar: 'الزراعة العضوية والمحلية',
      en: 'Organic & Local Agriculture',
      darija: 'الزراعة البيولوجية والمحلية'
    },
    icon: 'leaf',
    color: '#2ECC71'
  },
  {
    id: 'soin_beaute',
    label: {
      fr: 'Soin & Beauté Naturelle',
      ar: 'العناية والجمال الطبيعي',
      en: 'Natural Beauty & Wellness',
      darija: 'العناية والجمال الطبيعي'
    },
    icon: 'flower',
    color: '#E91E8C'
  },
  {
    id: 'produit_terroir',
    label: {
      fr: 'Produit de Terroir',
      ar: 'منتجات الأراضي',
      en: 'Local Terroir Products',
      darija: 'منتوجات الأرض'
    },
    icon: 'wheat',
    color: '#F39C12'
  },
  {
    id: 'artisanat_culinaire',
    label: {
      fr: 'Artisanat Culinaire',
      ar: 'الصناعة التقليدية الطهوية',
      en: 'Culinary Crafts',
      darija: 'الصنعة الطهوية'
    },
    icon: 'chef-hat',
    color: '#E74C3C'
  }
];

const DOMAIN_IDS = TAXONOMY_DOMAINS.map(d => d.id);

const USER_ROLES = {
  ADMIN: 'admin',
  PRO: 'pro',
  CLIENT: 'client'
};

const STRUCTURE_TYPES = [
  'cooperative',
  'sarl',
  'association',
  'artisan_independant',
  'entreprise_individuelle',
  'groupement_interet_economique'
];

const MOROCCAN_REGIONS = [
  'Tanger-Tétouan-Al Hoceïma',
  'Oriental',
  'Fès-Meknès',
  'Rabat-Salé-Kénitra',
  'Béni Mellal-Khénifra',
  'Casablanca-Settat',
  'Marrakech-Safi',
  'Drâa-Tafilalet',
  'Souss-Massa',
  'Guelmim-Oued Noun',
  'Laâyoune-Sakia El Hamra',
  'Dakhla-Oued Ed-Dahab'
];

const SUPPORTED_LANGUAGES = ['fr', 'ar', 'en', 'darija'];
const DEFAULT_LANGUAGE = 'fr';

module.exports = {
  TAXONOMY_DOMAINS,
  DOMAIN_IDS,
  USER_ROLES,
  STRUCTURE_TYPES,
  MOROCCAN_REGIONS,
  SUPPORTED_LANGUAGES,
  DEFAULT_LANGUAGE
};
