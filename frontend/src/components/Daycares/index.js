import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';

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
        <main>
            {sessionUser &&
                <DaycareFormModal />
            }
            {daycare.map(daycare => {
                return (
                    <div key={daycare.id} className='daycaresContainer'>
                        <a href={`/api/daycares/${daycare.id}`}>
                            <h2>{daycare.name}</h2>
                            <img src={daycare.image}></img>
                        </a>
                            <p>{daycare.description}</p>
                    </div>
                )
            })}
        </main>
    )
}
