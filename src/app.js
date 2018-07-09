import React, { Component } from 'react';
import SubmitForm from "./components/submitForm/submitForm";
import CommentList from "./components/comments/commentList";
import './app.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            comments: [
                {
                    email: "esterbe@gmail.com",
                    message: "Hello there. How are you?"
                },
                {
                    email: "shai@gmail.com",
                    message: "Gooooood!"
                }
                ]
        }
    }


    _addComment(comment){
        let comments = this.state.comments;
        comments.push(comment);
        this.setState({comments});
    }

    render() {
       return (
         <div className="app">
           <SubmitForm addComment={this._addComment}/>
           <CommentList comments={this.state.comments}/>
         </div>
       );
    }
}

export default App;
