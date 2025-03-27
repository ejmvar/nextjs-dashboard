'use client'; // to use usePathname from next/navigation and paint current page
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './ActiveLink.module.css';
export interface ActiveLinkProps {
  text: string;
  path: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  classSpecialItem?: string; // applied this item
  isActiveClass?: string; // applied when the link is active
  baseClass?: string; // applied to all links
}

export const ActiveLink = ({ icon,text, path, children,
  baseClass, isActiveClass, classSpecialItem }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      prefetch={true}
      onMouseEnter={() => { }}  // This ensures the prefetch behavior is triggered on hover
      className={`
                    // ${styles.activeLink}
                    ${isActive ? styles.active : styles.inactive}
                    ${styles.link}


                    
                    ${baseClass || ''} 
                    ${classSpecialItem || ''} 
                    // ${isActive ? { isActiveClass } : ''}
      
      `}
    >
      {children}
      {text}
      {icon && <span className="text-blue-200 underline">{icon}</span>}
      
    </Link>
  );
}