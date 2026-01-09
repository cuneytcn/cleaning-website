import { siteConfig } from '@/config/site.config';
import {
   ArrowRight02FreeIcons,
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

export default function Navbar() {
   return (
      <header>
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

         <div className="bg-white">
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
                        Appointment
                        <HugeiconsIcon
                           icon={ArrowRight02FreeIcons}
                           className="ml-2"
                        />
                     </Link>
                  </nav>

                  <button
                     type="button"
                     className="flex size-10 items-center justify-center xl:hidden">
                     <HugeiconsIcon
                        icon={Menu02FreeIcons}
                        className="size-7 rotate-180 text-neutral-700"
                     />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
}
