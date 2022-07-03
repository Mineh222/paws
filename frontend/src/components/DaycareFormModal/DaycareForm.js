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
        let testRegex = /^https?:\/\/(?:[a-z0-9-]+\.)+[a-z]{2,6}(?:\/[^/#?]+)+\.(?:jpe?g|png)$/;
        let imageReg = image;
        let testRegexTwo = /^\d{10}$/;
        let phoneNumberReg = phoneNumber;
        if (!testRegexTwo.test(phoneNumberReg)) errors.push("Please enter a valid 10 digit phone number")
        if (!testRegex.test(imageReg)) {
        errors.push('Please provide a valid jpg or png image url')}
        if (name.length > 50) errors.push("Your Doggy Daycare name cannot exceed 50 characters.")
        if (description.length < 10) errors.push("Your description must be a minimum of 10 characters.")

        setValidationErrors(errors)
    }, [phoneNumber, image, name, description]);

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
                <h2 className="daycare-form-heading">Set up your doggy day care business on Paws!</h2>
                {hasSubmitted && validationErrors.length > 0 && (
                    <div className="please-fix-errors">
                        Please fix the following errors before submitting:
                        <ul className="errors">
                          {validationErrors.map(error => (
                            <li className="errors-create-daycare" key={error}>{error}</li>
                          ))}
                        </ul>
                     </div>
                )}
                <div className="form-container2">
                <label>
                    Name
                </label>
                    <input
                        className="daycare-name-input"
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)} />
                <label>
                    Description
                </label>
                    <textarea
                        required
                        value={description}
                        onChange={e => setDescription(e.target.value)}>
                    </textarea>
                <label>
                    Address
                </label>
                    <input
                        className="daycare-address-input"
                        type="text"
                        required
                        value={address}
                        onChange={e => setAdress(e.target.value)} />
                <label>
                    Phone Number
                </label>
                    <input
                        className="daycare-phone-input"
                        type="text"
                        placeholder="8181234567"
                        required
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)} />
                <label>
                    Business Hours
                </label>
                    <input
                        className="daycare-business-hours-input"
                        type="text"
                        placeholder="Monday-Friday 8AM-5PM"
                        required
                        value={businessHours}
                        onChange={e => setBusinessHours(e.target.value)} />
                <label>
                    Image URL
                </label>
                    <input
                        className="daycare-image-input"
                        type="text"
                        required
                        value={image}
                        onChange={e => setImage(e.target.value)} />
                <button
                    className="create-daycare-button"
                    type="submit"
                >
                    Post your daycare!</button>
                </div>
            </form>
        </section>
    )
}

export default CreateDaycareForm;
