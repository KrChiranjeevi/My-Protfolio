// // import jsPDF from 'jspdf';

// // const generatePDF = (data) => {
// //   const doc = new jsPDF();
// //   doc.setFontSize(18);
// //   doc.text('Resume', 20, 20);

// //   doc.setFontSize(12);
// //   let y = 40;
// //   const lineHeight = 8;
// //   const maxLineWidth = 170; // width of the page minus margins

// //   for (const [key, value] of Object.entries(data)) {
// //     const label = `${key.toUpperCase()}:`;
    
// //     // Add label
// //     doc.setFont(undefined, 'bold');
// //     doc.text(label, 20, y);
// //     y += lineHeight;

// //     // Add value with line wrapping
// //     doc.setFont(undefined, 'normal');
// //     const lines = doc.splitTextToSize(value, maxLineWidth);
// //     lines.forEach(line => {
// //       doc.text(line, 25, y); // indent value
// //       y += lineHeight;
// //     });

// //     y += 4; // spacing between fields

// //     // Page break if content exceeds page
// //     if (y > 270) {
// //       doc.addPage();
// //       y = 20;
// //     }
// //   }

// //   doc.save(`${data.name || 'resume'}_Resume.pdf`);
// // };

// // export default generatePDF;

// // pdfgenerator.jsx
// import jsPDF from 'jspdf';

// const generatePDF = (data) => {
//   const doc = new jsPDF();
//   doc.setFontSize(18);
//   doc.text('Resume', 20, 20);

//   doc.setFontSize(12);
//   let y = 40;
//   const lineHeight = 8;
//   const maxLineWidth = 170;

//   for (const [key, value] of Object.entries(data)) {
//     const label = `${key.toUpperCase()}:`;

//     doc.setFont(undefined, 'bold');
//     doc.text(label, 20, y);
//     y += lineHeight;

//     doc.setFont(undefined, 'normal');
//     const lines = doc.splitTextToSize(value, maxLineWidth);
//     lines.forEach((line) => {
//       doc.text(line, 25, y);
//       y += lineHeight;
//     });

//     y += 4;

//     if (y > 270) {
//       doc.addPage();
//       y = 20;
//     }
//   }

//   doc.save(`${data.name || 'resume'}_Resume.pdf`);
// };

// export default generatePDF;
import jsPDF from 'jspdf';

const generatePDF = (data) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Resume', 20, 20);

  doc.setFontSize(12);
  let y = 40;
  for (const [key, value] of Object.entries(data)) {
    doc.text(`${key.toUpperCase()}: ${value}`, 20, y);
    y += 10;
  }

  doc.save(`${data.name}_Resume.pdf`);
};

export default generatePDF;
