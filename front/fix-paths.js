const fs = require('fs');
const path = require('path');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function fixPaths() {
  const htmlFiles = getAllHtmlFiles('.');
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Reemplazar rutas relativas de CSS
    content = content.replace(/href="\.\.\/\.\.\/\.\.\/style\//g, 'href="/style/');
    content = content.replace(/href="\.\.\/\.\.\/style\//g, 'href="/style/');
    content = content.replace(/href="\.\.\/style\//g, 'href="/style/');
    content = content.replace(/href="\.\/style\//g, 'href="/style/');
    
    // Reemplazar rutas relativas de assets
    content = content.replace(/src="\.\.\/\.\.\/\.\.\/assets\//g, 'src="/assets/');
    content = content.replace(/src="\.\.\/\.\.\/assets\//g, 'src="/assets/');
    content = content.replace(/src="\.\.\/assets\//g, 'src="/assets/');
    content = content.replace(/src="\.\/assets\//g, 'src="/assets/');
    
    // Reemplazar rutas relativas de JavaScript
    content = content.replace(/src="\.\.\/\.\.\/\.\.\/javascript\//g, 'src="/javascript/');
    content = content.replace(/src="\.\.\/\.\.\/javascript\//g, 'src="/javascript/');
    content = content.replace(/src="\.\.\/javascript\//g, 'src="/javascript/');
    content = content.replace(/src="\.\/javascript\//g, 'src="/javascript/');
    
    // Reemplazar href de assets también
    content = content.replace(/href="\.\.\/\.\.\/\.\.\/assets\//g, 'href="/assets/');
    content = content.replace(/href="\.\.\/\.\.\/assets\//g, 'href="/assets/');
    content = content.replace(/href="\.\.\/assets\//g, 'href="/assets/');
    content = content.replace(/href="\.\/assets\//g, 'href="/assets/');
    
    fs.writeFileSync(file, content, 'utf8');
  });
  
  console.log(`✅ Fixed paths in ${htmlFiles.length} HTML files`);
}

fixPaths();