import React, { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };

    nameId = nanoid();
    phoneId = nanoid();

    handleChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    reset = () => {
        this.setState({ name: "", number: "" });
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    static ContactForm = {
        onSubmit: PropTypes.func.isRequired,
    };

render() {
    return (
        <form className={s.form} onSubmit={this.handleSubmit}>
            <label className={s.label}>
                Name{" "}
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    onChange={this.handleChange}
                    id={this.nameId}
                    value={this.state.name}
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
                    onChange={this.handleChange}
                    id={this.phoneId}
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={s.button} type="submit">Add contact</button>
        </form>
    );
    };
};