import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
    return (
        <div className="page-not-found-container">
            <div className="page-not-found-left">
                <h2>We're sorry. We can't find the page you're looking for.</h2>
                <h3>Back to <Link id="home-link" to="/">Home</Link>.</h3>
            </div>
            <div className="page-not-found-right">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/71c11abb895c/assets/img/svg_illustrations/cant_find_650x520_v2.svg"></img>
            </div>
        </div>
    )
}
