import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateDaycare } from "../../store/daycares";

const CreateDaycareForm = ( {setTrigger} ) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [businessHours, setBusinessHours] = useState('');
    const [image, setImage] = useState('');
    const [validationErrors, setValidationErrors] = useState([]);

    useEffect(() => {
        const errors = [];
        if (phoneNumber.length !== 10) errors.push("Please enter a valid phone number")

        setValidationErrors(errors)
    }, [phoneNumber]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ownerId: sessionUser.id,
            name,
            description,
            address,
            phoneNumber,
            businessHours,
            image
        };

        const createdDaycare = await dispatch(thunkCreateDaycare(payload));

        if (createdDaycare) {
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
                <h2>Set up your doggy day care business on Paws!</h2>
                {validationErrors.length > 0 && (
                    <div>
                        Please fix following errors before submitting:
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
                <button type="submit">Post your daycare!</button>
            </form>
        </section>
    )
}

export default CreateDaycareForm;

//debugging
