import { useEffect, useState } from "react"
import "./ExploreDAO.scss"
import { ExploreItem } from "~/types/type"
import exploreDAO from "../../json/exploreDAO.json"
import ExploreDaoBtn from "./ExploreDaoBtn"
import ExploreDAOimg from "./ExploreDAOimg"

const ExploreDAO = () => {
    const [clickShow, setClickShow] = useState(true)
    const [exploreList, setExploreList] = useState<ExploreItem[]>([])
    useEffect(() => {
        const fetchData = () => {
            setExploreList(exploreDAO);
        }
        const delay = 3000
        const timerID = setTimeout(fetchData, delay)
        return () => clearTimeout(timerID)
    }, [])
    return (
        <section>
            <div>
                <p className='explore__title'>
                    Explore DAOs
                </p>
                {exploreList.length === 0 ? <div className="loading--item"></div> : <div className="explore__show--item">
                    {exploreList.map(item => (
                        item.avatar.endsWith("jpeg" || "jpg" || "png") ?
                            <ExploreDAOimg item={item} key={item.id}></ExploreDAOimg>
                            : <ExploreDaoBtn item={item} key={item.id}></ExploreDaoBtn>
                    ))}
                    <button className="show_btn" onClick={() => setClickShow(false)}>
                        <span>Show more</span>
                        {clickShow ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="chevron--down">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg> : <div className="loading--show"></div>}
                    </button>
                </div>}


            </div>

        </section>
    )
}

export default ExploreDAO