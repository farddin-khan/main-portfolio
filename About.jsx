import React from 'react'

function About() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen flex flex-col items-center justify-center py-16 px-4">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 flex flex-col items-center">
        <h2 className="text-5xl font-black mb-8 text-gray-800 tracking-tight text-center drop-shadow-lg">
          About Me
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center font-medium">
          I'm a passionate developer specializing in building modern web applications with <span className="font-bold text-blue-600">React</span> and other cutting-edge technologies. I thrive on solving complex problems and am committed to continuous learning to elevate my craft.
        </p>
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400 text-white font-bold rounded-full shadow-xl hover:scale-105 hover:from-blue-800 hover:to-blue-500 transition-transform duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-offset-2"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default About