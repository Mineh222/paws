import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import './UserProfile.css';

export default function UserProfile(){
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const selectorDaycares = useSelector(state => state.allDaycares)

    const [daycare, setDaycare] = useState([]);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    useEffect(() => {
        if(selectorDaycares) {
            setDaycare(Object.values(selectorDaycares).filter((daycare) => {
                return +daycare.ownerId === +sessionUser.id
            }))
        }
    }, [selectorDaycares])

    if (!daycare) return null

    return (
        <div className='profile-page-container'>
            <main className='user-profile-container'>
                <div className='username-profile-page'>
                    <h3 className="message-text">Thank you for joining the Paws family!</h3>
                    <h2>Account Information:</h2>
                    <p>Username: {sessionUser.username}</p>
                    <p>Email Address: {sessionUser.email}</p>
                </div>
                <div className="add-daycare-user-page">
                    <DaycareFormModal />
                </div>
                <div className='thank-you-message'>
                    <img className="message-image"src="https://perthisok.com/wp-content/uploads/2021/11/perth-doggy-daycare-pawpals-2.jpeg"></img>
                </div>
                    <h2 className='user-page-header'>My Doggy Daycares:</h2>
                    <div className="all-daycares-user-page">
                    {daycare.map(daycare => {
                        return (
                                <div key={daycare.id} className='daycares-container-user-page'>
                                    <Link className="user-profile-link-to-daycare" to={`/daycares/${daycare.id}`}>
                                        <h2 className='daycare-name-user-page'>{daycare.name}</h2>
                                        <img className="daycare-img-user-page" src={daycare.image}></img>
                                    </Link>
                            </div>
                        )
                    })}
                    </div>
            </main>
        </div>
    )
}
