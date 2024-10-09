'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HandleContactUs } from '@/app/actions/rabbitmq';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(8, { message: 'Message must be at least 8 characters long' }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const result = await HandleContactUs(data);
      if (result.success) {
        toast({
          title: 'Message sent!',
          description: "We'll get back to you as soon as possible.",
        });
        reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Card className="mx-auto w-full max-w-4xl overflow-hidden rounded-none bg-transparent transition-all duration-500">
      <CardHeader className="bg-transparent p-10 text-center">
        <CardTitle className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
          Contact Us
        </CardTitle>
        <CardDescription className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          We would love to hear from you! Drop us a message and we will respond promptly.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Your email"
              {...register('email')}
              className={`w-full rounded-lg border px-4 py-3 text-lg focus:border-transparent focus:ring-4 focus:ring-blue-400 ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-3">
            <Textarea
              placeholder="Your message"
              {...register('message')}
              className={`w-full rounded-lg border px-4 py-3 text-lg focus:border-transparent focus:ring-4 focus:ring-blue-400 ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={5}
            />
            {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <Button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
