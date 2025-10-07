import sample from '../data/sample/scores.json'
export default function LiveScoresWidget({ expanded }: { expanded?: boolean }) {
  const games = sample.games
  return (
    <div className="border rounded p-4">
      <h4 className="font-bold">Live Scores</h4>
      <div className="mt-3 space-y-3">
        {games.map((g:any,i:number)=>(
          <div key={i} className="flex justify-between">
            <div>
              <div className="text-sm font-semibold">{g.league} — {g.home} vs {g.away}</div>
              <div className="text-xs text-gray-600">{g.status}</div>
            </div>
            <div className="text-lg font-bold">{g.homeScore} - {g.awayScore}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
