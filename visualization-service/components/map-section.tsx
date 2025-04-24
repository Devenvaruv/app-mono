"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Calendar, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import Image from "next/image"
import { useLocationData } from "@/data-service/hooks/use-location-data"

export function MapSection() {
  const { gridLocations } = useLocationData()
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(2024)
  const [showMask, setShowMask] = useState<boolean>(false)

  // Find the selected location data
  const locationData = selectedLocation ? gridLocations.find((loc) => loc.id === selectedLocation) : null

  // Get the green density for the selected location and year
  const getGreenDensity = () => {
    if (!locationData) return 0
    return locationData.greenDensity[selectedYear as keyof typeof locationData.greenDensity] || 0
  }

  // Handle location selection
  const handleLocationSelect = (locationId: number) => {
    setSelectedLocation(locationId)
  }

  // Handle going back to the grid view
  const handleBackToGrid = () => {
    setSelectedLocation(null)
  }

  // Handle year selection
  const handleYearChange = (value: number[]) => {
    setSelectedYear(value[0])
  }

  // Handle mask toggle
  const handleMaskToggle = (checked: boolean) => {
    setShowMask(checked)
  }

  // Get the correct image URL based on location, year, and mask toggle
  const getImageUrl = () => {
    if (!locationData) return ""

    if (showMask) {
      return locationData.maskedImages[selectedYear as keyof typeof locationData.maskedImages] || ""
    } else {
      return locationData.images[selectedYear as keyof typeof locationData.images] || ""
    }
  }

  // Get density classification
  const getDensityClassification = (density: number) => {
    if (density > 15) return "Very high density"
    if (density > 10) return "High density"
    if (density > 7) return "Moderate density"
    if (density > 5) return "Low density"
    return "Very low density"
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <div>
          <h2 className="text-3xl font-bold mb-2">Oakland Area Explorer</h2>
          <p className="text-muted-foreground">
            {selectedLocation
              ? `Viewing ${locationData?.name} in ${selectedYear}${showMask ? " (Masked)" : ""}`
              : "Select a location from the grid to explore"}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">
            Oakland, CA
          </Badge>
          <Badge variant="outline" className="bg-green-500/10 text-green-500 hover:bg-green-500/20">
            Satellite Imagery
          </Badge>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {selectedLocation ? (
          // Detailed location view with side-by-side layout
          <motion.div
            key="detail"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Map on the left - takes full width on mobile, 2/3 on desktop */}
              <div className="w-full lg:w-2/3 relative">
                <Card className="overflow-hidden h-full border-r-0 rounded-r-none">
                  <CardContent className="p-0 relative h-full">
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full bg-muted relative">
                      <Image
                        src={getImageUrl() || "/placeholder.svg"}
                        alt={`${locationData?.name} in ${selectedYear}${showMask ? " (Masked)" : ""}`}
                        fill
                        className="object-cover"
                        priority
                      />

                      <div className="absolute top-4 left-4 z-10">
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
                          onClick={handleBackToGrid}
                        >
                          <ArrowLeft className="h-4 w-4 mr-2" />
                          Back to Grid
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Controls on the right - takes full width on mobile, 1/3 on desktop */}
              <div className="w-full lg:w-1/3">
                <Card className="h-full border-l-0 rounded-l-none">
                  <CardHeader>
                    <CardTitle>Location Controls</CardTitle>
                    <CardDescription>{locationData?.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Year filter */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Year Selection: {selectedYear}
                      </h3>
                      <Slider
                        value={[selectedYear]}
                        min={2016}
                        max={2024}
                        step={1}
                        onValueChange={handleYearChange}
                        className="py-4"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>2016</span>
                        <span>2020</span>
                        <span>2024</span>
                      </div>
                    </div>

                    {/* Mask toggle */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <label htmlFor="mask-toggle" className="text-sm font-medium flex items-center gap-2">
                          {showMask ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                          Show Mask
                        </label>
                        <Switch id="mask-toggle" checked={showMask} onCheckedChange={handleMaskToggle} />
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {showMask
                          ? "Showing processed image with highlighted areas"
                          : "Showing original satellite imagery"}
                      </p>
                    </div>

                    {/* Green area density */}
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Green Area Density</h3>
                      <div className="relative w-full h-8 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-500"
                          style={{ width: `${getGreenDensity() * 5}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold">{getGreenDensity().toFixed(2)}%</span>
                        <span className="text-sm text-muted-foreground">
                          {getDensityClassification(getGreenDensity())}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Green area density measures the percentage of vegetation coverage in the selected region.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        ) : (
          // Grid selection view
          <motion.div
            key="grid"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="px-4 max-w-6xl mx-auto"
          >
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Select a Location</CardTitle>
                <CardDescription>Click on a grid area to explore detailed satellite imagery</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {gridLocations.map((location) => (
                    <motion.div
                      key={location.id}
                      className="aspect-square relative overflow-hidden rounded-lg cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLocationSelect(location.id)}
                    >
                      <div className="absolute inset-0 bg-black/20 z-10"></div>
                      <Image
                        src={location.gridImage || "/placeholder.svg"}
                        alt={location.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/50 text-white z-20">
                        <p className="text-sm font-medium">{location.name}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full bg-gradient-to-b from-background/0 via-background/5 to-background/10 h-24 mt-12" />
    </motion.div>
  )
}
