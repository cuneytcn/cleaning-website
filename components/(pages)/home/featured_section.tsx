import Inset from '@/components/inset';
import {
   Car01FreeIcons,
   Office365Icon,
   PaintBucketFreeIcons,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function FeaturedSection() {
   return (
      <section className="py-10">
         <div className="bg-neutral-100 py-10">
            <div className="container mx-auto px-5">
               <div className="mx-auto max-w-xl pt-12 pb-32 text-center">
                  <h4 className="mb-5 text-2xl font-medium opacity-80">
                     Öne Çıkan Hizmetler
                  </h4>
                  <h2 className="mb-5 text-4xl font-semibold text-blue-500">
                     Neden hizmetlerimizi seçmelisiniz ?
                  </h2>
               </div>
            </div>
         </div>
         <div className="-mt-32">
            <div className="container mx-auto px-5">
               <div className="grid gap-5 md:grid-cols-3">
                  <Inset
                     img="/images/image-feature-1.png"
                     icon={
                        <HugeiconsIcon
                           icon={PaintBucketFreeIcons}
                           strokeWidth={1}
                           className="size-12 text-blue-500 xl:size-20"
                        />
                     }
                     title="Kapı Temizliği"
                     description="Personelimiz alanında uzman, iyi eğitimli profesyonellerdir."
                     href="/"
                  />
                  <Inset
                     img="/images/image-feature-2.png"
                     icon={
                        <HugeiconsIcon
                           icon={Car01FreeIcons}
                           strokeWidth={1}
                           className="size-12 text-blue-500 xl:size-20"
                        />
                     }
                     title="Araç Temizliği"
                     description="Personelimiz alanında uzman, iyi eğitimli profesyonellerdir."
                     href="/"
                  />
                  <Inset
                     img="/images/image-feature-3.png"
                     icon={
                        <HugeiconsIcon
                           icon={Office365Icon}
                           strokeWidth={1}
                           className="size-12 text-blue-500 xl:size-20"
                        />
                     }
                     title="Ofis Temizliği"
                     description="Personelimiz alanında uzman, iyi eğitimli profesyonellerdir."
                     href="/"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
