import React, { Component }   from 'react';
import './submitForm.scss';


class SubmitForm extends Component {
    _submit() {
        let comment = {};
        comment.email = this.refs.email;
        comment.message = this.refs.message;

        this.props.addComment(comment);
    }

    render() {
        let submitDisabled = !this.refs.email || this.refs.email.trim() === "" || !this.refs.message || this.refs.message.trim() === "";

        return (
            <div className="submit-form">
                <input ref="email" type="text"></input>
                <textarea ref="message" className="submit-textarea"></textarea>
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