import { server } from '../../config'
import RankedQueue from '../../component/ranked-queue'

export default function Summoner({ data }) {
    return (
        <div className="pt-4">
            <div className="relative mx-auto pl-20" style={{width: "1000px"}}>
                <div className="inline-block w-26 align-top">
                    <img src={`http://ddragon.leagueoflegends.com/cdn/11.11.1/img/profileicon/${data.icon}.png`} />
                    <div className="text-xl text-yellow-300 text-center">{data.summonerLevel}</div>
                </div>
                <div className="relative inline-block pl-8">
                    <div className="text-xl font-semibold align-middle mr-5">{data.name}</div>
                </div>
            </div>
            <div className="flex text-gray-500 pl-10">
                <button className="border-gray-200 border-2 h-10 w-24">Summary</button>
                <button className="border-gray-200 border-2 w-24">Champions</button>
            </div>
            <div className="border-t-2 pl-10">
                <div>
                    <div className="pt-2">
                        <RankedQueue data={data.solo} />
                    </div>
                    <div className="py-2">
                        <RankedQueue data={data.flex} />
                    </div>
                </div>
                <div>
                    <div className="text-gray-400 text-sm">
                        <button className="border-2 w-24 h-12">S2021 Total</button>
                        <button className="border-2 w-24 h-12">Ranked Solo</button>
                        <button className="border-2 w-24 h-12">Ranked Flex 5v5</button>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`${server}/api/summoner/info`, {
        method: 'POST',
        body: {
            region: "na1",
            username: context.params.userName
        }
    });

    if (!res.ok) {
        return {
            props: {
                error: true
            }
        }
    }

    let data = await res.json()

    if (!data) {
        return {
            props: {
                error: true
            }
        }
    }

    console.log(data)

    return {
        props: { data },
    }
}