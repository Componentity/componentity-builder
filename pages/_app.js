import '../styles/globals.css'
import Router from 'next/router'
import NProgress from 'nprogress' //nprogress module
import 'nprogress/nprogress.css' //styles of nprogress
import Layout from './../components/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import AnnouncementContext from './../components/context/announcement-context'
import React, { useState } from 'react'
import { DefaultSeo } from 'next-seo'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      keepPreviousData: true
    }
  }
})
//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// https://medium.com/@SandeepDinesh/eliminating-next-js-isr-builds-with-client-side-rendering-2c30ee198831
// If a page navigation takes longer than 100ms to complete, abort the SPA routing and do a full page refresh.

Router.onRouteChangeStart = (url) => {
  if (url !== window.location.pathname) {
    window.routeTimeout = setTimeout(() => (window.location = url), 100)
    NProgress.start()
  }
}
Router.onRouteChangeComplete = () => {
  clearTimeout(window.routeTimeout)
  NProgress.done()
}

function MyApp({ Component, pageProps }) {
  const [announcement, setAnnouncement] = useState(true)
  const annoucementValue = { announcement, setAnnouncement }
  return (
    <QueryClientProvider client={queryClient}>
      <AnnouncementContext.Provider value={annoucementValue}>
        <Layout>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: 'https://www.componentity.com/',
              site_name: 'Componentity'
            }}
            twitter={{
              handle: '@componentity',
              site: '@componentity',
              cardType: 'summary_large_image'
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </AnnouncementContext.Provider>
    </QueryClientProvider>
  )
}

export default MyApp
