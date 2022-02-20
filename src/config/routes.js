const routes = require('express').Router()
let db = require('./db.js')

//Pegar dados
routes.get('/', (req,res) => {
    res.json(db)
})

//Inserir dados
routes.post('/add', (req,res)=> {
    const body = req.body

    db.push(body)
    return res.json(body)
    
})


//deletar dados
routes.delete('/delete', (req,res) => {
    const body = req.body
    const novaTabela = db.filter(value => {
        return value.id != body.id
    })

    db = novaTabela
    res.json(novaTabela)
})

//alterar dados 

routes.put('/alterar', (req,res) => {

    const body = req.body
    const novoDB = db.map(value => {
        if(value.id == body.id){
            return body
        }else{
            return value
        }
    })
    db = novoDB

    res.json(db)
})

routes.delete('/delete/:id', (req,res) => {
    const id = req.params.id
    const novaTabela = db.filter(value => {
        return value.id != id
    })

    db = novaTabela
    res.json(db)
})

module.exports = routes