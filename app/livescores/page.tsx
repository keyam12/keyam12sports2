import LiveScoreWidget from '../../components/LiveScoresWidget'
export default function LiveScoresPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Live Scores</h1>
      <LiveScoreWidget expanded />
    </div>
  )
}
