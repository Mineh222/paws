import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import './Daycares.css'
import { FaStar } from 'react-icons/fa';

export default function Daycares(){
    const dispatch = useDispatch();

    const selectorDaycares = useSelector(state => Object.values(state.allDaycares))
    const sessionUser = useSelector((state) => state.session.user);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    const rating = (reviews) => {
        const ratings = reviews?.map(review => review.rating)
        if(ratings?.length === 0) {
          return null
        }
        let avgRating = 0
        ratings?.forEach(rating => avgRating += rating)
        const average = avgRating /= ratings?.length
        return (
            <div className="average-stars">
                {/* <p className="avg-rating" style={{color: '#ffc107'}}> {average.toFixed(1)}</p> */}
                {Math.round(average) === 0 && (
                    <>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                    </>
                )}
                {Math.round(average) === 1 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                    </>
                )}
                {Math.round(average) === 2 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                    </>
                )}
                {Math.round(average) === 3 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                    </>
                )}
                {Math.round(average) === 4 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#e4e5e9" size={20}/>
                    </>
                )}
                {Math.round(average) === 5 && (
                    <>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                        <FaStar FaStar color="#ffc107" size={20}/>
                    </>
                )}
            </div>
          )
    }

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
                                <div className='ratings'>
                                    <div>{rating(daycare?.Reviews)}</div>
                                    <div>{daycare?.Reviews.length}</div>
                                </div>
                                <div className="daycare-business-hours"><span id="bold">Business Hours:</span> {daycare.businessHours}</div>
                                <div className="daycare-phone-number"><span id="bold">Phone Number:</span>  &#40;{daycare.phoneNumber.slice(0,3)}&#41; {daycare.phoneNumber.slice(3,6)} - {daycare.phoneNumber.slice(6,10)}</div>
                                <div className="daycare-address"><span id="bold">Address:</span>  {daycare.address}</div>
                            </div>
                        </div>
                     </Link>
                )
            })}
        </main>
    )
}
