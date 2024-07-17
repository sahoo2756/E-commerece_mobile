import { toast } from "react-toastify";

function toastError({
  message = "Error ❌",
  autoClose = 5000,
  hideProgressBar = false , 
  position = "top-center",
  theme = "colored",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
}) {
  toast.error(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    theme,
  });
}

function toastWarning({
  message = "Warning ⚠️",
  autoClose = 5000,
  hideProgressBar = false , 
  position = "top-center",
  theme = "colored",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
}) {
  toast.error(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    theme,
  });
}


function toastInfo({
  message = "Sucess ✅",
  autoClose = 5000,
  hideProgressBar = false , 
  position = "top-center",
  theme = "colored",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
}) {
  toast.info(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    theme,
  });
}


function toastSuccess({
  message = "Sucess ✅",
  autoClose = 5000,
  hideProgressBar = false , 
  position = "top-center",
  theme = "colored",
  closeOnClick = true,
  pauseOnHover = true,
  draggable = true,
}) {
  toast.success(message, {
    position,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
    theme,
  });
}



export {toastError , toastWarning , toastSuccess , toastInfo}
