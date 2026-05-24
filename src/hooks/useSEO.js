import { useEffect } from 'react';

export default function useSEO({ title, description, ogTitle, ogDescription, ogImage, schema }) {
  useEffect(() => {
    // 1. Set Title
    if (title) {
      document.title = title;
    }

    // 2. Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description || 'Beny Homes - Premium Real Estate in Tema and Accra Spintex, Ghana.');

    // 3. Set OpenGraph Meta tags
    const ogTags = {
      'og:title': ogTitle || title,
      'og:description': ogDescription || description,
      'og:image': ogImage || '/assets/logo.png',
      'og:type': 'website'
    };

    const createdTags = [];
    Object.entries(ogTags).forEach(([property, content]) => {
      if (!content) return;
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
      createdTags.push(el);
    });

    // 4. Inject JSON-LD Structured Data Schema
    let scriptTag = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      document.head.appendChild(scriptTag);
    }

    // Cleanup
    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, ogTitle, ogDescription, ogImage, schema]);
}
