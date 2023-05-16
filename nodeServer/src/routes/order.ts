import {Router} from "express"

const router = Router()
router.get('/', (rq,rs) => {
    return rs.send('all orders here')

})

router.get('/:orderID/:paymentStatus', (rq,rs) => {
    const {orderID, paymentStatus} = rq.params
    const {token, did} = rq.headers
    const bodyOrder = rq.body
    console.log("order Info",bodyOrder)

    let msg = `orderID is : ${orderID}, payment status: ${paymentStatus}`
    let msg2 = `token is : ${token}, device id: ${did}`

    let userinfo = {
        name: "fefsdfew",
        age: 788494,
        add: "faefdsf545",
        education:{
            primary: "sffefefef",
            highschool : "afwerwrwersfcew"
        }
    }

    rs.setHeader('content-type','application')
    rs.setHeader('lastVisit', '032302301')

    console.log(msg)
    return rs.json(userinfo)


})

export default router