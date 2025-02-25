import React from "react";

interface AccommodationProps {
  design: string;
  color: string;
}

const generateAccommodationHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
    <main class="pt-8 bg-${color}-100 relative z-10 px-4 py-12 sm:py-24 md:py-32 lg:py-36 xl:py-48">
    <div class="container pb-12 md:pb-16">
        <div class="flex items-center justify-between flex-col md:flex-row gap-8">
            <div class="text-left space-y-2"><span class="text-xs md:text-base uppercase">125 Well Appointed
                    Rooms</span>
                <h3 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">Boutique
                    Accommodation</h3>
                <p class="text-sm text-justify md:text-base">In a realm where tranquility and beauty intertwine, find
                    yourself nestled in the embrace of an enchanting haven.</p>
            </div>
            <div class="flex items-center gap-2"><button
                    class="left-5 bg-${color}-500 text-${color}-50 border border-black/20 py-1 px-5 rounded-full hover-outline"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M5 12l4 4"></path>
                        <path d="M5 12l4 -4"></path>
                    </svg></button><button
                    class="right-5 bg-${color}-500 text-${color}-50 border border-black/20 py-1 px-5 rounded-full hover-outline"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 12l14 0"></path>
                        <path d="M15 16l4 -4"></path>
                        <path d="M15 8l4 4"></path>
                    </svg></button></div>
        </div>
    </div>
    <div class="">
        <div class="relative w-full overflow-hidden">
            <div class="flex transition-transform duration-500" style="transform: translateX(0%);"><a
                    class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#juniorsuite">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="https://hotelhimalaya.com/images/subpackage/9Lgh2-1.jpg" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Junior Suites</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    Our Junior Suite offers spacious accommodation with a cozy living room, perfect for
                                    relaxation and comfort.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 150</span>
                        </div>
                    </div>
                </a><a class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#executivesuite">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="https://hotelhimalaya.com/images/subpackage/qObZ9-exe.jpg" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Executive Suite</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    Elegance meets comfort in our Executive Suite, featuring a large bedroom and a
                                    separate living room for your convenience.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 110</span>
                        </div>
                    </div>
                </a><a class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#deluxe">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="https://hotelhimalaya.com/images/subpackage/cf2ZX-dlux.jpg" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Deluxe Rooms</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    The Deluxe Room offers a comfortable stay with modern amenities and elegant
                                    decoration.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 85</span>
                        </div>
                    </div>
                </a><a class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#juniorsuite">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="../images/stay/js1.webp" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Junior Suites</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    Our Junior Suite offers spacious accommodation with a cozy living room, perfect for
                                    relaxation and comfort.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 150</span>
                        </div>
                    </div>
                </a><a class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#executivesuite">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="../images/stay/er1.webp" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Executive Suite</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    Elegance meets comfort in our Executive Suite, featuring a large bedroom and a
                                    separate living room for your convenience.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 110</span>
                        </div>
                    </div>
                </a><a class="w-full lg:w-1/3 flex-shrink-0 px-2" href="/stay#deluxe">
                    <div class="relative group cursor-pointer overflow-hidden">
                        <div
                            class="absolute inset-0 size-full outline outline-white group-hover:outline-white/20 -outline-offset-[10px] group-hover:-outline-offset-[30px] z-10  transition-all duration-500 ease-linear">
                        </div><img src="../images/stay/dr1.webp" alt="Deluxe Room"
                            class="w-full h-96 md:h-[28rem] object-cover shadow-lg group-hover:scale-110 transition-all duration-500 ease-linear"
                            draggable="false">
                        <div
                            class="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-black/80 to-black/0 group-hover:from-black/30 group-hover:via-black/60 group-hover:to-black/30 opacity-70 group-hover:opacity-100 z-0 transition-all duration-500 ease-linear">
                        </div>
                        <div
                            class="z-10 absolute inset-0 size-full flex items-center justify-between flex-col text-white p-4 text-center">
                            <ul
                                class="-translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full border border-white/30 flex space-x-2 transition-all duration-500 ease-linear">
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 18l.01 0"></path>
                                        <path d="M9.172 15.172a4 4 0 0 1 5.656 0"></path>
                                        <path d="M6.343 12.343a8 8 0 0 1 11.314 0"></path>
                                        <path d="M3.515 9.515c4.686 -4.687 12.284 -4.687 17 0"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="none" stroke-width="2"
                                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"
                                        class="text-white" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 16a3 3 0 0 1 -3 3"></path>
                                        <path d="M16 16a3 3 0 0 0 3 3"></path>
                                        <path d="M12 16v4"></path>
                                        <path
                                            d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z">
                                        </path>
                                        <path d="M7 13v-3a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1v3"></path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <circle cx="7" cy="7" r="2"></circle>
                                        <path
                                            d="M20 13V4.83C20 3.27 18.73 2 17.17 2c-.75 0-1.47.3-2 .83l-1.25 1.25c-.16-.05-.33-.08-.51-.08-.4 0-.77.12-1.08.32l2.76 2.76c.2-.31.32-.68.32-1.08 0-.18-.03-.34-.07-.51l1.25-1.25a.828.828 0 0 1 1.41.59V13h-6.85c-.3-.21-.57-.45-.82-.72l-1.4-1.55c-.19-.21-.43-.38-.69-.5A2.251 2.251 0 0 0 5 12.25V13H2v6c0 1.1.9 2 2 2 0 .55.45 1 1 1h14c.55 0 1-.45 1-1 1.1 0 2-.9 2-2v-6h-2zm0 6H4v-4h16v4z">
                                        </path>
                                    </svg></li>
                                <li class="text-xl"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                        viewBox="0 0 24 24" class="text-white" height="1em" width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                                        <path
                                            d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z">
                                        </path>
                                    </svg></li>
                            </ul>
                            <div
                                class="max-w-sm px-4 translate-y-56 group-hover:translate-y-0 transition-all duration-500 ease-linear text-white">
                                <h3
                                    class="scale-110 group-hover:scale-100 mb-24 group-hover:mb-3 text-xl font-medium  transition-all duration-500 ease-linear">
                                    Deluxe Rooms</h3>
                                <p
                                    class="opacity-0 group-hover:opacity-100 line-clamp-2 text-xs transition-all duration-[550ms] ease-linear">
                                    The Deluxe Room offers a comfortable stay with modern amenities and elegant
                                    decoration.</p>
                            </div><span
                                class="translate-y-12 group-hover:translate-y-0 group-hover:bg-black/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm border border-white/30 transition-all duration-300 ease-linear">Starting
                                USD 85</span>
                        </div>
                    </div>
                </a></div>
        </div>
    </div>
</main>
    `;
  }
  if (design === "Design2") {
    return `
    <section id="rooms" class="bg-${color}-100 relative z-10 px-0 py-12 sm:py-24 md:py-32 lg:py-36 xl:py-48">
    <div class="container mx-auto">
        <div class="flex items-center justify-center p-4">
            <div class="flex items-start justify-center gap-4 flex-col">
                <div
                    class="leading-normal reveal-type flexCenter flex-col w-full lg:w-3/4 mx-auto mb-8 text-center space-y-0 lg:space-y-4">
                    <h3 class="text-text-navy text-2xl md:text-4xl lg:text-5xl text-navy font-medium">Exclusive Rooms
                        and Suites</h3>
                    <h4
                        class="text-text-navy hidden sm:block text-base sm:text-lg md:text-2xl lg:text-3xl text-center font-normal">
                        Experience the ultimate Staycation in Hotel Ichchha</h4>
                    <p class="text-text-navy text-sm text-justify md:text-lg md:text-center">Hotel Ichchha rooms and
                        suites are a symphony of luxury and comfort, designed to enchant every guest where luxury
                        embraces elegance, Hotel Ichchha offers an exquisite blend of comfort and grandeur. Experience
                        unparalleled hospitality and serene elegance in every stay.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="my-4 md:mt-12 sm:px-2 lg:px-4 xl:px-0 flex items-center justify-center">
        <div class="md:scale-[0.85]"><a class="relative w-full transition-transform duration-700 ease-in-out p-4 sm:px-2 lg:px-6 xl:px-10 md:py-16 border-0 outline-0 focus:border-0 focus:outline-none"
                 href="/accommodation/executive-room">
                <div class="overflow-hidden rounded-lg group">
                    <div class="relative"><img
                            src="https://hotelichchha.com/backend/images/subpackage/image/V7yLC-slider2-f-5VYWdA.webp"
                            alt="Executive Room"
                            class="w-full h-64 md:h-48 lg:h-64 xl:h-80 2xl:h-96 rounded-lg object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100 ">
                        <div
                            class="absolute inset-0 bg-black transition-opacity duration-300 ease-linear opacity-10 group-hover:opacity-40 ">
                        </div>
                        <div
                            class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                            <button to="/accommodation/executive-room"
                                class="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base translate-y-full group-hover:-translate-y-6 transition-all duration-300 ease-linear"
                                title="Explore" aria-label="Explore" type="button"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                        clip-rule="evenodd"></path>
                                </svg></button>
                        </div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mt-6">Executive Room</h3>
                <p class="text-sm text-pretty mt-2 line-clamp-2">Elegance meets comfort in our Executive
                    Suite, featuring a large bedroom and a separate living room for your convenience.
                </p>
            </a></div>
        <div class="md:scale-100"><a class="relative w-full transition-transform duration-700 ease-in-out p-4 sm:px-2 lg:px-6 xl:px-10 md:py-16 border-0 outline-0 focus:border-0 focus:outline-none"
                 href="/accommodation/deluxe-room">
                <div class="overflow-hidden rounded-lg group">
                    <div class="relative"><img
                            src="https://hotelichchha.com/backend/images/subpackage/image/I8KlB-dlx3-CMsmsEgx.webp"
                            alt="Deluxe Room"
                            class="w-full h-64 md:h-48 lg:h-64 xl:h-80 2xl:h-96 rounded-lg object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100 ">
                        <div
                            class="absolute inset-0 bg-black transition-opacity duration-300 ease-linear opacity-10 group-hover:opacity-40 ">
                        </div>
                        <div
                            class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                            <button to="/accommodation/deluxe-room"
                                class="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base translate-y-full group-hover:-translate-y-6 transition-all duration-300 ease-linear"
                                title="Explore" aria-label="Explore" type="button"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                        clip-rule="evenodd"></path>
                                </svg></button>
                        </div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mt-6">Deluxe Room</h3>
                <p class="text-sm text-pretty mt-2 line-clamp-2">The Deluxe Room offers a comfortable
                    stay with modern amenities and elegant decoration.</p>
            </a></div>
        <div class="md:scale-[0.85]"><a class="relative w-full transition-transform duration-700 ease-in-out p-4 sm:px-2 lg:px-6 xl:px-10 md:py-16 border-0 outline-0 focus:border-0 focus:outline-none"
                 href="/accommodation/super-deluxe-room">
                <div class="overflow-hidden rounded-lg group">
                    <div class="relative"><img
                            src="https://hotelichchha.com/backend/images/subpackage/image/qEkT8-dlx6-Ce-zyPhs.webp"
                            alt="Super Deluxe Room"
                            class="w-full h-64 md:h-48 lg:h-64 xl:h-80 2xl:h-96 rounded-lg object-cover transition-transform duration-700 ease-in-out scale-110 group-hover:scale-100 ">
                        <div
                            class="absolute inset-0 bg-black transition-opacity duration-300 ease-linear opacity-10 group-hover:opacity-40 ">
                        </div>
                        <div
                            class="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear">
                            <button to="/accommodation/super-deluxe-room"
                                class="bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-base translate-y-full group-hover:-translate-y-6 transition-all duration-300 ease-linear"
                                title="Explore" aria-label="Explore" type="button"><svg stroke="currentColor"
                                    fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                        clip-rule="evenodd"></path>
                                </svg></button>
                        </div>
                    </div>
                </div>
                <h3 class="text-xl font-bold mt-6">Super Deluxe Room</h3>
                <p class="text-sm text-pretty mt-2 line-clamp-2">Experience luxury and sophistication in
                    our Super Deluxe Room, featuring splendid interiors and top-notch facilities.</p>
            </a></div>
    </div>
    <div class="flex items-center justify-center mt-10"><button
            class="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
            title="Previous" aria-label="Previous" type="button"><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 24 24" aria-hidden="true"
                class="group-hover:-translate-x-2 transition-all duration-150 ease-linear" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                    clip-rule="evenodd"></path>
            </svg></button><button
            class="group bg-goldLight text-navy hover:text-ivory hover:bg-navy px-4 py-1 rounded-full text-xl transition-all duration-300 ease-linear"
            title="Next" aria-label="Next" type="button"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                viewBox="0 0 24 24" aria-hidden="true"
                class="group-hover:translate-x-2 transition-all duration-150 ease-linear" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clip-rule="evenodd"></path>
            </svg></button></div>
</section>
    `;
  }
  if (design === "Design3") {
    return `
    
    `;
  }

  return "";
};

const Accommodation: React.FC<AccommodationProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateAccommodationHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Accommodation component
Accommodation.generateHTML = generateAccommodationHTML;

export default Accommodation;
