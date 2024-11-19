import client from '@/lib/axios';
import type { AxiosError } from 'axios';
import { apiRequestParams, UnknownObjectType } from '@/types';
import { subscriptionFormData } from './models';
import { useMutation } from '@tanstack/react-query';

export const useNotifyMeApi = ({ onError, onSuccess }: apiRequestParams) => {
  const { mutate: notifyMe, isPending: isLoading } = useMutation({
    mutationFn: async ({ name, email }: subscriptionFormData) => {
      const { data } = await client.post('/subscriptions', { email_address: email, name });
      return data;
    },
    onSuccess,
    onError: (err: AxiosError) => onError?.((err?.response?.data as UnknownObjectType)?.message),
  });

  return {
    notifyMe,
    isLoading,
  };
};
