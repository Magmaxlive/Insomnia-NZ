import { Montserrat,Bebas_Neue } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBtn from "@/components/FloatingBtn";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  metadataBase: new URL("https://insomnia-nz.vercel.app/"),
  title: {
    default: "Aathi's INSOMNIA — Mentalism Live in Auckland",
    template: "%s | Aathi's INSOMNIA",
  },
  description:
    "Lie to him, we dare you. Mentalist Aathi reads your mind — live on stage. One extraordinary night at Dew Drop Events Centre, Auckland on Friday, 30 October 2026.",
  keywords: [
    "Aathi",
    "Aathi's Insomnia",
    "mentalism",
    "mentalist show",
    "Auckland",
    "New Zealand",
    "live show",
    "Dew Drop Events Centre",
    "mind reading",
    "stage show",
  ],
  authors: [{ name: "7 Entertainment & SOU Studio House" }],
  creator: "7 Entertainment & SOU Studio House",
  openGraph: {
    type: "website",
    url: "https://insomnia-nz.vercel.app/",
    title: "Aathi's INSOMNIA — Mentalism Live in Auckland",
    description:
      "One extraordinary night. Live on stage. Dew Drop Events Centre, Auckland · 30 October 2026.",
    siteName: "Aathi's INSOMNIA",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Aathi's INSOMNIA — Mentalism Live in Auckland",
      },
    ],
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aathi's INSOMNIA — Mentalism Live in Auckland",
    description:
      "Lie to him, we dare you. Live on stage · 30 October 2026 · Auckland.",
    images: ["/images/hero.webp"],
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2564257914398166');
          fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=2564257914398166&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Navbar/>
        {children}
        <FloatingBtn/>
        <Footer/>
      </body>
    </html>
  );
}
