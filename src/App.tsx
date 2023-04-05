import { RecoilRoot} from 'recoil';

import { MyQueryProvider } from './Provider';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MyQueryProvider>
        <Component {...pageProps} />
      </MyQueryProvider>
    </RecoilRoot>
  )
}

export default MyApp;
