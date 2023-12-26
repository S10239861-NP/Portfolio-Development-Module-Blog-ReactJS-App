import React from "react";

import "./BlogPostCard.css";

class BlogPostCard extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="blog-post-card" style={this.props.style}>
                <h2>{this.props.header}</h2>

                <div>
                    {
                        this.props.children
                    }
                </div>

                <button className="read-more-button" style={this.props.readMoreEnabled === "true" ? {display: "initial"} : {display: "none"}}>Read more</button>
            </div>
        );
    }
}

export default BlogPostCard;
