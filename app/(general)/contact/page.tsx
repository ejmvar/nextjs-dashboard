import { Metadata } from 'next';


export const metadata:Metadata = {
  title: "Contact Page",
  description: "This is the contact page",
  keywords: ["ejemplo", "nextjs", "contact"],
}


export default function ContactPage() {
  return (
    <>
      <div className="text-3xl"> Contact Page 
      UNDER GENERAL </div>
    </>
  );
};