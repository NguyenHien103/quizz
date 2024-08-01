import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../Helper/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "../../actions/Login";

function Logout() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    deleteAllCookies();

    useEffect(() => {
        dispatch(checkLogin(false));
        navigate("/login");
    }, []);
     // Thêm navigate vào mảng dependencies

    return(
        <>
        </>
    )
}

export default Logout;
