"use client"

import { useEffect, createContext, useContext, ReactNode } from "react"
import Lenis from "lenis"

const SmoothScrollerContext = createContext<Lenis | null>(null)

export const useSmoothScroller = () => {
  return useContext(SmoothScrollerContext)
}

export const SmoothScrollerProvider = ({ children }: { children: ReactNode }) => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smoothWheel: true,
      wheelMultiplier: 0.7,
      lerp: 0.2
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <SmoothScrollerContext.Provider value={null}>
      {children}
    </SmoothScrollerContext.Provider>
  )
}