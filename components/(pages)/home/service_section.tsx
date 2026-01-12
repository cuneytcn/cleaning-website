import Card from '@/components/card';

export default function ServiceSection() {
   return (
      <section className="relative z-50 py-10 xl:-mt-20">
         <div className="container mx-auto px-5">
            <div className="grid gap-5 md:grid-cols-3">
               <Card
                  img={`/images/image-service-1.png`}
                  title={`Ev Temizliği`}
                  description="Evleriniz için profesyonel temizlik hizmetleri sunuyoruz. Hijyen ve memnuniyet garantisi ile çalışıyoruz."
               />
               <Card
                  img={`/images/image-service-2.png`}
                  title={`Ofis Temizliği`}
                  description="Ofislerinizde hijyenik ve düzenli bir çalışma ortamı sağlıyoruz. Profesyonel ekiplerimizle hizmetinizdeyiz."
               />{' '}
               <Card
                  img={`/images/image-service-3.png`}
                  title={`Pencere Temizliği`}
                  description="Pencerelerinizde profesyonel temizlik hizmetleri sunuyoruz. Temiz ve parlak camlar için bize güvenin."
               />
            </div>
         </div>
      </section>
   );
}
