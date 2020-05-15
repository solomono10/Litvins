const {Router} = require('express');
const router = Router();


router.get('/',(req, res) => {
    res.send([{"name": "Ivan"}, {"name": "Polina"}, {"name": "Pidr"}]);
});
router.post('/',(req,res) =>{

})

module.exports = router