
const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,ne)).catch((err)=>next(err))
    }
}
export {asyncHandler}

    //const asyncHandler=()=>{}
   //const asyncHandler=(func)=>()=>{} //higher order function
  // const asyncHandler=(func)=>async()=>{}

    // const asyncHandler=(fn)=>async(req,res,next)=>{
    //     try{
    //         await fn(req,res,next)
    //     }
    //     catch(error){
    //         res.status(err.code ||500).json({
    //             success:false,
    //             message:err.message
    //         })

    //     }
    // }