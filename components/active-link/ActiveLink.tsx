'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  text: string;
  path: string;
  children?: React.ReactNode;
  className?: string;
}

export const ActiveLink = ({ text, path, children, className }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link 
      href={path}
      className={`${className} ${isActive ? 'text-blue-200 underline' : ''}`}
    >
      {children}
      {text}
    </Link>
  );
}