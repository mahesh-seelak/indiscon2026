"use client"

import { useState, useEffect, useRef } from "react"

const IMPORTANT_DATES = [
  {
    id: 1,
    title: "Dummmy Paper Submission Starts",
    date: new Date("2026-03-01"),
  },
  {
    id: 2,
    title: "Dummmy Paper Submission Ends",
    date: new Date("2026-04-30"),
  },
  {
    id: 3,
    title: "Dummmy Notification of Acceptance",
    date: new Date("2026-06-15"),
  },
]

export default function ImportantDatesSlider() {
  const [isPaused, setIsPaused] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const getDaysRemaining = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    if (diff < 0) return "Passed"
    if (diff === 0) return "Today"
    return `${diff} days`
  }

  const getStatusColor = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const diff = Math.ceil((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

    if (diff < 0) return "bg-red-500"
    if (diff <= 3) return "bg-yellow-500"
    return "bg-green-500"
  }

  useEffect(() => {
    if (!sliderRef.current) return

    sliderRef.current.style.animationPlayState = isPaused ? "paused" : "running"
  }, [isPaused])

  const allItems = [...IMPORTANT_DATES, ...IMPORTANT_DATES]

  return (
    <div
      className="w-full bg-gray-200 py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-blue-600 py-4 text-center">
        <h2 className="text-white text-2xl font-semibold">Important Dates</h2>
      </div>

      <div className="overflow-hidden mt-6">
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        <div
          ref={sliderRef}
          className="flex gap-6 px-6"
          style={{
            animation: "scroll 20s linear infinite",
            width: "fit-content",
          }}
        >
          {allItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="min-w-[420px] bg-gray-100 rounded-xl shadow-md p-6 flex-shrink-0"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl text-blue-800 font-medium">
                  {item.title}
                </h3>

                <span
                  className={`text-white text-sm px-3 py-1 rounded-full ${getStatusColor(
                    item.date
                  )}`}
                >
                  {getDaysRemaining(item.date)}
                </span>
              </div>

              <p className="text-blue-600 text-lg font-medium">
                {formatDate(item.date)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}