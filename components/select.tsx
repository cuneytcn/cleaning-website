'use client';

import { ArrowDown01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useRef, useState } from 'react';

type Options = {
   label: string;
   value: string;
};

interface Props {
   options: Options[];
   label?: string;
   placeholder?: string;
   required?: boolean;
   value?: string | null;
   onChange?: (value: string) => void;
   error?: string;
}

export default function Select({
   options,
   label,
   placeholder,
   required,
   value,
   onChange,
   error,
   ...props
}: Props) {
   const [open, setOpen] = useState(false);
   const ref = useRef<HTMLDivElement>(null);

   const selected = value ?? null;
   const selectedOption = options.find((option) => option.value === selected);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
   }, []);

   return (
      <div ref={ref} className="group relative">
         <span className="mb-1 inline-flex text-neutral-700">
            {label} {required && '(zornlu)'}
         </span>

         <>
            <button
               type="button"
               onClick={() => setOpen(!open)}
               className={`flex w-full cursor-pointer items-center justify-between border ${error ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 text-left text-sm text-neutral-700 focus:border-blue-500 focus:outline-none`}>
               {selectedOption ? selectedOption.label : placeholder}
               <HugeiconsIcon
                  icon={ArrowDown01FreeIcons}
                  className={`size-4 transition-all ${open ? 'rotate-180' : ''}`}
               />
            </button>

            <input
               {...props}
               type="hidden"
               placeholder={placeholder}
               required={required}
            />

            {open && (
               <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto border border-neutral-300 bg-white">
                  {options.map((option) => (
                     <li
                        key={option.value}
                        className="cursor-pointer px-4 py-2 text-sm text-neutral-700 hover:bg-blue-100"
                        onClick={() => {
                           if (onChange) onChange(option.value);
                           setOpen(false);
                        }}>
                        {option.label}
                     </li>
                  ))}
               </ul>
            )}
            {error && (
               <span className="mt-1 block text-xs text-red-500">{error}</span>
            )}
         </>
      </div>
   );
}
