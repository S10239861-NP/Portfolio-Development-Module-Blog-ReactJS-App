import React from "react";

import BlogPostCard from "./BlogPostCard.js";

import "./BlogView.css";

class BlogView extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="blog-view">
                <h2 style={{marginLeft: "auto", marginRight: "auto"}}>Posts</h2>

                <BlogPostCard header="Week 1">
                    Blog post migration in progress...
                </BlogPostCard>

                <BlogPostCard header="Week 2">
                    Blog post migration in progress...
                </BlogPostCard>

                <BlogPostCard header="Week 3">
                    Blog post migration in progress...
                </BlogPostCard>

                <BlogPostCard header="Week 4">
                    Blog post migration in progress...
                </BlogPostCard>

                <BlogPostCard header="Week 5">
                    Blog post migration in progress...
                </BlogPostCard>
            </div>
        );
    }
}

export default BlogView;
