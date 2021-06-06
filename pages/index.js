import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const searchForSummoner = async event => {
    event.preventDefault();

    router.push(`/summoner/${event.target.name.value}`)
  }

  return (
    <div className="bg-blue-500 py-8">
      <img className="block mx-auto" height="200" src="/images/cass.png" alt="Cass" />
      <form onSubmit={searchForSummoner} className="bg-white flex mx-auto w-4/6 h-12 shadow-lg">
        <input className="flex mx-auto w-5/6 outline-none" type="text" name="name" placeholder="Name1, Name2, ..." />
        <a className="bg-gray-500 text-white text-sm w-8 h-5 justify-center flex mt-4">NA</a>
        <a className="items-center flex p-2">
          <img src="/images/search.png" />
        </a>
      </form>
    </div>
  )
}
