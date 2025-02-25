import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { generateSite } from "./utils/generateSite";
import { primaryColors } from "./utils/colors";
import { headingFonts, bodyFonts } from "./utils/fonts";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { RiDeleteBin6Line } from "react-icons/ri";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Accommodation from "./components/Accommodation";

const App: React.FC = () => {
  const [components, setComponents] = useState<
    { id: number; type: string; design: string }[]
  >([]);
  const [primaryColor, setPrimaryColor] = useState<string>("");
  const [headingFont, setHeadingFont] = useState<string>("Playfair Display");
  const [bodyFont, setBodyFont] = useState<string>("Inter");
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const closePreview = () => {
    setIsPreviewOpen(false);
    document.body.style.overflow = "auto";
  };

  const addComponent = (type: string, design: string) => {
    setComponents([...components, { id: Date.now(), type, design }]);
    toast.success(`${type} component added!`);
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
      name: "Hero",
      designs: [
        {
          name: "Design1",
          component: <Hero design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Hero design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Hero design="Design3" color={primaryColor} />,
        },
        {
          name: "Design4",
          component: <Hero design="Design4" color={primaryColor} />,
        },
        {
          name: "Design5",
          component: <Hero design="Design5" color={primaryColor} />,
        },
        {
          name: "Design6",
          component: <Hero design="Design6" color={primaryColor} />,
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
      name: "Accommodation",
      designs: [
        {
          name: "Design1",
          component: <Accommodation design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Accommodation design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Accommodation design="Design3" color={primaryColor} />,
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
      name: "Testimonials",
      designs: [
        {
          name: "Design1",
          component: <Testimonials design="Design1" color={primaryColor} />,
        },
        {
          name: "Design2",
          component: <Testimonials design="Design2" color={primaryColor} />,
        },
        {
          name: "Design3",
          component: <Testimonials design="Design3" color={primaryColor} />,
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
      <ToastContainer />
      <nav className="flex items-center justify-between shadow border-b border-black/20 p-4">
        <h1 className="text-2xl font-bold">Longtail Website Generator</h1>
        <div className="flex gap-4">
          {/* Font Selection */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-light mb-1">
                  Heading Font (Serif)
                </label>
                <select
                  value={headingFont}
                  onChange={(e) => setHeadingFont(e.target.value)}
                  className="w-full p-2 border rounded text-sm"
                >
                  {headingFonts.map((font) => (
                    <option key={font} value={font}>
                      {font}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-light mb-1">
                  Body Font (Sans-Serif)
                </label>
                <select
                  value={bodyFont}
                  onChange={(e) => setBodyFont(e.target.value)}
                  className="w-full p-2 border rounded text-sm"
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
            <label className="block text-xs font-light mb-1">
              Primary Color
            </label>
            <select
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
              className="w-full p-2 border rounded text-sm"
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
                  className="border border-black/20 p-4 rounded-lg relative min-h-40"
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
        className={`fixed inset-0 h-full w-full bg-white z-50 shadow-lg transform transition-transform ${
          isPreviewOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[calc(100%-4rem)] max-h-full overflow-y-auto">
          {components.map((component) => (
            <React.Fragment key={component.id}>
              <button
                type="button"
                onClick={() => removeComponent(component.id)}
                className="px-4 w-24 sticky top-2 left-2 py-1 z-[99] flex items-center gap-1 cursor-pointer border border-red-600 text-sm hover:bg-red-600 hover:text-red-100 transition-all duration-200 bg-red-100 text-red-600 rounded-full"
              >
                <RiDeleteBin6Line className="bg-transparent text-base" />
                {component.type}
              </button>
              {component.type === "Navbar" && (
                <Navbar design={component.design} color={primaryColor} />
              )}
              {component.type === "Hero" && (
                <Hero design={component.design} color={primaryColor} />
              )}
              {component.type === "About" && (
                <About design={component.design} color={primaryColor} />
              )}
              {component.type === "Accommodation" && (
                <Accommodation design={component.design} color={primaryColor} />
              )}
              {component.type === "Gallery" && (
                <Gallery design={component.design} color={primaryColor} />
              )}
              {component.type === "Testimonials" && (
                <Testimonials design={component.design} color={primaryColor} />
              )}
              {component.type === "Footer" && (
                <Footer design={component.design} color={primaryColor} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="p-2 border-t flex items-center gap-2 justify-between border-gray-200 z-50 fixed bottom-0 w-full bg-white">
          <button
            type="button"
            onClick={handleGenerateSite}
            className="w-full bg-black text-white cursor-pointer px-8 py-4 rounded"
          >
            Generate Website
          </button>
          <button
            onClick={closePreview}
            className="w-full flex-1 bg-gray-300 text-black outline-2 outline-black/50 -outline-offset-2 cursor-pointer px-8 py-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
