import '@/css/tailwind.css'
import '@/css/prism.css'
import nProgress from "nprogress";
import { Router } from "next/router";

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import "/css/np.css"
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import 'remixicon/fonts/remixicon.css'

import CommandBar from '../components/CommandBar'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);
export default function App({ Component, pageProps }) {
  return (
    <CommandBar>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />   
    
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ThemeProvider>
    </CommandBar>
  )
}
