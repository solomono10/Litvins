const paginate = require('jw-paginate')
const {Router} = require('express');
const router = Router();


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

function getPaginator(req, arr) {
    const currentPage = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.count) || 8
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}

router.get('/', async (req, res, next) => {
    try {
        console.log(getPaginator(req, arrNews))
        await res.json(getPaginator(req, arrNews));
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/news/:newsId', async (req, res, next) => {
    try {
        const searchNews = parseInt(req.params.newsId)
        const news = arrNews.find(news => news.id === searchNews)
        res.json(news)
    } catch (e) {
        console.log(e)
    }
    next()
})
module.exports = router