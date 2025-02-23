import React from "react";

interface GalleryProps {
  design: string;
  color: string;
}

const generateGalleryHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
    <main class="relative z-auto px-2 md:px-4 py-12 sm:py-24 md:py-32 lg:py-36 xl:px-16 xl:py-48">
    <div class="lg-react-element columns-2 sm:columns-2 lg:columns-3 xl:columns-5 gap-2 md:gap-4">
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/gMXOD-15.webp"
            data-lg-id="302a0536-286b-4ca7-9db6-a413121f22b9"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/gMXOD-15.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/qGexo-13.webp"
            data-lg-id="cda37c4c-fd6b-4a17-8f75-b091f441bc50"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/qGexo-13.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/S0nly-8.webp"
            data-lg-id="af4fd5eb-5c0e-49ec-9fc5-d07884e1301b"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/S0nly-8.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/tdgQm-10.webp"
            data-lg-id="f8369bae-b9ba-4319-bccb-f64718cb65ce"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/tdgQm-10.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/QCwy3-3.webp"
            data-lg-id="72af16d2-6bf2-4e7e-8c1f-eab0f826416f"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/QCwy3-3.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/CJB10-2.webp"
            data-lg-id="2b4afa46-acfb-42bb-8f5d-b55e2b5558fa"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/CJB10-2.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/WklVX-1.webp"
            data-lg-id="9f3e9273-708d-4782-b5ba-0c6d844832a8"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/WklVX-1.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/dqUCk-14.webp"
            data-lg-id="e2e5b26b-c416-4301-be97-efe7cb347446"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/dqUCk-14.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/ZW9ZE-4.webp"
            data-lg-id="55e21695-d461-47cc-9086-13fce13cf08d"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/ZW9ZE-4.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/OHc2O-7.webp"
            data-lg-id="8ea7f217-474e-4415-8616-492621c9533a"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/OHc2O-7.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/tu1MI-9.webp"
            data-lg-id="26880f87-cb63-447d-a82d-f3e06d35f8c8"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/tu1MI-9.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/apv7H-11.webp"
            data-lg-id="f9e18d7e-e956-4595-978d-98f167a73b5d"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/apv7H-11.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
    </div>
    <div class="mt-5 flex flex-col items-center justify-center">
        <div class="mx-auto h-28 w-px bg-orange-500/30"></div><a
            class="transition-all duration-200 mx-auto flex w-fit items-center justify-center gap-2 rounded-full border-2 border-orange-500/50 bg-orange-500 px-6 py-2 font-medium text-white shadow backdrop-blur-sm hover:bg-white hover:text-orange-500"
            href="/gallery">Explore Gallery</a>
    </div>
</main>
    `;
  }

  if (design === "Design2") {
    return `
    <div id="gallery-content-display" class="transition-all duration-700 pt-12 scroll-mt-16 opacity-100 translate-y-0">
    <div
        class="lg-react-element w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-linear opacity-100">
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/hero/1.webp" style="transition-delay: 0ms;"
            data-lg-id="2a257a7f-7c0c-4caa-a325-cd021d39dc73"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/hero/1.webp" alt="Hotel Himalaya"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Hotel Himalaya</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/about.webp"
            style="transition-delay: 100ms;" data-lg-id="a1c59094-0e00-4122-b5c2-f24d96a9107a"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/about.webp" alt="Drone Shot"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Drone Shot</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/rooms.webp"
            style="transition-delay: 200ms;" data-lg-id="a31a6df9-5cb5-487c-a04e-c04b41d7c9cc"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/rooms.webp" alt="Junior Suite Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Junior Suite Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/dine.webp"
            style="transition-delay: 300ms;" data-lg-id="7e33b44e-eb14-4981-a0f9-26b5f3247fed"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/dine.webp" alt="By the Waterfall"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                By the Waterfall</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/pdr.webp"
            style="transition-delay: 400ms;" data-lg-id="343b8f3b-7796-48ea-ac55-06c85961b09c"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/pdr.webp" alt="PDR III"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                PDR III</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/swimming.webp"
            style="transition-delay: 500ms;" data-lg-id="c3dd69d6-eb13-4ea6-af37-1e0dc6c84c14"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/swimming.webp" alt="Swimming Pool Deck"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Swimming Pool Deck</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/banner/dalaan.webp"
            style="transition-delay: 600ms;" data-lg-id="ce844661-d3d8-4fa5-b031-d7a0f24ae3a3"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/banner/dalaan.webp" alt="Dalaan"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Dalaan</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/hero/2.webp" style="transition-delay: 700ms;"
            data-lg-id="6ae49f12-b6c5-49a3-a8e7-e8441283a147"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/hero/2.webp" alt="Hotel Himalaya"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Hotel Himalaya</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/stay/dr1.webp" style="transition-delay: 800ms;"
            data-lg-id="ce85a445-6468-44a7-8735-ee5534b9695b"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/stay/dr1.webp" alt="Deluxe Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Deluxe Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/horizon1.webp"
            style="transition-delay: 900ms;" data-lg-id="dd6b659f-a4a8-4bc0-9735-9a7e9f862229"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/horizon1.webp" alt="The Cafe Horizon"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                The Cafe Horizon</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/stay/er1.webp" style="transition-delay: 1000ms;"
            data-lg-id="9b9d0483-6aec-413d-a9ec-e44514bd07db"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/stay/er1.webp" alt="Executive Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Executive Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/tennis/4.webp"
            style="transition-delay: 1100ms;" data-lg-id="3e37d02b-42c7-4f29-abec-589333b4a359"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/tennis/4.webp" alt="Lawn Tennis Court"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Lawn Tennis Court</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/pmc1.webp"
            style="transition-delay: 1200ms;" data-lg-id="8b263018-1d35-47ee-9c13-5ce5aee9c565"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/pmc1.webp" alt="Patan Museum Cafe"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Patan Museum Cafe</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/gr/1.webp"
            style="transition-delay: 1300ms;" data-lg-id="b71a4000-ee67-4fe4-b792-3564499d32f6"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/gr/1.webp" alt="Green Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Green Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/steam/4.webp"
            style="transition-delay: 1400ms;" data-lg-id="5f87a208-69cc-4c57-9ca0-bab99c2d76dc"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/steam/4.webp" alt="Jacuzzi"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Jacuzzi</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/hgbr/1.webp"
            style="transition-delay: 1500ms;" data-lg-id="f3b110f0-f051-4981-98a9-b28fef3b23bb"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/hgbr/1.webp" alt="Himalayan Grand Ball"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Himalayan Grand Ball</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/stay/er2.webp" style="transition-delay: 1600ms;"
            data-lg-id="4ae18de7-2301-4ea0-8b80-66ef55ac4ddf"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/stay/er2.webp" alt="Executive Twin Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Executive Twin Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/hero/3.webp" style="transition-delay: 1700ms;"
            data-lg-id="9cf22361-7d3a-4383-b409-ce4f018dd56e"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/hero/3.webp" alt="Swimming Pool Deck"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Swimming Pool Deck</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/stay/dr2.webp" style="transition-delay: 1800ms;"
            data-lg-id="f906f8fb-dfc3-4b43-a770-680961685980"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/stay/dr2.webp" alt="Deluxe Twin Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Deluxe Twin Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/gym/3.webp"
            style="transition-delay: 1900ms;" data-lg-id="2671468b-9f53-493b-a6b4-ee754e5d0ab6"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/gym/3.webp" alt="Gym"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Gym</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/bcb2.webp"
            style="transition-delay: 2000ms;" data-lg-id="1782834b-75ce-40b8-a757-a735826742e3"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/bcb2.webp" alt="Base Camp Bar"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Base Camp Bar</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/tg/1.webp"
            style="transition-delay: 2100ms;" data-lg-id="d4a77567-ac66-4d13-889f-9059f36c436c"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/tg/1.webp" alt="Temple Garden"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Temple Garden</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/btw3.webp"
            style="transition-delay: 2200ms;" data-lg-id="5cc5bf8b-465c-4f7a-9afd-43b78bfa0bae"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/btw3.webp" alt="By the Waterfall"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                By the Waterfall</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/pdr/1.webp"
            style="transition-delay: 2300ms;" data-lg-id="6618e263-fa37-4709-853a-0f3f7aa95f19"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/pdr/1.webp" alt="PDR I"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                PDR I</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/tcs2.webp"
            style="transition-delay: 2400ms;" data-lg-id="bb6373f8-e62e-4b95-864d-58443696744c"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/tcs2.webp" alt="The Cake Shop"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                The Cake Shop</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/dine/tcs3.webp"
            style="transition-delay: 2500ms;" data-lg-id="e148f2d3-9a5f-4765-b9b7-20dd150b43f1"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/dine/tcs3.webp" alt="The Cake Shop"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                The Cake Shop</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/rb/4.webp"
            style="transition-delay: 2600ms;" data-lg-id="1815cd35-1d5d-4268-a474-6583c77f714a"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/rb/4.webp" alt="Rato Baithak"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Rato Baithak</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/rh/2.webp"
            style="transition-delay: 2700ms;" data-lg-id="0d08ff12-9bbc-4a26-b9d0-14fdc64673d9"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/rh/2.webp" alt="Regent Hall"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Regent Hall</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/sh/1.webp"
            style="transition-delay: 2800ms;" data-lg-id="04078e5e-c1c9-4609-b6aa-084a034d9a46"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/sh/1.webp" alt="Skyline Hall"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Skyline Hall</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/halls/br/1.webp"
            style="transition-delay: 2900ms;" data-lg-id="6fe7791e-74fe-4381-af5e-e07c883c4d06"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/halls/br/1.webp" alt="Board Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Board Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/stay/js2.webp" style="transition-delay: 3000ms;"
            data-lg-id="4fdb32e6-9253-428e-9056-355f24a170d0"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/stay/js2.webp" alt="Junior Suite Room"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Junior Suite Room</h5>
        </div>
        <div class="group gallery-item overflow-hidden transition-all duration-200 ease-linear cursor-pointer translate-y-0 opacity-100"
            data-src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/steam/1.webp"
            style="transition-delay: 3100ms;" data-lg-id="0dc28618-f9e3-4a1a-8629-2c4e83c2b33c"><img
                src="https://hotelhimalaya.purnashrestha.com.np/images/recreation/steam/1.webp" alt="Steam"
                class="contrast-100 group-hover:contrast-125 size-full h-64 object-cover group-hover:scale-110 transition-all duration-300 ease-linear cursor-pointer"
                loading="lazy" draggable="false">
            <div
                class="pointer-events-none bg-transparent absolute inset-0 size-full bg-gradient-to-t from-black/70 to-black/0 z-0 group-hover:opacity-50 transition-all duration-300 ease-linear">
            </div>
            <h5
                 class="absolute bottom-0 bg-transparent text-right w-full p-2 text-white z-10 [text-shadow:1px_1px_2px_#cd9c31] opacity-80 group-hover:opacity-100 -translate-x-0 group-hover:translate-x-1/2 transition-all duration-300 ease-linear">
                Steam</h5>
        </div>
    </div>
</div>
 `;
  }

  if (design === "Design3") {
    return `
    <main class="px-2 md:px-4">
    <div class="lg-react-element columns-2 sm:columns-2 lg:columns-3 xl:columns-3 gap-2 md:gap-4">
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/gMXOD-15.webp"
            data-lg-id="bf91f540-1950-4c54-9aeb-216408857e45"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/gMXOD-15.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/qGexo-13.webp"
            data-lg-id="2cfe045c-3801-4e7c-b2b9-eb35ee93690d"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/qGexo-13.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/S0nly-8.webp"
            data-lg-id="73c0a330-401b-451a-b8f9-a5718d21e5cd"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/S0nly-8.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/tdgQm-10.webp"
            data-lg-id="0bb01836-8d6c-498b-a140-2144f81eee03"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/tdgQm-10.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/QCwy3-3.webp"
            data-lg-id="bd67928b-c160-49c1-bc4f-b97bdb540941"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/QCwy3-3.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/CJB10-2.webp"
            data-lg-id="11313923-9315-4ecc-9539-b5d693749bf4"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/CJB10-2.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/WklVX-1.webp"
            data-lg-id="7ee75193-df0d-4b05-8288-4db8248668e6"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/WklVX-1.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/dqUCk-14.webp"
            data-lg-id="8dca6bd9-8c8b-414b-9791-87c5a2ce285c"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/dqUCk-14.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/ZW9ZE-4.webp"
            data-lg-id="bebe433a-2ca6-4420-b7b3-c2a76ffd286a"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/ZW9ZE-4.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/OHc2O-7.webp"
            data-lg-id="f28b58bf-7e9f-47fe-9fe1-3959f40b0723"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/OHc2O-7.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/apv7H-11.webp"
            data-lg-id="dcdfad8a-c9eb-479b-bf3b-cb5f6d01fb88"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/apv7H-11.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/tY0tB-6.webp"
            data-lg-id="4a4b4cbf-0940-4320-bd5e-cf8732d7c36f"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/tY0tB-6.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/DA4DT-5.webp"
            data-lg-id="301f8cff-8f17-4e59-981a-5b2036e041cd"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/DA4DT-5.webp" alt="Satpyayas Nepal"
                loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/7fLOV-16.webp"
            data-lg-id="a16a0681-32e0-41c6-a01b-0a0d6269ade3"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/7fLOV-16.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
        <div class="group relative mb-2 flex break-inside-avoid overflow-hidden border border-black/20 bg-white shadow-md md:mb-4"
            data-src="https://satprayash.org.np//backend/images/gallery/galleryimages/FcFy2-12.webp"
            data-lg-id="1dda6b91-a733-43b5-8ec7-b1fe07fbbf86"><img
                class="h-auto w-full cursor-pointer overflow-hidden object-cover shadow-md transition duration-700 ease-in-out group-hover:scale-110"
                src="https://satprayash.org.np//backend/images/gallery/galleryimages/FcFy2-12.webp"
                alt="Satpyayas Nepal" loading="lazy" id="dish-name"></div>
    </div>
</main>
 `;
  }

  if (design === "Design4") {
    return `
 `;
  }
  if (design === "Design5") {
    return `
 `;
  }

  return "";
};

const Gallery: React.FC<GalleryProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateGalleryHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Gallery component
Gallery.generateHTML = generateGalleryHTML;

export default Gallery;
