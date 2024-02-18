const express=require('express');
const router=express.Router();

router.get('/', (req, res)=>{
    res.send('In this Article')
})


module.exports = router