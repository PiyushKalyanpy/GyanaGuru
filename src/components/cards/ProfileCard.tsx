// components/cards/ProfileCard.tsx
import Image from 'next/image'

interface ProfileCardProps {
	name: string
	imageSrc: string
	email: string
	role: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
	name,
	imageSrc,
	email,
	role,
}) => {
	return (
		<div className="relative bg-white rounded-xl h-fit m-auto p-6 w-fit">
			<div className="flex items-center justify-center">
				<div className="w-20 h-20 rounded-full overflow-hidden">
					<Image src={imageSrc} alt={name} width={164} height={164} />
				</div>
				<div className="ml-4">
					<h2 className="text-xl font-semibold ">{name}</h2>
					<p className="text-gray-500">{email}</p>
				</div>
			</div>
			<div className="mt-4 absolute top-4 right-4">
				<span className="bg-violet-100 text-violet-600 font-medium py-1 px-2 rounded-full">
					{role}
				</span>
			</div>
		</div>
	)
}

export default ProfileCard
