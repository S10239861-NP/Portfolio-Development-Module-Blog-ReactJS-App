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
                <h3>{this.props.header}</h3>

                <div>
                    {
                        this.props.children
                    }
                </div>
            </div>
        );
    }
}

export default BlogPostCard;
