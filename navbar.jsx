import React from 'react'
import Project from './Project'

function Navbar() {
  return (
    <div className="pt-8 font-serif bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 min-h-screen">
      <nav className="fixed left-28 top-6 flex items-center justify-between w-5/6 h-20 px-8 rounded-full bg-gray-800/90 shadow-xl text-white z-50">
        <div className="flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full border-2 border-blue-400 shadow"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz2M4c7ubr0WASHdtgtN_r6pAUiLI32WozPQ&s"
            alt="Avatar"
          />
          <span className="text-2xl font-bold tracking-wide">Farddin Khan</span>
        </div>
        <div className="flex gap-8 text-lg font-medium">
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="hover:text-blue-400 transition-colors"
          >
            Projects
          </button>
          <a href="#skills" className="hover:text-blue-400 transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </div>
      </nav>
      <main className="pt-32 flex flex-col items-start ml-40">
        <div className="w-64 mt-40 border-2 border-blue-600 rounded-lg bg-blue-100 shadow-lg p-6 text-center">
          <span className="block text-xl font-bold text-blue-900">
            Welcome to My Portfolio
          </span>
        </div>
        <section className="mt-6 ml-4">
          <h2 className="text-lg font-semibold text-white leading-relaxed">
            Hi! I'm Farddin Khan, a passionate web Developer <br />
          </h2>
        </section>
      </main>
    </div>
  );
}

export default Navbar;
