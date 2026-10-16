import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import fs from "fs";
import path from "path";

async function generateCV() {
  const doc = await PDFDocument.create();
  
  // Standard Letter page (612 x 792 points)
  const page = doc.addPage([612, 792]);
  const { width, height } = page.getSize();

  const fontRegular = await doc.embedFont(StandardFonts.Helvetica);
  const fontBold = await doc.embedFont(StandardFonts.HelveticaBold);
  const fontOblique = await doc.embedFont(StandardFonts.HelveticaOblique);

  // Colors
  const primaryColor = rgb(0.08, 0.12, 0.22); // Deep navy #141f38
  const accentColor = rgb(0.18, 0.42, 0.92);  // Electric blue #2e6beb
  const secondaryColor = rgb(0.35, 0.4, 0.48); // Slate #59667a
  const darkTextColor = rgb(0.15, 0.18, 0.22); // Charcoal #262e38
  const lightLine = rgb(0.85, 0.88, 0.92);

  let y = height - 42; // Starting top margin
  const leftMargin = 42;
  const contentWidth = width - leftMargin * 2; // 528

  // Helper functions
  const drawLine = (yPos, color = lightLine, thickness = 1) => {
    page.drawLine({
      start: { x: leftMargin, y: yPos },
      end: { x: width - leftMargin, y: yPos },
      thickness,
      color,
    });
  };

  const drawSectionHeader = (title) => {
    y -= 14;
    page.drawText(title.toUpperCase(), {
      x: leftMargin,
      y,
      size: 11,
      font: fontBold,
      color: accentColor,
    });
    y -= 4;
    drawLine(y, accentColor, 1.2);
    y -= 12;
  };

  // --- HEADER ---
  page.drawText("SHAHRIAR AL SHIHAB", {
    x: leftMargin,
    y,
    size: 22,
    font: fontBold,
    color: primaryColor,
  });

  y -= 16;
  page.drawText("FULL STACK DEVELOPER", {
    x: leftMargin,
    y,
    size: 11,
    font: fontBold,
    color: accentColor,
  });

  y -= 14;
  const contactLine = "Dhaka, Bangladesh   |   +880 1750617596   |   shahriar.al.shihab@gmail.com";
  page.drawText(contactLine, {
    x: leftMargin,
    y,
    size: 9,
    font: fontRegular,
    color: darkTextColor,
  });

  y -= 13;
  const linksLine = "GitHub: github.com/ShahriarALshihab   |   LinkedIn: linkedin.com/in/shahriar-al-shihab";
  page.drawText(linksLine, {
    x: leftMargin,
    y,
    size: 9,
    font: fontRegular,
    color: secondaryColor,
  });

  y -= 10;
  drawLine(y, lightLine, 1.5);
  y -= 4;

  // --- PROFESSIONAL SUMMARY ---
  drawSectionHeader("Professional Summary");
  const summaryLines = [
    "Results-driven Full Stack Developer passionate about crafting modern, scalable, and responsive web applications.",
    "Strong technical expertise in React, Next.js (App Router), Node.js, Express.js, MongoDB, and RESTful architectures.",
    "Adept at engineering secure authentication workflows (Firebase Auth, JWT), database modeling, and integrating",
    "modern AI-assisted development tools to deliver high-velocity, production-ready code with superior user experience."
  ];

  for (const line of summaryLines) {
    page.drawText(line, {
      x: leftMargin,
      y,
      size: 9.5,
      font: fontRegular,
      color: darkTextColor,
      lineHeight: 13,
    });
    y -= 13;
  }

  // --- TECHNICAL SKILLS ---
  drawSectionHeader("Technical Skills");
  const skills = [
    { category: "Languages:", list: "JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3" },
    { category: "Frontend:", list: "React.js, Next.js (App Router), Tailwind CSS, Framer Motion, Responsive UI/UX" },
    { category: "Backend:", list: "Node.js, Express.js, NestJS, RESTful API Design & Integration" },
    { category: "Databases:", list: "MongoDB, PostgreSQL, SQL, Database Indexing & Schema Design" },
    { category: "Auth & Security:", list: "Firebase Auth, JWT (JSON Web Tokens), Better Auth, Role-based Access" },
    { category: "AI-Assisted Dev:", list: "AI Code Generation, Debugging Assistance, Code Explanation, Dev Productivity" },
    { category: "Tools & DevOps:", list: "Git, GitHub, Axios, Postman, npm, Vercel, VS Code" },
  ];

  for (const item of skills) {
    page.drawText(item.category, {
      x: leftMargin,
      y,
      size: 9,
      font: fontBold,
      color: primaryColor,
    });
    page.drawText(item.list, {
      x: leftMargin + 95,
      y,
      size: 9,
      font: fontRegular,
      color: darkTextColor,
    });
    y -= 12.5;
  }

  // --- FEATURED PROJECTS ---
  drawSectionHeader("Featured Projects");

  // Project 1: MediCare Connect
  page.drawText("MediCare Connect", {
    x: leftMargin,
    y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("|  Full-Stack Healthcare Platform", {
    x: leftMargin + 105,
    y,
    size: 9.5,
    font: fontOblique,
    color: secondaryColor,
  });
  const p1Links = "Live: medicare-client-a10.vercel.app  |  GitHub: /medicare-clientA10";
  page.drawText(p1Links, {
    x: width - leftMargin - fontRegular.widthOfTextAtSize(p1Links, 8.5),
    y,
    size: 8.5,
    font: fontRegular,
    color: accentColor,
  });
  y -= 12;

  page.drawText("Tech Stack: React, Node.js, Express.js, MongoDB, Firebase Auth, JWT, Tailwind CSS", {
    x: leftMargin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;

  const p1Bullets = [
    "Engineered an end-to-end healthcare web platform enabling patients to browse services, book appointments, and manage health records.",
    "Implemented dual authentication and authorization utilizing Firebase Auth and secure JWT token verification.",
    "Architected RESTful API endpoints in Node.js/Express with MongoDB indexing for high performance and fast query response.",
    "Developed a responsive, interactive UI with seamless booking state management and immediate feedback."
  ];

  for (const bullet of p1Bullets) {
    page.drawText("•", { x: leftMargin + 4, y, size: 9, font: fontBold, color: accentColor });
    page.drawText(bullet, {
      x: leftMargin + 14,
      y,
      size: 8.8,
      font: fontRegular,
      color: darkTextColor,
    });
    y -= 12;
  }
  y -= 4;

  // Project 2: SunCart
  page.drawText("SunCart", {
    x: leftMargin,
    y,
    size: 11,
    font: fontBold,
    color: primaryColor,
  });
  page.drawText("|  Modern E-Commerce Web Application", {
    x: leftMargin + 50,
    y,
    size: 9.5,
    font: fontOblique,
    color: secondaryColor,
  });
  const p2Links = "Live: sun-cart-ph-8req.vercel.app  |  GitHub: /sunCartPH";
  page.drawText(p2Links, {
    x: width - leftMargin - fontRegular.widthOfTextAtSize(p2Links, 8.5),
    y,
    size: 8.5,
    font: fontRegular,
    color: accentColor,
  });
  y -= 12;

  page.drawText("Tech Stack: React, Node.js, Express.js, MongoDB, JWT, REST APIs, Tailwind CSS", {
    x: leftMargin,
    y,
    size: 8.5,
    font: fontOblique,
    color: secondaryColor,
  });
  y -= 12;

  const p2Bullets = [
    "Developed a modern e-commerce single-page application featuring dynamic product catalogs, categories, and instant search.",
    "Implemented synchronized persistent shopping cart state management with real-time price totals and item quantity controls.",
    "Engineered robust Express.js backend services and MongoDB document models for secure user profiles and order management.",
    "Created an intuitive checkout experience designed with responsive layouts and accessible interactive components."
  ];

  for (const bullet of p2Bullets) {
    page.drawText("•", { x: leftMargin + 4, y, size: 9, font: fontBold, color: accentColor });
    page.drawText(bullet, {
      x: leftMargin + 14,
      y,
      size: 8.8,
      font: fontRegular,
      color: darkTextColor,
    });
    y -= 12;
  }
  y -= 4;

  // --- EDUCATION ---
  drawSectionHeader("Education");
  page.drawText("Bachelor of Science in Computer Science & Engineering (CSE)", {
    x: leftMargin,
    y,
    size: 10.5,
    font: fontBold,
    color: primaryColor,
  });
  const eduDuration = "2022 – 2026 (Expected)";
  page.drawText(eduDuration, {
    x: width - leftMargin - fontBold.widthOfTextAtSize(eduDuration, 9),
    y,
    size: 9,
    font: fontBold,
    color: secondaryColor,
  });
  y -= 13;

  page.drawText("University of Liberal Arts Bangladesh (ULAB)", {
    x: leftMargin,
    y,
    size: 9.5,
    font: fontRegular,
    color: accentColor,
  });
  const eduLocation = "Dhaka, Bangladesh";
  page.drawText(eduLocation, {
    x: width - leftMargin - fontRegular.widthOfTextAtSize(eduLocation, 8.5),
    y,
    size: 8.5,
    font: fontRegular,
    color: secondaryColor,
  });
  y -= 12;

  page.drawText("Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems,", {
    x: leftMargin,
    y,
    size: 8.5,
    font: fontRegular,
    color: darkTextColor,
  });
  y -= 10.5;
  page.drawText("Web Engineering, Software Architecture, Operating Systems, Computer Networks.", {
    x: leftMargin,
    y,
    size: 8.5,
    font: fontRegular,
    color: darkTextColor,
  });

  const pdfBytes = await doc.save();
  const outputPath = path.resolve("public/cv-placeholder.pdf");
  fs.writeFileSync(outputPath, pdfBytes);
  console.log("Successfully generated professional CV at:", outputPath);
}

generateCV().catch(console.error);
