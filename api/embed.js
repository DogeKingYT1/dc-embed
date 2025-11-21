
export default function handler(req, res) {
  const { title = '', description = '', author = '', image = '', color = '18F900' } = req.query;

  res.setHeader('Content-Type', 'text/html');
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>${title || 'Dynamic Embed'}</title>
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:image" content="${image}">
    <meta property="og:type" content="website">
    <style>
      body { background-color: #${color}; color:#fff; font-family:sans-serif; text-align:center; padding:50px; }
    </style>
  </head>
  <body>
    <h1>${title}</h1>
    <h3>${author}</h3>
    <p>${description}</p>
    <img src="${image}" style="max-width:90%;"/>
  </body>
  </html>
  `);
}
