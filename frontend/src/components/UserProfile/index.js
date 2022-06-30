import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { useParams, Link } from 'react-router-dom';

export default function UserProfile(){
    const dispatch = useDispatch();
    const { id } = useParams();

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
        <main>
            <DaycareFormModal />
            <h2>{sessionUser.username}</h2>
            <p>{sessionUser.email}</p>
                {daycare.map(daycare => {
                    return (
                        <div key={daycare.id} className='daycaresContainer'>
                            <Link to={`/daycares/${daycare.id}`}>
                                <h2>{daycare.name}</h2>
                                <img src={daycare.image}></img>
                            </Link>
                        </div>
                    )
                })}
        </main>
    )
}
