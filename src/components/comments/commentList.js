import React, { Component }     from 'react';
import CommentItem              from './commentItem';
import Filter                   from '../filter/filter';
import autoBind                 from 'auto-bind-es5';

import './comment.css';


class CommentList extends Component {

    constructor() {
        super();
        autoBind(this);
    }

    _getCommentsList(textFilter){
        //TODO
    }

    _onCommentSelect() {

    }

    render() {

        let comments = this.props.comments.map((comment) => {
            return (
                <CommentItem key={comment.email} comment={comment} onCommentSelect={this._onCommentSelect}/>
            );
        });

        return (
            <div className="container">
                <Filter onFilterSubmit={this._getCommentsList}/>
                <ul className="col-md-4 list-group">
                    {comments}
                </ul>
            </div>
        );
    }

};

export default CommentList;