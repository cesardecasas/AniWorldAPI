const {List, sequelize} =require('../models')


const getUserList = async(req,res)=>{
    try {
        const list = await List.findOne({
            where:{user_id:req.params.id}
        })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
}

const createUserList = async(req,res)=>{
    try {
        const list = await List.create({
            user_id:req.params.id,
            manga_id:[],
            anime_id:[]
        })
        res.send(list)
    } catch (error) {
        console.log(error)
    }
}

const addItem = async(req,res)=>{
    try {
        const {newItem, type} = req.body

        
        if(type === 'anime'){
            await List.update(
                {'anime_id':sequelize.fn('array_append', sequelize.col('anime_id'), newItem)},
                {where:{user_id:req.params.id}})
        }else if(type === 'manga'){
            await List.update(
                {'manga_id':sequelize.fn('array_append', sequelize.col('manga_id'), newItem)},
                {where:{user_id:req.params.id}})
        }

        const  list = await List.findOne({
            where:{user_id:req.params.id}
        })
        
        res.send(list)
    } catch (error) {
        console.log(error)
    }
}

const removeItem = async(req,res)=>{
    try {
        const newList = req.body.arr

        let list 
        if(req.body.type === 'anime'){
            list = await List.update(
                {'anime_id': newList},
            {
                where:{user_id:req.params.id},
                returning:true
            })
        }else if(req.body.type === 'manga'){
            list = await List.update(
                {'manga_id': newList},
            {
                where:{user_id:req.params.id},
                returning:true
            })
        }

        res.send(list)
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getUserList,
    createUserList,
    addItem, 
    removeItem
}