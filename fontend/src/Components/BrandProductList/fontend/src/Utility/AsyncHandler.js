const AsyncHandler = (cb) => {
  // cb should be an async function
  return async ( {...obj} ) => {
    try {
        return await cb(obj);
    } catch (error) {
      console.log("error.response = " ,error.response)
      let message = error.response?.data?.message
      return {
        OK : false,
        message: message || error.message,
      };
    }
  };
};


export { AsyncHandler }