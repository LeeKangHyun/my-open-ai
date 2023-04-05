import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function MyQueryProvider({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      mutations: {},
      queries: {
        refetchOnWindowFocus: false,
      }
  }
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position='bottom-right' />
    </QueryClientProvider>
  )
}

export default MyQueryProvider;
