import { useDispatch } from "react-redux";
import useInput from "../../hooks/useInput";
import { addContact } from "../../store/contact-actions";

interface ContactsListAddFormProps {
    onAbortAdding: () => void;
};


function ContactsListAddForm(
    {onAbortAdding} : ContactsListAddFormProps
) {
    const [nameInput, name, setName] = useInput('', 'string');
    const [phoneInput, phone, setPhone] = useInput('', 'string');
    const dispatch = useDispatch();

    const submitAddingHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const nameValue = name.trim();
        const phoneValue = phone.trim();
        addContact({
            name: nameValue,
            phone: phoneValue,
            id: Date.now()
        })(dispatch);
        setName('');
        setPhone('');
        onAbortAdding();
    }

    return (
        <form
            onSubmit={submitAddingHandler}>
            <div className="add-input-wrapper">
                <label>Имя:</label><br/>
                {nameInput}
            </div>
            <div className="add-input-wrapper">
                <label>Телефон:</label><br/>
                {phoneInput}
            </div>
            <div className="add-fom-action">
                <button
                    type="submit">Добавить</button>
                <button
                    onClick={onAbortAdding}
                    type="button">Отменить</button>
            </div>
        </form>
    );
}

export default ContactsListAddForm;
