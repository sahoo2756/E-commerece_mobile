const TryCatchHandler = (cb) => {
  // assuming cb is not a async function
  return ({ ...obj }) => {
    try {
      return cb(obj);
    } catch (error) {
      console.log("error.message = ", error.message);
      return {
        OK : false,
        message: error.message || "",
      };
    }
  };
};


export { TryCatchHandler }