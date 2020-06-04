const paginate = require('jw-paginate')
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
const arrNews = [
    {id: 1, name: 'Тренировка сегодня'},
    {id: 2, name: 'ДР Кости'},
    {id: 3, name: 'Тренирвка во вторник'},
    {id: 4, name: 'ДР Денис'},
    {id: 5, name: 'Тренировка завтра'},
    {id: 6, name: 'Игра завершилась со счетом 5/2'},
    {id: 7, name: 'Тренировка сегодня'},
    {id: 8, name: 'Гуляем в бане'},
    {id: 9, name: 'Пьем в баре'},
    {id: 10, name: 'Тренировка сегодня'},
    {id: 11, name: 'ДР Кости'},
    {id: 12, name: 'Тренирвка во вторник'},
    {id: 13, name: 'ДР Денис'},
    {id: 14, name: 'Тренировка завтра'},
    {id: 15, name: 'Игра завершилась со счетом 5/2'},
    {id: 16, name: 'Тренировка сегодня'},
    {id: 17, name: 'Гуляем в бане'},
    {id: 18, name: 'Пьем в баре'}
]


function searchLastMatch(match){
  return match.score === true
}
function searchNextMatch(arr){
    let newArr = arr.filter((match)=>{
        return match.score === false
    })
    let nextMatch = newArr[0]
    let listMatches = getPaginator(newArr, 1,8)
    return {nextMatch ,listMatches}
}
function getPaginator(arr,currentPage, pageSize) {
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}


router.get('/homeInfo', async (req, res, next) => {
    try {
        //last Match
        let newArr = arrListGames.filter(searchLastMatch)
        let searchLastMatchValue = newArr[newArr.length-1]
        //info about club
        let infoAboutClub = {text:'Любительское объединение футбола "Литвины" является сообществом людей,увлечённых футболом.' +
                ' Нас объединяет стремление к здоровому образу жизни и к победе путём совершенствования футбольного мастерства,' +
                ' постоянных тренировок, поддержания физической формы на самом высоком уровне.' ,trainers:[{img1: 'img1',id:1},{img2:'img2',id:2}]}
        //statistics
        let statisticsPlayers = [
            {name:'Бомбардиры', listPlayers:[{name:'Данцевич Иван',count:25, id:1},{name:'Cиницкий Денис',count:20,id:2},{name:'Стригуцкий Дмитрий',count:15,id:3}],id:1},
            {name:'Ассисты', listPlayers:[{name:'Данцевич Иван',count:20,id:1},{name:'Cиницкий Денис',count:18,id:2},{name:'Стригуцкий Дмитрий',count:15,id:3}],id:2},
            {name:'Лучшие игроки', listPlayers:[{name:'Данцевич Иван',count:5,id:1},{name:'Cиницкий Денис',count:3,id:2},{name:'Стригуцкий Дмитрий',count:2,id:3}],id:3}]
        //next Match and list Matches score = false
        let {nextMatch, listMatches} = searchNextMatch(arrListGames)
        // last news
        let newsList = getPaginator(arrNews, 1,2)
        //All info
        let data = {searchLastMatchValue,infoAboutClub,statisticsPlayers,nextMatch,listMatches,newsList}
        await res.json(data);
    } catch (e) {
        console.log(e)
    }
    next()
})

module.exports = router