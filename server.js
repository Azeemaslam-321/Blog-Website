const express=require('express');
const mongoose=require('mongoose');
const articleRouter=require("./routes/article")
const app=express();
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    const articles=[{
        title:'test article 1',
        createdAT:new Date(),
        description:'test description'  
    },
    {
        title:'test article 2',
        createdAT:new Date(),
        description:'test description'  
    }

]
    res.render('index',{articles:articles})
})
app.use('/articles',articleRouter);
app.listen(3000)