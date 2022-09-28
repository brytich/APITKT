const express = require('express')
const app = express()

const entreprises = require('./tkt.json')

const HOST = 'localhost'
const PORT = 8080

app.use(express.json())

app.get('/', (req, res) =>{
    res.send('Bonjour')
})

app.get('/entreprises', (req, res) =>{
    res.status(200).json(entreprises)
})

app.get('/entreprises', (req,res) => {res.status(200).json(entreprises)})
app.get('/entreprises/:id', (req,res) => {
    const id = parseInt(req.params.id) 
    const entreprise = entreprises.find(entreprise => entreprise.id === id)
    res.status(200).json(entreprise)})

app.post('/entreprises', (req,res) => {
    entreprises.push(req.body)
    res.status(200).json(entreprises)})

app.put('/entreprises/:id', (req,res) => {
        const id = parseInt(req.params.id)    
        let entreprise = entreprises.find(entreprise => entreprise.id === id)
            entreprise.name =req.body.name,
            entreprise.sector =req.body.sector,    
            res.status(200).json(entreprise)
})
    
app.delete('/entreprises/:id', (req,res) => {
        const id = parseInt(req.params.id)
        let entreprise = entreprises.find(entreprise => entreprise.id === id)
        entreprises.splice(entreprises.indexOf(entreprise),1)
        res.status(200).json(entreprises)
})

app.listen(PORT, () =>
    console.log(`En route sur ${HOST}:${PORT}`)
)
