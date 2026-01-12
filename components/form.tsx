'use client';

import {
   AppointmentFormData,
   appointmentSchema,
} from '@/lib/validations/appointment';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loading03FreeIcons, SentFreeIcons } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Input from './input';
import Select from './select';
import Toast from './toast';

export default function Form() {
   const [toast, setToast] = useState<{
      message: string;
      type?: 'success' | 'error' | 'info';
   } | null>(null);

   const form = useForm<AppointmentFormData>({
      resolver: zodResolver(appointmentSchema),
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         service: '',
         message: '',
      },
   });

   const {
      register,
      handleSubmit,
      control,
      reset,
      formState: { errors, isSubmitting },
   } = form;

   const onSubmit: SubmitHandler<AppointmentFormData> = async (data) => {
      try {
         const res = await fetch('/api/appointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
         });
         if (!res.ok) {
            const err = await res.json();
            setToast({
               message: err.error || 'Kayıt sırasında bir hata oluştu.',
               type: 'error',
            });
            return;
         }
         setToast({ message: 'Form başarıyla gönderildi!', type: 'success' });
         reset();
      } catch (e) {
         setToast({
            message: 'Kayıt sırasında bir hata oluştu.',
            type: 'error',
         });
      }
   };

   return (
      <>
         {toast && (
            <Toast
               message={toast.message}
               type={toast.type}
               onClose={() => setToast(null)}
            />
         )}
         <form
            className="grid gap-5 md:grid-cols-2"
            onSubmit={handleSubmit(onSubmit)}>
            <Input
               {...register('name')}
               type="text"
               label="Ad soyad"
               placeholder="Ad soyad*"
               required
               error={errors.name?.message}
            />

            <Input
               {...register('email')}
               type="email"
               label="Email adres"
               placeholder="Email adres*"
               required
               error={errors.email?.message}
            />

            <Input
               {...register('phone')}
               type="text"
               label="Telefon Numarası"
               placeholder="Telefon numaranız*"
               required
               error={errors.phone?.message}
            />

            <Controller
               name="service"
               control={form.control}
               render={({ field }) => (
                  <Select
                     label="Hizmet Seçimi"
                     placeholder="Hizmet seçiniz"
                     required
                     options={[
                        { label: 'Temizlik Hizmeti', value: 'cleaning' },
                        { label: 'Danışmanlık Hizmeti', value: 'consulting' },
                        { label: 'Destek Hizmeti', value: 'support' },
                     ]}
                     value={field.value}
                     onChange={field.onChange}
                     error={errors.service?.message}
                  />
               )}
            />

            <div className="group col-span-full">
               <span className="mb-1 inline-flex text-neutral-700">
                  Mesaj (zorunlu)
               </span>

               <textarea
                  {...register('message')}
                  placeholder="Mesajınız*"
                  required
                  className={`h-32 w-full border ${errors.message ? 'border-red-500' : 'border-neutral-300'} bg-white px-4 py-3 text-sm text-neutral-700 placeholder:text-sm focus:border-blue-500 focus:outline-none md:col-span-2`}></textarea>
               {errors.message && (
                  <span className="mt-1 block text-xs text-red-500">
                     {errors.message.message}
                  </span>
               )}
            </div>
            <button
               type="submit"
               className="inline-flex w-full cursor-pointer items-center justify-center bg-blue-500 px-4 py-3 text-white hover:bg-blue-600 md:col-span-2">
               {isSubmitting ? (
                  <>
                     Message Sending{' '}
                     <HugeiconsIcon
                        icon={Loading03FreeIcons}
                        strokeWidth={2}
                        className="ml-2 size-4"
                     />
                  </>
               ) : (
                  <>
                     Send Message{' '}
                     <HugeiconsIcon
                        icon={SentFreeIcons}
                        strokeWidth={2}
                        className="ml-2 size-4"
                     />
                  </>
               )}
            </button>
         </form>
      </>
   );
}
