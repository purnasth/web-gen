import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
// Import other components as needed

export const generateSite = (
  components: { type: string; design: string }[],
  primaryColor: string,
  headingFont: string,
  bodyFont: string
): string => {
  // Generate HTML for each component
  const generatedComponents = components
    .map((component) => {
      switch (component.type) {
        case "Navbar":
          return Navbar.generateHTML(component.design, primaryColor);
        case "Hero":
          return Hero.generateHTML(component.design, primaryColor);
        case "About":
          return About.generateHTML(component.design, primaryColor);
        case "Gallery":
          return Gallery.generateHTML(component.design, primaryColor);
        case "Testimonials":
          return Testimonials.generateHTML(component.design, primaryColor);
        case "Footer":
          return Footer.generateHTML(component.design, primaryColor);
        // Add cases for other components (Header, Footer, etc.)
        default:
          return "";
      }
    })
    .join("\n");

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Generated Website</title>
      <link href="https://fonts.googleapis.com/css2?family=${headingFont.replace(
        " ",
        "+"
      )}:wght@400;700&family=${bodyFont.replace(
    " ",
    "+"
  )}:wght@400;700&display=swap" rel="stylesheet">
      <script src="https://cdn.tailwindcss.com"></script>
      <style>
        body { font-family: '${bodyFont}', sans-serif; }
        h1, h2, h3, h4, h5 { font-family: '${headingFont}', serif; }
      </style>
    </head>
    <body>
      ${generatedComponents}
    </body>
    </html>
  `;
};
