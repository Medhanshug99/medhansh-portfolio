import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../../config/emailjs";
import Input from "./Input";
import { BsSend } from "react-icons/bs";

const Form = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  // LOGIC for sending message
  const sendMail = async (e) => {
    e.preventDefault();

    // Honeypot check
    const formData = new FormData(form.current);
    if (formData.get("_gotcha")) {
      return; // Silent fail for bots
    }

    if (cooldown) {
      toast.info("Please wait a moment before sending another message.");
      return;
    }

    // Basic validation
    const name = formData.get("user_name")?.trim();
    const email = formData.get("user_email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.");
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          title: `New message from ${name}`,
          name: name,
          user_name: name,
          email: email,
          user_email: email,
          time: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
          }),
          message: message,
        },
        { publicKey: PUBLIC_KEY }
      );
      form.current.reset();
      toast.success("Message sent successfully!");
      setCooldown(true);
      setTimeout(() => setCooldown(false), 30000); // 30 second cooldown
    } catch (err) {
      console.error(err.status, err.text);
      toast.error(
        "Could not send your message. Please email me directly at medhanshp7@gmail.com."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendMail} className="flex flex-col gap-5">
      {/* Honeypot */}
      <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Name
        </label>
        <Input type="text" name="user_name" placeholder="Your full name" required />
      </div>
      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Email
        </label>
        <Input
          type="email"
          name="user_email"
          placeholder="your-email@gmail.com"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="mb-1.5 font-medium text-gray-700 dark:text-gray-100">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          placeholder="Your message here..."
          className="block w-full p-3 rounded-lg bg-white dark:bg-neutral-950 border border-gray-300 dark:border-neutral-700 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-700 resize-none"
          required
        ></textarea>
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || cooldown}
        className="w-full mt-3 px-6 py-2 flex justify-center items-center gap-3 text-md font-semibold text-white dark:text-gray-950 bg-black dark:bg-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white dark:border-black border-t-transparent dark:border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            <BsSend />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default Form;
