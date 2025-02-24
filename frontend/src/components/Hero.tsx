import React from "react";

interface HeroProps {
  design: string;
  color: string;
}

const generateHeroHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
        <section class="group relative m-0 p-0">
    <div class="min-h-[32rem] w-full object-cover object-center sm:h-[50vh] md:h-[65vh] xl:h-screen">
        <img src="https://satprayash.org.np//backend/images/slideshow/pi125-donation.svg"
            alt="The care they require. The home they love."
            class="absolute inset-0 bottom-0 -z-10 size-full object-scale-down object-bottom" />
        <div class="pointer-events-auto z-10 mt-32 flex flex-col items-center justify-start md:mt-40">
            <h2
                class="text-shadow-dark-glow mx-8 max-w-xl text-center text-xl font-bold leading-relaxed text-dark md:mx-0 md:text-4xl md:leading-snug">
               Center for Physically & Mentally Challenged Children
            </h2>
            <p class="my-4 md:my-6 max-w-md px-4 text-center text-sm md:text-base">
	Satprayas Nepal is a service oriented non-profit organization that works for the well being and welfare of physically and mentally challenged children.
            </p>
            <a class="transition-all duration-200 group flex items-center justify-center gap-2 rounded-full border-2 border-orange-500 bg-orange-500 px-6 py-2 text-sm font-semibold text-white hover:bg-white hover:text-orange-500 md:text-base"
                href="/contact">
                Make a donation
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256"
                    class="animate-bounce bg-transparent text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</section>
    `;
  }
  if (design === "Design2") {
    return `
        <section class="group relative m-0 p-0">
    <div class="min-h-[34rem] w-full object-cover object-center contrast-125 sm:h-[50vh] md:h-[70vh] lg:h-screen">
        <img src="https://himalayan-flavours.com/backend/images/slideshow/PPtnR-bg_cuisine.png"
            alt="Taste the Cuisine and Feel the dewhiteness" class="absolute inset-0 -z-10 size-full object-cover"/>
        <div class="pointer-events-none bg-transparent absolute inset-0 z-10 flex size-full flex-col items-center justify-end">
            <a class="cursor-pointer" aria-label="Himalayan Flavours" title="Himalayan Flavours" href="/"><img
                    src="https://himalayan-flavours.com/backend/images/preference/CPM4u-logo.svg"
                    alt="Himalayan Flavours Logo" class="h-40 w-auto object-contain p-1 lg:h-64"></a>
            <h2
                class="text-shadow-dark-glow mx-8 mb-5 mt-8 max-w-xl text-center text-xl font-bold leading-relaxed text-dark md:mx-0 md:text-4xl md:leading-snug">
                Taste the Cuisine and Feel the dewhiteness</h2><img src="https://himalayan-flavours.com/assets/fire-Ch4bH2kY.png" alt="Fire Icon"
                class="size-12 rounded-full border border-orange-300 object-contain p-1">
            <div class="bottom-0 h-10 w-px bg-orange-300 md:h-20"></div>
        </div>
    </div>
</section>
    `;
  }

  if (design === "Design3") {
    return `
<section class="relative group">
    <section class="relative group max-w-[100vw] overflow-hidden">
        <video class="w-full h-full sm:h-[50vh] sm:min-h-96 lg:h-[36rem] xl:h-[120vh] 2xl:h-[115vh] object-cover z-10"
            autoplay="" loop="" muted="" playsinline="" preload="auto"
            poster="https://legacy.purnashrestha.com.np/dayatra/assets/img/daYatraNight.webp">
            <source src="https://legacy.purnashrestha.com.np/dayatra/assets/video/dayatra.mp4" type="video/mp4">
            <track src="#" kind="captions" srclang="en" label="english_captions">Your browser does not support the video
            tag.
        </video>
        <div
            class="fixed top-0 right-0 size-fit h-screen translate-x-24 group-hover:translate-x-0 transition-all duration-500 ease-linear z-20 flex items-center justify-center">
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 569"
                class="w-auto h-72 object-contain pointer-events-none">
                <defs>
                    <image width="73" height="1037" id="img1"
                        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAQNAQMAAAArO/X2AAAAAXNSR0IB2cksfwAAAAZQTFRFAAAAAAAApWe5zwAAAAJ0Uk5TAP9bkSK1AAABqUlEQVR4nO3YMXLCMBCFYXsoXHIEjuLJUXKElCkydm7GUTgCJQWDI2l3NQ95iYA4kMy8VF+jlUyq/dvG/saWJEmSJEmSJJ/IdngSVx8Lsnv/KddvFW5eK+xfrufQepw+v2d78rg6euwOHtf7zM3OY7/1OIyZU2NsTx67Q+Z6n7nZZfbbzGHMnBpjmGUMs4xhljEMMIYBynhKGU8p4yllPKWMp4TplHB1zEynhOmUMJ0STo1RBiSma4UyIDF8uFFmJcqskjI2UsdGyrsS9YaCelmkXlZQ7y2o9xbUJ5zTXnOR9sZz2huvoX3ENbRPu5H27YvQfrLH0P4VJEmSJEmSJEn+Fz52Z6hy0X3ozp0MWF37blkn/YUUWF1p/U34wtbsb9j+Ng7rur/Pw8IPGQDiABLqAeQFiA6QIiBQ6B1FzMDEAeEDcghEEkgnMmKWWSC+pHOzUJPOzaMOpB4IQHHEvBBBN8KwBLkJIhSkqTDNaVcQt5BQv/w8Bv0MAhvQj3FQ6/yyB7zQBv2O6LMaJauFs9pIfd5ZZBcNxMDfCtp/oeaTJEmSJEmS5JxfhzXgu3BP99kAAAAASUVORK5CYII=">
                    </image>
                </defs>
                <style></style>
                <use id="Layer 2" href="#img1" x="0" y="-230"></use>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center flex-col gap-3"><button
                    class="text-white/70 hover:text-white text-xl p-1 hover:bg-white/20 outline outline-white/0 hover:outline-white/50 rounded-full transition-all duration-300 hover:scale-110"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                        <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path>
                    </svg></button><button
                    class="text-white/70 hover:text-white text-xl p-1 hover:bg-white/20 outline outline-white/0 hover:outline-white/50 rounded-full transition-all duration-300 hover:scale-110"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m21.707 20.293-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-1.554-.832L7.727 6.313l-4.02-4.02-1.414 1.414 18 18 1.414-1.414zM12 5.868v4.718L9.169 7.755 12 5.868zM4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-1.879l-2-2v2.011l-4.445-2.964c-.025-.017-.056-.02-.082-.033a.986.986 0 0 0-.382-.116C7.059 15.016 7.032 15 7 15H4V9h.879L3.102 7.223A1.995 1.995 0 0 0 2 9v6c0 1.103.897 2 2 2z">
                        </path>
                    </svg></button><button
                    class="text-white/70 hover:text-white text-xl p-1 hover:bg-white/20 outline outline-white/0 hover:outline-white/50 rounded-full transition-all duration-300 hover:scale-110"><svg
                        stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5h5V3H3v7h2zm5 14H5v-5H3v7h7zm11-5h-2v5h-5v2h7zm-2-4h2V3h-7v2h5z"></path>
                    </svg></button><button
                    class="text-white/70 hover:text-white text-xl p-1 hover:bg-white/20 outline outline-white/0 hover:outline-white/50 rounded-full transition-all duration-300 hover:scale-110"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4"></path>
                        <path d="M14 14m0 1a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1z"></path>
                    </svg></button></div>
        </div>
    </section>
    <div
        class="bg-gradient-to-t from-black/60 to-black/0 absolute inset-0 size-full z-0 flex items-center justify-end flex-col text-white pb-12 2xl:pb-12 space-y-3 md:space-y-2 pointer-events-none">
        <span class="text-sm md:text-base uppercase opacity-90">Hotel Da Yatra Courtyard</span>
        <h2 class="text-xl md:text-5xl text-white text-shadow-dark-glow mx-8 md:mx-0 leading-relaxed text-center">
            Neoclassical Luxury Hotel in Pokhara</h2>
        <div class="w-px h-10 md:h-28 bg-white/50 bottom-0"></div><button
            class="group relative text-white text-sm md:text-base hover:text-white transition-all duration-500 hover:scale-110 pointer-events-auto"><span
                class="absolute -bottom-px -right-0 w-full h-px bg-white/60 scale-x-0 hover:scale-x-0 group-hover:scale-x-100 origin-center transition-all duration-300 ease-linear"></span>Explore
            Services</button>
    </div>
</section>
    `;
  }

  if (design === "Design4") {
    return `
    <div class="w-full h-64 sm:h-[50vh] sm:min-h-96 lg:h-screen relative group">
    <img src="https://hotelhimalaya.purnashrestha.com.np/images/hero/1.webp"
       alt="Hotel Himalaya"
       class="w-full h-64 sm:h-[50vh] sm:min-h-96 lg:h-screen object-cover absolute inset-0 transition-all duration-[2s] opacity-100"
       draggable="false">
    <div class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/10 to-black/0"></div>
    <h4
       class="opacity-100 hidden sm:block pointer-events-none w-full h-24 pt-20 pl-12 pr-6 pb-10 md:py-20 md:px-12 absolute bottom-0 text-right text-white z-20 [text-shadow:2px_2px_#815f16]">
       Hotel Himalaya
    </h4>
 </div>
`;
  }

  if (design === "Design5") {
    return `
   <main class="relative flex h-screen w-full items-end bg-gradient-to-b from-[#82fcf1] to-transparent p-0"><img
        src="https://templebell.pages.dev/assets/test-Bbq4jGgE.png" alt="Temple Bell"
        class="absolute inset-0 h-screen w-full object-contain" draggable="false">
    <div class="absolute inset-0 size-full bg-gradient-to-b from-transparent via-transparent to-light"></div>
    <div class="z-20 max-w-3xl space-y-3 p-6"><span class="uppercase">blend of modern comfort &amp; traditional
            charm.</span>
        <h1 class="text-5xl capitalize leading-tight">Your newest sanctuary</h1>
    </div><img src="https://templebell.pages.dev/assets/offers-BsrjYTyN.jpg" alt="Offers"
        class="absolute bottom-6 right-6 w-48 object-contain shadow">
</main>
`;
  }

  return "";
};

const Hero: React.FC<HeroProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateHeroHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Hero component
Hero.generateHTML = generateHeroHTML;

export default Hero;
