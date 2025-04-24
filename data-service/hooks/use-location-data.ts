"use client"

import { useState, useEffect } from "react"
import type { LocationData } from "@/data-service/types/location"

// Define the grid locations with unique images and green density data for each year
const gridLocations: LocationData[] = [
  {
    id: 1,
    name: "Downtown Oakland",
    x: 0,
    y: 0,
    images: {
      2016: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-2-2022.jpg",
      2017: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-4-2022.jpg",
      2018: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-5-2022.jpg",
      2019: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-6-2022.jpg",
      2020: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-4-2023.jpg",
      2021: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-5-2023.jpg",
      2022: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-8-2023.jpg",
      2023: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-2-2024.jpg",
      2024: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-1-2025.jpg",
    },
    maskedImages: {
      2016: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-2-2022.jpg",
      2017: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-4-2022.jpg",
      2018: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-5-2022.jpg",
      2019: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-6-2022.jpg",
      2020: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-4-2023.jpg",
      2021: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-5-2023.jpg",
      2022: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-8-2023.jpg",
      2023: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-2-2024.jpg",
      2024: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/MASK11-1-2025.jpg",
    },
    gridImage:
      "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/11ImageOrigAndNew/11-2-2022.jpg",
    greenDensity: {
      2016: 11.17,
      2017: 12.2,
      2018: 7.72,
      2019: 8.17,
      2020: 13.1,
      2021: 7.36,
      2022: 7.97,
      2023: 9.72,
      2024: 6.19,
    },
  },
  {
    id: 2,
    name: "West Oakland",
    x: 0,
    y: 1,
    images: {
      2016: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-2-2021.jpg",
      2017: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-2-2022.jpg",
      2018: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-4-2022.jpg",
      2019: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-5-2022.jpg",
      2020: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-6-2022.jpg",
      2021: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-4-2023.jpg",
      2022: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-5-2023.jpg",
      2023: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-8-2023.jpg",
      2024: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-8-2023.jpg",
    },
    maskedImages: {
      2016: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-2-2021.jpg",
      2017: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-2-2022.jpg",
      2018: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-4-2022.jpg",
      2019: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-5-2022.jpg",
      2020: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-6-2022.jpg",
      2021: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-4-2023.jpg",
      2022: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-5-2023.jpg",
      2023: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-8-2023.jpg",
      2024: "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/MASK14-8-2023.jpg",
    },
    gridImage:
      "https://storage.googleapis.com/videobucker/Hai%20DEVEN%20APRIL%2022-20250423T065205Z-001/Hai%20DEVEN%20APRIL%2022/14ImageOrigAndNew/14-2-2021.jpg",
    greenDensity: {
      2016: 15.05,
      2017: 18.39,
      2018: 11.03,
      2019: 7.75,
      2020: 13.21,
      2021: 9.89,
      2022: 13.21,
      2023: 10.58,
      2024: 10.58,
    },
  },
  // Additional locations would continue here...
]

export function useLocationData() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return {
    gridLocations,
    loading,
    error,
  }
}
