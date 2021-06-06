import { PlatformId } from '@fightmegg/riot-rate-limiter';
import riotAPI from '../../../lib/riot-api'

export default async function info(req, res) {
    if (req.puuid == null) {
        res.status(400);
    }

    let region = PlatformId.AMERICAS;

    let matchList = await riotAPI.match.getMatchlistByAccount({
        region: region,
        accountId: req.puuid
    });

    for(i = 0; i < 11; i++) {
        let matchId = matchList[0];

        let match = await riotAPI.match.getById({
            region: region,
            matchId: matchId
        });
    }

    res.status(200).json(resp)
}  