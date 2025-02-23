import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { generateSite } from "./utils/generateSite";
import { primaryColors } from "./utils/colors";
import { headingFonts, bodyFonts } from "./utils/fonts";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  const [components, setComponents] = useState<
    { id: number; type: string; design: string }[]
  >([]);
  const [primaryColor, setPrimaryColor] = useState<string>("");
  const [headingFont, setHeadingFont] = useState<string>("Merriweather");
  const [bodyFont, setBodyFont] = useState<string>("Open Sans");
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  // useEffect(() => {
  //   setIsPreviewOpen(true);
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, []);

  const closePreview = () => {
    setIsPreviewOpen(false);
    document.body.style.overflow = "auto";
  };

  const addComponent = (type: string, design: string) => {
    setComponents([...components, { id: Date.now(), type, design }]);
  };

  const removeComponent = (id: number) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const handleGenerateSite = () => {
    const siteContent = generateSite(
      components,
      primaryColor,
      headingFont,
      bodyFont
    );
    const blob = new Blob([siteContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "generated-site.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  const categories = [
    {
      name: "Navbar",
      designs: [
        {
          name: "Design1",
          component: <Navbar design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Navbar design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Navbar design="Design3" color={primaryColor} />,
        },
        {
          name: "Design4",
          component: <Navbar design="Design4" color={primaryColor} />,
        },
        {
          name: "Design5",
          component: <Navbar design="Design5" color={primaryColor} />,
        },
      ],
    },
    {
      name: "About",
      designs: [
        {
          name: "Design1",
          component: <About design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <About design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <About design="Design3" color={primaryColor} />,
        },
      ],
    },
    {
      name: "Gallery",
      designs: [
        {
          name: "Design1",
          component: <Gallery design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Gallery design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Gallery design="Design3" color={primaryColor} />,
        },
      ],
    },
    {
      name: "Footer",
      designs: [
        {
          name: "Design1",
          component: <Footer design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Footer design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Footer design="Design3" color={primaryColor} />,
        },
        {
          name: "Design4",
          component: <Footer design="Design4" color={primaryColor} />,
        },
        {
          name: "Design5",
          component: <Footer design="Design5" color={primaryColor} />,
        },
      ],
    },
  ];

  return (
    <>
      <nav className="flex items-center justify-between shadow border-b border-black/20 p-4">
        <h1 className="text-2xl font-bold">Longtail Website Generator</h1>
        <div className="flex gap-4">
          {/* Font Selection */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Heading Font (Serif)
                </label>
                <select
                  value={headingFont}
                  onChange={(e) => setHeadingFont(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {headingFonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Body Font (Sans-Serif)
                </label>
                <select
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  {bodyFonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="">
            <label className="block text-sm font-medium mb-1">
              Primary Color
            </label>
            <select
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {primaryColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
      </nav>

      <div className="pt-0 p-4">
        <h2 className="text-xl font-semibold mt-8 mb-4">Components</h2>
        <p>
          Click on the + button to add a component to the site preview. You can
          also remove components by clicking the "Remove" button on the preview
          components.
        </p>
      </div>

      {/* Categories and Designs */}
      <div className="space-y-6 p-4">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              {category.designs.map((design, index) => (
                <div
                  key={index}
                  className="border border-black/20 p-4 rounded-lg relative min-h-32"
                >
                  {design.component}
                  <button
                    type="button"
                    onClick={() => addComponent(category.name, design.name)}
                    className="absolute cursor-pointer -top-2 -right-2 bg-green-600 text-white p-2 rounded-full size-8 flex items-center justify-center aspect-square text-3xl z-50"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Preview Button */}
      <button
        type="button"
        onClick={() => setIsPreviewOpen(true)}
        className="fixed cursor-pointer z-50 bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg"
      >
        Preview Site
      </button>

      {/* Preview Side Navigation */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 shadow-lg transform transition-transform ${
          isPreviewOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold">Site Preview</h2>
          <button
            onClick={closePreview}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <div className="h-auto max-h-full overflow-y-auto">
          {components.map((component) => (
            <div key={component.id} className="relative">
              {component.type === "Navbar" && (
                <Navbar design={component.design} color={primaryColor} />
              )}
              {component.type === "About" && (
                <About design={component.design} color={primaryColor} />
              )}
              {component.type === "Gallery" && (
                <Gallery design={component.design} color={primaryColor} />
              )}
              {component.type === "Footer" && (
                <Footer design={component.design} color={primaryColor} />
              )}
              <button
                onClick={() => removeComponent(component.id)}
                className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded z-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200 fixed bottom-0 w-full bg-white">
          <button
            type="button"
            onClick={handleGenerateSite}
            className="w-full bg-black text-white cursor-pointer px-8 py-4 rounded"
          >
            Generate Website
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
