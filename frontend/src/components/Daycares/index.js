import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares, thunkDeleteDaycare } from '../../store/daycares';
import DaycareFormModal from '../DaycareFormModal';
import { Link } from 'react-router-dom';

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
                        <Link to={`/daycares/${daycare.id}`}>
                            <h2>{daycare.name}</h2>
                            <img src={daycare.image}></img>
                        </Link>
                            <p>{daycare.description}</p>
                            <button onClick={() => dispatch(thunkDeleteDaycare(daycare.id))}>
                                Delete
                            </button>
                    </div>
                )
            })}
        </main>
    )
}
