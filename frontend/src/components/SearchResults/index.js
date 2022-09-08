import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { thunkGetSearchedDaycares } from '../../store/daycares';
import './SearchResults.css';

export default function SearchResults() {
    const dispatch = useDispatch();
    const { searchword } = useParams();

    const daycares = useSelector(state => Object.values(state.allDaycares));

    useEffect(() => {
        dispatch(thunkGetSearchedDaycares(searchword))
    }, [dispatch, searchword])

    return (
        <div className='searched-daycares-container'>
            {daycares.length === 0 ?
            <h2>No daycares found.</h2>
            :
            <h3>All Results</h3>
            }
            <div>
                {daycares && daycares.map(daycare => {
                    return (
                        <Link key={daycare.id} className="link" to={`/daycares/${daycare.id}`}>
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
            </div>
        </div>
    )
}
