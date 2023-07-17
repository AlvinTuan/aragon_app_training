import ModalWalletConnection from "~/components/modal/ModalWalletConnection"
import { useState } from "react"
import "../../../assets/grid.scss"
import classNames from "classnames/bind"
import styles from "./governance.module.scss"

const cx = classNames.bind(styles)

const Governance = () => {
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false)
    return (
        <>
            <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
            <div className={cx('container')}>
                <div className={cx("card")}>
                    <div className={cx("card__img")}>
                    </div>
                    <h2 className={cx("card__title")}>Create your first proposal</h2>
                    <p className={cx("card__desc")}>What's the first thing your community needs to decide? For ideas on how to structure proposals, <a href="">read this guide</a>.</p>
                    <button className={cx("card__btn")} onClick={() => setShowModalWalletConnection(true)}>
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