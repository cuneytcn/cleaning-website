import Link from 'next/link';

interface Props {
   img: string;
   title: string;
   description: string;
   href?: string;
}

export default function Card({ img, title, description, href }: Props) {
   return (
      <div className="group relative flex items-center gap-5 border border-neutral-100 bg-white p-10 text-center shadow md:flex-col xl:flex-row xl:text-start">
         <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />
         <div className="hidden size-20 shrink-0 items-center justify-center rounded-full bg-neutral-100 sm:flex">
            <img
               src={img}
               alt={title}
               className="h-12 max-w-full object-cover"
            />
         </div>
         <div className="w-full">
            <h3 className="mb-2 text-xl font-semibold text-blue-500">
               {title}
            </h3>
            <p className="line-clamp-2 text-neutral-700">{description}</p>
         </div>
         <Link href={href ?? '#'} className="absolute inset-0 z-10" />
      </div>
   );
}
