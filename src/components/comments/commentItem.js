import React, { Component }   from 'react';
import hash                   from 'js-hash-code';
import './comment.scss';


class CommentItem extends Component {
    render() {
        let emailHash = hash(this.props.comment.email);
        let imageUrl = `https://www.gravatar.com/avatar/${emailHash}`;
        return (
            <li className="list-group-item" onClick={() => this.props.onCommentSelect(this.props.comment)}>
                <div className="comment">
                    <div className="column">
                        <img alt="" src={imageUrl} />
                    </div>
                    <div className="column">
                        <div className="email">
                            {this.props.email}
                        </div>
                        <div className="message">
                            {this.props.message}
                        </div>
                    </div>
                </div>
            </li>
        );
    }

};

export default CommentItem;