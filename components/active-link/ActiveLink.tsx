'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface ActiveLinkProps {
  text: string;
  path: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  classSpecialItem?: string; // applied this item
  isActiveClass?: string; // applied when the link is active
  baseClass?: string; // applied to all links
}

export const ActiveLink = ({ text, path, children, 
  baseClass, isActiveClass,classSpecialItem }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      prefetch={true}
      onMouseEnter={() => { }}  // This ensures the prefetch behavior is triggered on hover
      className={`  ${baseClass || ''} 
                    ${classSpecialItem || ''} 
                    ${isActive ? { isActiveClass } : ''}
      
      `}
    >
      {children}
      {text}
      {/* {isActive && <span className="text-blue-200 underline"> (active)</span>} */}
    </Link>
  );
}