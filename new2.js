const http=require("http")
const PORT=7999
const server=http.createServer((req,res)=>{
    res.write("THIS IS MERN")
    res.end()
})
server.listen((err)=>{
    if (!err) console.log(`this server is running in ${PORT}`)
})