import { ArrowRight01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
   img: string;
   icon: ReactNode | string;
   title: string;
   description: string;
   href?: string;
}

export default function Inset({ img, icon, title, description, href }: Props) {
   return (
      <figure className="group relative border border-neutral-100 bg-white shadow">
         <img src={img} alt={title} className="h-auto w-full object-cover" />

         <figcaption className="mt-5 flex flex-col gap-5 p-5 xl:flex-row">
            {icon}

            <div>
               <h3 className="mb-2 text-xl font-semibold text-blue-500">
                  {title}
               </h3>
               <p className="mb-5 line-clamp-2 text-neutral-700">
                  {description}
               </p>
               <Link
                  href={href ?? '#'}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-500 p-0.5">
                     <HugeiconsIcon
                        icon={ArrowRight01FreeIcons}
                        strokeWidth={2}
                        className="size-5 text-white"
                     />
                  </span>
                  Read more
               </Link>
            </div>
         </figcaption>
      </figure>
   );
}
