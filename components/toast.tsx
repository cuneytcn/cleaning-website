'use client';
import { useEffect, useState } from 'react';

interface ToastProps {
   message: string;
   type?: 'success' | 'error' | 'info';
   duration?: number;
   onClose?: () => void;
}

export default function Toast({
   message,
   type = 'info',
   duration = 3000,
   onClose,
}: ToastProps) {
   const [visible, setVisible] = useState(true);

   useEffect(() => {
      if (!visible) return;
      const timer = setTimeout(() => {
         setVisible(false);
         onClose?.();
      }, duration);
      return () => clearTimeout(timer);
   }, [visible, duration, onClose]);

   if (!visible) return null;

   let bg = 'bg-neutral-800';
   if (type === 'success') bg = 'bg-green-600';
   if (type === 'error') bg = 'bg-red-600';
   if (type === 'info') bg = 'bg-blue-600';

   return (
      <div
         className={`fixed bottom-6 left-1/2 z-50 -translate-x-1/2 px-6 py-3 text-white shadow-lg transition-all ${bg}`}
         role="alert">
         {message}
      </div>
   );
}
