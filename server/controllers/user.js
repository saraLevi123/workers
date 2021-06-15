const User = require('../models/User');
const { encoded } = require('../middlewares/checkPermissions');


const checkPermission=async (req, res) => {
    try{
        console.log("--loginUser--")
        console.log(req.body)

        let user = await User.findOne({
            password: req.body.password,
            email: req.body.email
        })
        if(user!=null) {       
            res.status(200).send(user);
        }       
        else{//user not exist
            res.status(200).send(false);
        }
    }
    catch(err) {
                res.status(500).send(err);
            }
}

const getAllEmployed = async (req,res)=>{
    try{
        console.log("--getAllEmployed--")
        let users = await User.find()
        res.status(200).send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
}
const getEmployedById = async (req,res)=>{
    try{
        console.log("--getEmployedById--")
        let user = await User.findOne({_id:req.body._id})
        res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
}

const setNewEmployed = async (req,res)=>{
    try{
        console.log("--setNewEmployed--")
        console.log(req.query)

        let user = await new User({
            userName: req.query.userName, password:req.query.password,email:req.query.email,status:'candidate'
        })
             res.status(200).send(user);  

    }
    catch(err){
        res.status(500).send(err);
    }
}


const updateEmployed = async (req,res)=>{
    try{
        console.log("--updateEmployed--")
        let user = await User.findOne({_id:req.query._id})
        if(user==null) { //user not exist    
            res.status(200).send(false);
        }       
        else{
            console.log("else");
            console.log(req.query);
            await User.findByIdAndUpdate(req.query._id,{ 
                userName: req.query.userName, password:req.query.password,email:req.query.email,status:req.query.status
            });
             res.status(200).send(user); 
        }
    }
    catch(err){
        res.status(500).send(err);

    }
}

 module.exports = { checkPermission,getAllEmployed,getEmployedById,updateEmployed,setNewEmployed};