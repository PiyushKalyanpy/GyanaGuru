import Link from 'next/link';
import { UserAuth } from '@/context/authContext';
import SidebarItem from './SidebarItem';
import { SidebarInterface } from '@/types/SidebarInterface';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  showInstructor?: Boolean;
  sidebarItemData: SidebarInterface[];
}

const Sidebar = ({ showInstructor = false, sidebarItemData }: SidebarProps) => {
  const linkItemStyle =
    'block p-2 text-gray-500 hover:bg-blue-700 transition hover:text-white hover:underline ';
  const { currentUser } = UserAuth();
  const pathname = usePathname();
  const sidebarItemDataInstructor = {
    href: '/dashboard/instructor',
    icon: 'supervisor_account',
    label: 'Instructor',
    sidebarExpanded: true,
    selected: false,
    disabled: false,
  };

  return (
    <div className="flex flex-col w-full h-full space-y-2 p-2">
      {sidebarItemData.map((item: SidebarInterface) => {
        return (
          <SidebarItem
            key={item.icon}
            {...item}
            selected={pathname == item.href}
          />
        );
      })}
      {currentUser && currentUser.isInstructor && showInstructor && (
        <SidebarItem
          {...sidebarItemDataInstructor}
          selected={pathname == sidebarItemDataInstructor.href}
        />
      )}
    </div>
  );
};

export default Sidebar;
