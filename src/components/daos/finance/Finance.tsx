import ModalDepositFunds from "~/components/modal/ModalDepositFunds"
import { useState } from "react"
import { ToastContainer } from "react-toastify"
import styles from "./finance.module.scss"
import classNames from "classnames/bind"

const cx = classNames.bind(styles)

const Finance = () => {
    const [showModalDepositFunds, setShowModalDepositFunds] = useState(false)
    return (
        <>
            <ModalDepositFunds open={showModalDepositFunds} handleClose={() => setShowModalDepositFunds(false)}></ModalDepositFunds>
            <div className={cx('container')}>
                <div className={cx("finance__box")}>
                    <div className={cx("box__top")}>
                        <div className={cx("box__top--icon")}>
                            <i className={cx("fa-solid fa-coins")}></i>
                        </div>
                        <span className={cx("box__top--text")}>Finance</span>
                    </div>
                    <div className={cx("box__bottom")}>
                        <div className={cx("finance")}>
                            <h1>$0.00</h1>
                            <div className={cx("finance_child")}>
                                <span className={cx("hours")}>24h</span>
                                <p className={cx("add_money")}>+$0.00</p>
                            </div>
                        </div>
                        <button className={cx("box__btn")}>
                            <i className="fa-solid fa-plus"></i>
                            <span>New transfer</span>
                        </button>
                    </div>
                </div>

                <div className={cx("card")}>
                    <div className={cx("card__img")}>
                    </div>
                    <h2 className={cx("card__title")}>Make your first deposit
                    </h2>
                    <p className={cx("card__desc")}>Begin by making your first treasury deposit. Learn more about managing a DAO treasury <a href="">in this guide</a>.</p>
                    <button className={cx("card__btn")} onClick={() => setShowModalDepositFunds(true)}>
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