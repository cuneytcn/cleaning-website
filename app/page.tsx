import AboutSection from '@/components/(pages)/home/about_section';
import BannerSection from '@/components/(pages)/home/banner_section';
import ContactSection from '@/components/(pages)/home/contact_section';
import FeaturedSection from '@/components/(pages)/home/featured_section';
import Herosection from '@/components/(pages)/home/hero_section';
import MapSection from '@/components/(pages)/home/map_section';
import ServiceSection from '@/components/(pages)/home/service_section';

export default function Page() {
   return (
      <main>
         <Herosection />
         <ServiceSection />
         <AboutSection />
         <FeaturedSection />
         <BannerSection />
         <ContactSection />
         <MapSection />
      </main>
   );
}
