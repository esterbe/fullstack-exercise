import React, { Component }     from 'react';
import CommentItem              from './commentItem';
import Filter                   from '../filter/filter';
import SubmitForm               from "../submitForm/submitForm";
import axios                    from "axios";
import autoBind                 from 'auto-bind-es5';

import './comment.css';

const API_URL = "/api/comment";

class CommentList extends Component {

    constructor() {
        super();
        autoBind(this);

        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        this._getAllComments()
    }

    _addComment(comment) {
        axios.post(`${API_URL}/addComment`, { comment })
            .then(res => {
                this._getAllComments();
            })
            .catch(error => console.log(error));
    }

    _getAllComments(){
        axios.get(`${API_URL}/getAllComments`)
            .then(response => {

                this.setState({
                    comments: response.data.comments
                });

                // // create a new "State" object without mutating
                // // the original State object.
                // const newState = Object.assign({}, this.state, {
                //     comments: response.data.comments
                // });
                // // store the new state object in the component's state
                // this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    _findComments(email){
        axios.get(`${API_URL}/findComments/${email}`)
            .then(response => {

                this.setState({
                    comments: response.data.comments
                });

                // // create a new "State" object without mutating
                // // the original State object.
                // const newState = Object.assign({}, this.state, {
                //     comments: response.data.comments
                // });
                // // store the new state object in the component's state
                // this.setState(newState);
            })
            .catch(error => console.log(error));
    }

    _onCommentSelect() {

    }

    render() {

        if(!this.state.comments && this.state.comments.length > 0)
            return null;

        let comments = this.state.comments.map((comment) => {
            return (
                <CommentItem key={comment.email} comment={comment} onCommentSelect={this._onCommentSelect}/>
            );
        });

        return ([
            <SubmitForm addComment={this._addComment}/>,
            <div className="container">
                <Filter onFilterSubmit={this._findComments} onFilterClear={this._getAllComments}/>
                <ul className="col-md-4 list-group">
                    {comments}
                </ul>
            </div>]
        );
    }

};

export default CommentList;