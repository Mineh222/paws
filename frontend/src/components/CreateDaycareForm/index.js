import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkCreateDaycare } from "../../store/daycares";

const CreateDaycareForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAdress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [businessHours, setBusinessHours] = useState('');
    const [image, setImage] = useState('');

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
    }

    return (
        <section className="form-container">
            <form className="create-daycare-form" onSubmit={handleSubmit}>
                Set up your doggy day care business on Paws!
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
                        placeholder="(xxx) xxx-xxxx"
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
