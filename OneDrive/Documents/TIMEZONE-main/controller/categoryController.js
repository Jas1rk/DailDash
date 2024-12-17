const Category = require('../model/categoryModel')


const admincategory = async(req,res)=>{
    try{
        const categories = await Category.find({})
        res.render('admin/categoryadmin',{categories})
    }catch(err){
        console.log(err.message)
    }
}


const admincategoryPost = async(req,res)=>{
    try{
        const {name,description} = req.body
        console.log(req.body)
        const newCategory = await new Category({
            name:name,
            description:description
        })
        await newCategory.save()
        console.log(newCategory)
        res.redirect('/admin/admincategory')

    }catch(err){
        console.log(err.message)
    }
}

const adminCategoryBlock = async(req,res)=>{
    try{
        const categories = req.query._id
        console.log(categories)
        const data = await Category.findByIdAndUpdate(categories,{isBlocked:true})
        res.redirect('/admin/admincategory')

    }catch(err){
        console.log(err.message)
    }
}

const adminCategoryUnblock = async(req,res)=>{
    try{
        const categories = req.query._id
        console.log(categories)
        const data = await Category.findByIdAndUpdate(categories,{isBlocked:false})
        res.redirect('/admin/admincategory')

    }catch(err){
        console.log(err.message)
    }
}





module.exports = {
    admincategory,
    admincategoryPost,
    adminCategoryBlock,
    adminCategoryUnblock ,
    

}


