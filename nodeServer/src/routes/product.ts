import {Router} from "express"

const router = Router()
router.get('/', (rq,rs) => {
    return rs.send('all products here')

})

export default router