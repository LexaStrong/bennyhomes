import Hero from '../components/Hero';
import Properties from '../components/Properties';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import useSEO from '../hooks/useSEO';

export default function Home() {
  // SEO, AEO, and GEO optimization schema
  const homeSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateAgent',
        '@id': 'https://bennyhomesgh.com/#agent',
        'name': 'Beny Homes',
        'image': 'https://bennyhomesgh.com/assets/logo.png',
        'telephone': '0246908872',
        'url': 'https://bennyhomesgh.com',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Accra Spintex',
          'addressRegion': 'Greater Accra',
          'addressCountry': 'Ghana'
        },
        'geo': {
          '@type': 'GeoCircle',
          'geoMidpoint': {
            '@type': 'GeoCoordinates',
            'latitude': '5.626',
            'longitude': '-0.101'
          },
          'geoRadius': '25000'
        },
        'description': 'Beny Homes is a premium real estate agency in Ghana specializing in luxury homes, apartments, townhouses, and villas in Tema and Accra Spintex.',
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '0246908872',
          'contactType': 'sales',
          'areaServed': 'GH'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://bennyhomesgh.com/#faq',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Where is Beny Homes located in Ghana?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Beny Homes is located in Accra Spintex and Tema, Greater Accra, Ghana. We offer luxury listings and executive villas in these prime residential developments.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I contact the lead broker at Beny Homes?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You can contact the lead broker Bernard Awuley directly at 0246908872 or via WhatsApp for fast client response and property showings.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What types of properties does Beny Homes sell or rent?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Beny Homes lists luxury residential property developments including executive villas, modern apartments, family townhouses, and interior designs for sale or rent.'
            }
          }
        ]
      }
    ]
  };

  useSEO({
    title: 'Beny Homes — Premium Real Estate Ghana (Tema & Accra Spintex)',
    description: 'Looking for luxury homes, townhouses, or villas in Ghana? Beny Homes specialize in premium properties in Accra Spintex and Tema. Contact Bernard Awuley at 0246908872.',
    ogTitle: 'Beny Homes — Luxury Homes & Real Estate in Ghana',
    ogDescription: 'We are passionate about helping families find their dream homes in Ghana. Specializing in luxury listings in Accra Spintex and Tema.',
    ogImage: '/assets/logo.png',
    schema: homeSchema
  });

  return (
    <>
      <Hero />
      <Properties />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
