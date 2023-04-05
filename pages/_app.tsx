import type { AppProps } from 'next/app';

export default function MyOpenAi({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
