'use client'; // to use usePathname from next/navigation and paint current page
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './ActiveLink.module.css';
export interface ActiveLinkProps {
  text: string;
  path: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isActiveClass?: string; // applied when the link is active
  baseClass?: string; // applied to all links
  isFiller?: boolean;
}
export const ActiveLink = ({ 
  icon,
  text, 
  path, 
  children,
  baseClass, 
  isActiveClass,
  isFiller
}: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;
  
  // If this is a filler item, just return a spacer div
  if (isFiller) {
    return <div className="flex-1"></div>;
  }
  
  return (
    <Link
      href={path}
      prefetch={true}
      className={`
        flex items-center justify-center m-2 p-2 rounded-lg 
        max-w-[200px] border-4 border-double 
        ${isActive 
          ? 'bg-blue-600 text-white border-white' 
          : 'bg-blue-600 opacity-50 text-white border-red-500 hover:opacity-70 hover:border-white hover:bg-gray-500 hover:underline'
        }
        ${baseClass || ''} 
      `}
    >
      {children}
      {text}
      {icon && (
        <span className="h-6 w-6 mx-2 flex border-white border-5 border-double">
          {icon}
        </span>
      )}
    </Link>
  );
}