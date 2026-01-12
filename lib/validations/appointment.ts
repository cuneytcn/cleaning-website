import z from 'zod';

export const appointmentSchema = z.object({
   name: z.string().min(2, 'Ad soyad en az 2 karakter olmalıdır.'),
   email: z.string().email('Lütfen geçerli bir email adresi giriniz.'),
   phone: z
      .string()
      .refine((val) => /^0\d{10}$/.test(val), {
         message:
            'Telefon numarası 0 ile başlamalı ve 11 haneli olmalıdır (örneğin 05XXXXXXXXX).',
      })
      .transform((val) => val.replace(/\s/g, '')),
   service: z.string().min(1, 'Lütfen bir hizmet seçiniz.'),
   message: z.string().min(10, 'En az 10 karakter girilmelidir.'),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
