import { ModalProps } from "~/types/type"
import "./governance.scss"
import ModalWalletConnection from "~/components/modal/ModalWalletConnection"
import { useState } from "react"


const Governance = () => {
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false)
    return (
        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <div className='ele__container'>
                <div className="ele__card">
                    <div className="card__img">
                    </div>
                    <h2 className="card__title">Create your first proposal</h2>
                    <p className="card__desc">Get your community involved in the decision-making process. Learn more in our <a href="">proposal guide</a>.</p>
                    <button className="card__btn" onClick={() => setShowModalWalletConnection(true)}>
                        <span>
                            New proposal
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Governance