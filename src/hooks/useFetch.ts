import { useEffect, useState } from "react";
import exploreDAO from "../json/exploreDAO.json";
import { ExploreItem } from "~/types/type";

export default function useFetch(author: string | undefined) {
    const [exploreList, setExploreList] = useState<ExploreItem[]>([]);
    useEffect(() => {
        const fetchData = () => {
            setExploreList(exploreDAO);
        };
        const delay = 0;
        const timerID = setTimeout(fetchData, delay);
        return () => clearTimeout(timerID);
    }, []);
    return exploreList.find((item) => item["author"] === author);
}
