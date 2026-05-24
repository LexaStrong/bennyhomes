export const DEFAULT_PROPERTIES = [
  {
    id: 'prop-1',
    title: 'Luxury 5-Bedroom Executive Villa',
    location: 'Accra Spintex, Ghana',
    area: 'Spintex',
    price: 9500000,
    beds: 5,
    baths: 6,
    size: '450 sqm',
    image: '/assets/hero-villa.png',
    type: 'sale',
    tag: 'Exclusive',
    description:
      'An architectural marvel located in the highly sought-after Accra Spintex area. This home offers double-height ceilings, top-tier automated security, a high-end luxury kitchen, private cinema room, and an infinity pool. Contact Bernard Awuley on 0246908872.',
  },
  {
    id: 'prop-2',
    title: 'Modern 4-Bedroom Gated Townhouse',
    location: 'Tema Community 25, Ghana',
    area: 'Tema',
    price: 7200000,
    beds: 4,
    baths: 4.5,
    size: '320 sqm',
    image: '/assets/property-townhouse.png',
    type: 'sale',
    tag: 'Trending',
    description:
      'A secure family townhouse offering modern specifications in Tema Community 25. High energy efficiency, beautiful private garden, secure double garage, and access to the shared resident pool and tennis courts.',
  },
  {
    id: 'prop-3',
    title: 'Sleek 3-Bedroom Luxury Apartment',
    location: 'Accra Spintex, Ghana',
    area: 'Spintex',
    price: 5500000,
    beds: 3,
    baths: 3.5,
    size: '260 sqm',
    image: '/assets/luxury-interior.png',
    type: 'sale',
    tag: 'Premium',
    description:
      'Enjoy comfortable city living in this beautifully furnished 3-bedroom apartment on Spintex Road. Large private balcony, luxury design details, generator backup, and direct elevator access.',
  },
  {
    id: 'prop-4',
    title: 'Executive 2-Bedroom Residential Suite',
    location: 'Tema Community 18, Ghana',
    area: 'Tema',
    price: 2800000,
    beds: 2,
    baths: 2,
    size: '120 sqm',
    image: '/assets/property-apartment.png',
    type: 'sale',
    tag: 'Best Value',
    description:
      'Modern, high-yield investment suite located close to the motorway link in Tema Community 18. Perfect for young families or professionals. Features concierge security, fitted wardrobes, and modular kitchen design.',
  },
];

export function formatPrice(amount) {
  return `GH₵ ${Number(amount).toLocaleString('en-US')}`;
}
