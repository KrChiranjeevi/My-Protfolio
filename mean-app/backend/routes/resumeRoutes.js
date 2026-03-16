// const express = require('express');
// const puppeteer = require('puppeteer');
// const router = express.Router();

// router.post('/generate-pdf', async (req, res) => {
//    console.log('📩 /generate-pdf hit');

//   const resumeData = req.body;

//   try {
//     const htmlContent = `
//       <html>
//         <head><style>body { font-family: Arial; padding: 20px; }</style></head>
//         <body>
//           <h1>${resumeData.name}</h1>
//           <p><strong>Email:</strong> ${resumeData.email}</p>
//           <p><strong>Phone:</strong> ${resumeData.phone}</p>
//           <p><strong>Skills:</strong> ${resumeData.skills}</p>
//           <p><strong>Education:</strong> ${resumeData.education}</p>
//           <p><strong>Projects:</strong> ${resumeData.projects}</p>
//         </body>
//       </html>`;

//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.setContent(htmlContent);
//     const pdfBuffer = await page.pdf({ format: 'A4' });
//     await browser.close();

//     res.set({
//       'Content-Type': 'application/pdf',
//       'Content-Disposition': 'attachment; filename=resume.pdf'
//     });

//     res.send(pdfBuffer);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error generating resume');
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const data = req.body;
  console.log('📩 Resume data received:', data);
  res.status(200).json({ message: 'Resume saved successfully' });
});

module.exports = router;
