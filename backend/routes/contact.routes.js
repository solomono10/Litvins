const {Router} = require('express');
const router = Router();

const contacts = [
    {position:'Creator of the club and member of the team Council',phone:29565654654, mail:'gfgfdgfd@gmail.com',address:'fdsfsdfsdfsd',id:1},
    {position:'Member of the team council',phone:29543545, mail:'fsdffdsf@gmail.com',address:'fdfdsfdsfdsf',id:2},
    {position:'Admin',phone:298559228, mail:'iw.dantsevich@gmail.com',address:'fdsfdsfddfsd',id:3}
]

router.get('/', async (req, res, next) => {
    try {
        await res.json(contacts);
    } catch (e) {
        console.log(e)
    }
    next()
});


module.exports = router