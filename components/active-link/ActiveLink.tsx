'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ActiveLinkProps {
  text: string;
  path: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  classNamePropNN?: string;
  isActiveClass?: string;
}

export const ActiveLink = ({ text, path, children, classNamePropNN, isActiveClass }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      prefetch={true}
      onMouseEnter={() => { }}  // This ensures the prefetch behavior is triggered on hover
      className={`  ${classNamePropNN} ${isActive ? {isActiveClass} : ''}
      
      `}
    >
      {children}
      {text}
    </Link>
  );
}