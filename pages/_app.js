import '@/styles/globals.css';
import 'styles/stats.css';
import { SessionProvider } from 'next-auth/react';
import NextNProgress from 'nextjs-progressbar';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <NextNProgress
        color="linear-gradient(90deg, #b656cb, #10a1a0)"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
    </SessionProvider>
  );
}
