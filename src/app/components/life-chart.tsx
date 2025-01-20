"use client"



interface LifeChartProps {
  data: {
    lived: number
    remaining: number
  }
}

export default function LifeChart({ data }: LifeChartProps) {
  const total = data.lived + data.remaining
  const yearsArray = Array.from({ length: total }, (_, i) => (i < data.lived ? "lived" : "remaining"))

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Your Life Visualization</h3>
      <p className="text-gray-600 mb-4">
        Each dot represents one year. Red dots are years lived, green dots are estimated remaining years.
      </p>
      <div
        className="grid grid-cols-10 gap-2 justify-items-center"
        role="img"
        aria-label={`Life expectancy visualization: ${data.lived} years lived, ${data.remaining} years remaining`}
      >
        {yearsArray.map((status, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full ${status === "lived" ? "bg-red-500" : "bg-green-500"}`}
            title={`Year ${index + 1}: ${status === "lived" ? "Lived" : "Remaining"}`}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">Total life expectancy: {total.toFixed(1)} years</p>
        <p className="text-sm text-gray-600">
          You've lived {((data.lived / total) * 100).toFixed(1)}% of your expected life
        </p>
      </div>
    </div>
  )
}

