import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import './Daycares.css'

export default function Daycares(){
    const dispatch = useDispatch();

    const selectorDaycares = useSelector(state => Object.values(state.allDaycares))
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    return (
        <main className='daycaresContainer'>
            <h1 className='heading'>Best Doggy Daycares in Los Angeles, CA</h1>
            <h3 className='small-heading'>All Results</h3>
            {sessionUser &&
                <DaycareFormModal />
            }
            {selectorDaycares.reverse().map(daycare => {
                return (
                    <Link key={daycare.name} className="link" to={`/daycares/${daycare.id}`}>
                        <div key={daycare.id} className='daycaresContainer2'>
                            <div className="daycare-image-container">
                                <img className='daycare-img' alt='daycare-img' src={daycare.image}></img>
                            </div>
                            <div className="daycare-info-container">
                                <h2 className='daycare-name'>{daycare.name}</h2>
                                <div className="daycare-business-hours"><span id="business-hours">Business Hours:</span> {daycare.businessHours}</div>
                                <div className="daycare-phone-number">Phone Number: &#40;{daycare.phoneNumber.slice(0,3)}&#41; {daycare.phoneNumber.slice(3,6)} - {daycare.phoneNumber.slice(6,10)}</div>
                                <div className="daycare-address">Address: {daycare.address}</div>
                            </div>
                        </div>
                     </Link>
                )
            })}
        </main>
    )
}
