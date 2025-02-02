import React from 'react'

interface ButtonProps {
  label: string
}

export default function Button({ label }: ButtonProps) {
  return (
    <button className="bg-[#7DC2A5] px-4 py-2 rounded-lg text-black font-medium hover:bg-[#6BAF92] transition-colors flex items-center justify-center">
      {label}
    </button>
  )
}

