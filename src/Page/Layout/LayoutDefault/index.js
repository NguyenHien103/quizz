import { NavLink, Outlet } from "react-router-dom"
import "./LayoutDefault.scss";
import { getCookie } from "../../../Helper/cookie";
import { useSelector } from "react-redux";

function LayoutDefault() {
    const token = getCookie("token");
    // console.log(token)
    const isLogin = useSelector(state => state.LoginReducer); // lấy dữ liệu từ store
    // console.log(isLogin)
    return (
        <>
            <div className="layout-default">

                <header className="layout-default__header">
                    <div className="layout-default__logo">Quizz</div>

                    <div className="layout-default__menu" >
                        <ul>
                            <li>
                                <NavLink to="/" >Home</NavLink>
                            </li>

                            {token && (<>
                                <li>
                                    <NavLink to="/topic" >Topic</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/answers" >Answers</NavLink>

                                </li>
                            </>)}


                        </ul>
                    </div>
                    <div className="layout-default__account">
                        {token ? (<>
                            <NavLink to="/logout">Đăng xuất </NavLink>
                        </>
                        ) : (
                            <>
                                <NavLink to="/login">Đăng nhập </NavLink>
                                <NavLink to="/register">Đăng kí </NavLink>
                            </>
                        )}


                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer>
                    <div class="pre-footer-content">
                        <p>Some content above the footer columns. You can put announcements, contact information, or other relevant details here.</p>
                    </div>
                    <hr/>
                        <div class="footer-container">
                            <div class="footer-column">
                                <h3>Kinh tế</h3>
                                <ul>
                                    <li><a href="#">kt1</a></li>
                                    <li><a href="#">kt2</a></li>
                                    <li><a href="#">kt3</a></li>
                                    <li><a href="#">kt4</a></li>
                                </ul>
                            </div>
                            <div class="footer-column">
                                <h3>Văn hóa</h3>
                                <ul>
                                    <li><a href="#">Vh1</a></li>
                                    <li><a href="#">Vh2</a></li>
                                    <li><a href="#">Vh3</a></li>
                                    <li><a href="#">Vh4</a></li>
                                </ul>
                            </div>
                            <div class="footer-column">
                                <h3>Chính trị</h3>
                                <ul>
                                    <li><a href="#">Ct1</a></li>
                                    <li><a href="#">Ct2</a></li>
                                    <li><a href="#">Ct3</a></li>
                                    <li><a href="#">Ct4</a></li>
                                </ul>
                            </div>
                        </div>
                </footer>
            </div>

        </>
    )
}
export default LayoutDefault;