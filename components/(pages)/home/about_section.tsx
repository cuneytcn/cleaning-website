import {
   ArrowRight02FreeIcons,
   Award01FreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import Link from 'next/link';

export default function AboutSection() {
   return (
      <section className="py-10">
         <div className="container mx-auto px-5">
            <div className="grid gap-10 lg:grid-cols-2">
               <div className="relative pr-12">
                  <img
                     src="/images/image-about-square.png"
                     alt="About us"
                     className="h-auto max-w-full object-cover"
                  />
                  <div className="absolute top-4 right-0 bg-blue-500 p-5">
                     <div className="flex flex-col gap-5 xl:flex-row xl:items-center">
                        <div className="inline-flex w-fit rounded-full bg-white p-3 text-blue-500">
                           <HugeiconsIcon
                              icon={Award01FreeIcons}
                              className="size-10"
                           />
                        </div>
                        <div className="text-white">
                           <p className="text-2xl font-bold">25+</p>
                           <p className="text-sm">Yıllık Deneyim</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  <h4 className="mb-5 text-2xl font-medium text-blue-500 opacity-80">
                     Temizlik Ajansı Hakkında
                  </h4>
                  <h2 className="mb-5 text-4xl font-semibold text-blue-500">
                     İyi hizmet almak için bize güvenebilirsiniz
                  </h2>
                  <h5 className="mb-5 font-bold text-blue-500">
                     Müşterilerimize en iyi deneyimi sunmak için optimize
                     edilmiştir.
                  </h5>
                  <p className="mb-10 text-neutral-700">
                     Temizlik Ajansı, 25 yılı aşkın süredir profesyonel temizlik
                     hizmetleri sunmaktadır. Müşteri memnuniyetini en üst düzeye
                     çıkarmak için titizlikle çalışıyor ve her türlü temizlik
                     ihtiyacınızı karşılıyoruz. Ev temizliğinden ofis
                     temizliğine, pencere temizliğinden inşaat sonrası temizliğe
                     kadar geniş bir yelpazede hizmet veriyoruz.
                  </p>
                  <Link
                     href={'/'}
                     className="inline-flex items-center justify-center bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600">
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
