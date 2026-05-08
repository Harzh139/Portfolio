"use client"

import { useEffect, useRef, useState, ReactNode } from "react"

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div
      ref={domRef}
      className={`${className} ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
