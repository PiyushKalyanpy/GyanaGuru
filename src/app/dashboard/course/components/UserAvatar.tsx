import { UserAuth } from "@/context/authContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

const UserAvatar = () => {
    const { currentUser } = UserAuth();
    const router = useRouter();
    return (
        <div>
            {
                currentUser && <div>
                    <div onClick={() => router.push("/dashboard/profile")} className="hover:ring hover:ring-gray-200 rounded-full cursor-pointer">
                        <Image
                            src={currentUser.photoURL}
                            alt="profile"
                            width={50}
                            height={50}
                            quality={50}
                            className="rounded-full p-1"
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default UserAvatar;