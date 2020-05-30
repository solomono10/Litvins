const {Router} = require('express');
const router = Router();

const infoClub = {
    numberYears: [
        {year: 2016, id: 1, activeClass: false},
        {year: 2017, id: 2, activeClass: false},
        {year: 2018, id: 3, activeClass: false},
        {year: 2019, id: 4, activeClass: false},
        {year: 2020, id: 5, activeClass: false}
    ],
    textInfo: '',

}
function addActiveData(data, id = 1) {
    let newArr = data.map((el) => {
        if (el.id === id) {
            return {...el, activeClass: true,}
        } else {
            return {...el, activeClass: false}
        }
    });
    let infoYear = newArr.find(year =>  year.activeClass === true )
    infoYear.info = [{},{},{}]
    return newArr
}
router.get('/', async (req, res, next) => {
    try {
        let newArr = addActiveData(infoClub.numberYears)
        await res.json({newArr});
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/year/:id', async (req, res, next) => {
    try{
        let yearId =parseInt(req.params.id)
        let newArr = addActiveData(infoClub.numberYears,yearId)
        await res.json({newArr});
    }catch (e) {

    }
})
module.exports = router