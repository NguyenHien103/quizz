import { Navigate, Outlet } from "react-router-dom";

function PrivateRouters() {
    const isLogin = true; // Thay đổi giá trị này dựa trên trạng thái đăng nhập thực tế
    return (
        <>
            {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </>
    );
}

export default PrivateRouters;
