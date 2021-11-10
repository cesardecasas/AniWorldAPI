const {Comment, sequelize} = require('../models')


const createComment = async(req,res)=>{
    try {

        const {user_id, owner_id, content, type} = req.body

        const comment = await Comment.create({
            owner_id:owner_id,
            user_id:user_id,
            content:content,
            type:type
        })
        res.send(comment)
    } catch (error) {
        console.log(error)
    }


}

const deleteComment = async(req,res)=>{
    try {
        await Comment.destroy({where:{id:req.params.id}})
        res.send({msg:"successfully deleted"})
    } catch (error) {
        console.log(error)
    }
}

const getComments =async(req,res)=>{
    try {
        const comments = await Comment.findAll({where:{owner_id:req.params.id}})
        res.send(comments)
    } catch (error) {
        console.log(error)
    }
}

const getUserComments =async(req,res)=>{
    try {
        const comments = await Comment.findAll({where:{user_id:req.params.id}})
        res.send(comments)
    } catch (error) {
        console.log(error)
    }
}

const editComment = async(req,res) =>{
    try {
        const newItem = req.body.content
        const comment = await Comment.update(
            {'content': newItem},
            {
                where:{id:req.params.id},
                returning:true
            }
        )
        res.send(comment)
    } catch (error) {
        console.log(error)
    }
}


module.exports ={
    createComment,
    deleteComment,
    getComments,
    getUserComments,
    editComment
}