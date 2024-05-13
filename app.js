const express = require('express')

const app = express();

app.listen(5000,()=>(console.log("Server is running at http://localhost:5000")));

app.get('/data',async(request,response)=>{
    const data = {
        'id': 1,
        'name': 'dhanumjai',
        'email': 'dhanumjai@email.com',
        'ph': '999999999'
    }
    response.status(200);
    response.send(data);
});
