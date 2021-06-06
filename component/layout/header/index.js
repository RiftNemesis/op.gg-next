import Link from 'next/link'

export default function Header() {
    return (
      <div className="bg-blue-500">
        <div className="text-gray-300 py-4 text-sm">
          <div className="flex space-x-6 items-center">
            <Link href="/">
              <img className="block pl-4 cursor-pointer" src="/images/opgg-logo.svg" height="16" alt="OP.GG" width="65" />
            </Link>
            <Link href="/">
              <a className="text-white border-white border-b-2">
                Stay Home
              </a>
            </Link>
            <Link href="/champion">
              <a>
                Champions
              </a>
            </Link>
            <Link href="/stats">
              <a>
                Stats
              </a>
            </Link>
            <Link href="/leaderboards">
              <a>
                Leaderboards
              </a>
            </Link>
            <Link href="/pro-matches">
              <a>
                Pro Matches
              </a>
            </Link>
            <Link href="/multi-search">
              <a>
                Multi-Search
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
}