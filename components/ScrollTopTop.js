"use client"
import { useEffect, useState } from 'react'
import { BiArrowFromBottom } from 'react-icons/bi'

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll',[()=>{}])
    }
  }, [])

  return (
    <div className="fixed bottom-2 right-1 z-10">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          isVisible ? ('opacity-100') : ('opacity-0',
          'bg-red-700 hover:bg-red-600 focus:ring-red-600 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-1')
        }
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}