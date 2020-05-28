const {Router} = require('express');
const router = Router();

const arrListGames = [
    {
        "data":{"day":14,"month":"Nov"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Спутник"},
        "logosClub":{},
        "score":true,
        "scoreValue":{"firstValue":2,"secondValue":0},
        "location":"СШ №180 Радужная 8/3",
        "id":1
    },
    {
        "data":{"day":23,"month":"Nov"},
        "namesClub":{"firstClub":"ATLETICO","secondClub":"Лицвины"},
        "logosClub":{},
        "score":true,
        "scoreValue":{"firstValue":3,"secondValue":2},
        "location":"СШ №180 Радужная 8/3",
        "id":2
    },
    {
        "data":{"day":31,"month":"Nov"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Atalanta"},
        "logosClub":{},
        "score":true,
        "scoreValue":{"firstValue":5,"secondValue":5},
        "location":"СШ №180 Радужная 8/3",
        "id":3
    },
    {
        "data":{"day":2,"month":"Dec"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Palmeiras"},
        "logosClub":{},
        "score":true,
        "scoreValue":{"firstValue":1,"secondValue":1},
        "location":"СШ №180 Радужная 8/3",
        "id":4
    },
    {
        "data":{"day":12,"month":"Dec"},
        "namesClub":{"firstClub":"Equals","secondClub":"Лицвины"},
        "logosClub":{},
        "score":true,
        "scoreValue":{"firstValue":2,"secondValue":3},
        "location":"СШ №180 Радужная 8/3",
        "id":5
    },
    {
        "data":{"day":23,"month":"Dec"},
        "namesClub":{"firstClub":"Sporting","secondClub":"Лицвины"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":6
    },
    {
        "data":{"day":31,"month":"Dec"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Recreative"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":7
    },
    {
        "data":{"day":2,"month":"Jan"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Devils"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":8
    },
    {
        "data":{"day":12,"month":"Jan"},
        "namesClub":{"firstClub":"Kolosovo","secondClub":"Лицвины"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":9
    },
    {
        "data":{"day":22,"month":"Jan"},
        "namesClub":{"firstClub":"Equals","secondClub":"Лицвины"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":10
    },
    {
        "data":{"day":31,"month":"Jan"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"Atalanta"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":11
    },
    {
        "data":{"day":1,"month":"Feb"},
        "namesClub":{"firstClub":"Лицвины","secondClub":"ATLETICO"},
        "logosClub":{},
        "score":false,
        "location":"СШ №180 Радужная 8/3",
        "id":12
    }

]

function searchLastMatch(match){
  return match.score === true
}

router.get('/lastMatch', async (req, res, next) => {
    try {
        let newArr = arrListGames.filter(searchLastMatch)
        let searchLastMatchValue = newArr[newArr.length-1]
        await res.json(searchLastMatchValue);
    } catch (e) {
        console.log(e)
    }
    next()
})

module.exports = router