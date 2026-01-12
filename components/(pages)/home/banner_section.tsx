import { ArrowRight02FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export default function BannerSection() {
   return (
      <section className="relative my-10 bg-[url('/images/image-banner-bg.png')] bg-cover bg-fixed bg-top-left bg-no-repeat py-32">
         <div className="absolute inset-0 bg-[url('/images/image-banner-overlay.png')] bg-cover bg-right bg-no-repeat md:bg-center" />
         <div className="container mx-auto px-5">
            <div className="isolate grid gap-10 md:grid-cols-2">
               <div className="hidden md:block" />
               <div className="text-balance">
                  <h3 className="mb-5 text-3xl font-semibold text-white">
                     Ekip üyelerimizden biriyle çalışmak ister misiniz?
                  </h3>
                  <p className="mb-10 text-white opacity-80">
                     Yaptığımız işi seviyoruz ve bunu tutkuyla yapıyoruz.
                     Mesajın deneysel yapısını ve akıllı teşvikleri önemsiyoruz.
                     Her projemizde mükemmelliği hedefliyoruz.
                  </p>
                  <Link
                     href={'/'}
                     className="inline-flex items-center justify-center bg-white px-4 py-3 font-medium text-neutral-700 hover:bg-blue-100">
                     Daha Fazla Bilgi
                     <HugeiconsIcon
                        icon={ArrowRight02FreeIcons}
                        className="ml-2"
                     />
                  </Link>
               </div>
            </div>
         </div>
      </section>
   );
}
