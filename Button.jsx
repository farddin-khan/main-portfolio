import React from 'react'

function Button() {
  return (
    <div className="flex justify-center items-center py-8 text-white m-[-100px]">
      <button
        type="button"
        className="flex items-center gap-2 text-xl font-semibold px-8 py-4 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Let's Connect
        <span className="text-2xl">🤝</span>
      </button>
    </div>
  )
}

export default Button