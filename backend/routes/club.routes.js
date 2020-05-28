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
      data.numberYears.map((el) => {
        if (el.id === id) {
            return {...el, activeClass: true,}
        } else {
            return {...el, activeClass: false}
        }
    });
    return {data}
}

router.get('/', async (req, res, next) => {
    try {
debugger
       let data = addActiveData(infoClub)
        console.log(data)
        await res.json(data);
    } catch (e) {
        console.log(e)
    }
    next()
});


module.exports = router