export default function Header() {
    return (
      <div className="bg-blue-500">
        <div className="text-gray-300 py-4 text-sm">
          <div className="flex space-x-6 items-center">
            <img className="block pl-4" src="/images/opgg-logo.svg" height="16" alt="OP.GG" width="65" />
            <a className="text-white border-white border-b-2">Stay Home</a>
            <a>Champions</a>
            <a>Stats</a>
            <a>Leaderboards</a>
            <a>Pro Matches</a>
            <a>Multi-Search</a>
          </div>
        </div>
      </div>
    )
}