import { useEffect, useState } from "react"

export default function useShowOnScroll(limit: number) {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const handle = () => {
      if (window.scrollY > limit) {
        setIsShow(true)
        console.log(true)
      } else {
        setIsShow(false)
        console.log(false)
      }
    }

    window.addEventListener("scroll", handle)

    return () => {
      window.removeEventListener("scroll", handle)
    }
  }, [])

  return { isShow }
}
