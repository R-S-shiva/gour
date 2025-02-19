const http=require('http')
http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('content-type',"text/html")
    res.write("<h1>GOOD AFTERNOON STUDENTS<h1/>")
    res.write("<br>")
    res.write("<h3>hey janu<h3/>")
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample HTML Form</title>
</head>
<body>

    <h2>Login form</h2>

    <form action="/submit" method="POST">
        <label for="user name">User Name:</label><br>
        <input type="text" id="User name" name="name" required><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>

        <label for="message">Message:</label><br>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>

        <input type="submit" value="Submit">
    </form>

</body>
</html>

        
        `)
    res.end()
}).listen(2000)