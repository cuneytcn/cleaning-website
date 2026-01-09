export default function MapSection() {
   return (
      <section className="py-10">
         <div className="">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sen!2sus!4v1767983790650!5m2!1sen!2sus"
               width="600"
               height="450"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="h-96 w-full contrast-125 grayscale"
            />
         </div>
      </section>
   );
}
