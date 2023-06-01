import Image from "next/image";
import emailjs from 'emailjs-com';
import { useRef, useState } from "react";

const LandingContact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emails      .sendForm('service_rjqxpou', 'template_f8vouol', form.current, 'o2kgKJm8TdvQP4pBr')
       // serviceID, email templateID , Public key taken from emailjs account 
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          // You can handle the error here, such as displaying an error message to the user.
        }
      );
    e.target.reset();
  };

  return (
    <div className="w-full h-fit p-20 dark:bg-neutral-950">
      <div className="grid grid-cols-6 gap-8 w-full items-center">
        <div className="col-span-2 flex items-center">
          <Image
            className="m-auto h-96 object-cover rounded-3xl select-none"
            src="/images/contact.png"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
        <div className="col-span-4 flex flex-col p-10 space-y-8 mx-auto z-10">
          <div className="w-3/4">
            <h2 className="text-3xl font-archivo text-slate-900 dark:text-zinc-100">Contact Us</h2>
            <h2 className="font-archivo text-zinc-700 dark:text-zinc-100">Have questions or feedback? We'd love to hear from you. Please fill out the form below and we'll get back to you as soon as possible.</h2>
            <form onSubmit={sendEmail} ref={form}>
              <input
                className="w-full bg-champange h-12 mt-4 p-4 outline-none focus:outline-orange-200 text-orange-800 font-archivo text-lg rounded-lg placeholder:text-orange-800/50"
                type="text"
                placeholder="Name"
                required
              />
              <input
                className="w-full bg-champange h-12 mt-4 p-4 outline-none focus:outline-orange-200 text-orange-800 font-archivo text-lg rounded-lg placeholder:text-orange-800/50"
                type="email"
                placeholder="E-mail"
                required
              />
              <textarea
                className="w-full bg-champange h-40 mt-4 p-4 outline-none focus:outline-orange-200 text-orange-800 font-archivo text-lg rounded-lg placeholder:text-orange-800/50 resize-none"
                placeholder="Message"
                required
              />
              <button
                className="w-20% bg-champange h-12 mt-4 p-2 outline-none hover:outline-orange-200 transition text-orange-800 font-archivo text-lg rounded-lg placeholder:text-orange-800/50 hover:scale-[1.04]"
                type="submit"
              >
                Send Message
              </button>
              {isMessageSent && (
                <p className="text-green-500">Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContact;
