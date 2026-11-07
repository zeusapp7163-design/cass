import { CASINOS, FAQ } from '@/lib/casinos';
import { SITE } from '@/lib/site';

export function JsonLd() {
  const graph = [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'ru-RU',
      publisher: { '@id': `${SITE.url}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: { '@type': 'ImageObject', url: `${SITE.url}/og.png` },
      email: SITE.email,
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE.url}/#webpage`,
      url: SITE.url,
      name: `${SITE.title} | ${SITE.name}`,
      description: SITE.description,
      isPartOf: { '@id': `${SITE.url}/#website` },
      inLanguage: 'ru-RU',
      datePublished: '2026-01-12',
      dateModified: SITE.updatedIso,
      primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE.url}/og.png` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE.url}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: SITE.url },
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE.url}/#rating`,
      name: 'Топ онлайн казино 2026',
      description:
        'Рейтинг проверенных онлайн-казино 2026: бонусы, промокоды, скорость выплат и лицензии.',
      numberOfItems: CASINOS.length,
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      itemListElement: CASINOS.map((casino) => ({
        '@type': 'ListItem',
        position: casino.rank,
        name: casino.name,
        url: casino.url,
        description: `${casino.name}: бонус ${casino.bonusValue} ${casino.bonusExtra}, выплаты ${casino.payout}, рейтинг ${casino.rating.toFixed(1)} из 5.`,
      })),
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
      }}
    />
  );
}
