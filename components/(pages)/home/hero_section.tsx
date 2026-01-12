import {
   ArrowRight02FreeIcons,
   PlayCircle02Icon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export default function Herosection() {
   return (
      <section className="relative z-50 h-auto w-full bg-[url('/images/image-hero.png')] bg-cover bg-top bg-no-repeat py-52 pb-32">
         <div className="absolute inset-0 bg-linear-to-b from-black/70 to-black/30" />
         <div className="container mx-auto px-5">
            <div className="isolate ml-auto flex w-full max-w-2xl flex-col text-right text-balance xl:max-w-4xl">
               <h5 className="mb-5 text-lg font-medium text-white">
                  Profesyonel Temizlik Hizmetleri
               </h5>
               <h1 className="text-4xl font-bold text-white md:text-5xl xl:text-7xl/snug">
                  Bixol ile Temizliğin Keyfini Çıkarın !
               </h1>
               <p className="mt-10 text-white/70">
                  Bixol profesyonel temizlik hizmetleri sunar. <br /> Hijyen ve
                  memnuniyet garantisi ile çalışıyoruz.
               </p>
               <div className="mt-10 ml-auto inline-flex items-center gap-5">
                  <Link
                     href={'/'}
                     className="inline-flex items-center justify-center bg-white px-4 py-3 font-medium text-neutral-700 hover:bg-blue-100">
                     Randevu Oluştur
                     <HugeiconsIcon
                        icon={ArrowRight02FreeIcons}
                        className="ml-2"
                     />
                  </Link>
                  <a
                     href="https://www.youtube.com"
                     target="_blank"
                     className="relative flex size-16 items-center justify-center rounded-full bg-blue-500 before:absolute before:inset-0 before:top-1/2 before:left-1/2 before:-z-10 before:size-12 before:-translate-x-1/2 before:-translate-y-1/2 before:animate-ping before:rounded-full before:bg-blue-500">
                     <HugeiconsIcon
                        icon={PlayCircle02Icon}
                        className="size-8 text-white"
                     />
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
}
