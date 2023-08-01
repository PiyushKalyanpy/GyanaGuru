import Link from 'next/link';
import { SidebarInterface } from '@/types/SidebarInterface';

const DashboardSidebarItem: React.FC<SidebarInterface> = (
  sidebarItemData: any,
) => {
  const { href, icon, label, badge, sidebarExpanded, selected, disabled } =
    sidebarItemData;

  return (
    <Link
      href={disabled ? '' : href}
      className={`${disabled ? 'opacity-50' : null}`}
    >
      <div
        className={`flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 ${
          selected ? 'bg-zinc-100 dark:bg-zinc-800' : ''
        }`}
      >
        <span className="material-symbols-outlined">{icon}</span>

        <span
          className={`${sidebarExpanded ? 'block' : 'hidden'} ${
            selected ? 'font-medium text-black' : 'text-zinc-600'
          }`}
        >
          {' '}
          {label}{' '}
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
