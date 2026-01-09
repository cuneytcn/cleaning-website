'use client';

import { ArrowDown01FreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useEffect, useRef, useState } from 'react';

interface Props {
   name: string;
   options: { label: string; value: string }[];
   label?: string;
   placeholder?: string;
   required?: boolean;
   onChange?: (value: string) => void;
}

export default function Select({
   name,
   options,
   label,
   placeholder,
   required,
   onChange,
}: Props) {
   const [open, setOpen] = useState(false);
   const [selected, setSelected] = useState<string | null>(null);
   const ref = useRef<HTMLDivElement>(null);

   const selectedOption = options.find((option) => option.value === selected);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (ref.current && !ref.current.contains(event.target as Node)) {
            setOpen(false);
         }
      };

      document.addEventListener('mousedown', handleClickOutside);
   }, []);

   useEffect(() => {
      onChange?.(selected!);
   }, [selected, onChange]);

   return (
      <div ref={ref} className="group relative">
         <span className="mb-1 inline-flex text-neutral-700">
            {label} {required && '(required)'}
         </span>

         <>
            <button
               type="button"
               onClick={() => setOpen(!open)}
               className="flex w-full cursor-pointer items-center justify-between border border-neutral-300 bg-white px-4 py-3 text-left text-sm text-neutral-700 focus:border-blue-500 focus:outline-none">
               {selectedOption ? selectedOption.label : placeholder}
               <HugeiconsIcon
                  icon={ArrowDown01FreeIcons}
                  className={`size-4 transition-all ${open ? 'rotate-180' : ''}`}
               />
            </button>
            {open && (
               <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto border border-neutral-300 bg-white">
                  {options.map((option) => (
                     <li
                        key={option.value}
                        className="cursor-pointer px-4 py-2 text-sm text-neutral-700 hover:bg-blue-100"
                        onClick={() => {
                           setSelected(option.value);
                           setOpen(false);
                        }}>
                        {option.label}
                     </li>
                  ))}
               </ul>
            )}
         </>

         <select
            name={name}
            id={name}
            className="sr-only"
            value={selected ?? ''}
            onChange={(e) => setSelected(e.target.value)}>
            <option value="" disabled>
               {placeholder}
            </option>
            {options.map((option) => (
               <option key={option.value} value={option.value}>
                  {option.label}
               </option>
            ))}
         </select>
      </div>
   );
}
