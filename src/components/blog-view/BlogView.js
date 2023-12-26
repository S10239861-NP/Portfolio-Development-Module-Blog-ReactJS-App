import React from "react";

import "./BlogView.css";

import week1BlogPost from "../../blog-posts/Week-1.js";

import week2BlogPost from "../../blog-posts/Week-2.js";

import week3BlogPost from "../../blog-posts/Week-3.js";

import week4BlogPost from "../../blog-posts/Week-4.js";

import week5BlogPost from "../../blog-posts/Week-5.js";

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
                <h2 style={{marginLeft: "auto", marginRight: "auto", fontSize: "28px"}}>Posts</h2>

                {
                    [
                        week1BlogPost,
                        week2BlogPost,
                        week3BlogPost,
                        week4BlogPost,
                        week5BlogPost
                    ]
                }
            </div>
        );
    }
}

export default BlogView;
