const {Router} = require('express');
// const bcrypt = require('bcryptjs');
const router = Router();
// const Player = require('./../models/Player')

function logOut(req, res){
    debugger
    req.session.destroy((err)=>{
        if (err){
            console.log(err)
        }
    })
}

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

router.post('/logout',async (req,res,next)=>{
    try {
        await logOut(req, res)
        res.json({message: 'out in the sistem'}).redirect('/')

    }catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


module.exports = router