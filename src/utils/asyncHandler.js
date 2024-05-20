// mogoDB CCONNECTION  is too lengthy there so we are ultlizing that code in this async handler ao that it follow DRY principle

const asyncHandler = (requestHandler) => {
   return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}