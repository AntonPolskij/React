import { useEffect, useState } from 'react';
import { API_URL } from '../../utils/constants';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { newsError, newsLoading, newsRequest } from '../../store/news/selectors';
import { getNews } from '../../store/news/actions';
export const News = () => {
    // const [news, setNews] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const news = useSelector(newsRequest);
    const error = useSelector(newsError);
    const isLoading = useSelector(newsLoading);

    const refresh = () => {

        dispatch(getNews());

    //     setLoading(true);
    //     fetch(API_URL)
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error(`Request error ${response.status}`)
    //             }
    //             return response.json()
    //         })
    //         .then((result) => { console.log(result); setNews(result) })
    //         .catch((er) => {
    //             setError(true);
    //         })
    //         .finally(() => setLoading(false));
    }

    useEffect(() => refresh(), [])

    return (
        <>
            <h3> News </h3>
            {(isLoading) && <CircularProgress />}
            {error ? <><h2>Error</h2>
                <button onClick={refresh}>Try Again</button></> : <ul>
                {news.map(article => <li key={article.id}>{article.title}</li>)}
            </ul>}
        </>
    );
}