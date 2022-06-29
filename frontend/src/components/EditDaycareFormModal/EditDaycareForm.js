import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkEditDaycare } from "../../store/daycares";

const EditDaycareForm = ( {setTrigger} ) => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const sessionUser = useSelector((state) => state.session.user)
    const allDaycares = useSelector(state => state.allDaycares);
    const daycare = allDaycares[id];

    const [name, setName] = useState(`${daycare.name}`);
    const [description, setDescription] = useState(`${daycare.description}`);
    const [address, setAdress] = useState(`${daycare.address}`);
    const [phoneNumber, setPhoneNumber] = useState(`${daycare.phoneNumber}`);
    const [businessHours, setBusinessHours] = useState(`${daycare.businessHours}`);
    const [image, setImage] = useState(`${daycare.image}`);
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (phoneNumber.length !== 10) errors.push("Please enter a valid phone number")

        setValidationErrors(errors)
    }, [phoneNumber]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...daycare,
            ownerId: sessionUser.id,
            name,
            description,
            address,
            phoneNumber,
            businessHours,
            image
        };

        const editedDaycare = await dispatch(thunkEditDaycare(payload));

        if (editedDaycare) {
            reset()
        }
    }

    const reset = () => {
        setName('');
        setDescription('');
        setAdress('');
        setPhoneNumber('');
        setBusinessHours('');
        setImage('');
        setTrigger(false);
    }

    return (
        <section className="form-container">
            <form className="create-daycare-form" onSubmit={handleSubmit}>
                <h2>Make changes to your business:</h2>
                {validationErrors.length > 0 && (
                    <div>
                        Please fix the following errors before submitting:
                        <ul className="errors">
                          {validationErrors.map(error => (
                            <li key={error}>{error}</li>
                          ))}
                        </ul>
                     </div>
                )}
                <label>
                    Name
                    <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Description
                    <textarea
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </textarea>
                </label>
                <label>
                    Address
                    <input
                        type="text"
                        required
                        value={address}
                        onChange={e => setAdress(e.target.value)} />
                </label>
                <label>
                    Phone Number
                    <input
                        type="text"
                        placeholder="xxxxxxxxxx"
                        required
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                </label>
                <label>
                    Business Hours
                    <input
                        type="text"
                        placeholder="Monday-Friday 8AM-5PM"
                        required
                        value={businessHours}
                        onChange={e => setBusinessHours(e.target.value)} />
                </label>
                <label>
                    Image URL
                    <input
                        type="text"
                        required
                        value={image}
                        onChange={e => setImage(e.target.value)} />
                </label>
                <button type="submit">Update doggy daycare!</button>
            </form>
        </section>
    )
}

export default EditDaycareForm;
