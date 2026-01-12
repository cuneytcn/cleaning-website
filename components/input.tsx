'use client';

interface Props {
   type: 'text' | 'email' | 'password';
   label?: string;
   placeholder?: string;
   required?: boolean;
   error?: string;
}

export default function Input({
   type = 'text',
   label,
   placeholder,
   required,
   error,
   ...props
}: Props) {
   return (
      <div className="group">
         <span className="mb-1 inline-flex text-neutral-700">
            {label} {required && '(zorunlu)'}
         </span>
         <input
            {...props}
            type={type}
            placeholder={placeholder}
            required={required}
            className={`w-full border ${error ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-sm focus:border-blue-500 focus:outline-none`}
         />
         {error && (
            <span className="mt-1 block text-xs text-red-500">{error}</span>
         )}
      </div>
   );
}
