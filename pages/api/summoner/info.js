import { PlatformId } from '@fightmegg/riot-rate-limiter';
import riotAPI from '../../../lib/riot-api'

const leagueEntry = {
    rank: "",
    wins: 0,
    losses: 0,
    tier: "",
    leaguePoints: 0
};

export default async function info(req, res) {
    if (req.username == null) {
        res.status(400);
    }

    if (req.region == null) {
        res.status(400);
    }

    let summonerDTO = await riotAPI.summoner.getBySummonerName({
        region: PlatformId.NA1,
        summonerName: "spooky",
    });

    let leagueEntryDTO = await riotAPI.league.getEntriesBySummonerId({
        region: PlatformId.NA1,
        summonerId: summonerDTO.id
    });

    let resp = {
        summonerLevel: summonerDTO.summonerLevel,
        name: summonerDTO.name,
        icon: summonerDTO.profileIconId,
        puuid: summonerDTO.puuid,
        solo: leagueEntryDTO[0],
        flex: leagueEntryDTO[1]
    };

    res.status(200).json(resp)
}  