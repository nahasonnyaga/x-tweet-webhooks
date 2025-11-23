import aiMeta from '../../x-tweet-seo/ai-meta';
import ogGen from '../../x-tweet-seo/og-generator';
import sitemap from '../../x-tweet-seo/generate-sitemaps';
import trending from '../../x-tweet-seo/trending';

export async function generateMetaTags(post: any) {
  return aiMeta.createMeta(post);
}

export async function generateOGImage(post: any) {
  return ogGen.createOG(post); // assumes Cloudinary upload inside
}

export async function generateSitemap(post: any) {
  return sitemap.addToSitemap(post);
}

export async function updateTrending(post: any) {
  return trending.updateKeywords(post);
}
