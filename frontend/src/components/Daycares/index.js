import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import './Daycares.css'

export default function Daycares(){
    const dispatch = useDispatch();

    const selectorDaycares = useSelector(state => state.allDaycares)
    const sessionUser = useSelector((state) => state.session.user);

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
        <main className='daycaresContainer'>
            <h1 className='heading'>Best Doggy Daycares in Los Angeles, CA</h1>
            <h3 className='small-heading'>All Results</h3>
            {sessionUser &&
                <DaycareFormModal />
            }
            {daycare.map(daycare => {
                return (
                    <Link key={daycare.name} className="link" to={`/daycares/${daycare.id}`}>
                        <div key={daycare.id} className='daycaresContainer2'>
                            <h2 className='daycare-name'>{daycare.name}</h2>
                            <img className='daycare-img' alt='daycare-img' src={daycare.image}></img>
                            <h3 className="about-us">About Us</h3>
                            <div className='daycare-description'>{daycare.description}</div>
                            <div className="daycare-business-hours">Business Hours: {daycare.businessHours}</div>
                            <div className="daycare-phone-number">Phone Number: {daycare.phoneNumber}</div>
                            <div className="daycare-address">Address: {daycare.address}</div>
                        </div>
                     </Link>
                )
            })}
        </main>
    )
}
