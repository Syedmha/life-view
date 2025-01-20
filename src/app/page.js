import LifeVisualizer from "./components/life-visualizer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-blue-50 to-blue-100">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-blue-800">Life Visualizer</h1>
      <LifeVisualizer />
    </main>
  )
}

