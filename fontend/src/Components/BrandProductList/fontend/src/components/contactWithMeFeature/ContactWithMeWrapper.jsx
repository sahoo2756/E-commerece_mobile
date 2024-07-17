import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactForm() {
  return (
    <form className="grid  w-[40%] gap-y-4 ">
      <p className="text-xl"> --- Contact Me</p>

      <input
        type="text"
        placeholder="* Your Full Name"
        className="bg-transparent border py-3 px-2 rounded-md"
      />

      <input
        type="email"
        placeholder="* Email"
        className="bg-transparent border py-3 px-2 rounded-md"
        required={true}
      />
      <input
        type="text"
        placeholder="Mobile No"
        className="bg-transparent border py-3 px-2 rounded-md"
      />

      <textarea
        name=""
        id=""
        rows={5}
        placeholder="Your Message Towards Me"
        className="bg-transparent border p-2 rounded-md"
      ></textarea>

      <button
        type="submit"
        className="bg-sky-700 py-2 rounded-md hover:bg-sky-800"
      >
        Send Message
      </button>
    </form>
  );
}

function ContactWithMeWrapper() {
  return (
    <div className="px-20 flex justify-between border-t border-t-gray-700 mt-5 pt-10">
      <div className="mt-10">
        <h1 className="text-xl font-sans mb-5">Connect With Me</h1>
        <div className="flex gap-3 items-center text-gray-500">
          <MdEmail className="text-green-600" />

          <span>sahoo15820004@gmail.com</span>
        </div>
        <div className="flex gap-3 items-center text-lg text-gray-400">
          <span className="font-bold">in</span>

          <FaGithub />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default ContactWithMeWrapper;
