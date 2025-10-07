export default function NewsCard({ article }: { article: any }) {
  return (
    <article className="border rounded p-4 hover:shadow">
      <h3 className="text-xl font-semibold">{article.title}</h3>
      <p className="text-sm text-gray-600">{article.summary}</p>
      <div className="mt-2 text-xs text-gray-500">{article.source} • {article.published}</div>
    </article>
  )
}
