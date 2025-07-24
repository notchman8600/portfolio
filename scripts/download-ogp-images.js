const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs');
const path = require('path');

const urls = [
  'https://topaz.dev/projects/3cb8f7e2be54f7083f99',
  'https://topaz.dev/projects/50a804868af6407eb504', 
  'https://topaz.dev/projects/4f42624a1a4028f63363',
  'https://topaz.dev/projects/dd936bbcc01a5be88082',
  'https://topaz.dev/projects/83e136f000385d10c09f',
  'https://topaz.dev/projects/c00sudq23akg008ogemg'
];

async function fetchOgpImages() {
  // Ensure directory exists
  const dir = 'public/assets/works';
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const projectId = url.split('/').pop();
    
    try {
      console.log(`Fetching ${url}...`);
      const response = await fetch(url);
      const html = await response.text();
      
      // Extract OGP image URL
      const ogImageMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/);
      
      if (ogImageMatch && ogImageMatch[1]) {
        const imageUrl = ogImageMatch[1];
        console.log(`Project ${projectId}: Found image URL: ${imageUrl}`);
        
        // Download image
        const imageResponse = await fetch(imageUrl);
        const buffer = await imageResponse.buffer();
        
        const fileName = `project-${projectId}.jpg`;
        const filePath = path.join(dir, fileName);
        
        fs.writeFileSync(filePath, buffer);
        console.log(`Downloaded: ${fileName}`);
      } else {
        console.log(`No OGP image found for ${projectId}`);
      }
    } catch (error) {
      console.error(`Error processing ${url}:`, error.message);
    }
  }
}

fetchOgpImages().then(() => {
  console.log('All downloads complete!');
}).catch(console.error);