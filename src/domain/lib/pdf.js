const wkhtmltopdf = require('wkhtmltopdf');
// const Pdfsig = require('pdfsig');
const { app } = require('../../common/config');

if (process.platform === 'win32') {
  wkhtmltopdf.command = 'C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe';
} else {
  wkhtmltopdf.command = 'wkhtmltopdf';
}

async function createPdf (html, pdfOptions = {}) {
  const opt = {
    // headerHtml   : `${config.app.backendUrl}/public/generarHeaderPdfDocumento`,
    pageSize     : pdfOptions.pageSize     || 'letter',
    marginLeft   : pdfOptions.marginLeft   || '2cm',
    marginRight  : pdfOptions.marginRight  || '2cm',
    marginTop    : pdfOptions.marginTop    || '2cm',
    marginBottom : pdfOptions.marginBottom || '2cm',
    output       : pdfOptions.output       || '/tmp/documento.pdf',
    footerRight  : '[page] de [toPage]'
  };

  return new Promise((resolve, reject) => {
    wkhtmltopdf(html, opt, (err) => {
      if (err) { return reject(err); }
      resolve();
    });
  });
}

async function firmarPdf (rutaArchivo) {
  const pdfFirmar = new Pdfsig(rutaArchivo);

  if (!app.usuarioFirmar?.certificado) throw new Error('No tiene configurado el certificado de la firma.');

  if (!app.usuarioFirmar?.contrasena) throw new Error('No tiene configurado la clave del certificado.');

  const documento = pdfFirmar.firmar(app.usuarioFirmar.certificado, app.usuarioFirmar.contrasena);

  return documento;
}

module.exports = {
  firmarPdf,
  createPdf
};
