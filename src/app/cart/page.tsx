import HomeNav from "@/components/navbar/HomeNav";
import Image from "next/image";

const Cart = () => {
  return (
    <main className="flex flex-col items-center w-screen min-h-screen ">
      <HomeNav />
      <div className="flex flex-col w-10/12 h-full gap-8 mt-20">
        <div className="flex w-full h-full gap-8">
          {/* items  */}
          <section className="flex flex-col w-3/5 gap-8 p-4 bg-white rounded-2xl">
            <h2 className="text-xl ">Checkout</h2>
            <CartItem {...sampleItem} />
            <CartItem {...sampleItem} />
            <CartItem {...sampleItem} />
          </section>
          {/* checkout option */}
          <section className="flex flex-col w-2/6 gap-4 p-4 bg-white rounded-2xl ">
            {/* header */}
            <h2 className="text-xl ">Payment Information</h2>

            {/* transaction code  */}
            <div className="flex justify-between w-full mt-4">
              <p className="text-gray-500">Order Id</p>
              <p>EG83MWV0</p>
            </div>
            <div className="border border-dashed border-3" />

            {/* order summary */}
            <ul className="flex flex-col gap-2 text-gray-600">
              <li className="flex justify-between w-full ">
                <p>Order summary</p>
                <p>₹299</p>
              </li>
              <li className="flex justify-between w-full ">
                <p>Discount</p>
                <p>-₹0</p>
              </li>
              <li className="flex justify-between w-full ">
                <p>Total Amount</p>
                <p className="font-bold text-gray-900 ">₹299.00</p>
              </li>
            </ul>
            <div className="border border-dashed border-3" />
            {/* cta */}

            <button className="p-4 text-white bg-black rounded-2xl">
              Chekout
            </button>
          </section>
        </div>
      </div>
    </main>
  );
};

interface CartItemProps {
  image: string;
  title: string;
  instructor: string;
  total_videos: number;
  total_hours: number;
  price: number;
}

const sampleItem: CartItemProps = {
  image:
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRodW1ibmFpbHxlbnwwfHwwfHx8MA%3D%3D",
  title: "Introduction to Web Development",
  instructor: "John Doe",
  total_videos: 25,
  total_hours: 12,
  price: 499.99,
};

const CartItem = (item: CartItemProps) => {
  const { image, title, instructor, total_hours, total_videos, price } = item;
  return (
    <div className="flex items-center h-full gap-x-4 rounded-2xl">
      <div className="relative h-24 w-36">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover w-full rounded-md aspect-video "
        />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center gap-2 text-gray-500">
          <span>{instructor}</span>
          <span>·</span>
          <span>{total_videos} videos</span>
          <span>·</span>
          <span>{total_hours} hours</span>
        </div>
        <div className="flex items-center justify-between gap-2 ">
          <div className="flex items-center gap-2 text-gray-500">
            <button className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Move to Wishlist
            </button>
            <button className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Remove
            </button>
            <button className="px-2 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200">
              Save for Later
            </button>
          </div>
          <span className="text-lg font-bold">₹{price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
