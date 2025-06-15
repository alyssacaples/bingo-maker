const { createServer } = require('node:http');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.fontSize(25).text('Hello, PDF!', 100, 100);
doc.addPage().fontSize(15).text('This is another page.', 50, 50);

doc.end();

// const puppeteer = require('puppeteer')
 
// async function printPDF() {
//   const browser = await puppeteer.launch({ headless: true });
//   const page = await browser.newPage();
//   await page.goto('https://blog.risingstack.com', {waitUntil: 'networkidle0'});
//   const pdf = await page.pdf({ format: 'A4' });
//   console.log(`hello waiting to get pdf`);
 
//   await browser.close();
//   console.log(`closed browser`);
//   await page.addStyleTag({ content: '.nav { display: none} .navbar { border: 0px} #print-button {display: none}' })
//   return pdf
// }

// printPDF().then(pdf => {
// 	res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
// 	res.send(pdf)
// })

// 

// printPDF().then(pdf => {
// 	res.set({ 'Content-Type': 'application/pdf', 'Content-Length': pdf.length })
// 	res.send(pdf)
// })

// function getPDF() {
//     return axios.get(`${API_URL}/your-pdf-endpoint`, {
//       responseType: 'arraybuffer',
//       headers: {
//         'Accept': 'application/pdf'
//       }
//     })

//     savePDF = () => {
//         this.openModal(‘Loading…’) // open modal
//        return getPDF() // API call
//          .then((response) => {
//            const blob = new Blob([response.data], {type: 'application/pdf'})
//            const link = document.createElement('a')
//            link.href = window.URL.createObjectURL(blob)
//            link.download = `your-file-name.pdf`
//            link.click()
//            this.closeModal() // close modal
//          })
//        .catch(err => /** error handling **/)
//      }

// <button onClick={this.savePDF}>Save as PDF</button>