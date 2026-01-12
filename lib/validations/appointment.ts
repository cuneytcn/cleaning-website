import z from 'zod';

export const appointmentSchema = z.object({
   name: z.string().min(2, 'Name is must be 2 characters.'),
   email: z.string().email('Please enter a valid email address.'),
   phone: z
      .string()
      .refine((val) => /^0\d{10}$/.test(val), {
         message:
            'Phone number must start with 0 and be 11 digits (e.g. 05XXXXXXXXX).',
      })
      .transform((val) => val.replace(/\s/g, '')),
   service: z.string().min(1, 'Please seelct a service.'),
   message: z.string().min(10, 'You must enter a minimum of 10 characters.'),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
