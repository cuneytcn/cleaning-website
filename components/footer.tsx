import { siteConfig } from '@/config/site.config';

export default function Footer() {
   return (
      <footer className="pt-10">
         <div className="bg-blue-500 pt-20 pb-10">
            <div className="container mx-auto px-5">
               <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                  <div>
                     <h4 className="mb-5 text-2xl font-medium text-white">
                        About Us
                     </h4>
                     <p className="text-white/90">
                        We are a leading cleaning company dedicated to providing
                        top-notch services to our clients. Our team of
                        professionals is committed to ensuring your space is
                        spotless and welcoming.
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-5 text-2xl font-medium text-white">
                        Services
                     </h4>
                     <ul className="space-y-2 text-white/90">
                        {siteConfig.services.map((service, index) => (
                           <li key={index}>{service}</li>
                        ))}
                     </ul>
                  </div>
                  <div>
                     <h4 className="mb-5 text-2xl font-medium text-white">
                        Contact Us
                     </h4>
                     <p className="text-white/90">{siteConfig.address}</p>
                     <p className="mt-2 text-white/90">
                        Phone: {siteConfig.call.phone}
                     </p>
                     <p className="mt-2 text-white/90">
                        Email:
                        <a
                           href={`mailto:${siteConfig.message.email}`}
                           className="text-white/90 underline">
                           {siteConfig.message.email}
                        </a>
                     </p>
                  </div>
                  <div>
                     <h4 className="mb-5 text-2xl font-medium text-white">
                        Instagram
                     </h4>
                     <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                           <div
                              key={item}
                              className="h-20 w-full bg-white/30 hover:bg-white/50">
                              {/* Placeholder for Instagram image */}
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-white">
            <div className="container mx-auto px-5">
               <div className="border-t border-neutral-200 py-5 text-center text-sm text-neutral-600">
                  © {new Date().getFullYear()} Cleaning Company. All rights
                  reserved.
               </div>
            </div>
         </div>
      </footer>
   );
}
