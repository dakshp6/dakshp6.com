'use client'
import { useEffect, useState } from 'react'

type ClientSideComponent = {
  children: React.ReactNode
  placeholderHeight?: string 
  placeholder?: React.ReactNode
}




export default function ClientOnly({
  children,
  placeholder = null,
}: ClientSideComponent) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        children
      ) : (
        placeholder || (
          <></>
        )
      )}
    </>
  )
}