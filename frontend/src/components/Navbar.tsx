import React from "react";

interface NavbarProps {
  design: string;
  color: string;
}

const generateNavbarHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
    <header class="pointer-events-none absolute inset-0 top-0 z-50 flex w-full items-start p-4 transition-all duration-1000 ease-in-out"><div class="pointer-events-auto flex flex-1 items-center gap-3"><button class="transition-300 inline-flex w-fit origin-left scale-90 items-center justify-center gap-2 rounded-full border border-${color}-500 bg-${color}-50 px-4 py-2 text-${color}-600 hover:border-${color}-500 hover:bg-${color}-500 hover:text-${color}-50 md:scale-100" aria-label="Menu" title="Menu"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg><span class="hidden sm:block">Menu</span></button></div><a class="flex flex-1 justify-center transition-1000 pointer-events-auto object-contain origin-top -translate-y-2
          scale-100
          " aria-label="Satprayas Nepal" title="Satprayas Nepal" href="/"><img src="https://satprayash.org.np//backend/images/preference/p9eLK-logo.svg" alt="Satprayas Nepal Logo" class="transition-1000 h-20 w-auto rounded-xl bg-${color}-950 object-contain p-1 md:h-28"></a><div class="pointer-events-auto flex flex-1 items-end justify-end"><a class="transition-300 inline-flex w-fit origin-right scale-90 items-center justify-center gap-2 rounded-full border border-${color}-500 bg-${color}-50 px-4 py-2 text-${color}-500 hover:border-${color}-500 hover:bg-${color}-500 hover:text-${color}-50 md:scale-100" aria-label="Reservation" title="Reservation" href="/home#contactForm"><span class="hidden sm:block">Host an Event</span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M230.33,141.06a24.34,24.34,0,0,0-18.61-4.77C230.5,117.33,240,98.48,240,80c0-26.47-21.29-48-47.46-48A47.58,47.58,0,0,0,156,48.75,47.58,47.58,0,0,0,119.46,32C93.29,32,72,53.53,72,80c0,11,3.24,21.69,10.06,33a31.87,31.87,0,0,0-14.75,8.4L44.69,144H16A16,16,0,0,0,0,160v40a16,16,0,0,0,16,16H120a7.93,7.93,0,0,0,1.94-.24l64-16a6.94,6.94,0,0,0,1.19-.4L226,182.82l.44-.2a24.6,24.6,0,0,0,3.93-41.56Zm-10.9,27.15-38,16.18L119,200H56V155.31l22.63-22.62A15.86,15.86,0,0,1,89.94,128H140a12,12,0,0,1,0,24H112a8,8,0,0,0,0,16h32a8.32,8.32,0,0,0,1.79-.2l67-15.41.31-.08a8.6,8.6,0,0,1,6.3,15.9Z"></path></svg></a></div></header>
    `;
  }

  if (design === "Design2") {
    return `
      <header id="header" class="absolute inset-0 top-0 w-full p-2 transition-all duration-200 ease-linear">

    <div class="nav-overlay absolute inset-0 pointer-events-none -z-10 transition-all duration-300 ease-linear"></div>

    <div class="">
        <div class="flex justify-between items-start">
            <div class="flex items-center justify-center gap-2">
                <button type="menu" id="toggleButton" class="focus:outline-none p-2 z-50 transition-all duration-500 ease-linear" aria-label="Toggle Button" title="Toggle">
<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl text-${color}-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
                </button>
                <ul class="hidden md:flex items-center justify-center gap-4 lg:gap-6 text-${color}-950 text-base lg:text-lg">
                    <li class="w-full">
                        <a href="accommodation.html" class="navlink" aria-label="Stay">Stay</a>
                    </li>
                    <li class="w-full">
                        <a href="dinePage.html" class="navlink" aria-label="Dine">Dine</a>
                    </li>
                    <li class="w-full">
                        <a href="hall.html" class="navlink" aria-label="Events">Events</a>
                    </li>
                    <li class="w-full">
                        <a href="aboutPage.html" class="navlink" aria-label="Info">Info</a>
                    </li>
                </ul>
            </div>
            <div class="absolute left-1/2 top-0 -translate-x-1/2">
                <a href="index.html" aria-label="Logo">
                    <img src="https://dayatra.purnashrestha.com.np/assets/img/logo.svg" alt="Logo" class="w-24 md:w-32 h-32 object-contain transition-all duration-300 ease-linear hidden sm:block" id="logo">
                </a>
            </div>
            <div class="flex items-center justify-center gap-4">
                <a href="tel:+97761452462" target="_blank" class="hidden md:flex items-center justify-center gap-2 text-${color}-950 px-4 py-2 rounded-xl tracking-wider" aria-label="Call" title="Call">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl text-${color}-950" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path></svg>
                    +97761452462
                </a>
                <a href="https://www.hoteldayatra.com/booking.php" target="_blank" rel="noopener noreferrer" class="hidden md:block bg-custom-${color}-950/20 hover:bg-custom-${color}-950/50 text-${color}-950 border border-${color}-950 shadow-md px-4 py-2 rounded-xl tracking-wider transition-all duration-300 ease-linear" aria-label="Reserve" title="Reserve">
                    <i class="mr-2 fa-regular fa-clipboard"></i>
                    Reserve
                </a>
                <a href="https://www.hoteldayatra.com/booking.php" target="_blank" rel="noopener noreferrer" class="block md:hidden text-${color}-950 px-4 py-2 transition-all duration-300 ease-linear" aria-label="Reserve" title="Reserve">
                    <i class="fa-regular fa-clipboard text-xl"></i>
                </a>
            </div>
        </div>
    </div>
</header>
    `;
  }

  if (design === "Design3") {
    return `
     <header class="pointer-events-none absolute top-0 inset-0 z-50 flex w-full items-start justify-between p-4 transition-all duration-1000 ease-in-out"><div class="pointer-events-auto flex gap-2"><button class="transition-300 rounded-full border border-${color}-950 bg-${color}-50 p-2 text-${color}-500 hover:border-${color}-500 hover:bg-${color}-500 hover:text-${color}-50" aria-label="Menu" title="Menu"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 6C5.34315 6 4 7.34315 4 9H20C20 7.34315 18.6569 6 17 6H7Z" fill="currentColor"></path><path d="M7 18C5.34315 18 4 16.6569 4 15H20C20 16.6569 18.6569 18 17 18H7Z" fill="currentColor"></path><path d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z" fill="currentColor"></path></svg></button><a class="transition-1000 inline-flex items-center gap-2 rounded-full border border-light/50 bg-dark/50 px-4 py-2 font-bold text-light shadow backdrop-blur-sm translate-y-0 scale-100" aria-label="Reservation" title="Reservation" href="/home#contactForm">Reservation<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="animate-bounce text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18.98 17H2v2h20v-2zM21 16c-.27-4.07-3.25-7.4-7.16-8.21A2.006 2.006 0 0 0 12 5a2.006 2.006 0 0 0-1.84 2.79C6.25 8.6 3.27 11.93 3 16h18zm-9-6.42c2.95 0 5.47 1.83 6.5 4.41h-13A7.002 7.002 0 0 1 12 9.58z"></path></svg></a></div><a class="transition-1000 pointer-events-auto object-contain origin-top rounded-xl -translate-y-0 bg-white" aria-label="Himalayan Flavours" title="Himalayan Flavours" href="/"><img src="https://himalayan-flavours.com/backend/images/preference/CPM4u-logo.svg" alt="Himalayan Flavours Logo" class="transition-1000 h-16 w-auto object-contain p-1 md:h-22"></a></header>
    `;
  }
  if (design === "Design4") {
    return `
    <header class="pointer-events-none absolute inset-0 top-0 z-40 flex w-full items-start justify-between p-4 transition-all duration-1000 ease-in-out"><a class="transition-1000 pointer-events-auto object-contain origin-top-left scale-100 " aria-label="Temple Bell" title="Temple Bell" href="/"><img src="https://templebell.pages.dev/assets/logo-Yrn2D_BU.svg" alt="Temple Bell Logo" class="transition-1000 h-16 w-auto object-contain md:h-24"></a><div class="pointer-events-auto flex gap-0"><div class="flex items-center gap-0 px-2"><div class="relative flex items-center gap-0 border border-${color}-500"><div class="flex items-center gap-2 pl-3 backdrop-blur"><label for="datePicker" class="cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-${color}-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg></label><input id="datePicker" type="text" readonly="" class="w-52 cursor-pointer bg-transparent py-2 text-sm focus:outline-none" value="Check-in / Check-out"></div></div><div class="relative flex items-center gap-0 border border-${color}-500"><div class="flex items-center gap-2 pl-3 backdrop-blur"><label for="guests" class="cursor-pointer"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base text-${color}-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path><path d="M16 19h6"></path><path d="M19 16v6"></path><path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path></svg></label><input type="text" readonly="" class="w-36 cursor-pointer bg-transparent py-2 text-sm backdrop-blur focus:outline-none" value="No. of guests"></div></div><button disabled="" class="origin-left scale-90 border border-${color}-500 bg-${color}-500 px-4 py-2 text-${color}-50 cursor-not-allowed">Check Availability</button></div><button class="transition-300 text-${color}-950 hover:text-${color}-500" aria-label="Menu" title="Menu"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" class="text-5xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="currentColor"></path><path d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z" fill="currentColor"></path><path d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z" fill="currentColor"></path><path d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z" fill="currentColor"></path><path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" fill="currentColor"></path><path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill="currentColor"></path><path d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z" fill="currentColor"></path><path d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z" fill="currentColor"></path><path d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z" fill="currentColor"></path></svg></button></div></header>
    `;
  }
  if (design === "Design5") {
    return `
    <header id="navbar" class="h-16 sm:h-20 absolute inset-0 top-0 z-50 w-full transition-all duration-1000 ease-in-out">
    <div class="p-4 size-full">
      <div class="flex justify-between items-center size-full">
        <a href="#" aria-label="Logo" class="">
          <img src="https://mithilayatriniwas.com/backend/images/preference/8JQps-download.png" alt="Baber Mahal Vilas" class="mt-5 w-24 h-16 md:w-32 md:h-20 object-contain">
        </a>
        <div class="flex items-center gap-2">
            <ul class="links hidden xl:flex items-start justify-start gap-1 md:gap-3"><li class="caps dropdown nav-link group"><a href="https://babermahalvilas.com/about-us" class="flex items-center justify-between gap-1 w-full relative underline-hover-effect" id="id_about">About<i class="fa-solid fa-chevron-down text-xs"></i></a><ul class="drop absolute -top-3/4 md:top-[4rem] left-full md:left-0 bg-dark/60 flex items-start justify-center gap-2 flex-col invisible w-full md:min-w-40 ml-2 md:ml-0"><li class="w-full"><a href="https://babermahalvilas.com/home#baber-mahal-vilas" class="navlink-dropdown" id="id_our_story">Our Story</a></li><li class="w-full"><a href="https://babermahalvilas.com/home#the-history" class="navlink-dropdown" id="id_the_history">The History</a></li><li class="w-full"><a href="https://babermahalvilas.com/home#the-property" class="navlink-dropdown" id="id_the_property">The Property</a></li></ul></li><li class="caps dropdown nav-link group"><a href="https://babermahalvilas.com/room" class="flex items-center justify-between gap-1 w-full relative underline-hover-effect" id="id_rooms">Rooms<i class="fa-solid fa-chevron-down text-xs"></i></a><ul class="drop absolute -top-3/4 md:top-[4rem] left-full md:left-0 bg-dark/60 flex items-start justify-center gap-2 flex-col invisible w-full md:min-w-40 ml-2 md:ml-0"><li class="w-full"><a href="https://babermahalvilas.com/traditional-room" class="navlink-dropdown" id="id_traditional_rooms">Traditional Rooms</a></li><li class="w-full"><a href="https://babermahalvilas.com/heritage-room" class="navlink-dropdown" id="id_heritage_room">Heritage Room</a></li><li class="w-full"><a href="https://babermahalvilas.com/royal-suites" class="navlink-dropdown" id="id_royal_suite">Royal Suite</a></li></ul></li><li class="caps dropdown nav-link group"><a href="https://babermahalvilas.com/dining" class="flex items-center justify-between gap-1 w-full relative underline-hover-effect" id="id_dining">Dining<i class="fa-solid fa-chevron-down text-xs"></i></a><ul class="drop absolute -top-3/4 md:top-[4rem] left-full md:left-0 bg-dark/60 flex items-start justify-center gap-2 flex-col invisible w-full md:min-w-40 ml-2 md:ml-0"><li class="w-full"><a href="https://babermahalvilas.com/dining#baithak-restaurant" class="navlink-dropdown" id="id_baithak_restaurant">Baithak Restaurant</a></li><li class="w-full"><a href="https://babermahalvilas.com/dining#k2-terrace-cafe" class="navlink-dropdown" id="id_k2_terrace_cafe">K2 Terrace Cafe</a></li></ul></li><li class="caps dropdown nav-link group"><a href="https://babermahalvilas.com/facilities" class="flex items-center justify-between gap-1 w-full relative underline-hover-effect" id="id_facilities">Facilities<i class="fa-solid fa-chevron-down text-xs"></i></a><ul class="drop absolute -top-3/4 md:top-[4rem] left-full md:left-0 bg-dark/60 flex items-start justify-center gap-2 flex-col invisible w-full md:min-w-40 ml-2 md:ml-0"><li class="w-full"><a href="https://babermahalvilas.com/facilities#spa" class="navlink-dropdown" id="id_spa">Spa</a></li><li class="w-full"><a href="https://babermahalvilas.com/facilities#gym" class="navlink-dropdown" id="id_gym">Gym</a></li><li class="w-full"><a href="https://babermahalvilas.com/facilities#swimming-pool" class="navlink-dropdown" id="id_swimming_pool">Swimming Pool</a></li><li class="w-full"><a href="https://babermahalvilas.com/facilities#gift-shop" class="navlink-dropdown" id="id_gift_shop">Gift Shop</a></li><li class="w-full"><a href="https://babermahalvilas.com/at-your-service" class="navlink-dropdown" id="id_our_services">Our Services</a></li></ul></li><li class="caps dropdown nav-link group"><a href="https://babermahalvilas.com/traveldesk" class="flex items-center justify-between gap-1 w-full relative underline-hover-effect" id="id_travel&nbsp;desk">Travel&nbsp;Desk<i class="fa-solid fa-chevron-down text-xs"></i></a><ul class="drop absolute -top-3/4 md:top-[4rem] left-full md:left-0 bg-dark/60 flex items-start justify-center gap-2 flex-col invisible w-full md:min-w-40 ml-2 md:ml-0"><li class="w-full"><a href="https://babermahalvilas.com/day-trip" class="navlink-dropdown" id="id_day_trip">Day Trip</a></li><li class="w-full"><a href="https://babermahalvilas.com/flights" class="navlink-dropdown" id="id_flights">Flights</a></li><li class="w-full"><a href="https://babermahalvilas.com/car-rentals" class="navlink-dropdown" id="id_car_rental">Car Rental</a></li><li class="w-full"><a href="https://babermahalvilas.com/day-hikes" class="navlink-dropdown" id="id_day_hikes">Day Hikes</a></li></ul></li><li class="caps block w-full group "><a href="https://babermahalvilas.com/gallery-list" class="nav-link relative underline-hover-effect" id="id_gallery">Gallery</a></li><li class="caps block w-full group "><a href="https://babermahalvilas.com/contact-us" class="nav-link relative underline-hover-effect" id="id_contact">Contact</a></li></ul>
        </div>
      </div>
    </div>
  </header>
    `;
  }

  return "";
};

const Navbar: React.FC<NavbarProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateNavbarHTML(design, color);
  return (
    <div
      className="relative"
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
};

// Static method to generate HTML for the Navbar component
Navbar.generateHTML = generateNavbarHTML;

export default Navbar;
