const express = require('express');
const { findOne } = require('../model/userSch');
const router  = require('express').Router();
const User = require('../model/userSch');

router.post('/reg', async(req, res) => {
    const{name, email, userImage, address} = req.body;

    if(!name || !email || !userImage || !address){
        return res.status(400).json({
            Error: 'All fields are mendetory.'
        })
    }else{
        try {

            const user = new User({name, email, userImage, address, active: true});
            await user.save();
            res.status(201).json({
                Message: 'User Created.'
            })
            
        } catch (error) {
            console.log(error);
        }
    }
})


router.get('/userData', async(req, res) => {
    const email = req.body.email;

    try {
        const userData  = await User.findOne({email});
        res.status(200).json({
            Message: "User Details",
            UserData : userData
        })
    } catch (error) {
        console.log(error);
    }
})

router.put('/updateUser/:id', async(req, res) => {
    try {
        const userID = req.params.id;
        const userUpdate = await User.findByIdAndUpdate(userID, req.body,{
            new: true
        })

        res.status(200).json({
            Message: "User Updated",
            updatedData: userUpdate
        })
    } catch (error) {
        console.log(error);
    }
})


router.put('/deleteUser/:id', async(req, res) => {
    try {
        
        const userID = req.params.id;
        const userDelete = await User.findByIdAndDelete(userID)

        res.status(200).json({
            Message: "User Deleted",
            Deleted_User: userDelete
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;