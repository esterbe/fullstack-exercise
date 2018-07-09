import React, { Component }   from 'react';
import autoBind                       from 'auto-bind-es5';
import './submitForm.css';


class SubmitForm extends Component {
    constructor() {
        super();
        autoBind(this);

        this.state = {
            email: "",
            message: ""
        }
    }

    _onEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    _onMessageChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    _submit() {
        let comment = {};
        comment.email = this.refs.email.value;
        comment.message = this.refs.message.value;

        this.props.addComment(comment);
    }

    render() {
        let submitDisabled = !this.state.email || this.state.email.trim() === "" || !this.state.message || this.state.message.trim() === "";

        return (
            <div className="submit-form">
                <input value={this.state.email} ref="email" type="text" className="submit-email" placeholder="Email"
                       onChange={this._onEmailChange}></input>
                <textarea value={this.state.message} ref="message" className="submit-message" placeholder="Message"
                          onChange={this._onMessageChange}></textarea>
                <button className="form-save"
                        disabled={submitDisabled}
                        onClick={this._submit}>
                    submit
                </button>
            </div>
        );
    }

};

export default SubmitForm;