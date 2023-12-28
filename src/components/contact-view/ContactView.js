import React from "react";

import "./ContactView.css";

import BlogPostCard from "../blog-post-card/BlogPostCard";

class ContactView extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="contact-view">
                <BlogPostCard header="Contact Details">
                    <p>Email address: s10239861@connect.np.edu.sg</p>

                    <p>GitHub username: <a href="https://github.com/S10239861-NP">S10239861-NP</a></p>
                </BlogPostCard>
            </div>
        );
    }
}

export default ContactView;
