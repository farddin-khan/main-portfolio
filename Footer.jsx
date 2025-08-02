import React from 'react'

function Footer() {
  return (
    <div className='mt-10 bg-black'>
        <footer className='bg-gray-800 text-white text-center py-4 mt-10'>
            <p>&copy; 2024 Farddin Khan. All rights reserved.</p>
            <p>Follow me on
                <a href="https://www.linkedin.com/in/farddin-khan/" className='text-blue-400 hover:underline'> LinkedIn</a> 
                <span> and </span>  
                <a href="https://github.com/farddin-khan" className='text-blue-400 hover:underline'> GitHub</a>
            </p>

            <p>Contact us: <a href="mailto:farddinkhan18@gmail.com" className='text-blue-400 hover:underline'>
                farddinkhan18@gmail.com
            </a></p>
        </footer>
    </div>
  )
}

export default Footer;