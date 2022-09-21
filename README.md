<h1>Welcome to Paws!</h1>

<img src="https://i.postimg.cc/wjTP5Nff/Screen-Shot-2022-07-04-at-6-45-21-PM.png"></img>

Paws is a clone of Yelp, but with a little twist. On Paws, users can sign-up or log in, browse various doggy cares, and leave ratings/reviews. Business owners can also post their doggy day cares onto Paws.

[Live Link to Paws](https://pawws.herokuapp.com/)

[Paws Documentation](https://github.com/Mineh222/paws/wiki)

## Technologies

Paws was built using the following technologies:
* **Backend: Express**
* **Frontend: React/Redux and JavaScript/JSX**
* **Database: PostgreSQL**
* **Design/Styling: HTML and CSS**
* **Hosting: Heroku**

## Key Features

### User Authentication

* On Paws, users can log-in with their correct credentials, or click the demo button for quick access to demo the site.
* Users can also sign-up on Paws, giving them access to create daycares and leave reviews.
* Errors are rendered in the event of inputting invalid credentials, and must be corrected before submitting the form.

<img src="https://i.postimg.cc/T1dQ5DZM/Screen-Shot-2022-09-20-at-3-44-33-PM.png"></img>
<img src="https://i.postimg.cc/43R6hc9L/Screen-Shot-2022-09-20-at-3-49-27-PM.png"></img>

### Doggy Daycare Businesses (Create, Read, Update, Delete)

* All users on Paws can view doggy daycares.
* Users must be logged in to create, update, or delete their doggy daycare.
* Doggy Daycares can be browsed on the doggy daycare page, accessed from the button on the navigation bar.
* Logged in users can also view all their doggy daycares on their profile page.

<img src="https://i.postimg.cc/63Yb0cV5/Screen-Shot-2022-09-20-at-7-50-53-PM.png"></img>
<img src="https://i.postimg.cc/TYZ7Cpbm/Screen-Shot-2022-09-20-at-7-52-03-PM.png"></img>
<img src="https://i.postimg.cc/VvXxFnN7/Screen-Shot-2022-09-20-at-8-01-15-PM.png"></img>
<img src="https://i.postimg.cc/9Mdb8pGq/Screen-Shot-2022-09-20-at-8-03-54-PM.png"></img>

### Reviews (Create, Read, Delete)

* All users will be able to read reviews for specific doggy daycares.
* Logged in users can create or delete their reviews on specific doggy daycare pages.

<img src="https://i.postimg.cc/sX4P92rY/Screen-Shot-2022-09-20-at-8-04-42-PM.png"></img>
<img src="https://i.postimg.cc/26rh6fZV/Screen-Shot-2022-09-20-at-8-05-44-PM.png"></img>

## Technical Code

* I enjoyed building a user profile page.
* Filters all doggy daycares to only display daycares owned by the logged in user.
* Saved doggy day cares can also be viewed here under the "Saved daycares" tab.

```JavaScript
const dispatch = useDispatch();

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
```
## Future Improvements

* Google maps for directions to a doggy daycare.

## Installation Instructions

1. Download ZIP to a local folder.
3. Run command 'npm install' in your backend and frontend terminals.
4. Run command 'npm start' in your backend and frontend terminals.
