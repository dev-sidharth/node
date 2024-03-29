const express = require('express');
const { User, validateUser} = require('../Model/UserModel');
const { signup, login } = require('../controllers/userController');

const userRouter = express.Router();


userRouter.get('/', (req,res)=>{
    return res.status(200).send('Hello');
 });

 userRouter.get('/getUsers', async (req,res) => {
   let list = await User.find();
    return res.status(200).send(list)
 })

 userRouter.post('/signup', signup);
 userRouter.post('/login', login);

 userRouter.put('/updateUser/:id', async (req, res) => {
   try{
      await User.findByIdAndUpdate(req.params.id, req.body)
      return res.status(200).send('Updated successfully.')
   }catch (error) {
      res.status(400).send('Something went wrong');
   }
 }
 );

 userRouter.delete('/deleteUser/:id', async (req,res) => {
   try{
      await User.findByIdAndDelete(req.params.id);
      res.send('User deleted successfully')
   } catch(error){
      res.status(400).send('Something Went Wrong')
   }
 });

 userRouter.get('/userDetails/:id', async (req, res) => {
   try {
      console.log("body solid",req)
      const data = await User.findById(req.params.id);
      res.send(data);
   } catch (error) {
      res.status(400).send(`Something went wrong`)
   }
 });

module.exports = userRouter;
 ///////////////// local db //////////////////////////////////////////////////////////////////



// const users = [
//    { username: "sid", id: 1 },
//    { username: "Thapa", id: 2 },
//    { username: "simran", id: 3 }
//  ];

//  router.get('/userDetails/:id', (req, res) => {
//    const user = users.find(user=> user.id == req.params.id);
//    if(!user) return res.status(401).res.send('No user found');
//    return res.status(200).res.send(user);
// })

//  router.put('/editUser', (req,res)=>{
//    const user = users.find(user => user.id === parseInt(req.body.id))
//    user.username = req.body.username;
//    return res.status(200).send(users);
// });

// router.delete('/deleteUser', (req,res)=>{
//    const index = users.findIndex(user => user.id === parseInt(req.body.id));
//    if(!index) return res.status(401).send('No user found')
//    users.splice(index, 1);
//    return res.status(200).send(users);
// });