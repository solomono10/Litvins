const {Router} = require('express');
const bcrypt = require('bcrypt');
const router = Router();
const Player = require('./../models/Player')

const logIn = (req, playerId) =>{
    req.session.playerId = playerId
}

router.post('/', async (req, res, next) => {
    try {
        const {name, birthday, email, password} = req.body.data
        //checking whether there is a user
        const found = await Player.exists({ email });

        if (found) {
            debugger
           return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
        //create hashedPassword
        const hashedPassword = await bcrypt.hash(password, 12);
        //create new player
        const player = await Player.create({ email, password:hashedPassword, name,birthday});

        logIn(req, player.id)

        res.status(201).json({message:'Пользователь созда'})
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports =router