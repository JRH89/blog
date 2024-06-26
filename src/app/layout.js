import "./globals.css"
import { cx } from "@/src/utils"
import { Inter, Manrope } from "next/font/google"
import Header from "@/src/components/Header"
import Footer from "../components/Footer"
import siteMetadata from "../utils/siteMetaData"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

          <meta name="keywords" content="javascript, python, blog, software development, seo, web development, software engineer, software engineer blog, seo blog, web development blog, unreal engine" />

        <meta
          name="google-site-verification"
          content="94IN99LAWmrXJfd0QuFFwdRCGEGyEep99Cx0-GGRiPQ"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7MTT3S84F1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7MTT3S84F1');
            `,
          }}
        />
      </head>
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
        </Script>
        <Header />
        {children}
        <SpeedInsights/>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
