import "./modalModalWalletConnection.scss"
import ReactDOM from "react-dom"

interface ModalProps {
    open: boolean;
    handleClose: () => void
}

const ModalWalletConnection: React.FC<ModalProps> = ({ open, handleClose }) => {
    if (typeof document === "undefined") return <div className="modal"></div>
    return ReactDOM.createPortal(<div className={`modal ${open ? "show-modal" : ""} `}>
        <div className="overlay" onClick={handleClose}></div>
        <div className="modal__content">
            <div className="modal__title">
                <span className="modal__title--left">Connect wallet to continue</span>
                <span className="btn-close" onClick={handleClose}><i className="fa-solid fa-xmark"></i></span>
            </div>
            <div className="modal__bottom">
                <div className="modal__bottom--img">
                    <img src="/wallet.e48cea29.svg" alt="" />
                </div>
                <h2 className="modal__bottom--title">Wallet connection</h2>
                <span className="modal__bottom--desc">Connect your wallet to continue.</span>
                <button className="modal__bottom--btn">Connect now wallet</button>
            </div>
        </div>
    </div>, document.querySelector("body")!)
}

export default ModalWalletConnection