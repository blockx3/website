'use server';

import { RMQClient } from '@/lib/rabbit-mq';

export async function HandleContactUs({ email, message }: { email: string; message: string }) {
  try {
    await RMQClient.SendEmailToRMQ({
      email,
      message,
    });
    return {
      success: true,
      message: '',
    };
  } catch (error) {
    return {
      success: false,
      message: 'Failed to send email',
    };
  }
}
