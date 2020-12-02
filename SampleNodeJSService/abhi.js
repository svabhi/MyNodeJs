//http://localhost:3000/api/info
const express = require('express')
const app = express()
const PORT = 3001

const userInfoData = [
  {
    "id": 101,
    "firstName": 'Abhi1',
    "lastName": 'Manyu1',
    "points_scored": 100
  },
  {
    "id": 102,
    "firstName": 'Abhi2',
    "lastName": 'Manyu2',
    "points_scored": 200
  },
  {
    "id": 103,
    "firstName": 'Abhi3',
    "lastName": 'Manyu3',
    "points_scored": 300
  },
  {
    "id": 104,
    "firstName": 'Abhi4',
    "lastName": 'Manyu4',
    "points_scored": 400
  }
]

app.get('/api/info', function(req,res)
{
res.send('Welcome to NODE Abhi webservice......')
})

app.get('/api/users',function(req,res){
res.json(userInfoData);

})

app.get('/api/user/:id', function(req,res){
const id = req.params.id;
const user = userInfoData.find(user => user.id == id);
if(user){
  res.json(user)
}
else{
  res.send('This user is not found')
}
})

app.listen(PORT,function(){
  console.log('Server is started, please call your APIs')
})
