import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';

export default function Daycares(){
    const dispatch = useDispatch();

    const selectorDaycares = useSelector(state => state.allDaycares)

    const [daycare, setDaycare] = useState([]);

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    useEffect(() => {
        if(selectorDaycares) {
            setDaycare(Object.values(selectorDaycares))
        }
    }, [selectorDaycares])

    // console.log(daycare);

    return (
        <main>
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
