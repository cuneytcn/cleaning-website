'use client';

import { siteConfig } from '@/config/site.config';
import {
   ArrowRight02FreeIcons,
   Cancel01FreeIcons,
   Facebook02FreeIcons,
   InstagramFreeIcons,
   Linkedin02FreeIcons,
   Mail01FreeIcons,
   Menu02FreeIcons,
   TelephoneFreeIcons,
   TwitterFreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Modal from './modal';

export default function Navbar() {
   const [open, setOpen] = useState(false);
   const [elHeight, setElHeight] = useState(0);
   const ref = useRef<HTMLElement>(null);
   const stickyRef = useRef<HTMLDivElement>(null);
   const [isSticky, setIsSticky] = useState(false);

   const toggleModal = () => {
      setOpen(!open);
   };

   useEffect(() => {
      const element = ref.current;
      if (element) {
         setElHeight(element.clientHeight);
      }
   }, []);

   useEffect(() => {
      const handleScroll = () => {
         const stickyElement = stickyRef.current;
         if (stickyElement) {
            window.scrollY > elHeight ? setIsSticky(true) : setIsSticky(false);
         }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, [elHeight]);

   return (
      <header ref={ref}>
         <div className="hidden border-b border-neutral-200 bg-white xl:block">
            <div className="container mx-auto px-5">
               <div className="flex items-center justify-between py-2.5">
                  <p className="text-sm text-neutral-700">
                     {siteConfig.welcome}
                  </p>
                  <div className="flex items-center">
                     <div className="relative mr-5 flex items-center gap-2 pr-5 before:absolute before:top-1/2 before:right-0 before:h-6 before:w-px before:-translate-y-1/2 before:bg-neutral-200">
                        <HugeiconsIcon
                           icon={TelephoneFreeIcons}
                           strokeWidth={2}
                           className="size-4 text-blue-500"
                        />
                        <p className="flex items-center gap-1 text-sm">
                           <span className="font-medium text-blue-600">
                              {siteConfig.call.label} :
                           </span>
                           <a href={`tel:${siteConfig.call.phone}`}>
                              {siteConfig.call.phone}
                           </a>
                        </p>
                     </div>

                     <div className="relative mr-5 flex items-center gap-2 pr-5 before:absolute before:top-1/2 before:right-0 before:h-6 before:w-px before:-translate-y-1/2 before:bg-neutral-200">
                        <HugeiconsIcon
                           icon={Mail01FreeIcons}
                           strokeWidth={2}
                           className="size-4 text-blue-500"
                        />
                        <p className="flex items-center gap-1 text-sm">
                           <span className="font-medium text-blue-600">
                              {siteConfig.message.label} :
                           </span>
                           <a href={`mailto:${siteConfig.message.email}`}>
                              {siteConfig.message.email}
                           </a>
                        </p>
                     </div>
                     <div className="flex items-center">
                        <a
                           href={siteConfig.socials.facebook}
                           target="_blank"
                           className="flex size-8 items-center justify-center">
                           <HugeiconsIcon
                              icon={Facebook02FreeIcons}
                              className="size-4 fill-neutral-700 text-transparent hover:fill-blue-600"
                           />
                        </a>
                        <a
                           href={siteConfig.socials.twitter}
                           target="_blank"
                           className="flex size-8 items-center justify-center">
                           <HugeiconsIcon
                              icon={TwitterFreeIcons}
                              className="size-4 fill-neutral-700 text-transparent hover:fill-blue-600"
                           />
                        </a>
                        <a
                           href={siteConfig.socials.linkedin}
                           target="_blank"
                           className="flex size-8 items-center justify-center">
                           <HugeiconsIcon
                              icon={Linkedin02FreeIcons}
                              className="size-4 fill-neutral-700 text-transparent hover:fill-blue-600"
                           />
                        </a>
                        <a
                           href={siteConfig.socials.instagram}
                           target="_blank"
                           className="flex size-8 items-center justify-center">
                           <HugeiconsIcon
                              icon={InstagramFreeIcons}
                              className="size-4 text-neutral-700 hover:text-blue-600"
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div
            ref={stickyRef}
            className={`bg-white transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 z-99 w-full translate-y-0 shadow-md' : ''}`}>
            <div className="container mx-auto px-5">
               <div className="flex items-center justify-between py-4">
                  <Link href={'/'}>
                     <img
                        src={siteConfig.logo}
                        alt={siteConfig.name}
                        className="h-auto max-w-full object-cover"
                     />
                  </Link>

                  <nav className="hidden items-center gap-10 xl:flex">
                     <ul className="flex items-center">
                        {siteConfig.navigations.map((item, index) => (
                           <li key={index}>
                              <Link
                                 href={item.href}
                                 className="px-4 font-medium text-neutral-700 hover:text-blue-500">
                                 {item.title} +
                              </Link>
                           </li>
                        ))}
                     </ul>
                     <Link
                        href={siteConfig.appointment}
                        className="inline-flex items-center justify-center bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600">
                        Randevu Oluştur
                        <HugeiconsIcon
                           icon={ArrowRight02FreeIcons}
                           className="ml-2"
                        />
                     </Link>
                  </nav>

                  <button
                     type="button"
                     onClick={toggleModal}
                     className="flex size-10 cursor-pointer items-center justify-center xl:hidden">
                     {open ? (
                        <HugeiconsIcon
                           icon={Cancel01FreeIcons}
                           className="size-7 rotate-180 text-neutral-700"
                        />
                     ) : (
                        <HugeiconsIcon
                           icon={Menu02FreeIcons}
                           className="size-7 rotate-180 text-neutral-700"
                        />
                     )}
                  </button>

                  {open && (
                     <Modal elHeight={elHeight} open={open} setOpen={setOpen} />
                  )}
               </div>
            </div>
         </div>
      </header>
   );
}
