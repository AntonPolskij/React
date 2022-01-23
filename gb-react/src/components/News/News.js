import { useEffect } from 'react';
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

    const refreshNews = () => {
        dispatch(getNews());
    }

    useEffect(() => refreshNews(), [])

    return (
        <>
            <h3> News </h3>
            {(isLoading) && <CircularProgress />}
            {error ? <><h2>Error</h2>
                <button onClick={refreshNews}>Try Again</button></> : <ul>
                {news.map(article => <li key={article.id}>{article.title}</li>)}
            </ul>}
        </>
    );
}