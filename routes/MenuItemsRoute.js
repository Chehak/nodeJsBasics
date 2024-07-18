const express = require('express');
const MenuItems = require('../models/MenuItems');
const router = express.Router()


router.get('/getAllMenuItems',async(req,res)=>{
   try{
    const data = await MenuItems.find();
    if(!data){
        res.status(404).json({message:'No data found'})
    }
    res.status(200).json(data)
   }catch(err){
    console.log(err);
    res.status(500).json({errorMessage:err})
   }
})

router.post('/addMenuItem',async(req,res)=>{
    try{
        const dataToSave = req.body;
    const newItem=  new MenuItems(dataToSave);
    const response = await newItem.save();
    console.log("data saved");
    res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(300).json({message:'Internal server error'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const menuId = req.params.id;
        const dataToBeUpdated = req.body
        const response = await MenuItems.findByIdAndUpdate(menuId,dataToBeUpdated , {
            new: true,
            runValidators: true,
          });
        if(!response){
            res.status(404).json({message:'No record found for' + menuId});
        }
        res.status(200).json({message:'Updated Successfully' , updatedData : response});
    }catch(err){
        console.log(err);
        res.status(500).json({message:'Internal server error' , errorMessage : err})
    }
})

router.delete('/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const data = await MenuItems.findByIdAndDelete({_id:id});
    if(!data){
        res.status(404).json({message:'No record found'})
    }
    res.status(200).json({message:'Deleted Successfully'})
   }catch(err){
    console.log(err);
    res.status(500).json({message:'Internal server error' , errorMessage:err})
    
}
})

module.exports = router;
