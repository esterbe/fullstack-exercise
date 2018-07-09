import React, { Component }   from 'react';
import md5                    from 'md5';
import autoBind               from 'auto-bind-es5';
import './comment.css';


class CommentItem extends Component {
    constructor() {
        super();
        autoBind(this);
    }

    render() {
        let emailHash = md5(this.props.comment.email.trim().toLowerCase());
        let imageUrl = `https://www.gravatar.com/avatar/${emailHash}?s=50`;
        return (
            <li className="list-group-item" onClick={() => this.props.onCommentSelect(this.props.comment)}>
                <div className="comment">
                    <div className="image">
                        <img alt="" src={imageUrl} />
                    </div>
                    <div className="content">
                        <div className="email">
                            {this.props.comment.email}
                        </div>
                        <div className="message">
                            {this.props.comment.message}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

};

export default CommentItem;