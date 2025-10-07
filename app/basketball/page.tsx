import NewsCard from '../../components/NewsCard'
import sample from '../../data/sample/news.json'
export default function Basketball() {
  const nba = sample.articles.filter((a: any) => a.category === 'basketball')
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Basketball</h1>
      <div className="space-y-4">{nba.map((a,i)=> <NewsCard key={i} article={a} />)}</div>
    </div>
  )
}
