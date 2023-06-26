import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

export interface IDashboardSidebarItem {
  href: string;
  icon: string;
  label: string;
  badge?: string;
  selected?: boolean;
  sidebarExpanded?: boolean;
  onItemClick?: () => void;
}

const DashboardSidebarItem: React.FC<IDashboardSidebarItem> = ({
  href,
  icon,
  label,
  badge,
  sidebarExpanded,
  selected,
  onItemClick,
}) => {
  return (
    <Link href={href} className="w-full">
      <div
        onClick={onItemClick}
        className={`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
          selected ? 'bg-zinc-100 dark:bg-zinc-800' : ''
        }`}
      >
        <span className="material-icons-outlined">{icon}</span>
        <span className={`${sidebarExpanded ? 'hidden' : 'block'}`}>
          {label}
        </span>
        {badge && (
          <span className="ml-auto">
            <span className="px-2 py-1 text-xs text-white bg-red-500 rounded-full">
              {badge}
            </span>
          </span>
        )}
      </div>
    </Link>
  );
};

export default DashboardSidebarItem;
