import React from "react";
import { connect } from 'react-redux';
import './PostCard.css';

const PostCard = props => {

    return(
        <div className="cardContainer">
            <h5 className="loginTitle"><span className="headLine">MY POSTS</span></h5>

            <div >
                {props.posts.map((items, i) => {
                return <div key={i} className="postCard">
                        <h3>{items.title}</h3> 
                        <p>{items.body}</p>
                    </div>
                })};
            </div>
        </div>
    )
}

export default connect() (PostCard)