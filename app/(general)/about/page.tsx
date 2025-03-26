import type { Metadata } from "next";


export const metadata:Metadata = {
  title: "About Page",
  description: "This is the about page",
  keywords: ["ejemplo", "nextjs", "about"],
};



export default function AboutPage() {
  return (
    <>
      <div> About Page UNDER GENERAL </div>
    </>
  )
};