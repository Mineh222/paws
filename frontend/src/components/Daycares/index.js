import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { thunkGetDaycares } from '../../store/daycares';

export default function Daycares(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(thunkGetDaycares())
    }, [dispatch]);

    return (
        <main>
            <h1>this works</h1>
        </main>
    )
}
