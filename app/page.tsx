import LiveScoreWidget from '../components/LiveScoresWidget'
import OddsWidget from '../components/OddsWidget'
import FeatureBanner from '../components/FeatureBanner'
import NewsCard from '../components/NewsCard'
import sample from '../data/sample/news.json'

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-8">
        <FeatureBanner />
        <section className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Latest Headlines</h2>
          <div className="space-y-4">
            {sample.articles.map((a: any, i: number) => <NewsCard key={i} article={a} />)}
          </div>
        </section>
      </div>

      <aside className="col-span-4 space-y-6">
        <LiveScoreWidget />
        <OddsWidget />
      </aside>
    </div>
  )
}
