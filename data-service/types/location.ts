export interface YearlyData {
  [year: number]: string | number
}

export interface LocationData {
  id: number
  name: string
  x: number
  y: number
  images: YearlyData
  maskedImages: YearlyData
  gridImage: string
  greenDensity: YearlyData
}
