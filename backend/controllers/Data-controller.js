const asyncHandler = require('express-async-handler')
const Data = require('../models/Data-model')


// @desc Get Data
// @route GET /api/data
// @access Private

const getData = asyncHandler( async (req, res) => {
    //console.log(req.id);
    const data = await Data.find({ user: req.id })
    //res.status(200).json([{message:"Get Goals"}, goals])
   
    
    res.status(200).json(data)
})


// @desc Set Data
// @route POST /api/data
// @access Private

const setData = asyncHandler( async (req, res) => {

    const { name, email, phone, address } = req.body

    if(!req.body){
        res.status(400)
        throw new Error('Please add something in all fields')   // express error handler
    }
    console.log(name);
    const data = await Data.create({
        name: name,
        email:email,
        phone:phone,
        address:address,
        user: req.id
    })
    //res.status(200).json([{message:"Goal Created"}, goal])
    res.status(200).json([{message:"Data Added"},data])
})



// @desc Update Data
// @route PUT /api/data/:id
// @access Private

const updateData = asyncHandler( async (req, res) => {

    //console.log('hereeee : ',req.params);
    const data = await Data.findById(req.params.id)
    if(!data){
        res.status(400).json({message: "Data Not Found"})
        throw new Error('Data not found')
    }

    //const user = await User.findById(req.user.id)

    // Check for user
    if(!req.id){
        res.status(401).json({message: "User Not Found"})
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    //console.log("from update: ",data.user.toString());

    if(data.user.toString() !== req.id){
        res.status(401).json({message: "User Not authorized"})
        throw new Error('User not authorized')
    }

    const updatedData = await Data.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    //res.status(200).json([{message:"Goal Updated"}, updatedGoal])
    res.status(200).json([{message:"Data Updated"}, updatedData])
})


// @desc Delete Data
// @route DELETE /api/data/:id
// @access Private

const deleteData = asyncHandler( async (req, res) => {

    const id = req.params.id
    const data = await Data.findById(id)

    if(!data){
        res.status(400).json({message: "Data Not Found"})
        throw new Error('Data not found backend')
    }

    //const user = await User.findById(req.user.id)

    // Check for user
    if(!req.id){
        res.status(401).json({message: "User Not Found"})
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if(data.user.toString() !== req.id){
        res.status(401).json({message: "User Not Authorized"})
        throw new Error('User not authorized')
    }

    await data.remove()


    //res.status(200).json([{message:`Goal ${req.params.id} Deleted`}, id])
    res.status(200).json({message:`Data ${req.params.id} Deleted`})

})



module.exports = {
    getData,
    setData,
    updateData,
    deleteData
}