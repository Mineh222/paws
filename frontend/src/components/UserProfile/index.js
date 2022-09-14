import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import { thunkGetUserFavorites } from '../../store/favorites';
// import { thunkGetAllFavorites } from '../../store/favorites';

export default function UserProfile(){
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser?.id;
    const selectorDaycares = useSelector(state => state.allDaycares);
    const favorites = useSelector(state => Object.values(state.favorites));
    // const favorites = useSelector(state => state.favorites)

    const [daycare, setDaycare] = useState([]);
    // const [favorite, setFavorite] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    useEffect(() => {
        dispatch(thunkGetUserFavorites(userId))
    }, [dispatch])

    useEffect(() => {
        if(selectorDaycares) {
            setDaycare(Object.values(selectorDaycares).filter((daycare) => {
                return +daycare.ownerId === +sessionUser.id
            }))
        }
    }, [selectorDaycares, sessionUser])


    if (!daycare) return null
    if (!favorites) return null

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
                    <img className="message-image" alt='message-img' src="https://www.dogtiredsc.com/wp-content/uploads/2021/03/daycare.jpg"></img>
                </div>
                <div className="profile-page-buttons">
                    <button className={page === 0 ? "button1" : "button2"} onClick={() => setPage(0)}>
                        <div>
                            My Doggy Daycares
                        </div>
                    </button>
                    <button className={page === 1 ? "button3" : "button4"} onClick={() => setPage(1)}>
                        <div>
                            Saved Daycares
                        </div>
                    </button>
                </div>
                {page === 0 && (
                    <>
                        {daycare.length > 0 && (
                            <h2 id="my-daycares-heading">My Daycares:</h2>
                        )}
                        <div className="all-daycares-user-page">
                        {daycare.map(daycare => {
                            return (
                                <div key={daycare.id} className='daycares-container-user-page'>
                                        <Link className="user-profile-link-to-daycare" to={`/daycares/${daycare.id}`}>
                                            <h2 className='daycare-name-user-page'>{daycare.name}</h2>
                                            <img className="daycare-img-user-page" alt='daycare-img-user-page' src={daycare.image}></img>
                                        </Link>
                                </div>
                            )
                        })}
                        {daycare.length === 0 && (
                            <div className="no-daycares-yet">
                                <h2>No daycares yet!</h2>
                            </div>
                        )}
                        </div>
                    </>
                )}
                {page === 1 && (
                    <>
                        {favorites.length > 0 && (
                            <h2 id="saved-daycares-heading">Saved Daycares:</h2>
                        )}
                        <div className="all-daycares-user-page">
                            {favorites.map(favorite => {
                                return (
                                    <div key={favorite.id} className='daycares-container-user-page'>
                                        <Link className="user-profile-link-to-daycare" to={`/daycares/${favorite.daycareId}`}>
                                            <h2 className='daycare-name-user-page'>{favorite.Daycare?.name}</h2>
                                            <img className="daycare-img-user-page" alt='daycare-img-user-page' src={favorite.Daycare?.image}></img>
                                        </Link>
                                    </div>
                                )
                            })}
                            {favorites.length === 0 && (
                                <div className="no-daycares-yet">
                                    <h2>No saved daycares yet!</h2>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </main>
        </div>
    )
}
