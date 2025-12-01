import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const hostname = 'https://8xaidcircles.com';

const links = [
  // Japanese pages
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/brand', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/news', changefreq: 'weekly', priority: 0.8 },
  { url: '/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms-of-service', changefreq: 'yearly', priority: 0.5 },
  
  // English pages
  { url: '/en', changefreq: 'monthly', priority: 1.0 },
  { url: '/en/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/en/brand', changefreq: 'monthly', priority: 0.8 },
  { url: '/en/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/en/news', changefreq: 'weekly', priority: 0.8 },
  { url: '/en/privacy-policy', changefreq: 'yearly', priority: 0.5 },
  { url: '/en/terms-of-service', changefreq: 'yearly', priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname });

// Write all links to the sitemap
links.forEach(link => sitemap.write(link));

// End the stream
sitemap.end();

// Generate the sitemap XML
streamToPromise(sitemap)
  .then(data => {
    const outputPath = resolve(process.cwd(), 'dist', 'sitemap.xml');
    const writeStream = createWriteStream(outputPath);
    writeStream.write(data.toString());
    writeStream.end();
    console.log(`Sitemap generated successfully at: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error generating sitemap:', err);
    process.exit(1);
  });

