import { Metadata } from "next"


export const metadata:Metadata = {
  title: "Pricing Page",
  description: "This is the pricing page",
  keywords: ["ejemplo", "nextjs", "pricing"],
  openGraph: {
    title: "Pricing Page",
    description: "This is the pricing page",
    url: "https://example.com/pricing",
    siteName: "Example",
    images: [
      {
        url: "https://example.com/image.png",
        width: 800,
        height: 600,
        alt: "Image description",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Page",
    description: "This is the pricing page",
    images: ["https://example.com/image.png"],
    site: "@example",
    creator: "@example",
  },
  robots: {
    index: true,
    follow: true,
  },
}



export default function PricingPage(){
  return (
    <>
    <div className="text-3xl">
      Pricing Page  UNDER GENERAL
    </div>
    </>
  )
}