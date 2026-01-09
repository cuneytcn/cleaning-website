'use client';

interface Props {
   name: string;
   value?: string;
   type: 'text' | 'email' | 'password';
   label?: string;
   placeholder?: string;
   required?: boolean;
   onChange?: (value: string) => void;
}

export default function Input({
   name,
   value,
   type = 'text',
   label,
   placeholder,
   required,
   onChange,
}: Props) {
   return (
      <div className="group">
         <span className="mb-1 inline-flex text-neutral-700">
            {label} {required && '(required)'}
         </span>
         <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            className="w-full border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-sm focus:border-blue-500 focus:outline-none"
            onChange={(e) => onChange?.(e.target.value)}
         />
      </div>
   );
}
