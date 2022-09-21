import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import { Link } from 'react-router-dom';
import './HomePage.css';
import puppyPics from '../../data/puppyPics';
import Footer from '../Footer';

export default function HomePage() {
    const dispatch = useDispatch();

    const selectorDaycares = useSelector(state => state.allDaycares)

    const [daycare, setDaycare] = useState([]);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    useEffect(() => {
        if(selectorDaycares) {
            setDaycare(Object.values(selectorDaycares))
        }
    }, [selectorDaycares])

    return (
        <>
            <div className='home-page'>
                <div className='home-page-top'>
                    <img className="home-image-1" src="https://i.postimg.cc/YCDxHQ9m/hannah-lim-U6nl-G0-Y5sfs-unsplash.jpg"></img>
                </div>
                <h2 className="home-page-daycares-header">Recommended Doggy Daycares</h2>
                <div className="all-daycares-home-page">
                    {daycare.slice(0,8).map(daycare => {
                        return (
                                <div key={daycare.id} className='daycares-container-home-page'>
                                    <Link className="home-page-link-to-daycare" to={`/daycares/${daycare.id}`}>
                                        <h2 className='daycare-name-home-page'>{daycare.name}</h2>
                                        <img className="daycare-img-home-page" src={daycare.image}></img>
                                    </Link>
                            </div>
                        )
                    })}
                </div>
                <Footer />
            </div>
        </>
    )
}
