import ModalDepositFunds from "~/components/modal/ModalDepositFunds"
import "../governance/governance.scss"
import "./finance.scss"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
const Finance = () => {
    const [showModalDepositFunds, setShowModalDepositFunds] = useState(false)
    return (
        <>
            <ModalDepositFunds open={showModalDepositFunds} handleClose={() => setShowModalDepositFunds(false)}></ModalDepositFunds>
            <div className='ele__container'>
                <div className="ele__finance--box">
                    <div className="box__top">
                        <div className="box__top--icon">
                            <i className="fa-solid fa-coins"></i>
                        </div>
                        <span className="box__top--text">Finance</span>
                    </div>
                    <div className="box__bottom">
                        <div className="finance">
                            <h1>$0.00</h1>
                            <div className="finance_child">
                                <span className="hours">24h</span>
                                <p className="add_money">+$0.00</p>
                            </div>
                        </div>
                        <button className="box__btn">
                            <i className="fa-solid fa-plus"></i>
                            <span>New transfer</span>
                        </button>
                    </div>
                </div>

                <div className="ele__card">
                    <div className="card__img">
                    </div>
                    <h2 className="card__title">Make your first deposit
                    </h2>
                    <p className="card__desc">Begin by making your first treasury deposit. Learn more about managing a DAO treasury <a href="">in this guide</a>.</p>
                    <button className="card__btn" onClick={() => setShowModalDepositFunds(true)}>
                        <span>
                            Deposit funds
                        </span>
                        <ToastContainer toastStyle={{ color: "#52606d" }}></ToastContainer>
                    </button>
                </div>
            </div >
        </>
    )
}

export default Finance