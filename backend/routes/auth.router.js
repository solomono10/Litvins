const {Router} = require('express');
// const bcrypt = require('bcryptjs');
const router = Router();
const Player = require('./../models/Player')


router.post('/registration', async (req, res, next) => {
    try {
        debugger
        const {name, birthday, email, password} = req.body.data
        console.log(name, birthday, email, password)
        //checking whether there is a user
        const candidate = await Player.findOne({ email });
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
        //create new player
        // const hashedPassword = await bcrypt.hash(password, 12);
        const player = new Player({ email, password: password,name,birthday});
        await player.save();
        res.status(201).json({message:'Пользователь созда',playerId: player.id})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})
router.post('/login', async (req, res, next) => {
    try {
        // extract data from req
        const {login, password} = req.body
        console.log(login, password)
        //find user
        //  const user = await User.findOne({login})
        //check find user
        // if(!user){
        //     return res.status(400).json({message: 'Пользователь не найден'})
        // }
        // password
        // const isMatch = await bcrypt.compare(password, user.password);
        //check correct password
        // if (!isMatch){
        //     return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
        // }
        //Token


        //
        res.json({})//token, userId; user.id
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})


module.exports = router