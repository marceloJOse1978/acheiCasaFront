import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  text: string
  href?: string
  className?: string
}

const ButtonGray = ({ text, href, className = '' }: ButtonProps) => {
  const buttonClasses = `cursor-pointer inline-block text-gray-600 shadow border border-[#d9d9d9] rounded-md px-4 py-2 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 ${className}`

  if (href) {
    return (
      <Link href={href} passHref>
        <a className={buttonClasses}>{text}</a>
      </Link>
    )
  }

  return (
    <button type="button" className={buttonClasses}>
      {text}
    </button>
  )
}

export default ButtonGray
