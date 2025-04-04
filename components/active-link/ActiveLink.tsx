'use client'; // to use usePathname from next/navigation and paint current page
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './ActiveLink.module.css';
export interface ActiveLinkProps {
  text: string;
  path: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  isActiveClass?: string; // applied when the link is active
  // baseClass?: string; // applied to all links
  isFiller?: boolean;
}
export const ActiveLink = ({
  icon,
  text,
  path,
  children,
  // baseClass, 
  // isActiveClass,
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
      // prefetch={false}
      className={`
        ${style.link}
        ${isActive ? style.active : ""}


      `}
    >
      {children}
      {text}
      {icon && (
        <span className={` ${style['icon-container']} `}>
          {icon}
        </span>
      )}
    </Link>
  );
}