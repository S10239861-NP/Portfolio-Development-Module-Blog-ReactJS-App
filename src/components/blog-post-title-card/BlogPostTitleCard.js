import "./BlogPostTitleCard.css"

import React from "react"

class BlogPostTitleCard extends React.Component
{
    #readPostButtonRef = React.createRef();

    #onReadPostButtonMouseDown(event)
    {
        let readBlogPostEvent = new CustomEvent("read-blog-post");

        readBlogPostEvent.blogPostTitle = this.props.title;

        document.dispatchEvent(
            readBlogPostEvent
        );
    }

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="blog-post-title-card" style={this.props.style}>
                <h2 style={{marginLeft: "auto", marginRight: "auto"}}>{this.props.title}</h2>

                <button ref={this.#readPostButtonRef} className="read-post-button">Read post</button>
            </div>
        );
    }

    componentDidMount()
    {
        this.#readPostButtonRef.current.addEventListener("mousedown", this.#onReadPostButtonMouseDown.bind(this));
    }
}

export default BlogPostTitleCard;
