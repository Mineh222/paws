import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkFavorite, thunkUnfavorite, thunkGetUserFavorites } from '../../store/favorites';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import './SaveButton.css';

export default function SaveButton({daycareId, sessionUser}) {
    const dispatch = useDispatch();
    const userId = sessionUser?.id;

    const favorites = useSelector(state => Object.values(state.favorites));
    const currentFavorite = favorites.find((favorite) => favorite?.userId === +userId && favorite?.daycareId === +daycareId);

    useEffect(() => {
        if (userId) {
            dispatch(thunkGetUserFavorites(userId))
        }
    }, [dispatch, userId])

    const saveButton = async(e) => {
        e.preventDefault();
        const newSave = {
            userId: userId,
            daycareId: daycareId
        }
        await dispatch(thunkFavorite(newSave))
    }

    const unsaveButton = async(e) => {
        e.preventDefault();
        await dispatch(thunkUnfavorite(currentFavorite.id))
    }

    return (
        <div>
            {!currentFavorite ?
                <button className='save-button' onClick={saveButton}>
                    <div className="save-button2">
                        <BookmarkBorderOutlinedIcon />
                        <div>Save</div>
                    </div>
                </button>
                :
                <button className='save-button' onClick={unsaveButton}>
                    <div className='save-button2'>
                        <BookmarkOutlinedIcon />
                        <div>Saved</div>
                    </div>
                </button>
            }
        </div>
    )
}
