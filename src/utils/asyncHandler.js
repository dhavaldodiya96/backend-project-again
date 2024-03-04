import React from "react";

const AsyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default AsyncHandler;

// const asyncHandler = (fn) => async (req, res, next)=>{
//  try{
//   await fn(req,res,next)
//  }catch(error){
//   res.status(err.code || 500).json({
//    success : false,
//    message : err.message
//   })
//  }
// }
