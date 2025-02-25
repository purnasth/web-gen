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

  if (design === "Design6") {
    return `
    <div class="bg-white overflow-hidden">
    <div class="relative isolate px-6 pt-14 lg:px-8">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true">
            <div class="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                <div
                    class="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                            class="absolute inset-0" aria-hidden="true"></span>Read more <span
                            aria-hidden="true">&rarr;</span></a>
                </div>
            </div>
            <div class="text-center">
                <h1 class="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Data to enrich
                    your online business</h1>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna aliqua ad
                    ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="#"
                        class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                        started</a>
                    <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span
                            aria-hidden="true">→</span></a>
                </div>
            </div>
        </div>
        <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
            <div class="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)">
            </div>
        </div>
    </div>
</div>
    `
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
