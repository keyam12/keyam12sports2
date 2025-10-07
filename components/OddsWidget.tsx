import sample from '../data/sample/odds.json'
export default function OddsWidget({ expanded }: { expanded?: boolean }) {
  const odds = sample.odds
  return (
    <div className="border rounded p-4">
      <h4 className="font-bold">Odds Snapshot</h4>
      <div className="mt-3 space-y-3">
        {odds.map((o:any,i:number)=>(
          <div key={i} className="flex justify-between text-sm">
            <div>{o.match}</div>
            <div>{o.line}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
