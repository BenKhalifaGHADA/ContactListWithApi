const express=require("express")
const router=express.Router()
//List model
const list=require('../../module/liste')
//pour supprimer un contact
router.delete("/:id", (req,res)=>{
    list.findById(req.params.id)
    .then(list=>list.remove().then(()=>res.json({success:true})))
    .catch(err=>res.status(404).json({success:false}))
})


// pour afficher le tableau de contact
router.get("/",(req,res)=>{
list.find().then(listes=>res.json(listes))
})
//ajouter les contactes
router.post('/',(req,res)=>{
    const newList=new list({
        name:req.body.name,
        Telephone:req.body.Telephone,
        Email:req.body.Email
    })
    newList.save().then(list=>res.json(list))
})
//pour modifier les contacts

router.put("/:id", (req, res) => {
    const modifiedContact={$set:{name:req.body.name,
        Telephone:req.body.Telephone,
        Email:req.body.Email}}
    
       list.updateOne({_id:req.params.id},modifiedContact)
       .then(()=>res.json({success:true}))
       .catch(err=>res.status(404).json({success:false}))
    })  
    
    
module.exports=router;