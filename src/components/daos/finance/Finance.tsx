import ModalDepositFunds from "~/components/modal/ModalDepositFunds"
import "../governance/governance.scss"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
const Finance = () => {
    const [showModalDepositFunds, setShowModalDepositFunds] = useState(false)
    return (
        <>
            <ModalDepositFunds open={showModalDepositFunds} handleClose={() => setShowModalDepositFunds(false)}></ModalDepositFunds>
            <div className='ele__container'>
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