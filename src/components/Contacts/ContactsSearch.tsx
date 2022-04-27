import React from "react";
import { useState } from "react";
import  './Contacts.css'

interface contactsSearchProps {
    onSearch: (str: string) => void;
}

function ContactsSearch({onSearch} : contactsSearchProps) {

    const [searchValue, setSearchValue] = useState('');

    function onSearchHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setSearchValue(value);
        onSearch(value);
    }

    return (
        <form className="search-form">
            <label htmlFor="contacts_search">Найти:</label><br/>

            <input
                onChange={onSearchHandler}
                value={searchValue}
                id="contacts_search"
                name="search"
                type="text" />
        </form>
    );
}

export default ContactsSearch;