import React from "react";

interface ServicesProps {
  design: string;
  color: string;
}

const generateServicesHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
    <main class="relative z-10 pb-12 sm:pb-24 md:pb-32 lg:pb-36 xl:pb-48">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-0">
    <div class="relative overflow-hidden group"><img
            src="https://hotelhimalaya.purnashrestha.com.np/images/banner/dine.webp" alt="Dine in Fine Place"
            class="w-full min-h-96 h-[75vh] sm:h-96 md:h-[32rem] lg:h-screen shadow-md transition-all duration-700 ease-linear group-hover:scale-150 object-cover"
            draggable="false">
        <div
            class="pointer-events-none absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] w-full h-full">
        </div>
        <div
            class="pointer-events-none group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div class="p-4 pointer-events-auto">
                <h3 class="text-2xl md:text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">Dine in
                    Fine Place</h3>
                <h4
                    class="opacity-0 group-hover:opacity-100 text-2xl text-${color}-600 font-medium mt-24 group-hover:mt-8 md:group-hover:mt-12 transition-all duration-300">
                    Taste the difference!</h4>
                <p class="text-white mt-2 md:mt-4 mb-12">Perfect place to indulge in the finest foods and signature
                    cocktails with friends and family.</p><a
                    class="text-${color}-50 bg-${color}-600 px-6 py-2 rounded-full hover-outline" href="/dine">View
                    More</a>
            </div>
        </div>
    </div>
    <div class="relative overflow-hidden group"><img
            src="https://hotelhimalaya.purnashrestha.com.np/images/banner/swimming.webp" alt="Swimming Pool"
            class="w-full min-h-96 h-[75vh] sm:h-96 md:h-[32rem] lg:h-screen shadow-md transition-all duration-700 ease-linear group-hover:scale-150 object-cover"
            draggable="false">
        <div
            class="pointer-events-none absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] w-full h-full">
        </div>
        <div
            class="pointer-events-none group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div class="p-4 pointer-events-auto">
                <h3 class="text-2xl md:text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">Swimming
                    Pool</h3>
                <h4
                    class="opacity-0 group-hover:opacity-100 text-2xl text-${color}-600 font-medium mt-24 group-hover:mt-8 md:group-hover:mt-12 transition-all duration-300">
                    Dive into perfection!</h4>
                <p class="text-white mt-2 md:mt-4 mb-12">Have a wonderful time in our refreshing pool with your family
                    and friends.</p><a class="text-${color}-50 bg-${color}-600 px-6 py-2 rounded-full hover-outline"
                    href="/recreation">View More</a>
            </div>
        </div>
    </div>
    <div class="relative overflow-hidden group"><img
            src="https://hotelhimalaya.purnashrestha.com.np/images/dine/pmc1.webp" alt="Patan Museum Cafe"
            class="w-full min-h-96 h-[75vh] sm:h-96 md:h-[32rem] lg:h-screen shadow-md transition-all duration-700 ease-linear group-hover:scale-150 object-cover"
            draggable="false">
        <div
            class="pointer-events-none absolute inset-0 overlay bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.2)] w-full h-full">
        </div>
        <div
            class="pointer-events-none group absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(0,0,0,0.6)] to-[rgba(0,0,0,0.6)] text-white text-center transition-all duration-700 ease-in-out transform translate-y-1/2 group-hover:translate-y-0">
            <div class="p-4 pointer-events-auto">
                <h3 class="text-2xl md:text-3xl font-medium mb-24 group-hover:mb-0 transition-all duration-300">Patan
                    Museum Cafe</h3>
                <h4
                    class="opacity-0 group-hover:opacity-100 text-2xl text-${color}-600 font-medium mt-24 group-hover:mt-8 md:group-hover:mt-12 transition-all duration-300">
                    Unwind in Elegance!</h4>
                <p class="text-white mt-2 md:mt-4 mb-12">Begin your day with a global culinary exploration, a UNESCO
                    World Heritage site, where a lavish buffet awaits.</p><a
                    class="text-${color}-50 bg-${color}-600 px-6 py-2 rounded-full hover-outline" href="/dine">View
                    More</a>
            </div>
        </div>
    </div>
</div>
<section class="px-0">
    <div class="md:container mx-auto py-24 md:px-24">
        <div class="text-left md:text-center space-y-5 md:space-y-8 px-6 sm:px-12"><span
                class="text-xs md:text-base uppercase">Spaces that make moments special</span>
            <h3 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">Auspicious Events
                Center</h3>
            <p class="text-sm text-justify md:text-base md:text-center">Our conference and meeting halls have seen and
                hosted many international conventions, workshops and special banquets. Our clienteles include many NGO's
                and INGO's like the UN, corporate houses and prominent families seeking special venue / menu for their
                celebration. Whether a corporate conference, convention or a lavish banquet, our team is on hand to help
                you create a uniquely tailored event to suit your needs.</p>
        </div>
        <div class="hidden md:grid px-6 md:px-0 my-24 grid-cols-1 md:grid-cols-3 gap-12">
            <div class="space-y-6">
                <h4 class="text-2xl font-medium">For Corporates</h4>
                <p class="text-pretty line-clamp-4">Engage in professional gatherings that redefine ambiance, offering
                    exquisite venues, superior accommodations, and gourmet cuisine.</p>
            </div>
            <div class="space-y-6">
                <h4 class="text-2xl font-medium">For Weddings</h4>
                <p class="text-pretty line-clamp-4">Experience the epitome of luxury and romance at Hotel Himalaya,
                    where every detail is crafted to perfection for your unforgettable wedding day amidst stunning
                    grandeur.</p>
            </div>
            <div class="space-y-6">
                <h4 class="text-2xl font-medium">For Personal Events</h4>
                <p class="text-pretty line-clamp-4">Elevate your milestones with unparalleled luxury at Hotel Himalaya,
                    where every event is a treasured memory in the making, meticulously crafted for perfection.</p>
            </div>
        </div>
        <div class="mt-8 md:pt-0 text-center"><a class="bg-${color}-600 text-${color}-50 border border-${color}-600 px-6 py-2 rounded-full hover-outline"
                href="/events">View More</a></div>
    </div>
    <div class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] relative group"><img
            src="https://hotelhimalaya.purnashrestha.com.np/images/banner/pdr.webp" alt="PDR III"
            class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s] opacity-100 translate-y-0"
            draggable="false">
        <div class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/10 to-black/0"></div>
        <h4
            class="opacity-100 translate-y-0 hidden sm:block pointer-events-none w-full h-24 pt-20 pl-12 pr-6 pb-10 md:py-20 md:px-12 absolute bottom-0 text-right text-white z-20 [text-shadow:2px_2px_#815f16]">
            PDR III</h4><img src="https://hotelhimalaya.purnashrestha.com.np/images/halls/1.webp"
            alt="Himalaya Grand Ball Room"
            class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s] opacity-0 translate-y-16 -z-10"
            draggable="false"><img src="https://hotelhimalaya.purnashrestha.com.np/images/halls/2.webp"
            alt="Skyline Hall"
            class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s] opacity-0 translate-y-16 -z-10"
            draggable="false"><img src="https://hotelhimalaya.purnashrestha.com.np/images/halls/3.webp" alt="Green Room"
            class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s] opacity-0 translate-y-16 -z-10"
            draggable="false"><img src="https://hotelhimalaya.purnashrestha.com.np/images/halls/4.webp"
            alt="Regent Hall"
            class="w-full h-72 sm:h-[50vh] sm:min-h-96 lg:h-[95vh] object-cover absolute inset-0 transition-all duration-[2s] opacity-0 translate-y-16 -z-10"
            draggable="false"><button class="left-5 hall-slider-button"><svg stroke="currentColor" fill="none"
                stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M5 12l4 4"></path>
                <path d="M5 12l4 -4"></path>
            </svg></button><button class="right-5 hall-slider-button"><svg stroke="currentColor" fill="none"
                stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em"
                width="1em" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l14 0"></path>
                <path d="M15 16l4 -4"></path>
                <path d="M15 8l4 4"></path>
            </svg></button>
    </div>
</section>
</main>
    `;
  }

  if (design === "Design2") {
    return `
    <section id="facilitiesComponent" class="relative z-10 py-12 sm:py-24 md:py-32 lg:py-36 xl:py-48">
    <div class="leading-normal w-full lg:w-3/4 mx-auto mb-8 text-center space-y-2 lg:space-y-6">
        <span class="text-xs md:text-base uppercase">Exceptional Services, Unforgettable Experiences</span>
        <h3 class="text-2xl md:text-4xl lg:text-5xl font-medium capitalize">Unwind in the delighted
        </h3>
        <p class="text-sm text-justify md:text-lg md:text-center max-w-2xl mx-auto">
            Indulge in luxury and unparalleled hospitality at Hotel Da Yatra Courtyard. From personalized concierge
            services to
            exquisite dining options, we cater to your every need with utmost care and attention. Experience a getaway
            like no
            other, where every moment is crafted to perfection.
        </p>
    </div>

    <div class="container mx-auto mt-32 p-0 sm:p-4 lg:p-12">
        <div class="grid grid-cols-1 gap-24 md:gap-64 xl:gap-0 relative py-20 pb-32">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-0">
                <div class="text-left w-full lg:w-96 3xl:w-[32rem]">
                    <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/slider/hall.webp" alt=""
                        class="mb-4 size-full lg:h-[70vh] 3xl:h-[60vh] object-cover">
                    <span class="bg-white pb-2 md:bg-none">Meetings and Conferences take a turn for the better at Hotel
                        Da Yatra
                        Courtyard.</span>
                </div>
                <div class="text-left lg:text-right lg:mt-32 w-full lg:w-96 3xl:w-[32rem] ml-auto">
                    <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/dine/dine1.webp" alt=""
                        class="mb-4 size-full lg:h-[70vh] 3xl:h-[60vh] object-cover">
                    <span class="bg-white pb-2 md:bg-none">Fooday's Restaurant is the hottest see-and-be-seen
                        destination; elegant
                        and sophisticated fine
                        dining.</span>
                </div>
            </div>

            <div class="max-w-sm mx-auto bg-white z-10 py-12 hidden xl:block -translate-y-[50vh]">
                <h4 class="text-center text-3xl text-pretty capitalize">Indulge in Excellence: Elevate Your Experience
                    with us!
                </h4>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-0 lg:gap-x-48">
                <div class="text-left lg:text-right w-full lg:w-96 3xl:w-[32rem] ml-auto md:-mt-36">
                    <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/spa.jpg" alt=""
                        class="mb-4 size-full lg:h-[70vh] 3xl:h-[60vh] object-cover">
                    <span class="bg-white pb-2">Rejuvenate your senses with our exclusive SPA treatments, crafted to
                        pamper and
                        revitalize.</span>
                </div>
                <div class="text-left size-full lg:w-96 3xl:w-[32rem] mr-auto">
                    <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/swimming-pool.jpg" alt=""
                        class="mb-4 size-full lg:h-64 3xl:h-96 object-cover">
                    <span class="bg-white pb-2">Ascend to unparalleled luxury as you dive into bliss at our
                        Rooftop Swimming. </span>
                </div>
            </div>
            <div class="absolute left-1/2 -top-20 -mt-2 -translate-x-1/2 size-24">
                <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/patterns/logo_pattern.svg" alt="">
            </div>
            <div
                class="absolute left-1/2 right-1/2 bg-black bg-gradient-to-b from-${color}-900 via-${color}-500 to-${color}-200 w-px md:w-[2px] h-full -z-10">
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div
                class="size-32 flex items-center justify-center text-center bg-${color}-200 scroll-to-top py-3 px-4 rounded-full outline-[1px] outline-dashed outline-black -outline-offset-8 -translate-y-6 hover:outline-offset-4 shaodw-lg transition-all duration-300 ease-linear">
                <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/patterns/logo_pattern.svg" alt="" class="p-1">
                <!-- Enquiry <br /> Now -->
            </div>
        </div>
    </div>

    <!-- <div class="absolute inset-0 size-full bg-[url('https://legacy.purnashrestha.com.np/dayatra/assets/img/patterns/noise-black.svg')] -z-10"></div> -->
    <!-- <div
    class="absolute left-1/2 -translate-x-1/2 bottom-0 w-80 h-96 ml-auto bg-[url('https://legacy.purnashrestha.com.np/dayatra/assets/img/patterns/statue.png')] z-0 bg-contain bg-no-repeat">
  </div> -->

    <div
        class="absolute left-0 bottom-0 size-full mix-blend-multiply opacity-10 bg-[url('https://legacy.purnashrestha.com.np/dayatra/assets/img/patterns/mountains.webp')] bg-repeat-x bg-contain -z-10">
    </div>
</section>
    `;
  }

  if (design === "Design3") {
    return `
    <main class="relative z-10 py-12 sm:py-24 md:py-32 lg:py-36 xl:py-48">
    <div class="mx-auto mb-8 flex max-w-lg flex-col items-center justify-center gap-4 text-center md:mb-12 lg:mb-32">
        <h3 class="text-3xl capitalize leading-snug md:text-4xl md:leading-snug lg:text-6xl lg:leading-snug">Our
            Projects</h3>
        <p class="text-center text-sm text-black/60">We provide physiotherapy treatment, educational services, speech
            therapy and other capability development services to differently abled children from trained assistant
            physiotherapists and teachers.</p>
    </div>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-5 xl:grid-cols-3">
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Education</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/Oea18-16.webp" alt="Education"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-1&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-1">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                We provide education to the children with disabilities to help them reach their full potential.
            </p>
        </div>
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Health &amp; Medical</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/LthhY-iStock-580115190.jpg"
                    alt="Health &amp; Medical"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-3&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-3">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                We help children suffering from Cerebral Palsy, Down Syndrome, Spinal Bifida, and Muscular Dystrophy.
            </p>
        </div>
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Vocational Training</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/ZD7XA-service-img10.png"
                    alt="Vocational Training"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-4&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-4">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                We focus providing vocational training to the children with disabilities to develop life skills for self
                sustenance.
            </p>
        </div>
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Home Visit &amp; Counseling</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/AizJq-child-with-doctorjpeg-6626d68b9f375.jpg"
                    alt="Home Visit &amp; Counseling"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-7&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-7">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                Home visit and counseling for the children who are unable to attend the center.
            </p>
        </div>
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Daily Living Support</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/S8VLd-6.webp" alt="Daily Living Support"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-8&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-8">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                We provide daily living support to the children with disabilities to improve their quality of life.
            </p>
        </div>
        <div
            class="transition-all duration-300 group relative overflow-hidden rounded-2xl border border-black/10 p-6 text-black shadow hover:border-black/0 hover:text-white hover:shadow-none md:p-10">
            <div class="absolute -top-1/4 right-2 -z-10 size-80 rounded-full bg-${color}-500 blur-[100px]"></div>
            <div class="absolute -bottom-12 -left-10 -z-10 size-52 rounded-full bg-${color}-400 blur-[100px]"></div>
            <div
                class="absolute inset-0 -z-10 scale-90 rounded-2xl bg-${color}-600 opacity-0 transition-all duration-200 ease-linear group-hover:scale-100 group-hover:rounded-2xl group-hover:opacity-100">
            </div>
            <h4 class="text-2xl capitalize">Community &amp; Activites</h4>
            <div class="relative my-4 h-72 w-full overflow-hidden rounded-xl md:my-8 md:h-80"><img
                    src="https://satprayash.org.np//backend/images/mservices/GoxM2-special-child.jpg"
                    alt="Community &amp; Activites"
                    class="absolute left-0 top-0 size-full rounded-xl object-cover shadow transition-all duration-500 ease-in-out group-hover:scale-110"
                    draggable="false" style="clip-path: url(&quot;#clip-path-9&quot;); opacity: 1;"><svg
                    viewBox="0 0 480 480" class="absolute inset-0 size-full group-hover:hidden">
                    <defs>
                        <clipPath id="clip-path-9">
                            <path
                                d="m452.3 154.4 8.5-47.6A75.6 75.6 0 0 0 373.2 19l-47.4 8.5c-16.7 3-34 .2-49-7.8l-1.1-.6c-22.3-12-49-12-71.4 0l-1.2.6c-15 8-32.2 10.8-48.9 7.8L106.7 19A75.6 75.6 0 0 0 19 106.7l8.5 47.5c3 16.7.3 34-7.8 49l-.6 1.1c-12 22.3-12 49 0 71.3l.6 1.3c8 15 10.8 32.2 7.8 48.9L19 373.3a75.6 75.6 0 0 0 87.7 87.7l47.5-8.5c16.7-3 34-.3 49 7.8l1.1.6c22.3 12 49 12 71.3 0l1.3-.6c15-8 32.2-10.8 48.9-7.8l47.5 8.5a75.6 75.6 0 0 0 87.7-87.7l-8.4-47.2c-3-16.9-.2-34.3 8-49.4a75.5 75.5 0 0 0 .3-71.6l-1-1.8c-8-15-10.7-32.2-7.6-48.9Z">
                            </path>
                        </clipPath>
                    </defs>
                </svg></div>
            <p class="line-clamp-2 text-sm opacity-70 group-hover:opacity-100 md:text-base">
                We help the children to engage in community social activities to connect with the society.
            </p>
        </div>
    </div>
    <div class="flex flex-col items-center justify-center">
        <div class="mx-auto h-16 w-px bg-${color}-500/30 md:h-28"></div><a
            class="transition-all duration-300 group flex items-center justify-center gap-2 rounded-full border-2 border-${color}-500 bg-${color}-500 px-6 py-2 text-sm font-semibold text-${color}-50 hover:bg-${color}-50 hover:text-${color}-500 md:text-base"
            href="/projects">View All Projects<svg stroke="currentColor" fill="currentColor" stroke-width="0"
                viewBox="0 0 256 256" class="animate-bounce text-xl" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z">
                </path>
            </svg></a>
    </div>
</main>
<div class="relative h-[110vh] w-full">
    <div class="pointer-events-none absolute inset-0 -z-10 size-full bg-black/60"></div>
    <div class="pointer-events-none absolute inset-0 -z-10 size-full bg-cover bg-fixed bg-center bg-repeat mix-blend-multiply contrast-125"
        style="background-image: url('https://satprayash.org.np/assets/events-CljoMoDx.webp');"></div>
    <div class="z-10 flex size-full items-center justify-center text-white">
        <div class="container mx-auto max-w-xl text-center">
            <h3 class="text-3xl md:text-5xl">Host Your Events</h3>
            <p class="mt-4 text-base font-extralight" style="text-shadow: rgb(0, 0, 0) 2px 2px 4px;">One of the best
                ways to help Satprayas Nepal is by hosting your own event to benefit Satprayas Nepal in your hometown.
                Event types are flexible, therefore allowing you to combine your passion for helping children in need
                with your outside interests. We'll work with you to create fun and exciting event.</p>
            <div class="my-12 flex items-center justify-center text-black"><a
                    class="transition-all duration-300 group flex items-center justify-center gap-4 rounded-full border-4 border-${color}-500 bg-${color}-500 px-8 py-4 text-sm font-semibold backdrop-blur hover:bg-${color}-50 hover:text-${color}-500 md:text-base"
                    aria-label="Host Your Events" title="Host Your Events" href="/contact#contactForm"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" class="transition-all duration-300 text-xl group-hover:animate-ping" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                        <path d="M4 3h.01"></path>
                        <path d="M22 8h.01"></path>
                        <path d="M15 2h.01"></path>
                        <path d="M22 20h.01"></path>
                        <path
                            d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10">
                        </path>
                        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"></path>
                        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
                        <path
                            d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z">
                        </path>
                    </svg>Schedule Your Event<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="transition-all duration-300 text-xl group-hover:animate-ping" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8 11.3 2 22l10.7-3.79"></path>
                        <path d="M4 3h.01"></path>
                        <path d="M22 8h.01"></path>
                        <path d="M15 2h.01"></path>
                        <path d="M22 20h.01"></path>
                        <path
                            d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10">
                        </path>
                        <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17"></path>
                        <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7"></path>
                        <path
                            d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z">
                        </path>
                    </svg></a></div>
            <div class="space-y-2">
                <p><span class="font-${color}-50 opacity-80">or call us directly</span><a rel="noopener noreferrer"
                        class="transition-linear ml-2 font-semibold hover:text-${color}-500" href="tel:+977 9851063716"
                        target="_blank">+977 9851063716</a></p><a rel="noopener noreferrer"
                    class="transition-linear font-semibold hover:text-${color}-500" href="mailto:info@satprayash.org.np"
                    target="_blank">info@satprayash.org.np</a>
            </div>
        </div>
    </div>
</div>
    `;
  }
  if (design === "Design4") {
    return `
    
    `;
  }

  return "";
};

const Services: React.FC<ServicesProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateServicesHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Services component
Services.generateHTML = generateServicesHTML;

export default Services;
