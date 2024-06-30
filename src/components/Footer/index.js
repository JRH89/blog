import React from 'react'

const Footer = () => {
  return (
    <footer data-testid='footer' className="bg-neutral-50 mt-8 pb-36 border-t border-gray-800 flex-row p-4 self-center text-gray-800 xl:text-lg w-full flex justify-center items-center text-center">
      <div className="flex flex-col pt-4 w-full justify-center items-center">
        <div className="flex justify-center mb-4 ml-2 pt-6 space-x-4">
          <a data-testid="linkedin" href="https://blog.hookerhillstudios.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600 hover:scale-110 duration-300 px-2">
            <i className="fa fa-newspaper w-full text-center flex"></i>
          </a>
          <a href="https://play.google.com/store/apps/dev?id=4957396816342892948&hl=en_US" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600 hover:scale-110 duration-300 px-2">
            <i className="fa-brands fa-google-play"></i>
          </a>
          <a data-testid="youtube" href="https://www.youtube.com/@hookerhillstudios" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-emerald-600 hover:scale-110 duration-300 px-2">
            <i className="fab fa-youtube w-full text-center flex"></i>
          </a>
        </div>
        <div className="mt-4 text-sm sm:text-base text-gray-600">
          <p>&copy; 2024 Hooker Hill Studios. All rights reserved.</p>
          <p>Los Angeles, California | <a href="mailto:hookerhillstudios@gmail.com" className="hover:text-emerald-600 duration-300">hookerhillstudios@gmail.com</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
