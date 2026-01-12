import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET: List all appointments
export async function GET() {
   try {
      const appointments = await prisma.appointment.findMany({
         orderBy: { createdAt: 'desc' },
      });
      return NextResponse.json(appointments);
   } catch (error) {
      return NextResponse.json(
         { error: 'Failed to fetch appointments' },
         { status: 500 }
      );
   }
}

// POST: Create a new appointment
export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { name, email, phone, service, message } = body;

      if (!name || !email || !phone || !service || !message) {
         return NextResponse.json(
            { error: 'Missing required fields' },
            { status: 400 }
         );
      }

      const appointment = await prisma.appointment.create({
         data: {
            name,
            email,
            phone,
            service,
            message,
         },
      });
      return NextResponse.json(appointment, { status: 201 });
   } catch (error) {
      return NextResponse.json(
         { error: 'Failed to create appointment' },
         { status: 500 }
      );
   }
}
