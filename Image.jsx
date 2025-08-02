import React from 'react'

function Image() {
  return (
    <section className="m-[-50px] py-20 bg-black">
      <div className="container mx-auto flex flex-wrap justify-center gap-10">
        {[
          {
            src: "https://cdn.itm.ac.in/2024/05/tech-jobs-in-India--1--9.webp",
            alt: "Computer Science",
            label: "Computer Science",
          },
          {
            src: "https://images.shiksha.com/mediadata/images/articles/1697545010phpcObN8p.jpeg",
            alt: "Software Engineering",
            label: "Software Engineering",

          },
        ].map((item, idx) => (
          <figure
            key={idx}
            className="bg-gradient-to-br from-blue-600 to-blue-400 p-8 rounded-3xl shadow-xl flex flex-col items-center w-full max-w-xs transition-transform duration-300 hover:scale-105"
          >
            <img
              className="w-56 h-56 object-cover rounded-xl mb-6 border-2 border-white shadow-md"
              src={item.src}
              alt={item.alt}
              loading="lazy"
            />
            <figcaption className="text-white font-semibold text-xl text-center tracking-wide">
              {item.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Image