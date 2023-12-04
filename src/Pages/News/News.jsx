import React, { useState } from "react";
import css from "./News.module.css";
import NewsItem from "../../components/NewsItem/NewsItem";

export default function News(){

    const [newsData,setNewsData] = useState([{
        title:"Title #1",
        text:"text #1",
    },

    {
        title:"Title #1",
        text:"text #2",
    },
    
    {
        title:"Title #1",
        text:"text #3",
    },

    ])

    return(
        <div className={css.newsContainer}>
            {newsData.map((obj)=>(<NewsItem title = {obj.title} text = {obj.text}/>))}
        </div>
    )
}