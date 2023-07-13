import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface IDashboardSidebarItem {
  href: string
  icon: string
  label: string
  badge?: string
  selected?: boolean
  sidebarExpanded?: boolean
  disabled?: boolean
  onItemClick?: () => void
}

const DashboardSidebarItem: React.FC<IDashboardSidebarItem> = ({
  href,
  icon,
  label,
  badge,
  sidebarExpanded,
  selected,
  disabled,
  onItemClick = () => {}
}) => {
  const handleClick = (e: any) => {
    disabled ? e.preventDefault : onItemClick()
  }

  return (
    <Link href={disabled ? "" : href} className={`${disabled ? "opacity-50" : null}`}>
      <div
        onClick={handleClick}
        className={`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
          selected ? 'bg-zinc-200 dark:bg-zinc-800' : ''
        }`}
      >
        <span className='material-symbols-outlined'>{icon}</span>
        <span className={`${sidebarExpanded ? 'hidden' : 'block'}`}>
          {label}
        </span>
        {badge && (
          <span className='ml-auto'>
            <span className='px-2 py-1 text-xs text-white bg-red-500 rounded-full'>
              {badge}
            </span>
          </span>
        )}
      </div>
    </Link>
  )
}

export default DashboardSidebarItem
