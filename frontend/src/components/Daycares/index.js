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
                    <div key={daycare.id} className='daycaresContainer2'>
                        <Link className="link" to={`/daycares/${daycare.id}`}>
                            <h2 className='daycare-name'>{daycare.name}</h2>
                            <img className='daycare-img'src={daycare.image}></img>
                        </Link>
                            <div className='daycare-description'>About us: {daycare.description}</div>
                    </div>
                )
            })}
        </main>
    )
}
