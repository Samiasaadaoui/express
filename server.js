const express = require('express')
const app = express()
const port = 3000
const heure = jours(lundi--> vendredi)

const heures =(req,res)=>{

    si (jours =lundi,mardi,mercredi,jeudi,vendredi
        && heures 9h-->17h =ouvert )}
        sinon 
        {
            res.send("fermé")
        }



app.get('/Home' , (req , res)=>{
    res.sendFile(__dirname+ '/public/Home page.html')
})

    app.get('/Our services' , (req , res)=>{
        res.sendFile(__dirname+ '/public/Our services.html')

    })
        app.get('/Contact' , (req , res)=>{
            res.sendFile(__dirname+ '/public/Contact.html')

    
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
