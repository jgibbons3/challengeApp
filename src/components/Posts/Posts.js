import React, { useEffect } from "react";
import { connect } from 'react-redux';
// import './Login.css';
import { withRouter } from "react-router-dom"
import {userPostsAction} from '../../store/action/userPostsAction';
import PostCard from '../PostCard/PostCard';

const Posts = props => {
    useEffect(() => {
        props.dispatch(userPostsAction(props.user_data))
    }, []);

    return(
        <div className="postContainer">
            <PostCard posts={props.posts}/>
            {/* {props.posts.map((items, i) => {
            return <p key={i}>title= {items.title} 
            content= {items.body}</p>
            })} */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user_data: state.loginReducer.user_data,
        posts: state.userPostsReducer.posts
    }
}

export default withRouter(connect(mapStateToProps)(Posts))