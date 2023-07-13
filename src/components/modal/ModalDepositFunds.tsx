import ReactDOM from "react-dom";
import "./modalDepositFunds.scss"
import { useParams } from "react-router-dom";
import clipboardCopy from "clipboard-copy";
import { toast } from "react-toastify";
import { useState } from "react";
import { ModalProps } from "~/types/type";
import ModalWalletConnection from "./ModalWalletConnection";

const ModalDepositFunds = ({ open, handleClose }: ModalProps) => {
    const param = useParams()
    const [toggleText, setToggleText] = useState(false)

    const handleCopy = () => {
        notify_CP()
        if (toggleText) {
            clipboardCopy('0x2ae51e0d400ccedb4cf2143e5d66a05fe89e995e')
        } else {
            clipboardCopy(param?.daoAuthor || "")
        }

    }
    const notify_CP = () => {
        toast.success('Copied', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    if (typeof document === "undefined") return <div className="modal"></div>
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false);
    return ReactDOM.createPortal(

        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <div className={`modal ${open ? "show-modal" : ""} `}>
                <div className="overlay" onClick={handleClose}></div>
                <div className="modal__deposit_funds">
                    <div className="modal__title">
                        <span className="modal__title--left">
                            <h2>Deposit assets</h2>
                            <span>Send assets to the DAO treasury</span>
                        </span>
                        <span className="btn-close" onClick={handleClose}><i className="fa-solid fa-xmark"></i></span>
                    </div>
                    <div className="deposit-funds__bottom">
                        <div className="section__blockchain">
                            <h2 className="blockchain__title">Blockchain</h2>
                            <span className="blockchain__desc">Use the appropriate blockchain. Funds cannot be restored once they have been sent.</span>
                            <div className="ethereum__btn">
                                <div className="logo">
                                    <i className="fa-brands fa-ethereum" style={{ "color": "#3960a2" }}></i>
                                    <p>Ethereum</p>
                                </div>
                                <button className="connect-btn" onClick={() => setShowModalWalletConnection(true)}>
                                    Connect
                                </button>
                            </div>
                        </div>
                        <div className="section__dao-treasury">
                            <h2 className="dao-treasury__title">
                                DAO treasury
                            </h2>
                            <span className="dao-treasury__desc">
                                Copy the ENS or address below and use your wallet's send feature to send money to your DAO's treasury.
                            </span>
                            <div className="dao-treasury__btn">
                                <div className="info">
                                    {toggleText ? <p>0x2ae…995e</p> : <p>{param.daoAuthor}</p>}
                                </div>
                                <div className="btn__list">
                                    <button className="btn__list--toggle" onClick={() => setToggleText(!toggleText)}>{toggleText ? <span>ENS</span> : <span>0x...</span>}</button>
                                    <button className="btn__list--copy" onClick={handleCopy}>
                                        <i className="fa-solid fa-clone fa-xs"></i>
                                    </button>
                                    <button className="btn__list--share"><a href="https://etherscan.io/address/0x2ae51e0d400ccedb4cf2143e5d66a05fe89e995e">
                                        <i className="fa-solid fa-up-right-from-square fa-xs"></i>
                                    </a></button>
                                </div>
                            </div>
                            <div className="bottom__list--btn">
                                <button className="btn-view-all">View all transfers</button>
                                <button className="btn-cancel" onClick={handleClose}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

        , document.querySelector("body")!)
}

export default ModalDepositFunds