export default function FeatureBanner() {
  return (
    <div className="rounded overflow-hidden border p-6 bg-gradient-to-r from-white to-blue-50">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">24/7 AI — Never Miss Anything ⚡️</h1>
          <p className="mt-2 text-gray-700">A weekly deep dive — story produced by StoryAgent</p>
        </div>
        <div className="hidden md:block">
          <img src="/placeholder-images/feature.jpg" alt="feature" className="w-48 h-32 object-cover rounded"/>
        </div>
      </div>
    </div>
  )
}
