import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useHistory } from 'react-router-dom';
import { thunkSearchAllDaycares } from "../../store/search";
import "./SearchBar.css";

const SearchBar = () => {
    const [filteredDaycares, setFilteredDaycares] = useState([]);
    const [wordEntry, setWordEntry] = useState("");

    const daycares = useSelector(state => Object.values(state.search));

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(thunkSearchAllDaycares());
    }, [dispatch])

    const handleFilter = (e) => {
        const searchWord = e.target.value;
        setWordEntry(searchWord);
        const newFilter = daycares.filter((daycare) => {
            return daycare.name.toLowerCase().includes(searchWord.toLowerCase());
        })

        if (searchWord === "") {
            setFilteredDaycares([])
        } else {
            setFilteredDaycares(newFilter)
        }
    }

    const clearInput = () => {
        setFilteredDaycares([]);
        setWordEntry('');
        history.push(`/search/${wordEntry}`)
    }

    const cancelSearch = () => {
        setFilteredDaycares([]);
        setWordEntry("")
    }

    useEffect(() => {
        const closeSearch = (e) => {
          if(e.path[0].tagName !== "INPUT"){
            setFilteredDaycares([])
            setWordEntry('')
          }
        }
        document.body.addEventListener("click", closeSearch)
        return () => document.body.removeEventListener("click", closeSearch)
      })

    if (!daycares) return null;

    return (
        <div className="search">
            <form className="search-inputs">
                <input type="text" placeholder="Search for daycares" value={wordEntry} onChange={handleFilter}></input>
                <div className="searchIcon">
                    {wordEntry.length === 0 ?
                        <button className="search-icon-button">
                            <SearchIcon id="search-icon" />
                        </button>
                        :
                        <>
                            {/* <CloseIcon id="close-icon" onClick={cancelSearch}/> */}
                            <button className="search-icon-button" type="submit" onClick={clearInput}>
                                <SearchIcon id="search-icon" onClick={clearInput}/>
                            </button>
                        </>
                    }
                </div>
            </form>
            {filteredDaycares.length !== 0 && (
                <div className="daycares-results">
                    {filteredDaycares.map((daycare) => {
                        return (
                            <Link key={daycare.id} className="searched-daycare" to={`/daycares/${daycare.id}`} onClick={clearInput}>
                                <img id="search-bar-daycare-pic" alt="search-bar-daycare-pic" src={daycare.image}></img>
                                <div id="search-bar-daycare-name">{daycare.name}</div>
                                {/* <div id="search-bar-daycare-address">{daycare.address}</div> */}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default SearchBar;
