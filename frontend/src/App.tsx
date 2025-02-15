import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { generateSite } from "./utils/generateSite";
import { primaryColors } from "./utils/colors";
import { headingFonts, bodyFonts } from "./utils/fonts";

const App: React.FC = () => {
  const [components, setComponents] = useState<
    { id: number; type: string; design: string }[]
  >([]);
  const [primaryColor, setPrimaryColor] = useState<string>("");
  const [headingFont, setHeadingFont] = useState<string>("Merriweather");
  const [bodyFont, setBodyFont] = useState<string>("Open Sans");

  const addComponent = (type: string, design: string) => {
    setComponents([...components, { id: Date.now(), type, design }]);
  };

  const removeComponent = (id: number) => {
    setComponents(components.filter((component) => component.id !== id));
  };

  const handleGenerateSite = () => {
    const siteContent = generateSite(components, primaryColor, headingFont, bodyFont);
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
      ],
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Website Generator</h1>

      {/* Font Selection */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Fonts</h2>
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
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Primary Color</h2>
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

      {/* Categories and Designs */}
      <div className="space-y-6">
        {categories.map((category) => (
          <div key={category.name}>
            <h2 className="text-xl font-semibold mb-2">{category.name}</h2>
            <div className="grid grid-cols-1 gap-4">
              {category.designs.map((design, index) => (
                <div key={index} className="border border-black/20 p-4 rounded-lg relative min-h-32 overflow-hidden">
                  {design.component}
                  <button
                    onClick={() => addComponent(category.name, design.name)}
                    className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded z-50"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Site Preview */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Site Preview</h2>
        <div className="space-y-4">
          {components.map((component) => (
            <div key={component.id} className="relative">
              {component.type === "Navbar" && (
                <Navbar design={component.design} color={primaryColor} />
              )}
              {component.type === "About" && (
                <About design={component.design} color={primaryColor} />
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
      </div>

      {/* Generate Website Button */}
      <div className="mt-8">
        <button
          onClick={handleGenerateSite}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Generate Website
        </button>
      </div>
    </div>
  );
};

export default App;