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
                    <p className="card__desc">What's the first thing your community needs to decide? For ideas on how to structure proposals, <a href="">read this guide</a>.</p>
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