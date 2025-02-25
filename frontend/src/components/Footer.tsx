import React from "react";

interface FooterProps {
  design: string;
  color: string;
}

const generateFooterHTML = (design: string, color: string): string => {
  if (design === "Design1") {
    return `
 <footer class="z-30 h-screen py-6 bg-${color} flex md:items-center justify-center"><div class="container w-full h-auto"><div class="mt-0 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8"><div class="hidden md:block main-link order-2 md:order-1"><ul class="space-y-4 md:space-y-20"><li class="group transition-all duration-300 ease-linear"><a title="Stay" class="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear" href="/stay">Stay<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a title="Dine" class="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear" href="/dine">Fine Dine<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a title="Recreation" class="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear" href="/recreation">Recreation<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a title="Events" class="navlinks w-full inline-flex items-center justify-between gap-4 text-xl md:text-2xl lg:text-3xl xl:text-4xl group-hover:ml-2 transition-all duration-300 ease-linear" href="/events">Events<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li></ul></div><div class="hidden md:block secondary-link order-3 md:order-2"><ul class="space-y-4 md:space-y-8"><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/about">About the Hotel<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/gallery">Gallery<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/places">Nearby Places<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/brochure">Download Brochure<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/contact">Contact Us<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/enquiry-review">Reviews &amp; Enquiry<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/promotions">Promotions<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li><li class="group transition-all duration-300 ease-linear"><a class="navlinks w-full inline-flex items-center justify-between gap-4 text-sm lg:text-base group-hover:ml-2 transition-all duration-300 ease-linear" href="/social-offer">Social Media Posts<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-base -translate-x-16 group-hover:-translate-x-12 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 12l14 0"></path><path d="M15 16l4 -4"></path><path d="M15 8l4 4"></path></svg></a></li></ul></div><div class="md:hidden xl:block booking order-4 md:order-3"><div class="mb-8 md:mb-12"><h4 class="mb-4 md:mb-6 font-bold">Room Booking</h4><div class="space-y-2"><div class="flex items-center gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg><a href="tel:+977-9851139592">+977-9851139592</a></div><div class="flex items-center gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor"></path></svg><a href="mailto:reservation@hotelhimalaya.com">reservation@hotelhimalaya.com</a></div></div></div><div class="mb-8 md:mb-12"><h4 class="mb-4 md:mb-6 font-bold">Event Booking</h4><div class="space-y-2"><div class="flex items-center gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg><ul class="flex items-center gap-3"><li><a href="tel:+977 9761693040">+977 9761693040</a></li><li><a href="tel:+977 9801810708">+977 9801810708</a></li></ul></div><div class="flex items-center gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor"></path></svg><a href="mailto:banquetsales@hotelhimalaya.com">banquetsales@hotelhimalaya.com</a></div></div></div><div class="mb-8 md:mb-12"><h4 class="mb-4 md:mb-6 font-bold">Dine &amp; Recreation Booking</h4><div class="space-y-2"><div class="flex items-center gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg><ul class="flex items-center gap-3"><li><a href="tel:+977-9851339602">+977-9851339602</a></li><li><a href="tel:+977-9801810708">+977-9801810708</a></li></ul></div><div class="flex items-center gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor"></path></svg><a href="mailto:info@hotelhimalaya.com">info@hotelhimalaya.com</a></div></div></div><div class="mb-8 md:mb-12"><h4 class="mb-4 md:mb-6 font-bold">Patan Museum Cafe Booking</h4><div class="space-y-2"><div class="flex items-center gap-2"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path></svg><a href="tel:+977-9851339602">+977-9851339602</a></div><div class="flex items-center gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" stroke-width="0" fill="currentColor"></path><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" stroke-width="0" fill="currentColor"></path></svg><a href="mailto:pmc@hotelhimalaya.com">pmc@hotelhimalaya.com</a></div></div></div></div><div class="intro order-1 md:order-4 sm:col-span-2 md:col-span-1"><div class="flex flex-col items-center text-center gap-4"><div class="col-span-1 flex flex-col items-center text-center gap-4"><a href="/"><img src="https://hotelhimalaya.com/images/preference/dL0QI-hotelhimalaya.png" alt="Hotel Himalaya" class="w-28 h-20 md:w-44 md:h-32 object-contain"></a><ul class="space-y-1"><li><a rel="noreferrer noopener" class="text-sm" href="https://www.google.com/maps/place/Hotel+Himalaya" target="_blank">Kupondol Height, Lalitpur, Nepal</a></li><li><a rel="noreferrer noopener" class="text-sm" href="tel:+977 01-5423900" target="_blank">+977 01-5423900</a></li><li><a rel="noreferrer noopener" class="text-sm" href="mailto:info@hotelhimalaya.com" target="_blank">info@hotelhimalaya.com</a></li></ul><ul class="flex items-center justify-center gap-4 text-2xl my-6"><li class="group"><a rel="noreferrer noopener" aria-label="Facebook" title="Facebook" href="https://www.facebook.com/HotelHimalayaPatan/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-2xl group-hover:scale-125 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg></a></li><li class="group"><a rel="noreferrer noopener" aria-label="Instagram" title="Instagram" href="https://www.instagram.com/hotelhimalaya_lalitpur/" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-2xl group-hover:scale-125 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path></svg></a></li><li class="group"><a rel="noreferrer noopener" aria-label="TripAdvisor" title="TripAdvisor" href="https://www.tripadvisor.com/Hotel_Review-g315764-d316826-Reviews-Hotel_Himalaya-Patan_Lalitpur_Kathmandu_Valley_Bagmati_Zone_Central_Region.html" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-2xl group-hover:scale-125 transition-all duration-300 ease-linear" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8.31 10.28a2.5 2.5 0 1 0 2.5 2.49 2.5 2.5 0 0 0-2.5-2.49zm0 3.8a1.31 1.31 0 1 1 0-2.61 1.31 1.31 0 1 1 0 2.61zm7.38-3.8a2.5 2.5 0 1 0 2.5 2.49 2.5 2.5 0 0 0-2.5-2.49zM17 12.77a1.31 1.31 0 1 1-1.31-1.3 1.31 1.31 0 0 1 1.31 1.3z"></path><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.38 10.77a3.69 3.69 0 0 1-6.2 2.71L12 16.77l-1.18-1.29a3.69 3.69 0 1 1-5-5.44l-1.2-1.3H7.3a8.33 8.33 0 0 1 9.41 0h2.67l-1.2 1.31a3.71 3.71 0 0 1 1.2 2.72z"></path><path d="M14.77 9.05a7.19 7.19 0 0 0-5.54 0A4.06 4.06 0 0 1 12 12.7a4.08 4.08 0 0 1 2.77-3.65z"></path></svg></a></li></ul></div><div class="hospitality"><h4 class="text-lg md:text-xl font-semibold md:font-medium">Hospitality Partners</h4><ul class="mt-6 flex items-center justify-center gap-10"><li class="flex flex-col items-center gap-3"><img src="https://hotelhimalaya.purnashrestha.com.np/images/hospitality/missWorld.webp" alt="Miss World" title="Miss World" class="size-10 md:size-16 object-contain" draggable="false"><label class="text-xs scale-75">Miss World</label></li><li class="flex flex-col items-center gap-3"><img src="https://hotelhimalaya.purnashrestha.com.np/images/hospitality/missEarth.webp" alt="Miss Earth" title="Miss Earth" class="size-10 md:size-16 object-contain" draggable="false"><label class="text-xs scale-75">Miss Earth</label></li><li class="flex flex-col items-center gap-3"><img src="https://hotelhimalaya.purnashrestha.com.np/images/hospitality/missInternational.webp" alt="Miss International" title="Miss International" class="size-10 md:size-16 object-contain" draggable="false"><label class="text-xs scale-75">Miss International</label></li></ul></div></div></div></div><div class="text-sm flex items-center justify-between flex-col md:flex-row gap-6 md:gap-16 md:-translate-y-6 mt-8 md:mt-0"><p>© 2025 Hotel Himalaya. All Rights Reserved.</p><p class="mr-12">Developed by:<a class="ml-2 font-semibold" rel="noreferrer" href="https://longtail.info/" target="_blank">Longtail e-Media</a></p></div></div></footer>
    `;
  }

  if (design === "Design2") {
    return `
<footer id="footerComponent" class="p-0 bg-${color}-600"><div class="relative">
    <div class="container mx-auto py-16 md:pt-32 md:pb-16 text-${color}-50 z-20 overflow-x-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-64">
            <div class="flex flex-col gap-2">
                <h2><a href="https://www.hoteldayatra.com/project/"><img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/logo.svg" alt="Hotel Da Yatra Logo" class="w-auto h-32 md:h-48 object-contain mb-4"></a></h2>
                <h3 class="text-2xl">Hotel Da Yatra Courtyard</h3>
                <p class="font-light text-sm">We are a “Neoclassical Luxury Hotel” in the helm of the tourist hub of
                    Pokhara .69 Kms from lake Fewa. The hotel offers an assortment of 46 rooms with satori evoking views
                    of the Himalayas and lake from lake-view rooms and the terrace.
                </p>

                <ul class="flex items-center gap-2 text-2xl my-6">
                    <li class="hover:text-${color}-200 hover:scale-125 transition-all duration-300 ease-linear p-4">
                        <a href="https://www.facebook.com/hoteldayatra" target="_blank" rel="noopener noreferrer" title="facebook" aria-title="facebook">
                            <i class="fa-brands fa-facebook-f text-base"></i>
                        </a>
                    </li>
                    <li class="hover:text-${color}-200 hover:scale-125 transition-all duration-300 ease-linear p-4">
                        <a href="https://www.instagram.com/hotel_da_yatra/" target="_blank" rel="noopener noreferrer" title="instagram" aria-title="instagram">
                            <i class="fa-brands fa-instagram  text-base"></i></a>
                    </li>
                    <li class="hover:text-${color}-200 hover:scale-125 transition-all duration-300 ease-linear p-4">
                        <a href="https://www.youtube.com/@hoteldayatra5188" target="_blank" rel="noopener noreferrer" title="youtube" aria-title="youtube">
                            <i class="fa-brands fa-youtube text-base"></i>
                        </a>
                    </li>
                </ul>

            </div>
            <div class="flex flex-col items-start md:items-center justify-center text-left md:text-center gap-10">
                <div class="title space-y-5">
                    <span class="uppercase text-sm">Book a stay</span>
                    <h4 class="text-3xl capitalize ">Spend Your Time with Us</h4>
                    <p class="text-xs max-w-md">Experience spacious comfort in our 48 beautifully appointed rooms,
                        including 2 Family Rooms and a Luxury Suite.
                    </p>
                </div>
                <ul class="space-y-1">
                    <li><a href="tel:+97761452462">+977 6 1452462</a></li>
                    <li><a href="mailto:info@hoteldayatra.com">info@hoteldayatra.com</a></li>
                </ul>
                <a href="https://www.hoteldayatra.com/booking.php" target="_blank" rel="noopener noreferrer" class=/20 hover/50 border-2 border-black shadow-md px-6 hover:bg-black hover:text-${color}-600 py-2 rounded-xl tracking-wider transition-all duration-200 ease-linear" aria-label="Reserve" title="Reserve">
                    Reserve
                </a>
            </div>
        </div>
    </div>

    <div class="flex items-center justify-center gap-8">
        <button type="button" id="scroll-to-top" class="flex items-center justify-center z-50 bg-${color}-200 bg-amber-300 text-black scroll-to-top py-3 px-4 rounded-full outline-[1.5px] outline-dashed outline-${color}-200 outline-offset-4 translate-y-6 hover:animate-pulse hover:outline-offset-2 transition-all duration-100 ease-linear size-11 text-2xl cursor-pointer" aria-label="Back To Top" title="Back To Top">
        &uarr;
        </button>
    </div>


    <section class="p-4 md:py-8 text-black">

        <div class="container mx-auto mt-6 xl:mt-0 flex items-center justify-center flex-col xl:flex-row xl:justify-between gap-4 md:gap-8 xl:gap-12 text-sm md:text-base">
            <span>© 2024 Hotel Da Yatra Courtyard | All Rights Reserved </span>
            <div class="flex items-center flex-col md:flex-row gap-4">
                <ul class="flex items-center justify-between gap-0 mr-8 scale-75 md:scale-100">
                    <li>
                        <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/visa.webp" class="w-12 h-5 object-contain" alt="visa">
                    </li>
                    <li>
                        <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/union.webp" class="w-12 h-5 object-contain" alt="union">
                    </li>
                    <li>
                        <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/mastercard.webp" class="w-12 h-5 object-contain" alt="mastercard">
                    </li>
                    <li>
                        <img src="https://legacy.purnashrestha.com.np/dayatra/assets/img/others/amex.webp" class="w-12 h-5 object-contain" alt="amex">
                    </li>
                </ul>
                <span>Website by: &nbsp;<a class="font-bold" href="https://www.longtail.info/" target="_blank">Longtail
                        e-media</a></span>
            </div>
        </div>

    </section>
</div></footer>
    `;
  }

  if (design === "Design3") {
    return `
    <footer class="relative overflow-hidden bg-${color}-500 text-black z-10 px-4"><div class="absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-20 mix-blend-multiply opacity-40"></div><div class=" relative overflow-hidden z-30"><div class="container mx-auto pt-20 pb-8"><div class="grid grid-cols-3 place-items-center px-8"><div class="mt-10 md:m-0 col-span-3 md:col-span-1 order-2 md:order-1"><ul class="col-span-1 flex flex-col gap-4"><li class="text-xs md:text-sm lg:text-base flex items-center justify-center md:justify-start gap-2  transition-linear"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xs md:text-sm lg:text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M12,22 C12,22 4,16 4,10 C4,5 8,2 12,2 C16,2 20,5 20,10 C20,16 12,22 12,22 Z M12,13 C13.657,13 15,11.657 15,10 C15,8.343 13.657,7 12,7 C10.343,7 9,8.343 9,10 C9,11.657 10.343,13 12,13 L12,13 Z"></path></svg><a rel="noopener" href="/" target="_blank">Maharaj Sagar - 6, Janakpurdham</a></li><li class="text-xs md:text-sm lg:text-base flex items-center justify-center md:justify-start gap-2  transition-linear"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xs md:text-sm lg:text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg><a rel="noopener" href="tel:+9779820113412" target="_blank">+9779820113412</a></li><li class="text-xs md:text-sm lg:text-base flex items-center justify-center md:justify-start gap-2  transition-linear"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="text-xs md:text-sm lg:text-base" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><a rel="noopener" href="mailto:fo@mithilayatriniwas.com" target="_blank">fo@mithilayatriniwas.com</a></li></ul></div><div class="col-span-3 md:col-span-1 flex items-center justify-center flex-col gap-10 order-1 md:order-2"><a href="/"><img src="https://mithilayatriniwas.com/backend/images/preference/8JQps-download.png" alt="Mithila Yatri Niwas" class="filter-white w-full h-32 lg:h-48 md:p-1 object-contain rounded-xl"></a><div class="flex gap-4"><a rel="noopener noreferrer" class="flex items-center justify-center" aria-label="Facebook" title="Facebook" href="https://www.facebook.com/MithilaYatriNiwas" target="_blank"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl transition-linear hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg></a><a rel="noopener noreferrer" class="flex items-center justify-center" aria-label="Instagram" title="Instagram" href="https://instagram.com/mithilayatriniwas?igshid=MzRlODBiNWFlZA==" target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-xl transition-linear hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a><a rel="noopener noreferrer" class="flex items-center justify-center" aria-label="number" title="number" href="tel:+9779820113412" target="_blank"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-xl transition-linear hover:scale-125" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path></svg></a></div></div><div class="col-span-3 md:col-span-1 hidden md:flex flex-col items-end justify-end gap-4 order-3"><ul class="flex gap-8"><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/accommodation#deluxe-room"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z"></path></svg>Deluxe</a></li><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/accommodation#executive-room"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z"></path></svg>Executive</a></li><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/accommodation#suite-room"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M21 10.78V8c0-1.65-1.35-3-3-3h-4c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78H6C4.35 5 3 6.35 3 8v2.78c-.61.55-1 1.34-1 2.22v6h2v-2h16v2h2v-6c0-.88-.39-1.67-1-2.22zM14 7h4c.55 0 1 .45 1 1v2h-6V8c0-.55.45-1 1-1zM5 8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2H5V8zm-1 7v-2c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v2H4z"></path></svg>Suite</a></li></ul><ul class="flex items-center justify-start gap-8"><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/fine-dine-experience#bhojan-griha"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 21.5c0 .28.22.5.49.5h13.02c.27 0 .49-.22.49-.5V20H2v1.5zM15.5 16H11v-2H7v2H2.5c-.28 0-.5.22-.5.5V18h14v-1.5c0-.28-.22-.5-.5-.5zM20.47 15.45A5.796 5.796 0 0 0 22 11.51V2h-6v9.47c0 1.48.58 2.92 1.6 4l.4.42V22h4v-2h-2v-4.03l.47-.52zM18 4h2v4h-2V4zm1.03 10.07a3.893 3.893 0 0 1-1.03-2.6V10h2v1.51c0 .95-.34 1.85-.97 2.56z"></path></svg>Bhojan Griha</a></li></ul><ul class="flex items-center justify-start gap-8"><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/hall#sabha-hall"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg>Sabha Hall</a></li><li><a class="text-xs md:text-sm lg:text-base relative group hover:text-${color}-600 hover:scale-110 transition-linear flex items-center gap-2" href="/hall#pdr"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-sm md:text-sm lg:text-base lg:mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M16 3l0 4"></path><path d="M8 3l0 4"></path><path d="M4 11l16 0"></path><path d="M8 15h2v2h-2z"></path></svg>PDR</a></li></ul></div></div><div class="flex items-center justify-center py-8 md:gap-12 md:py-16 flex-wrap"><a rel="noopener noreferrer" class="p-2 flex items-center justify-center" aria-label="booking" title="booking" href="https://www.booking.com/searchresults.en-gb.html?aid=356980&amp;label=gog235jc-1BCAsoqwFCE21pdGhpbGEteWF0cmktbml3YXNIM1gDaKsBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAKml9OxBsACAdICJDgzYWY5MGYzLWFmMDAtNDg4ZS1iNDJlLTNhYzdmYjQwMzY1NNgCBeACAQ&amp;highlighted_hotels=8949904&amp;" target="_blank"><img src="https://mithilayatriniwas.com/backend/images/social/EZDOf-download.webp" alt="booking" class="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"></a><a rel="noopener noreferrer" class="p-2 flex items-center justify-center" aria-label="Tripadvisor" title="Tripadvisor" href="https://www.tripadvisor.com/Hotel_Review-g424939-d24969555-Reviews-Mithila_Yatri_Niwas-Janakpur_Janakpur_Zone_Central_Region.html" target="_blank"><img src="https://mithilayatriniwas.com/backend/images/social/ECf3W-download.webp" alt="Tripadvisor" class="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"></a><a rel="noopener noreferrer" class="p-2 flex items-center justify-center" aria-label="agoda" title="agoda" href="https://www.agoda.com/dasrath-talau-janakpur-dham-dhanusha/hotel/janakpur-np.html?ds=uuPVp4bwErXsigO%2B" target="_blank"><img src="https://mithilayatriniwas.com/backend/images/social/taidj-download (1).webp" alt="agoda" class="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"></a><a rel="noopener noreferrer" class="p-2 flex items-center justify-center" aria-label="expedia" title="expedia" href="https://www.expedia.com/Janakpur-Hotels-Mithila-Yatri-Niwas.h83936278.Hotel-Information?" target="_blank"><img src="https://mithilayatriniwas.com/backend/images/social/7u71Y-download (2).webp" alt="expedia" class="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"></a><a rel="noopener noreferrer" class="p-2 flex items-center justify-center" aria-label="makemytrip" title="makemytrip" href="https://www.makemytrip.com/hotels-international/nepal/janakpur-hotels/mithila_yatri_niwas-details.html" target="_blank"><img src="https://mithilayatriniwas.com/backend/images/social/uXdnT-download (3).webp" alt="makemytrip" class="w-32 h-9 object-contain bg-white rounded-full shadow-md px-4 py-2"></a></div><div class="flex justify-center items-center gap-8 md:gap-16 mb-12"><a rel="noopener noreferrer" class="text-xs md:text-base relative group hover:text-${color}-600 underline transition-linear  hover:scale-105" href="/terms-and-conditions" target="_blank">Terms and Conditions</a><a rel="noopener noreferrer" class="text-xs md:text-base relative group hover:text-${color}-600 underline transition-linear  hover:scale-105" href="/privacy-policy" target="_blank">Privacy Policy</a><a rel="noopener noreferrer" class="text-xs md:text-base relative group hover:text-${color}-600 underline transition-linear  hover:scale-105" href="/" target="_blank">Cancellation Policy</a></div><div class="text-center mb-8"><p class="text-sm md:text-base">Our Affiliations / Sister concerns: &nbsp;<a rel="noopener noreferrer" class="font-bold" href="https://streampeak.com.sg/" target="_blank">Stream Peak International Pvt. Ltd.</a></p></div><div class="flex items-center justify-center flex-col md:flex-row md:justify-between gap-2 text-sm md:text-base"><span>© 2025 Mithila Yatri Niwas | All Rights Reserved </span><span>Website by: &nbsp;<a class="font-bold" href="https://www.longtail.info/" target="_blank">Longtail e-media</a></span></div></div></div></footer>
`;
  }

  if (design === "Design4") {
    return `
  <footer class="h-auto overflow-hidden bg-light p-0 px-4 xl:h-screen">
    <section class="relative flex size-full flex-col justify-evenly xl:container mx-auto">
        <div class="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-8 xl:gap-0">
            <div class="z-10 space-y-8 xl:col-span-2">
                <a class="cursor-pointer" aria-label="Satprayas Nepal" title="Satprayas Nepal" href="/"><img
                        src="https://satprayash.org.np//backend/images/preference/p9eLK-logo.svg"
                        alt="Satprayas Nepal Logo" class="h-40 w-auto object-contain"></a>
                <ul class="mt-12 flex flex-col justify-start items-start text-left gap-1">
                    <li><a href="https://maps.app.goo.gl/QaWJ2W28EwvqgSDe8"
                            class="inline-block text-sm font-semibold hover:underline" target="_blank"
                            rel="noopener noreferrer" aria-label="Bhimsenthan-5, Bhaktapur, Nepal">Bhimsenthan-5,
                            Bhaktapur, Nepal</a></li>
                    <li><a href="tel:+977 9851063716" class="inline-block text-sm font-semibold hover:underline"
                            target="_blank" rel="noopener noreferrer" aria-label="+977 9851063716">+977 9851063716</a> |
                        <a href="tel:+977 9851247627" class="inline-block text-sm font-semibold hover:underline"
                            target="_blank" rel="noopener noreferrer" aria-label="+977 9851247627">+977 9851247627</a>
                    </li>
                    <li><a href="mailto:info@satprayash.org.np"
                            class="inline-block text-sm font-semibold hover:underline" target="_blank"
                            rel="noopener noreferrer" aria-label="info@satprayash.org.np">info@satprayash.org.np</a>
                    </li>
                </ul>
                <div class="my-6 flex items-center gap-4">
                    <span class="text-xs uppercase tracking-wider text-black/50">Follow Us: </span>
                    <ul class="flex justify-start items-start text-left gap-3">
                        <li class="group">
                            <a rel="noreferrer noopener" aria-label="Facebook" title="Facebook"
                                href="https://www.facebook.com/satprayas.np/" target="_blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                    class="size-9 rounded-full border border-black/30 p-2 text-base text-black transition-all duration-200 ease-linear group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-light"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class="group">
                            <a rel="noreferrer noopener" aria-label="Instagram" title="Instagram" href="/home"
                                target="_blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                    class="size-9 rounded-full border border-black/30 p-2 text-base text-black transition-all duration-200 ease-linear group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-light"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                        <li class="group">
                            <a rel="noreferrer noopener" aria-label="Youtube" title="Youtube" href="/home"
                                target="_blank">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512"
                                    class="size-9 rounded-full border border-black/30 p-2 text-base text-black transition-all duration-200 ease-linear group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-light"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-1 w-full xl:col-span-3">
                <span
                    class="mt-2 flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider text-black/70 lg:text-center">Make
                    a Donation</span>
                <p
                    class="mt-4 flex size-12 items-center justify-center rounded-full bg-orange-600 p-1 text-center text-2xl text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em"
                        width="1em" xmlns="http://www.w3.org/2000/svg" class="bg-transparent">
                        <path
                            d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z">
                        </path>
                    </svg>
                </p>
                <table class="mt-8 w-full table-auto text-left">
                    <tbody>
                        <tr>
                            <td class="py-2 font-semibold">Bank Name:</td>
                            <td class="py-2">Himalayan Bank Ltd.</td>
                        </tr>
                        <tr>
                            <td class="py-2 font-semibold">Bank Address:</td>
                            <td class="py-2">Bhaktapur Branch, Nepal</td>
                        </tr>
                        <tr>
                            <td class="py-2 font-semibold">Swift Code:</td>
                            <td class="py-2">HIMANPKA</td>
                        </tr>
                        <tr>
                            <td class="py-2 font-semibold">Account Number:</td>
                            <td class="py-2">004-04699420011</td>
                        </tr>
                        <tr>
                            <td class="py-2 font-semibold">Contact:</td>
                            <td class="py-2"><a href="tel:+977 9851063716" target="_blank"
                                    rel="noopener noreferrer">+977 9851063716, </a><a href="tel:+977 9851247627"
                                    target="_blank" rel="noopener noreferrer">+977 9851247627</a></td>
                        </tr>
                    </tbody>
                </table>
                <p class="mt-5 max-w-sm lg:mt-12">Please mention your name and donation purpose, so we can easily
                    allocate the funds properly.</p>
            </div>
            <div class="col-span-1 md:col-span-2 xl:col-span-3">
                <div class="col-span-1 md:col-span-2 xl:col-span-3">
                    <div class="w-full text-left lg:text-center"><span
                            class="text-left text-xs font-bold uppercase tracking-wider text-dark/70 lg:text-center">The
                            Stories</span>
                    </div>
                    <div class="flex flex-col items-start">
                    <span
                    class="mt-4 flex size-12 items-center justify-center rounded-full bg-orange-600 p-1 text-center text-2xl text-white">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-pretty bg-transparent" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg></span>
                        <div class="scroll mt-8 max-h-36 overflow-y-auto">
                            <p class="review text-justify text-sm sm:text-lg md:text-pretty md:text-xl xl:text-lg">
                                The support and services provided by Satprayas Nepal have been invaluable. They have
                                given me hope and a brighter future. I am thankful for the opportunities and care
                                they have provided. I am grateful for the support and services provided by Satprayas Nepal.
                            </p>
                        </div><a class="mt-4 flex items-center justify-center gap-3" href="/home" target="_blank">
                            <div class="text-left">
                                <p class="caps text-lg font-semibold">Anita Rai</p>
                                <p class="text-sm">Beneficiary</p>
                            </div>
                        </a>
                    </div>
                </div>
                <ul class="links mt-4 flex flex-wrap items-start justify-between gap-3 md:mt-11 md:gap-x-8">
                    <li class="group"><a class="text-sm font-medium capitalize underline hover:no-underline"
                            aria-label="About Us" href="/about">about</a></li>
                    <li class="group"><a class="text-sm font-medium capitalize underline hover:no-underline"
                            aria-label="Our Projects" href="/projects">projects</a></li>
                    <li class="group"><a class="text-sm font-medium capitalize underline hover:no-underline"
                            aria-label="Gallery" href="/gallery">gallery</a></li>
                    <li class="group"><a class="text-sm font-medium capitalize underline hover:no-underline"
                            aria-label="Stories" href="/stories">stories</a></li>
                    <li class="group"><a class="text-sm font-medium capitalize underline hover:no-underline"
                            aria-label="Support &amp; Contact" href="/contact">contact</a></li>
                </ul>
            </div>
        </div>
        <div
            class="my-12 flex w-full flex-col items-start justify-start gap-2 pb-12 text-base md:flex-row md:justify-between md:text-base lg:mb-0 lg:mt-16 lg:items-center lg:justify-between lg:pb-24 lg:text-sm xl:pb-0">
            <span>© 2025 <strong class="font-semibold">Satprayas Nepal</strong> | All Rights
                Reserved</span><span>Website by: &nbsp;<a class="font-semibold" href="https://www.longtail.info/"
                    target="_blank">Longtail e-Media</a></span>
        </div>
    </section>
</footer>
`;
  }

  if (design === "Design5") {
    return `
   <footer class="h-auto overflow-hidden p-0 md:min-h-screen relative z-10 px-4 py-12 sm:py-24 md:px-12 md:py-32 lg:py-36 xl:px-16 xl:py-48">
    <div class="pointer-events-none absolute bottom-0 -z-10 h-[calc(100%+25vh)] w-full bg-cover bg-bottom bg-no-repeat md:h-[140vh]"
        style="background-image: url(&quot;/assets/bg_cuisine-CXN14gmB.png&quot;);"></div>
    <div class="pointer-events-none absolute inset-0 -z-10 size-full bg-gradient-to-t from-white to-transparent"></div>
    <section class="container mx-auto relative flex size-full flex-col items-center justify-evenly">
        <div class="z-10 flex items-center justify-center"><a class="cursor-pointer" aria-label="Himalayan Flavours"
                title="Himalayan Flavours" href="/"><img
                    src="https://himalayan-flavours.com/backend/images/preference/CPM4u-logo.svg"
                    alt="Himalayan Flavours Logo" class="h-40 w-auto object-contain"></a></div>
        <div class="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-7 lg:gap-0">
            <div class="col-span-1 w-full lg:col-span-2"><span class="text-xs font-bold uppercase text-dark/70">Quick
                    Links</span>
                <ul class="links mt-4 flex flex-col items-start justify-start gap-2 md:mt-8 md:gap-4">
                    <li class="group w-full"><a class="transition-all duration-200 ease-linear inline-flex w-full items-center justify-between pb-2 text-2xl font-bold capitalize text-dark group-hover:font-bold group-hover:tracking-wider" aria-label="About" href="/about">About</a></li>
                    <li class="group w-full"><a class="transition-all duration-200 ease-linear inline-flex w-full items-center justify-between pb-2 text-2xl font-bold capitalize text-dark group-hover:font-bold group-hover:tracking-wider" aria-label="Menus" href="/food-menu">Menus</a></li>
                    <li class="group w-full"><a class="transition-all duration-200 ease-linear inline-flex w-full items-center justify-between pb-2 text-2xl font-bold capitalize text-dark group-hover:font-bold group-hover:tracking-wider" aria-label="Food Gallery" href="/gallery">Food
                            Gallery</a></li>
                    <li class="group w-full"><a class="transition-all duration-200 ease-linear inline-flex w-full items-center justify-between pb-2 text-2xl font-bold capitalize text-dark group-hover:font-bold group-hover:tracking-wider" aria-label="Hours &amp; Location" href="/contact">Hours
                            &amp; Location</a></li>
                    <li class="group w-full"><a class="transition-all duration-200 ease-linear inline-flex w-full items-center justify-between pb-2 text-2xl font-bold capitalize text-dark group-hover:font-bold group-hover:tracking-wider" aria-label="Promotions" href="/offers">Promotions</a>
                    </li>
                </ul>
            </div>
            <div class="col-span-1 lg:col-span-3">
                <div class="w-full text-left lg:text-center"><span
                        class="text-left text-xs font-bold uppercase text-dark/70 lg:text-center">Reviews</span>
                    <div class="relative mt-8">
                        <div class="h-full">
                                <div class="flex flex-col items-center">
                                    <p class="review text-justify text-sm sm:text-base md:text-pretty">
                                        Amazing depth of flavour in dishes, very large servings. Best aloo parathas I’ve
                                        had since Delhi. Cute automatic serving trolley! Very extensive menu. And they
                                        do take credit cards despite what it says here. Highly recommended for a great meal and the experience of a nepalese, indian and chinese cuisines all in one place.
                                    </p><a class="mt-6 flex items-center justify-center gap-3"
                                        href="https://www.google.com/search?q=himalayan+flavours+victoria&amp;oq=himalayan+flavours+victoria&amp;gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MggIARAAGBYYHjIICAIQABgWGB4yDQgDEAAYhgMYgAQYigUyDQgEEAAYhgMYgAQYigUyDQgFEAAYhgMYgAQYigUyCggGEAAYgAQYogQyCggHEAAYgAQYogQyBwgIEAAY7wUyCggJEAAYgAQYogTSAQgzNzgyajBqN6gCCLACAQ&amp;sourceid=chrome&amp;ie=UTF-8#lrd=0x548f73fa81b074ff:0x6a66914643d8d2,1,,,,"
                                        target="_blank"><img
                                            src="https://himalayan-flavours.com/backend/images/testimonial/Fv9hj-heMRC-fire.png"
                                            alt="Brooke Clibbon"
                                            class="size-12 rounded-full border border-black/20 bg-white object-contain shadow">
                                        <div class="text-left">
                                            <p class="caps text-base font-bold">Brooke Clibbon</p>
                                            <p class="text-xs">via Google</p>
                                        </div>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 flex w-full items-center justify-between border-t-2 border-black/10"><span
                        class="flex gap-0 text-base text-dark"><svg stroke="currentColor" fill="currentColor"
                            stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
                            </path>
                        </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
                            </path>
                        </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
                            </path>
                        </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
                            </path>
                        </svg><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z">
                            </path>
                        </svg></span>
                    <p class="my-4 text-sm text-dark/50"><strong class="font-bold text-dark">5.0</strong>/ 13,587+ review</p>
                </div>
            </div>
            <div class="col-span-1 w-full text-left lg:col-span-2 lg:text-right"><span
                    class="text-xs font-bold uppercase text-dark/70">Contact Info</span>
                <div class="mt-4 space-y-8 md:mt-8">
                    <ul
                        class="flex flex-col justify-start lg:justify-end items-start lg:items-end text-left lg:text-right gap-1">
                        <li><a href="https://maps.app.goo.gl/ThmUvT8FABgwKMho7"
                                class="inline-block text-sm font-bold hover:underline" target="_blank"
                                rel="noopener noreferrer" aria-label="3945 Quadra St, Victoria, BC V8X 1J5, Canada">3945
                                Quadra St, Victoria, BC V8X 1J5, Canada</a></li>
                        <li><a href="tel:+1 (778) 966-7755" class="inline-block text-sm font-bold hover:underline"
                                target="_blank" rel="noopener noreferrer" aria-label="+1 (778) 966-7755">+1 (778)
                                966-7755</a></li>
                        <li><a href="mailto:info@himalayan-flavours.com"
                                class="inline-block text-sm font-bold hover:underline" target="_blank"
                                rel="noopener noreferrer"
                                aria-label="info@himalayan-flavours.com">info@himalayan-flavours.com</a></li>
                    </ul>
                    <ul
                        class="my-6 flex justify-start lg:justify-end items-start lg:items-end text-left lg:text-right gap-4 text-2xl">
                        <li class="group"><a rel="noreferrer noopener" aria-label="Facebook" title="Facebook"
                                href="https://www.facebook.com/HimalayanFlavourRestaurant" target="_blank"><svg
                                    stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512"
                                    class="text-lg transition-all duration-300 ease-linear group-hover:scale-125"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                                    </path>
                                </svg></a></li>
                        <li class="group"><a rel="noreferrer noopener" aria-label="Instagram" title="Instagram"
                                href="/about" target="_blank"><svg stroke="currentColor" fill="currentColor"
                                    stroke-width="0" viewBox="0 0 24 24"
                                    class="text-lg transition-all duration-300 ease-linear group-hover:scale-125"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z">
                                    </path>
                                </svg></a></li>
                        <li class="group"><a rel="noreferrer noopener" aria-label="Tiktok" title="Tiktok" href="/about"
                                target="_blank"><svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                    viewBox="0 0 512 512"
                                    class="text-lg transition-all duration-300 ease-linear group-hover:scale-125"
                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5 132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56 68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52 161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61z">
                                    </path>
                                </svg></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div
            class="my-12 flex w-full flex-col items-start justify-start gap-2 text-base md:flex-row md:justify-between md:text-base lg:mb-0 lg:mt-16 lg:items-center lg:justify-between lg:text-sm">
            <span>© 2025 Himalayan Flavours </span><span>Website by: &nbsp;<a class="font-bold"
                    href="https://www.longtail.info/" target="_blank">Longtail e-Media</a></span>
        </div>
    </section>
</footer>
`;
  }

  return "";
};

const Footer: React.FC<FooterProps> & {
  generateHTML: (design: string, color: string) => string;
} = ({ design, color }) => {
  const htmlString = generateFooterHTML(design, color);
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

// Static method to generate HTML for the Footer component
Footer.generateHTML = generateFooterHTML;

export default Footer;
