export const verifySession = async (req,res,next)=>{
  console.log(req.session.nombre);
  try {
    if(!req.session.nombre){
      res.redirect("/login");
    }else{
      next();
    }
  } catch (error) {
    res.status(400).json({
      ok:false,
      error:error.message
    })
  }
}