const {Router} = require('express');
const router = Router();
const Match = require('./../models/Match')
const moment = require('moment')

router.get('/', async (req, res, next) => {
    try {
        const matchList = await Match.find({}).lean()
        console.log(matchList)
        res.json(matchList);
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/match/:matchId', async (req, res, next) => {
    try {
        const searchMatch = req.params.matchId
        const match = await Match.findById(searchMatch)
        res.json(match)
    } catch (e) {
        console.log(e)
    }
    next()
});


router.post('/match', async (req, res, next) =>{
    try{
        const {time,matchDate,opposingTeam, team ,game} = req.body.matchInfo
        function combineDateAndTime (date, time) {
            let dataValue = moment(date).format('ll')
            let timeValue = moment(time).format('HH:mm:ss')
            const dateTime = new Date(`${dataValue} ${timeValue}`)
            return moment(dateTime).format('lll')
        }

        const dateTime = combineDateAndTime(matchDate ,time)
        const match = new Match ({ dateTime:dateTime, opposingTeam, team, game });
        await match.save()
        console.log(req.body.matchInfo)
        res.status(201).json({message:'Матч создался'})
    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})



module.exports = router