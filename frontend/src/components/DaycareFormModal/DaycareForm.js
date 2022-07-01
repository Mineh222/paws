import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateDaycare } from "../../store/daycares";
import './DaycareForm.css';

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
    const [hasSubmitted, setHasSubmitted] = useState(false);

    useEffect(() => {
        const errors = [];
        let testRegex = /^https?:\/\/(?:[a-z0-9\-]+\.)+[a-z]{2,6}(?:\/[^\/#?]+)+\.(?:jpe?g|png)$/;
        let imageReg = image;
        if (!testRegex.test(imageReg)) {
        errors.push('Please provide a valid jpg or png image url')}
        if (phoneNumber.length !== 10) errors.push("Please enter a valid phone number.")
        if (name.length > 50) errors.push("Your Doggy Daycare name cannot exceed 50 characters.")

        setValidationErrors(errors)
    }, [phoneNumber, image, name]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setHasSubmitted(true);
        if (validationErrors.length) return alert('Cannot submit, please fix form errors.')

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
        <section className="daycare-form-container">
            <form className="create-daycare-form" onSubmit={handleSubmit}>
                <h2>Set up your doggy day care business on Paws!</h2>
                {hasSubmitted && validationErrors.length > 0 && (
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
                <button
                    className="create-daycare-button"
                    type="submit"
                >
                    Post your daycare!</button>
            </form>
        </section>
    )
}

export default CreateDaycareForm;
