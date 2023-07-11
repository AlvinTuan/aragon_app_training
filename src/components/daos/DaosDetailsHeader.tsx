import useFetch from "~/hooks/useFetch"
import "./DaosDetailsHeader.scss"
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
import { Button, Modal } from 'antd';


const DaosDetailsHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const param = useParams()
    const exploreDaosItem = useFetch(param.daoAuthor)

    // modal 
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <header className="dao__header">
            <div className="dao__top">
                {/* button menu */}
                <div className="btn__menu">
                    <input type="checkbox" name="openNav" id="openNav" />
                    <label htmlFor="openNav" className="openNav">
                        <div className="brick">
                            <span></span>
                            <span></span>
                        </div>
                        <span className="nav-text">Menu</span>
                    </label>
                </div>
                {/*  */}
                <div className="dao__top--left">
                    <div className="menu__user">
                        <p className="menu__user--author">{exploreDaosItem?.avatar}</p>
                        <p className="menu__user--title">{exploreDaosItem?.title}</p>
                        <Button type="primary" onClick={showModal} style={{ "backgroundColor": "white", "color": "black", "width": "32px", "height": "32px", "padding": "4px" }}>
                            <i className="fa-solid fa-chevron-down"></i>
                        </Button>
                        <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} >
                            <div style={{ "backgroundColor": "#fffff", "padding": "20px 64px", "textAlign": "center", "fontSize": "18px", "fontWeight": "700px" }}>Select your DAO</div>

                            <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-between", "padding": "12px", "border": "2px solid #c9d3db", "backgroundColor": "#eeeeee", "borderRadius": "12px", "cursor": "pointer" }}>
                                <div style={{ "display": "flex", "columnGap": "20px", "alignItems": "center" }}>
                                    <p style={{ "background": "linear-gradient(to right, #003bf5, #002985)", "width": "48px", "height": "48px", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderRadius": "50%", "color": "#fff" }}>{exploreDaosItem?.avatar}</p>
                                    <div style={{ "display": "flex", "flexDirection": "column" }}>
                                        <p className="menu__user--title">{exploreDaosItem?.title}</p>
                                        <p style={{ "color": "#52606d" }}>{exploreDaosItem?.author}</p>
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
                    <div className="nav">
                        <ul className="menu">
                            <li>
                                <NavLink to={"dashboard"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <span>
                                        Dashboard
                                    </span></NavLink>
                            </li>
                            <li>
                                <NavLink to={"governance"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <span>Governance</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"finance"} className={({ isActive }) => isActive ? "selected" : ""} >
                                    <span>
                                        Finance
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"community"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <span>
                                        Community
                                    </span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"settings"} className={({ isActive }) => isActive ? "selected" : ""}>
                                    <span>
                                        Settings
                                    </span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="dao__top--right">
                    <button className="btn-give-feedback">
                        <span>Give feedback</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 14 14"><path d="M1.63299 2.66732H9.49299C9.52693 2.66347 9.56124 2.67014 9.59126 2.68642C9.62129 2.70271 9.64558 2.72783 9.66086 2.75839C9.67613 2.78894 9.68165 2.82345 9.67667 2.85724C9.67168 2.89103 9.65644 2.92248 9.63299 2.94732L0.966326 11.614C0.789686 11.8036 0.693522 12.0543 0.698093 12.3133C0.702664 12.5724 0.807613 12.8196 0.99083 13.0028C1.17405 13.186 1.42123 13.291 1.6803 13.2956C1.93936 13.3001 2.19009 13.204 2.37966 13.0273L11.0463 4.36065C11.0708 4.33756 11.1015 4.32212 11.1347 4.3162C11.1678 4.31028 11.202 4.31414 11.233 4.32732C11.2628 4.34033 11.2882 4.36178 11.3059 4.38903C11.3237 4.41627 11.3331 4.44812 11.333 4.48065V12.334C11.333 12.5992 11.4383 12.8536 11.6259 13.0411C11.8134 13.2286 12.0678 13.334 12.333 13.334C12.5982 13.334 12.8526 13.2286 13.0401 13.0411C13.2276 12.8536 13.333 12.5992 13.333 12.334V2.33398C13.3339 2.11202 13.2904 1.89212 13.2049 1.68729C13.1193 1.48246 12.9936 1.29686 12.8351 1.14147C12.6766 0.986083 12.4886 0.864058 12.2821 0.782616C12.0756 0.701173 11.8549 0.661966 11.633 0.667317H1.63299C1.36778 0.667317 1.11342 0.772675 0.925886 0.960211C0.73835 1.14775 0.632993 1.4021 0.632993 1.66732C0.632993 1.93253 0.73835 2.18689 0.925886 2.37442C1.11342 2.56196 1.36778 2.66732 1.63299 2.66732Z" fill="currentColor"></path></svg>
                    </button>
                    <button className="btn-connect-wallet">
                        <span>Connect wallet</span>
                        <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="w-2.5 h-2.5"><path fillRule="evenodd" clipRule="evenodd" d="M5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843ZM12.6207 11.0644C13.9718 12.0204 14.9932 13.372 15.544 14.9328C15.5867 15.0534 15.5999 15.1825 15.5824 15.3093C15.5649 15.4361 15.5172 15.5569 15.4434 15.6614C15.3696 15.766 15.2717 15.8513 15.1581 15.9102C15.0445 15.9691 14.9184 15.9999 14.7904 16H1.20958C1.08158 15.9999 0.955475 15.9691 0.841843 15.9102C0.728211 15.8513 0.630372 15.766 0.556542 15.6614C0.482711 15.5569 0.435045 15.4361 0.417546 15.3093C0.400047 15.1825 0.413226 15.0534 0.455976 14.9328C1.00679 13.372 2.02816 12.0204 3.3793 11.0644C4.73044 10.1085 6.34484 9.59509 7.99998 9.59509C9.65512 9.59509 11.2695 10.1085 12.6207 11.0644Z" fill="currentColor"></path></svg>
                    </button>
                </div>

            </div >
        </header >
    )
}

export default DaosDetailsHeader