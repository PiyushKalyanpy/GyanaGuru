import Image from 'next/image'

const Banner = () => {
  const bannerImageUrl =
    'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  return (
    <div className="w-full h-40 overflow-hidden rounded-3xl">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={bannerImageUrl}
          layout="fill"
          objectFit="cover"
          alt="Banner Image "
        />
      </div>
    </div>
  )
}

export default Banner
