// front/middleware.js
export default function middleware(request) {
    const url = new URL(request.url);
    const path = url.pathname;
    
    // 1. Para archivos estáticos (CSS, JS, imágenes) - servirlos directamente
    if (path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
      // Convertir rutas relativas a absolutas
      let staticPath = path;
      
      // Si la ruta contiene ../ o ./ , limpiarla
      if (staticPath.includes('/../')) {
        // Resolver ../ en la ruta
        const parts = staticPath.split('/').filter(p => p !== '..' && p !== '.');
        staticPath = '/' + parts.join('/');
      }
      
      return new Response(null, {
        headers: {
          'x-middleware-rewrite': staticPath
        }
      });
    }
    
    // 2. Para archivos HTML específicos
    if (path.endsWith('.html') && path !== '/index.html') {
      return new Response(null, {
        headers: {
          'x-middleware-rewrite': path
        }
      });
    }
    
    // 3. Para cualquier otra ruta (incluyendo /pages/...), servir index.html
    return new Response(null, {
      headers: {
        'x-middleware-rewrite': '/index.html'
      }
    });
  }