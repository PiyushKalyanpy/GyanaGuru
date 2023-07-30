import Link from "next/link";
import { UserAuth } from "@/context/authContext";

const Sidebar = () => {
    const linkItemStyle = "block p-2 text-gray-500 hover:bg-blue-700 transition hover:text-white hover:underline "
    const {currentUser} = UserAuth()
    return (
        <div className="w-full h-full">
            <Link className={`${linkItemStyle}`} href="/dashboard">
                home
            </Link>
            <Link className={`${linkItemStyle}`} href="/dashboard/course">
                course
            </Link>
            <Link className={`${linkItemStyle}`} href="/dashboard/profile">
                profile
            </Link>
            <Link className={`${linkItemStyle}`} href="/dashboard/settings">
                setting
            </Link>
            {
                currentUser && currentUser.role == "admin" && <Link className={`${linkItemStyle}`} href="/dashboard/admin">
                    admin
                </Link>
            }
        </div>
    )
}



export default Sidebar;