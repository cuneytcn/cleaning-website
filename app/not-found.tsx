import { Home03FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export default function NotFound() {
   return (
      <section className="relative py-32 xl:py-44">
         <div className="container mx-auto px-5">
            <div className="jusce flex flex-col items-center">
               <h3 className="mb-5 text-center text-4xl font-medium text-blue-500">
                  Sorry Page Not Found
               </h3>
               <img
                  src="/images/image-404.png"
                  alt="not found"
                  className="h-auto max-w-full object-cover"
               />
               <Link
                  href={'/'}
                  className="mt-10 inline-flex items-center justify-center bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-700">
                  <HugeiconsIcon icon={Home03FreeIcons} className="mr-2" />
                  Return to homepage
               </Link>
            </div>
         </div>
      </section>
   );
}
