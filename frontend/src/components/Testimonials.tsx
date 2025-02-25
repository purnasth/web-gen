import React from "react";

interface TestimonialsProps {
  design: string;
  color: string;
}

const generateTestimonialsHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
  <main id="testimonials" class="bg-${color}-100 relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48">
    <div class="md:container">
        <div class="text-left md:text-center space-y-5 md:space-y-6 px-2 sm:px-12 md:px-24 md:mb-12"><span
                class="text-xs md:text-base uppercase">Making 10,000+ happy faces</span>
            <h3 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">Valued Guest Feedbacks
            </h3>
            <p class="text-sm text-justify md:text-base md:text-center max-w-lg mx-auto">We are proud to have received
                positive feedback from our guests. Here are some of the testimonials from our valued guests.</p>
        </div>
        <div class="flex flex-col gap-12 sm:gap-16 md:gap-24">
            <div
                class="sticky top-0 flex justify-between flex-nowrap gap-3 sm:gap-6 md:gap-12 max-w-full overflow-x-auto mt-5 md:mt-0 p-1 md:p-8 z-20 bg-white">
                <button
                    class="w-52 sm:w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 bg-${color}-500 hover-outline"
                    title="Siam Hussain" aria-label="Siam Hussain">
                    <div class="flex items-center justify-between px-4 w-44 sm:w-56"><img
                            src="https://hotelhimalaya.purnashrestha.com.np/images/ota/google-reviews.webp" alt="Google Reviews"
                            class="w-auto h-8 object-contain p-[0.6rem] sm:p-2" draggable="false">
                        <p class="text-sm sm:text-sm md:text-base line-clamp-1">- Siam Hussain</p>
                    </div>
                </button><button
                    class="w-52 sm:w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 "
                    title="Karla B" aria-label="Karla B">
                    <div class="flex items-center justify-between px-4 w-44 sm:w-56"><img
                            src="https://hotelhimalaya.purnashrestha.com.np/images/ota/tripadvisor.webp" alt="TripAdvisor"
                            class="w-auto h-8 object-contain p-[0.6rem] sm:p-2" draggable="false">
                        <p class="text-sm sm:text-sm md:text-base line-clamp-1">- Karla B</p>
                    </div>
                </button><button
                    class="w-52 sm:w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 "
                    title="Tim" aria-label="Tim">
                    <div class="flex items-center justify-between px-4 w-44 sm:w-56"><img
                            src="https://hotelhimalaya.purnashrestha.com.np/images/ota/bookingcom.webp" alt="Booking.com"
                            class="w-auto h-8 object-contain p-[0.6rem] sm:p-2" draggable="false">
                        <p class="text-sm sm:text-sm md:text-base line-clamp-1">- Tim</p>
                    </div>
                </button><button
                    class="w-52 sm:w-64 rounded-full cursor-pointer transition-all duration-400 ease-linear border-[1px] border-black/10 "
                    title="Yogesh" aria-label="Yogesh">
                    <div class="flex items-center justify-between px-4 w-44 sm:w-56"><img
                            src="https://hotelhimalaya.purnashrestha.com.np/images/ota/expedia.webp" alt="Expedia"
                            class="w-auto h-8 object-contain p-[0.6rem] sm:p-2" draggable="false">
                        <p class="text-sm sm:text-sm md:text-base line-clamp-1">- Yogesh</p>
                    </div>
                </button></div>
            <div class="w-full max-h-96 overflow-y-auto">
                <div id="filtered-content-display"
                    class="px-3 md:px-4 scale-100 translate-y-0 transition-all duration-700 scroll-mt-0 md:scroll-mt-80">
                    <div class="md:px-6">
                        <p class="text-justify md:text-pretty text-base md:text-xl">A beautiful quaint hotel located a
                            little bit away from the heart of Kathmandu. A little bit pricy compared to the other
                            options nearby but is definitely worth it. The hotel has a nice pool and a lounge area as
                            well. Perhaps the best thing about the hotel is the customer service. The staff were
                            extremely polite, cordial and helpful during my visit.</p>
                        <div class="flex items-center justify-between gap-12 mt-8 md:mt-12">
                            <p class="text-base md:text-xl font-medium">- Siam Hussain</p>
                            <p class="text-sm md:text-base">- via Google Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="text-center mt-10 md:mt-16 mb-4"><a class="text-black border-2 border-black/20 bg-${color}-500 px-8 py-2 rounded-full hover-outline"
            href="/enquiry-review">Read More</a></div>
</main>
    `;
  }

  if (design === "Design2") {
    return `
 <section id="testimonials"
    class="bg-${color}-100 relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48">
    <div class="container mx-auto">
        <div
            class="leading-normal reveal-type flexCenter flex-col w-full lg:w-3/4 mx-auto mb-8 text-center space-y-0 lg:space-y-4">
            <h3 class="text-2xl md:text-4xl lg:text-5xl text-black font-medium">Valued guest feedback</h3>
            <h4 class="hidden sm:block text-base sm:text-lg md:text-2xl lg:text-3xl text-center font-normal">
                Positive feedback and a simple thank you go a long way. It motivates us to provide world-class
                hospitality to our guests.</h4>
            <p class="text-sm text-justify md:text-lg md:text-center">We are proud to have received
                positive feedback from our guests. Here are some of the testimonials from our valued guests.</p>
        </div>
        <div class="flex flex-col md:flex-row gap-8 mt-12 md:mt-24">
            <div class="w-full md:w-1/4 h-80 md:h-96 overflow-y-auto bg-${color}-50 border border-black/10"><button
                    class="w-full cursor-pointer transition-all duration-400 ease-linear bg-${color}-400"
                    title="View Testimonial" aria-label="View Testimonial" type="button">
                    <div class="flex items-center justify-start gap-4 p-6 py-4 border-b-[1px] border-black/10 "><img
                            src="https://hotelichchha.com/backend/images/testimonial/1IwMH-2015-10-06-FB-person.png"
                            alt="Valerie Machuku" class="w-16 h-16 object-cover rounded-full">
                        <div class="flex items-start text-start flex-col gap-0">
                            <p class="text-base md:text-xl font-bold">Valerie Machuku</p>
                            <p class="text-sm md:text-base opacity-90">- via Agoda</p>
                        </div>
                    </div>
                </button><button class="w-full cursor-pointer transition-all duration-400 ease-linear "
                    title="View Testimonial" aria-label="View Testimonial" type="button">
                    <div class="flex items-center justify-start gap-4 p-6 py-4 border-b-[1px] border-black/10 "><img
                            src="https://hotelichchha.com/backend/images/testimonial/Vd2Eb-2015-10-06-FB-person.png"
                            alt="Shane F" class="w-16 h-16 object-cover rounded-full">
                        <div class="flex items-start text-start flex-col gap-0">
                            <p class="text-base md:text-xl font-bold">Shane F</p>
                            <p class="text-sm md:text-base opacity-90">- via Google Reviews</p>
                        </div>
                    </div>
                </button><button class="w-full cursor-pointer transition-all duration-400 ease-linear "
                    title="View Testimonial" aria-label="View Testimonial" type="button">
                    <div class="flex items-center justify-start gap-4 p-6 py-4 border-b-[1px] border-black/10 "><img
                            src="https://hotelichchha.com/backend/images/testimonial/yJtgr-2015-10-06-FB-person.png"
                            alt="Naga Seetharam" class="w-16 h-16 object-cover rounded-full">
                        <div class="flex items-start text-start flex-col gap-0">
                            <p class="text-base md:text-xl font-bold">Naga Seetharam</p>
                            <p class="text-sm md:text-base opacity-90">- via TripAdvisor</p>
                        </div>
                    </div>
                </button></div>
            <div class="w-full md:w-3/4 h-96 overflow-y-auto">
                <div id="testimonials-display"
                    class="px-4 scale-100 translate-y-0 md:translate-y-0 md:translate-x-0 transition-transform duration-700 scroll-my-0 md:scroll-my-64">
                    <div class="md:px-6">
                        <p class="text-justify md:text-pretty text-xl">
                            A good place to spend your holiday, business trip and conference. The place is executive,
                            with excellent reception, welcoming personnel like Geeta and her crew. Good food, clean
                            rooms and conference hall.
                        </p>
                        <div class="flex items-center justify-between gap-12 mt-12">
                            <p class="text-base md:text-xl font-bold">- Valerie Machuku</p>
                            <p class="text-sm md:text-base">- via Agoda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    `;
  }

  if (design === "Design3") {
    return `
<main
    class="bg-${color}-100 relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48">
    <div class="pointer-events-none absolute inset-0 size-full -z-30 mix-blend-multiply opacity-5"><img
            src="data:image/svg+xml,%3csvg%20version='1.2'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20486%20523'%20width='486'%20height='523'%3e%3ctitle%3elogo-svg%3c/title%3e%3cstyle%3e%20.s0%20{%20fill:%20%23ffce35%20}%20.s1%20{%20fill:%20%23981c20%20}%20.s2%20{%20fill:%20%23ffffff%20}%20%3c/style%3e%3cpath%20class='s0'%20d='m245.4%20454c-121.3%200-219.4-98.1-219.4-219.4%200-121.3%2098.1-219.4%20219.4-219.4%20121.3%200%20219.4%2098.1%20219.4%20219.4%200%20121.3-98.1%20219.4-219.4%20219.4z'/%3e%3cpath%20class='s1'%20d='m482.8%20523h-479.8v-8.6c0-14%2011.3-25.3%2025.3-25.3h431.5c12.6%200%2022.8%2010.1%2022.8%2022.8v11.1z'/%3e%3cpath%20class='s1'%20d='m448.3%20488.9h-410.4v-8.6c0-14%2011.3-25.3%2025.3-25.3h362.1c12.6%200%2022.8%2010.1%2022.8%2022.8z'/%3e%3cpath%20class='s1'%20d='m238.8%20275.9h29.2c0%200%200.4%208.4%2017.4%208.4%200.3%200.4%204%209.9%2013%209.9%200%200.4-0.6%2012.3%209.6%2012.3v13.1h2.5v136.4c0%200%2036.2%200.7%2036.8%200.4v-105.7h-1.9v-18.9h2.3v-11.5h-2.1v-13.4l10.7-19.7h6.6v-13.6h14v7.6c0%200%207.4-3.7%2010.4-13.3%209.3%200.6%2040.5-65.4%2040.5-65.4%200%200%200.4-12.7-4.5-13.9%200%204.7-6.2%2015.2-14.2%2016.6-2.1%200.2-40.1%200.2-40.1%200.2%200%200%200.3-8.6-2.4-8.8-2.7-0.4-3.7%208.8-3.7%208.8h-27.1l0.2%202.1c0%200-6.6-0.2-8-0.2%203.7-2.9%201.6-10.3-2.5-9.9-1.8-0.4-2.1%209.5-5.3%209.9-3.1%200.4-1.9-4.1-1.9-4.1l-7.4%204.1-4.1-0.4h-67.8%202.5-62l-4%200.4-7.5-4.1c0%200%201.2%204.3-1.9%204.1-3.1-0.2-3.5-10.3-5.3-9.9-4.1-0.2-6.2%207-2.5%209.9-1.2%200-8%200.2-8%200.2l0.2-2.1h-27.1c0%200-0.8-9.2-3.7-8.8-2.7%200.4-2.3%208.8-2.3%208.8%200%200-38.2%200-40.2-0.2-7.9-1.4-14.2-11.9-14.2-16.6-4.9%201.2-4.5%2013.9-4.5%2013.9%200%200%2031.2%2066%2040.6%2065.4%203.1%209.6%2010.3%2013.3%2010.3%2013.3v-7.6h14v13.6h6.7l10.7%2019.7v13.4h-2.2v11.5h2.4v18.9h-2v105.5c0.4%200.4%2036.8-0.4%2036.8-0.4v-136.4h2.6v-13.1c10.1%200%209.5-12.1%209.5-12.3%209%200%2012.5-9.3%2013.1-9.9%2016.9%200%2017.3-8.4%2017.3-8.4h23.4-2.9z'/%3e%3cpath%20class='s1'%20d='m243.3%20443.5c0%200%203.3%203.1%203.1-16%208.9-1%2042.9-4.9%2045-16.9%202.1-12.1-17.9-8-21.2-32.8-0.4-15.4%202.5-14.2%201.5-18.1-1-4.1-6.8-10.7-6.8-10.7l-0.6-5.3-6.2-5.2-2-21.3c0%200%203.3-0.9%202.6-11.1-0.8-10.1-4.7-11.5-4.7-11.5%200%200-4.5-23.4-10-24.1l-1.9-1c-5.7%200.6-9.6%2024.9-9.6%2024.9%200%200-3.7%201.2-4.6%2011.5-1%2010.2%202.5%2011.1%202.5%2011.1l-1.9%2021.3-6.3%205.2-0.6%205.3c0%200-5.8%206.8-6.8%2010.7-1%204.1%202%202.7%201.6%2018.1-3.3%2024.8-23.4%2020.7-21.3%2032.8%202.2%2012.1%2036.1%2015.9%2045%2016.9-0.1%2019.3%203.4%2016.2%203.2%2016.2z'/%3e%3cpath%20class='s1'%20d='m181.3%20304.8c0%200%2018.1%2036.8%2041.1%2038.9%2023%202.2%202.7-5.8%202.7-5.8%200%200-31.5-11.5-37.6-43.5-6-31.9-6.2%2010.4-6.2%2010.4z'/%3e%3cpath%20class='s1'%20d='m229.6%20333.4c0%200-7.2%201.2-9.5-9-2.4-10.1-20.5-40.1-20.5-40.1l7.6-1.6c0%200%2014.6%2035.1%2023%2038.8%208%203.9-0.6%2011.9-0.6%2011.9z'/%3e%3cpath%20class='s1'%20d='m256.7%20322.1c0%200%202.2%204.9%2023.2-39.6%205.8%200.2%204.1%202%204.1%202%200%200-18.1%2048.1-26.9%2049.7-8.8%201.5-0.4-12.1-0.4-12.1z'/%3e%3cpath%20class='s1'%20d='m258.1%20338.3c0%200%2024.7-1.8%2040.3-44.3%205.9%208.8%203.5%2012.7%203.5%2012.7%200%200-16.2%2032.3-37.6%2036.8-21.4%204.5-6.2-5.2-6.2-5.2z'/%3e%3cpath%20class='s1'%20d='m179.9%20206.9l9.6-10.9c0%200-2.7-2.7-2.9-6.2-0.2-3.5%203.9%202.5%206.4%201.9%202.3-0.7%2010.1-16.7%2010.9-22.6%201-6%201-6%201-6%200%200-4.1-5.1-4.1-9.8%200-4.6%205.1-5.6%206.8-9.7%201.8-4.1%202.3-6%202.3-6%200%200%201.8-3%202.6%202.1%200.8%205.1%208.4%2014%208.4%2014%200%200%201.5%201.6-1%204.1-2.4%202.6-3.9%203.5-3.1%205.5%200.7%201.9%208.9%2026.7%2010.7%2026.9%201.5%200.2%208.2-27.9%208.4-31.4%200.2-3.5-3.9-3.5-3.7-9.7%200.2-6.1%207.6-10.2%207.6-10.2%200%200-0.2-5.8%202.1-5.6%202.3%200.2%204.1%206.4%204.1%206.4%200%200%205.6%205.7%205.6%209.7%200%204.1-2.3%207.6-2.3%207.6%200%200%204.1%2033.2%207.6%2033.2%203.5%200%209.9-20.7%2010.3-25.6%200.4-4.8-4.1-6.6-4.1-10.5%200.2-3.9%208.4-17.5%2011.1-17.9%202.8-0.4%208.8%2013.2%209.2%2017.5%200.4%204.3-2.1%203.3-2.3%206.5-0.2%203.1%200.7%2025.7%2010.7%2030.4%207.2-1%206.6-0.4%206.6-0.4l-0.2%203.3-1.9%200.2c0%200%200%2011.1%209.5%2013.6%2010%202.6-125.9-0.4-125.9-0.4z'/%3e%3cpath%20class='s2'%20d='m45.3%20144.2c0%200%2025.5-10.5%2038.2-11.7%2012.6-1.2%2050.3-25.9%2056.5-25.3%206.2%200.5%2016.7%204.2%2033.9%203.3%2017.3-1%2025.5-4.9%2025.5-4.9%200%200%2026.9-35.9%2045-47.5%2013.7%2019.6%2027.5%2039.5%2043.9%2045.6%2016.3%206.2%2056.5%2025.3%2081.4%2025.5%2012.3%2010.5%2017.4%2018.9%2022.2%2019.7%204.9%200.9%2017-1.2%2025%206.8%208%208%2016.7%2017.5%2039%2017.3-2.6-8-4.1-12.3-4.1-12.3%200%200-7.8%206.3-23.2-6.8-15.4-13-19.7-13-33.7-14.4-13.1-11.1-19.7-14.4-18.2-18.9%201.6-4.5%2017.6-15.2%2021.3-14.4%203.7%200.6%206.8%2010.5%2030.6%209-4.7-7.5-7.8-11.2-7.8-11.2%200%200-10.7%201-24.2-7-11.1%206.3-23.7%2016.4-30.8%2019.1-7%202.8-29-3.3-29-3.3l-44.8-17.5c0%200-23.2-13.7-33.3-30-10.2-16.4-14.8-19.5-14.8-19.5%200%200-39.6%2038.6-47.6%2050.1-9%203.3-29%207.9-57.5%202.1-29.2%208.6-50.3%2018.9-51.2%2022.8-1%203.9-31.2%200.4-31.2%200.4z'/%3e%3c/svg%3e"
            alt="Mountain Pattern" class="size-full object-contain pointer-events-none select-none" draggable="false">
    </div>
    <h3
        class="mb-12 text-center text-xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-6xl lg:leading-snug xl:text-6xl 2xl:leading-normal">
        Guest Book</h3>
    <div class="container mx-auto h-full max-w-2xl">
        <div class="flex flex-col items-center relative"><em
                class="pointer-events-none -ml-8 size-16 w-full object-contain text-left text-9xl not-italic opacity-5">“</em>
            <p class="p-2 text-justify text-sm sm:text-xl md:text-pretty">I stayed at Temple Bell Boutique Hotel for
                3 nights and it was a great experience. The staff was very friendly and helpful. The rooms were
                clean and comfortable. The food was delicious. I would definitely recommend this hotel to anyone
                visiting Pokhara and will recommend it to my friends and family. Thank you for a wonderful stay!</p>
            <em
                class="pointer-events-none -mr-8 -mt-8 size-16 w-full object-contain text-right text-9xl not-italic opacity-5">”</em>
            <div class="mt-6 flex items-center justify-center gap-3"><img
                    src="https://th.bing.com/th/id/OIP.bwfmvpI-LZQz-lN751ZrNgHaHa?rs=1&amp;pid=ImgDetMain"
                    alt="Purna Shrestha" class="h-12 w-12 rounded-full border object-cover shadow">
                <div class="text-left">
                    <p class="text-base font-semibold">Purna Shrestha</p>
                    <p class="text-xs">via Booking.com</p>
                </div>
            </div>
            <div class="absolute bottom-6 left-0 right-0 z-10 flex items-center justify-between"><button
                    class="swiper-button-prev text-dark" aria-label="Previous" title="Previous"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12l14 0"></path>
                        <path d="M5 12l4 4"></path>
                        <path d="M5 12l4 -4"></path>
                    </svg></button><button class="swiper-button-next text-dark" aria-label="Next" title="Next"><svg
                        stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round"
                        stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12l14 0"></path>
                        <path d="M15 16l4 -4"></path>
                        <path d="M15 8l4 4"></path>
                    </svg></button></div>
        </div>
    </div>
</main>
    `;
  }

  return "";
};

const Testimonials: React.FC<TestimonialsProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateTestimonialsHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Testimonials component
Testimonials.generateHTML = generateTestimonialsHTML;

export default Testimonials;
