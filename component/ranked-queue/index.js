export default function RankedQueue(props) {
    const data = props.data

    return (
        <div className={props.className + " text-gray-500 text-sm table-cell border-2 p-5 pr-20"}>
            <div className="text-xs">{data.queueType}</div>
            <div className="text-md text-blue-500 font-semibold">{data.tier} {data.rank}</div>
            <div className="text-gray-600">{`${data.leaguePoints} LP`}<span className="text-gray-500">{` / ${data.wins}W ${data.losses}L`}</span></div>
            <div>{`Win Ratio ${Math.round((data.wins / (data.wins + data.losses)) * 100)}%`}</div>
        </div>
    )
}