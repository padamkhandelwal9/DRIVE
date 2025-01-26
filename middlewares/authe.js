const jwt=require('jsonwebtoken');


function auth(req,res,next){
    const token=req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }

    try{
       const decoded=jwt.verify(token,process.env.JWT_SECRET)
       req.user=decoded;
       return next();

    }catch(err){
        return res.status(401).json({
            message:'Unauthorized'
        })
    }
}

///changed part
module.exports = (req, res, next) => {
    if (req.session && req.session.user) {
        req.user = req.session.user;
        next();
    } else {
        res.redirect('/user/login');
    }
};


module.exports=auth;