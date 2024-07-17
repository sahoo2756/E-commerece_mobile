import Cookies from "js-cookie";


const Logout = () => {
    Cookies.remove('authToken');
    window.location.reload()
}

export { Logout }