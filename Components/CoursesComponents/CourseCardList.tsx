import CourseCard from './CourseCard'
import React, { useEffect, useRef } from 'react'

const CourseCardList = ({ heading, data }: any) => {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    let isDown = false
    let startX: number
    let scrollLeft: number

    container.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    })

    container.addEventListener('mouseleave', () => {
      isDown = false
    })

    container.addEventListener('mouseup', () => {
      isDown = false
    })

    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 3
      container.scrollLeft = scrollLeft - walk
    })
  }, [])

  return (
    <div className="flex flex-col ">
      <h1 className="text-xl font-archivo ">{heading}</h1>
      <div className="relative">
        <div
          ref={containerRef}
          className="flex overflow-x-scroll scrollable-container snap-x flex-nowrap"
          style={{ scrollBehavior: 'smooth' }}
        >
          {data &&
            data.map((item: any, index: any) => {
              return (
                <CourseCard
                  key={index}
                  item={item}
                />
              )
            })}
        </div>
        <div className="absolute right-0  top-0 bg-gradient-to-r from-10% from-transparent to-white to-90% w-40 h-full"></div>
        <div className="absolute top-0 left-0 w-6 h-full bg-gradient-to-r from-white"></div>
      </div>
    </div>
  )
}

export default CourseCardList
