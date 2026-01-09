import Card from '@/components/card';

export default function ServiceSection() {
   return (
      <section className="relative z-50 py-10 xl:-mt-20">
         <div className="container mx-auto px-5">
            <div className="grid gap-5 md:grid-cols-3">
               <Card
                  img={`/images/image-service-1.png`}
                  title={`House Cleaning`}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
               />
               <Card
                  img={`/images/image-service-2.png`}
                  title={`Indoor Cleaning`}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
               />{' '}
               <Card
                  img={`/images/image-service-3.png`}
                  title={`Office Cleaning`}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
               />
            </div>
         </div>
      </section>
   );
}
