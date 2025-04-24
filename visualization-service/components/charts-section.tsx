"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const placeholderImages = [
  {
    title: "Air Quality",
    description: "Annual Air Quality in Oakland",
    src: "/images/air-quality-metrics.png",
  },
  {
    title: "Average ADT",
    description: "",
    src: "/images/lag-correlation.png",
  },
  {
    title: "PM2.5 and Traffic Relationship",
    description: "",
    src: "/images/pm25-vs-traffic.png",
  },
  {
    title: "Population Growth Insights",
    description: "",
    src: "/images/population-density.png",
  },
]

export function FallbackChartsSection() {
  return (
    <motion.div
      className="w-full mx-auto"
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
          <h2 className="text-3xl font-bold mb-2">Oakland Data Insights</h2>
          <p className="text-muted-foreground">Visual snapshots of Oakland's key metrics</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 px-4 max-w-6xl mx-auto">
        {placeholderImages.slice(0, 2).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>{img.title}</CardTitle>
                  <CardDescription>{img.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.title}
                  width={600}
                  height={300}
                  className="rounded-lg w-full object-contain my-4"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 px-4 max-w-6xl mx-auto">
        {placeholderImages.slice(2).map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle>{img.title}</CardTitle>
                  <CardDescription>{img.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.title}
                  width={600}
                  height={300}
                  className="rounded-lg w-full object-contain my-4"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="w-full bg-gradient-to-b from-background/0 via-background/5 to-background/10 h-24 mt-12" />
    </motion.div>
  )
}
