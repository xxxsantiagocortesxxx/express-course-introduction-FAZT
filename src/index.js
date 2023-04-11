// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(( req, res )=>{

//    const read = fs.createReadStream('./static/index.html')
//    read.pipe(res)

// })

// server.listen(3000)
// console.log(`Server on port ${3000}`)

//----------------------------------------

// const express = require('express')

// const app = express()

// app.get('/', (req, res)=>{
//     res.sendFile('./static/index.html', {
//        root: __dirname
//     })
// })

// app.listen(3000)
// console.log(`Server on port ${3000}`)

//---------------------------------------

const express = require("express");
const morgan = require('morgan')
const path = require('path')
const connectDB = require('./db')
const ejs = require('ejs');

connectDB()

const app = express();

const HomeRoutes = require('./routes/home')
const UserRoutes = require('./routes/users')


//los settings deben ir antes que los middlewares

//---settings
app.set('case sensitive routing', true)
app.set('appName','Express Course')
app.set('port', 3000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname,'views'))

//---middlewares
app.use(express.json())
app.use(morgan('dev'))

//los app get,post etc
app.use(HomeRoutes)
app.use(UserRoutes)




//routes
//****************** 
// app.use((req, res, next)=>{
    
//     if(req.query.login === 'dscortes@uni.com'){
//         next()
//     }else{
//        res.send('no authoriced xd') 
//     }
    
// })


//routers
// para especificar la carpeta en la url
//       this
app.use('/public',express.static( path.join(__dirname,'public')))
app.use('/uploads',express.static( path.join(__dirname,'uploads')))


//-----------------------------------
app.listen(3000);
console.log(`Server ${app.get('appName')} on port ${app.get('port')}`);


//comentario de puebra index
