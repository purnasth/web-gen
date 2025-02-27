import React from "react";

interface AboutProps {
  design: string;
  color: string;
}

const generateAboutHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
     <main
        class="bg-${color}-50 group overflow-hidden relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48"
      >
        <div class="md:container mx-auto">
          <div class="text-left md:text-center space-y-5 md:space-y-8 px-6 sm:px-12">
            <span class="text-xs md:text-base uppercase">
              37 years of hospitality
            </span>
            <h3 class="text-xl sm:text-2xl md:text-4xl lg:text-5xl leading-snug lg:leading-snug">
              The stay at Hotel Himalaya means enjoying every moment. Relax.
              Find inspiration. Be fascinated.
            </h3>
            <p class="text-sm text-justify md:text-base md:text-center">
              Nestled within 6.58 acres of exquisitely landscaped grounds, Hotel
              Himalaya is conveniently located 8 km away from the Tribhuwan
              International Airport and only 2 km from the Kathmandu city
              center. We have always been an ideal haven for business and
              leisure travelers alike, offering resort ambiance with an intimate
              touch. Since many of the distinguished NGOs and INGOs in Kathmandu
              are in the vicinity the UN head office is only a few minutes
              walking distance.
            </p>
          </div>
          <video autoplay="" defaultmuted="" height="100%" loop="" muted="" playsinline="" preload="auto" width="100%" class="size-full object-cover mt-12 md:mt-24 outline outline-white -outline-offset-[10px]"
          poster="https://hotelhimalaya.purnashrestha.com.np/images/about/6.webp"
          >
					<source src="https://hotelhimalaya.com/template/web/img/about/HOTEL_HIMALAYA.mp4" type="video/mp4">Video Not Supported</video>
        </div>
      </main>
    `;
  }

  if (design === "Design2") {
    return `
 <main class="bg-${color}-50 text-${color}-600 relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48">
        <div class="space-y-6 text-center md:container mx-auto">
          <h3 class="text-xl capitalize leading-snug sm:text-2xl md:text-4xl md:leading-snug lg:text-4xl lg:leading-snug mx-auto">
            Satprayas means 'Attempting to do something good'
          </h3>
          <p class="mx-auto max-w-4xl text-justify text-sm opacity-60 md:text-center md:text-base">
            Our mission is to improve the lives of children with physical and
            mental disabilities whose families may not be able to fund the
            necessary therapy and education for them to build a prosperous
            future. Our focus isn't just on the students, but also on how we can
            change the perception and attitudes of the society towards
            differently-abled people.
          </p>
          <div class="mx-auto max-w-5xl">
            <div class="mt-8 grid grid-cols-3 gap-3 md:mt-12 md:gap-12 lg:mx-12">
              <div class="flex flex-col items-center gap-3 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 640 512"
                  class="text-5xl md:text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M320 0a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm44.7 164.3L375.8 253c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8L255.5 181c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6C271.3 104.8 295.3 96 320 96s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                </svg>
                <p class="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl">
                  25+ Rescued Children
                </p>
              </div>
              <div class="flex flex-col items-center gap-3 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  class="text-5xl md:text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
                </svg>
                <p class="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl">
                  5+ Care Takers
                </p>
              </div>
              <div class="flex flex-col items-center gap-3 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  class="text-5xl md:text-5xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z" />
                </svg>
                <p class="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl">
                  6+ Services
                </p>
              </div>
            </div>
            <div class="mt-8 grid grid-cols-4 gap-3 md:gap-12 lg:mt-12">
              <div class="flex flex-col items-center gap-2 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  class="text-3xl md:text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M426.2 80.4l-170.2 32-170.2-32C64 77 48 97.3 48 118v244.5c0 20.7 16 32.6 37.8 37.6L256 432l170.2-32c21.8-5 37.8-16.9 37.8-37.6V118c0-20.7-16-41-37.8-37.6zm0 282l-151.2 32V149.9l151.2-32v244.5zm-189.2 32l-151.2-32V118L237 150v244.4z" />
                </svg>
                <p class="text-xs opacity-90 sm:text-xs md:block md:text-sm xl:text-base">
                  Specialized Education
                </p>
              </div>
              <div class="flex flex-col items-center gap-2 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 16 16"
                  class="text-3xl md:text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                  />
                </svg>
                <p class="text-xs opacity-90 sm:text-xs md:block md:text-sm xl:text-base">
                  Counseling and Support
                </p>
              </div>
              <div class="flex flex-col items-center gap-2 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="text-3xl md:text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z" />
                  <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                  <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                  <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
                </svg>
                <p class="text-xs opacity-90 sm:text-xs md:block md:text-sm xl:text-base">
                  Nutritious Food
                </p>
              </div>
              <div class="flex flex-col items-center gap-2 text-center md:gap-4 md:p-4">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="text-3xl md:text-4xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                  <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                  <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
                <p class="text-xs opacity-90 sm:text-xs md:block md:text-sm xl:text-base">
                  Art and Craft Workshops
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-32 grid grid-cols-1 content-center items-center gap-y-12 lg:grid-cols-5 lg:gap-12">
          <div class="flex flex-col items-start gap-4 lg:col-span-2">
            <h3 class="text-3xl capitalize leading-snug sm:text-2xl md:text-4xl lg:text-5xl lg:leading-snug 2xl:text-6xl 2xl:leading-normal">
              About Satprayas Nepal
            </h3>
            <p class="mb-6 text-sm text-black/60 md:text-base lg:mb-12">
              Satprayas Nepal is a service oriented non-profit organization that
              works for the well being and welfare of physically and mentally
              challenged children. It is registered in Bhaktapur District and
              has been providing services to children of Bhaktapur and has been
              providing services to children of Bhaktapur and nearby cities.
            </p>
            <a
              class="transition-300 group flex items-center justify-center gap-2 rounded-full border-2 border-${color}-500 bg-${color}-500 text-${color}-950 px-6 py-2 text-sm font-semibold text-${color}-50 hover:bg-${color}-50 hover:text-${color}-500 md:text-base"
              href="/about"
            >
              Explore More
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 256 256"
                class="animate-bounce text-xl"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z" />
              </svg>
            </a>
          </div>
          <div class="col-span-3 grid gap-4 lg:grid-cols-2">
            <div class="flex flex-col items-end justify-end gap-4 sm:flex-row lg:ml-auto lg:flex-col">
              <img
                src="https://satprayash.org.np//backend/images/articles/gallery/zceZT-11.webp"
                alt="About Satprayas Nepal"
                class="h-64 w-full rounded-xl object-cover shadow-md sm:aspect-square md:h-64 lg:w-auto xl:h-80"
              />
              <img
                src="https://satprayash.org.np//backend/images/articles/gallery/1meDX-2.webp"
                alt="About Satprayas Nepal"
                class="h-64 w-full rounded-xl object-cover shadow-md sm:aspect-square md:h-64 lg:w-auto xl:h-80"
              />
            </div>
            <div>
              <img
                src="https://satprayash.org.np//backend/images/articles/gallery/D0AZb-9.webp"
                alt="About Satprayas Nepal"
                class="h-64 w-full rounded-xl object-cover shadow-md md:h-full"
              />
            </div>
          </div>
        </div>
      </main>
    `;
  }

  if (design === "Design3") {
    return `
    <main class="pt-0 relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48"><div class="grid grid-cols-1 content-center gap-8 lg:grid-cols-3"><div class="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64"><div class="flex items-end justify-end"><img src="https://himalayan-flavours.com/backend/images/articles/gallery/NIT57-8.webp" alt="Foods" class="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"></div><div class="flex items-end"><img src="https://himalayan-flavours.com/backend/images/articles/gallery/XHuWa-5.webp" alt="Foods" class="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"></div></div><div class="top-0 flex max-h-fit flex-col items-center gap-4 bg-white text-center lg:sticky"><div class="bottom-0 h-0 w-px bg-black/50 lg:h-10 xl:h-40"></div><h3 class="mt-5 text-3xl capitalize leading-snug sm:text-2xl md:mt-16 md:text-4xl lg:text-6xl lg:leading-snug 2xl:text-8xl 2xl:leading-normal">Himalayan Flavours</h3><p class="mb-3 text-center text-sm text-black/60 md:mb-12 2xl:text-base">
	Discover the best place to enjoy authentic Himalayan cuisine at Himalayan Flavours! Your favorite spot in the city for genuine Himalayan dishes. Our commitment is to deliver outstanding service and top-quality food.
</p><a class="transition-all duration-200 group flex items-center justify-center gap-2 rounded-full border border-${color}-300 bg-${color}-300 px-6 py-2 text-sm hover:bg-white hover:text-${color}-400 md:text-base" href="/about">Explore More</a></div><div class="flex items-center justify-center gap-8 pt-12 sm:gap-24 lg:block lg:space-y-24 lg:pt-64"><div class="flex items-end justify-end"><img src="https://himalayan-flavours.com/backend/images/articles/gallery/0JdFi-10.webp" alt="Foods" class="h-64 w-auto object-cover sm:h-80 lg:h-full lg:w-80 2xl:w-96"></div><div class="flex"><img src="https://himalayan-flavours.com/backend/images/articles/gallery/VHNR0-9.webp" alt="Foods" class="h-64 w-auto object-cover sm:h-80 lg:h-60 lg:w-44 2xl:h-72 2xl:w-52"></div></div></div></main>
`;
  }

  return "";
};

const About: React.FC<AboutProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateAboutHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the About component
About.generateHTML = generateAboutHTML;

export default About;
