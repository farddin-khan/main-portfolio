import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-4">
      <h2 className="mb-8 font-extrabold text-4xl md:text-5xl text-pink-400 text-center drop-shadow-lg">
        Contact Me
      </h2>
      <section className="w-full max-w-lg mx-auto p-8 rounded-3xl shadow-2xl bg-gray-900/80 backdrop-blur-lg">
        <form className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            className="p-4 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 transition resize-none"
            rows={5}
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white font-bold py-3 rounded-lg hover:bg-pink-600 transition duration-200 shadow-md"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;