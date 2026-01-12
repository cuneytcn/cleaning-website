'use client';

import { siteConfig } from '@/config/site.config';
import {
   ArrowUpRightFreeIcons,
   Facebook02FreeIcons,
   InstagramFreeIcons,
   Linkedin02FreeIcons,
   TwitterFreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { useEffect } from 'react';
0;
interface Props {
   elHeight: number;
   open: boolean;
   setOpen: (open: boolean) => void;
}

export default function Modal({ elHeight, open, setOpen }: Props) {
   useEffect(() => {
      const bodyEl = document.body;

      open
         ? bodyEl.classList.add('overflow-hidden')
         : bodyEl.classList.remove('overflow-hidden');

      return () => {
         bodyEl.classList.remove('overflow-hidden');
      };
   }, []);

   return (
      <div
         className="fixed left-0 z-99 w-full bg-white"
         style={{
            top: `${elHeight}px`,
            height: `calc(100vh - ${elHeight}px)`,
         }}>
         <div className="container mx-auto h-full px-5 py-10">
            <div className="flex h-full w-full flex-col overflow-auto">
               <ul className="flex flex-col gap-6 text-lg font-medium text-neutral-700">
                  {siteConfig.navigations.map((item, index) => (
                     <li key={index}>
                        <Link
                           href={item.href}
                           onClick={() => {
                              setOpen(false);
                           }}
                           className="block w-full hover:text-blue-600">
                           {item.title}
                        </Link>
                     </li>
                  ))}
               </ul>

               <div className="mt-10">
                  <div className="flex items-center gap-4">
                     <a
                        href={siteConfig.socials.facebook}
                        target="_blank"
                        className="flex size-10 items-center justify-center border border-neutral-300">
                        <HugeiconsIcon
                           icon={Facebook02FreeIcons}
                           className="size-5 fill-neutral-700 text-transparent hover:fill-blue-600"
                        />
                     </a>
                     <a
                        href={siteConfig.socials.twitter}
                        target="_blank"
                        className="flex size-10 items-center justify-center border border-neutral-300">
                        <HugeiconsIcon
                           icon={TwitterFreeIcons}
                           className="size-5 fill-neutral-700 text-transparent hover:fill-blue-600"
                        />
                     </a>
                     <a
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        className="flex size-10 items-center justify-center border border-neutral-300">
                        <HugeiconsIcon
                           icon={Linkedin02FreeIcons}
                           className="size-5 fill-neutral-700 text-transparent hover:fill-blue-600"
                        />
                     </a>
                     <a
                        href={siteConfig.socials.instagram}
                        target="_blank"
                        className="flex size-10 items-center justify-center border border-neutral-300">
                        <HugeiconsIcon
                           icon={InstagramFreeIcons}
                           className="size-5 text-neutral-700 hover:text-blue-600"
                        />
                     </a>
                  </div>
               </div>
               <div className="mt-10">
                  <button className="inline-flex w-full items-center justify-center bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600">
                     Randevu Oluştur
                     <HugeiconsIcon
                        icon={ArrowUpRightFreeIcons}
                        className="ml-2"
                     />
                  </button>
               </div>

               <div className="mt-5 grid grid-cols-3 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                     <div key={item} className="h-24 w-full bg-neutral-200">
                        {/* Placeholder for Instagram image */}
                     </div>
                  ))}
               </div>

               {/* Footer */}
               <div className="mt-auto border-t border-neutral-300 pt-5 text-center text-sm text-neutral-500">
                  &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm
                  hakları saklıdır.
               </div>
            </div>
         </div>
      </div>
   );
}
