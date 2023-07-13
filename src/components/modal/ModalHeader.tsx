import { ModalProps } from "~/types/type"
import "./ModalHeader.scss"
import ReactDOM from "react-dom"
import { NavLink, useParams } from "react-router-dom"
import useFetch from "~/hooks/useFetch"
import { useState } from "react"
import { Modal } from "antd"

const ModalHeader = ({ open, handleClose }: ModalProps) => {
    const param = useParams()
    const exploreItem = useFetch(param?.daoAuthor)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    if (typeof document === "undefined") return <div className="modal"></div>
    return ReactDOM.createPortal(
        <div className={`header__modal ${open ? "show__modal-header" : ""}`}>
            <div className="overlay" onClick={handleClose}></div>
            <div className="header__modal--content">
                <div className="header__modal--user">
                    <div className="content__header">
                        <p className="content__header--avatar">
                            {exploreItem?.avatar}
                        </p>
                        <div className="content__header--info-user">
                            <p className="info-user__title">{exploreItem?.title}</p>
                            <p className="info-user__author">
                                {exploreItem?.author}
                            </p>
                        </div>
                    </div>
                    <i className="fa-solid fa-chevron-down fa-2xs" onClick={showModal}></i>
                    <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
                        <div style={{ "backgroundColor": "#fffff", "padding": "20px 64px", "textAlign": "center", "fontSize": "18px", "fontWeight": "700px" }}>Select your DAO</div>

                        <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "12px", "border": "2px solid #c9d3db", "backgroundColor": "#eeeeee", "borderRadius": "12px", "cursor": "pointer" }}>
                            <div style={{ "display": "flex", "columnGap": "20px", "alignItems": "center" }}>
                                <p style={{ "background": "linear-gradient(to right, #003bf5, #002985)", "width": "48px", "height": "48px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "50%", "color": "#fff" }}>{exploreItem?.avatar}</p>
                                <div style={{ "display": "flex", "flexDirection": "column" }}>
                                    <p className="menu__user--title">{exploreItem?.title}</p>
                                    <p style={{ "color": "#52606d" }}>{exploreItem?.author}</p>
                                </div>
                            </div>
                            <i className="fa-sharp fa-solid fa-circle-check" style={{ "color": "#0031ad" }}></i>
                        </div>
                        <div style={{ "width": "100%" }}>
                            <a href="/" style={{ "display": "block", "marginTop": "12px", "backgroundColor": "#eeeeee", "borderRadius": "12px", "padding": "8px 127px" }}>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                <span style={{ "color": "#323f4b", "marginLeft": "15px", "fontSize": "17px" }}>Go back to explorer page</span>
                            </a>
                        </div>
                    </Modal>
                </div>
                <div className="header__modal--body">
                    <nav className="nav">
                        <ul className="nav-menu">
                            <li>
                                <NavLink to={"dashboard"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M0.535265 0.528816C0.403149 0.653773 0.32666 0.834266 0.32666 1.01476V8.65794C0.32666 9.03975 0.632614 9.35215 1.02201 9.35215H6.5848C6.96725 9.35215 7.28015 9.03975 7.28015 8.65794V1.0217C7.28015 0.632947 6.96725 0.327497 6.5848 0.327497L1.02201 0.313613V0.306671C0.834265 0.306671 0.660428 0.376092 0.528311 0.50799L0.535265 0.528816Z" fill="currentColor"></path><path d="M15.6313 0.329604L10.0685 0.336546C9.67912 0.336546 9.37317 0.641996 9.37317 1.03075V4.50177C9.37317 4.88358 9.67912 5.19597 10.0685 5.19597H15.6313C16.0138 5.19597 16.3267 4.88358 16.3267 4.50177V1.01478C16.3267 0.626029 16.0138 0.32058 15.6313 0.32058V0.329604Z" fill="currentColor"></path><path d="M7.0785 16.0998C7.20367 15.9679 7.28015 15.7874 7.28015 15.6069V12.1359C7.28015 11.7472 6.96725 11.4417 6.5848 11.4417H1.02201C0.632614 11.4417 0.32666 11.7472 0.32666 12.1359V15.593C0.32666 15.9749 0.632614 16.2872 1.02201 16.2872L6.5848 16.2942V16.2935C6.7656 16.2935 6.93943 16.2171 7.07155 16.0852L7.0785 16.0998Z" fill="currentColor"></path><path d="M15.6313 7.28202H10.0685C9.67912 7.28202 9.37317 7.58747 9.37317 7.97622V15.6125C9.37317 15.9943 9.67912 16.3067 10.0685 16.3067L15.6313 16.2928C16.0138 16.2928 16.3267 15.9804 16.3267 15.5986V7.97067C16.3267 7.58192 16.0138 7.27647 15.6313 7.27647V7.28202Z" fill="currentColor"></path></svg>
                                    <span>
                                        Dashboard
                                    </span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"governance"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M14.662 4.49999C14.842 4.49999 14.9953 4.34666 14.9953 4.16666C14.9953 4.09333 14.9687 4.02666 14.9287 3.96666L12.5267 0.60666C12.4 0.42666 12.1933 0.32666 11.98 0.32666H8.48667C8.3 0.32666 8.15334 0.473327 8.15334 0.659993V4.15999C8.15334 4.33999 8.3 4.49333 8.48667 4.49333L14.662 4.49999Z" fill="currentColor"></path><path d="M0.666662 5.5C0.479995 5.5 0.333328 5.64667 0.333328 5.83333V15C0.333328 15.3667 0.626662 15.6667 0.999995 15.6667H15C15.3667 15.6667 15.6667 15.3667 15.6667 15V5.83333C15.6667 5.64667 15.5133 5.5 15.3333 5.5H0.666662ZM8.33333 12C8.33333 11.8133 8.48 11.6667 8.66666 11.6667H13.3333C13.5133 11.6667 13.6667 11.8133 13.6667 12V13.3333C13.6667 13.5133 13.5133 13.6667 13.3333 13.6667H8.66666C8.48 13.6667 8.33333 13.5133 8.33333 13.3333V12Z" fill="currentColor"></path><path d="M7.16666 0.666662C7.16666 0.479996 7.01332 0.333329 6.83332 0.333329H4.00999V0.332662C3.78999 0.325996 3.58999 0.432662 3.46332 0.605996L1.06332 3.966H1.05999C0.946656 4.11266 0.986656 4.31933 1.13332 4.426C1.18666 4.466 1.25332 4.486 1.32666 4.486H6.82199C7.00199 4.486 7.15532 4.33266 7.15532 4.15266L7.16666 0.666662Z" fill="currentColor"></path></svg>
                                    <span>Governance</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"finance"} className={({ isActive }) => isActive ? "selected" : ""} >
                                    <i className="fa-solid fa-coins fa-lg"></i>
                                    <span>
                                        Finance
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"community"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <i className="fa-solid fa-people-group"></i>
                                    <span>
                                        Community
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"settings"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <i className="fa-solid fa-gear"></i>
                                    <span>
                                        Settings
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn__give-fb">
                        <a href="https://aragonassociation.atlassian.net/servicedesk/customer/portal/3">

                            <span>Give feedback</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </div>
        , document.querySelector("body")!)
}

export default ModalHeader