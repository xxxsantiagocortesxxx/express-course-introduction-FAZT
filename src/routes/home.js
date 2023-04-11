const express = require('express');

const router = express.Router();

const axios = require('axios')

router.get('/',(req, res)=>{

    let isActive = false;
    
    const users = [
        {
            id: 1,
            name: "ryan",
            lastname: "cortes"
        },
        {
            id: 2,
            name: "reach",
            lastname: "cortan"
        }
    ]

    res.render('index', {
        title: 'Index Page',
        isActive,
        users
    
    })
})

router.get('/about',(req, res)=>{

    res.render('about')
})

router.get('/dashboard', (req, res) =>{

    res.render('dashboard')
});

router.get('/posts', async(req, res)=>{

   const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

    res.render('posts', {
        post : response.data
    })
});


module.exports = router;