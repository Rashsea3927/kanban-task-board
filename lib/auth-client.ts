import { getBaseURL } from '@/lib/get-base-url';
import { anonymousClient, inferAdditionalFields } from 'better-auth/client/plugins';
import { createAuthClient } from 'better-auth/react';
import { auth } from './auth';

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [anonymousClient(), inferAdditionalFields<typeof auth>()],
});
