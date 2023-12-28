import React from "react";

import "./BlogPostView.css";

class BlogPostView extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="blog-post-view">
                <h2>{this.props.title}</h2>

                <h3>Written by: Naveed</h3>

                {this.props.children}
            </div>
        );
    }
}

export default BlogPostView;
