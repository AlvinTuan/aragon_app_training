import { useState } from "react";
import ModalWalletConnection from "~/components/modal/ModalWalletConnection";
import styles from "./community.module.scss"
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const Community = () => {
    const [showModalWalletConnection, setShowModalWalletConnection] = useState(false);
    return (<>
        <ModalWalletConnection open={showModalWalletConnection} handleClose={() => { setShowModalWalletConnection(false) }}></ModalWalletConnection>
        <div className={cx("container")}>
            <div className={cx("member__card")}>
                <div className={cx("member__card--top")}>
                    <i className="fa-solid fa-people-group"></i>
                    <span>Community</span>
                </div>
                <div className={cx("member__card--bottom")}>
                    <div className={cx("bottom__right")}>
                        <h2>1 Members</h2>
                        <span>Wallet-based</span>
                    </div>
                    <div className={cx("bottom__left")}>
                        <button className={cx("member__btn")} onClick={() => setShowModalWalletConnection(true)}>
                            <span>Manage memmbers</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className={cx("bottom")}>
                <div className={cx("bottom--search")}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Type to search ..." className={cx("box_search")} />
                </div>
                <div className={cx("bottom--address")}>
                    <p className={cx("address")}>0x5b9…ab10</p>
                    <div className={cx("icon--share")}><svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M2 16H14C14.5302 15.9994 15.0386 15.7885 15.4135 15.4135C15.7885 15.0386 15.9994 14.5302 16 14V9.42857C16 9.20124 15.9097 8.98323 15.7489 8.82248C15.5882 8.66173 15.3702 8.57143 15.1429 8.57143C14.9155 8.57143 14.6975 8.66173 14.5368 8.82248C14.376 8.98323 14.2857 9.20124 14.2857 9.42857V14C14.2857 14.0758 14.2556 14.1484 14.202 14.202C14.1484 14.2556 14.0758 14.2857 14 14.2857H2C1.92422 14.2857 1.85155 14.2556 1.79797 14.202C1.74439 14.1484 1.71429 14.0758 1.71429 14V2C1.71429 1.92422 1.74439 1.85155 1.79797 1.79797C1.85155 1.74439 1.92422 1.71429 2 1.71429H6.57143C6.79876 1.71429 7.01678 1.62398 7.17752 1.46323C7.33827 1.30249 7.42857 1.08447 7.42857 0.857143C7.42857 0.629814 7.33827 0.411797 7.17752 0.251051C7.01678 0.0903059 6.79876 0 6.57143 0H2C1.46975 0.00060496 0.961396 0.211513 0.586455 0.586455C0.211513 0.961396 0.00060496 1.46975 0 2V14C0.00060496 14.5302 0.211513 15.0386 0.586455 15.4135C0.961396 15.7885 1.46975 15.9994 2 16ZM11.1427 0H15.1427C15.37 0 15.588 0.0903059 15.7488 0.251051C15.9095 0.411797 15.9998 0.629814 15.9998 0.857143V4.85714C15.9998 5.08447 15.9095 5.30249 15.7488 5.46323C15.588 5.62398 15.37 5.71429 15.1427 5.71429C14.9154 5.71429 14.6973 5.62398 14.5366 5.46323C14.3758 5.30249 14.2855 5.08447 14.2855 4.85714V2.92686L8.60554 8.60571C8.44305 8.75712 8.22814 8.83955 8.00608 8.83563C7.78403 8.83171 7.57216 8.74175 7.41511 8.58471C7.25807 8.42767 7.16811 8.2158 7.1642 7.99374C7.16028 7.77168 7.2427 7.55677 7.39411 7.39429L13.073 1.71429H11.1427C10.9154 1.71429 10.6973 1.62398 10.5366 1.46323C10.3758 1.30249 10.2855 1.08447 10.2855 0.857143C10.2855 0.629814 10.3758 0.411797 10.5366 0.251051C10.6973 0.0903059 10.9154 0 11.1427 0Z" fill="currentColor"></path></svg></div>
                </div>
            </div>

        </div>
    </>
    )
}

export default Community