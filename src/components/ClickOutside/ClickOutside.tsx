import React, { ReactNode, useEffect, useRef } from "react"

interface ClickOutsideProps {
  onClickOutside: () => void
  children: ReactNode
}

export default function ClickOutside({
  onClickOutside,
  children,
}: ClickOutsideProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handle = (event: any) => {
      if (containerRef.current && !containerRef.current.contains(event.target))
        onClickOutside()
    }

    document.addEventListener("touchend", handle, true)
    document.addEventListener("click", handle, true)

    return () => {
      document.removeEventListener("touchend", handle, true)
      document.removeEventListener("click", handle, true)
    }
  }, [])

  return (
    <div style={{ position: "relative" }} ref={containerRef}>
      {children}
    </div>
  )
}
