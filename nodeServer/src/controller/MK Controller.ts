export interface IdCheckResult {
    index: number,
    entities: any
}

export class MKController {
    public static async checkIdExist(ids: number[], repo: any): Promise<IdCheckResult> {
        let index = 0
        let entities = []
        let res: IdCheckResult = {index: -1, entities}

        for (index = 0; index < ids.length; index++) {
            try {
                let entity = await repo.findOneOrFail(ids[index])
                res.entities.push(entity)
            } catch (e) {
                break
            }
        }

        if (index === ids.length) {
            res.index = -1
        } else {
            res.index = ids[index]
        }
        return res
    }
}