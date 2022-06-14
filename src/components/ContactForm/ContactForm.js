import React, { useState } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default function ContactForm({onSubmit}) {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")


    const nameId = nanoid();
    const phoneId = nanoid();

    const handleChangeName = (evt) => {
        setName(evt.target.value);
    };

    const handleChangeNumber = (evt) => {
        setNumber(evt.target.value);
    };

    const reset = () => {
        setName("");
        setNumber("");
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit({name, number});
        reset();
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                Name{" "}
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    onChange={handleChangeName}
                    id={nameId}
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={s.label}>
                Number{" "}
                <input
                    className={s.input}
                    type="tel"
                    name="number"
                    onChange={handleChangeNumber}
                    id={phoneId}
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={s.button} type="submit">Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};