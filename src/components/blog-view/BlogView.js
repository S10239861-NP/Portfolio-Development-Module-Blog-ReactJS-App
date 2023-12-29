import React from "react";

import "./BlogView.css";

import BlogPosts from "../../utils/blog-posts.js"

class BlogView extends React.Component
{
    #blogViewPostsSectionRef = React.createRef();

    #blogPostViewContainerRef = React.createRef();

    state = {
        currentBlogPostView: null
    };

    #getAllBlogPostTitleCards()
    {
        let blogPostTitleCards = [];

        for (const blogPostTitle of BlogPosts.keys())
        {
            blogPostTitleCards.push(BlogPosts.get(blogPostTitle)["blogPostTitleCard"]);
        }

        return blogPostTitleCards;
    }

    #handleReadBlogPostEvent(readBlogPostEventObj)
    {
        this.setState(
            {
                currentBlogPostView: BlogPosts.get(readBlogPostEventObj.blogPostTitle)["blogPostView"]
            },
            () =>
            {
                this.#blogViewPostsSectionRef.current.style.display = "none";

                this.#blogPostViewContainerRef.current.style.display = "";

                window.scrollTo(
                    {
                        left: 0,
                        top: 0,
                        behavior: "instant"
                    }
                );
            }
        );
    }

    #onReturnToBlogPostsSectionButtonMouseDown()
    {
        this.displayPostsSection();
        
        window.scrollTo(
            {
                left: 0,
                top: 0,
                behavior: "instant"
            }
        );
    }

    constructor(props)
    {
        super(props);

        document.addEventListener("read-blog-post", this.#handleReadBlogPostEvent.bind(this));
    }

    displayPostsSection()
    {
        this.#blogViewPostsSectionRef.current.style.display = "";

        this.#blogPostViewContainerRef.current.style.display = "none";
    }

    render()
    {
        return (
            <div className="blog-view">
                <div ref={this.#blogViewPostsSectionRef} className="blog-view-posts-section">
                    <h2 style={{marginLeft: "auto", marginRight: "auto", fontSize: "28px"}}>Posts</h2>

                    <div className="blog-title-cards-grid">
                        {this.#getAllBlogPostTitleCards()}
                    </div>
                </div>

                <div ref={this.#blogPostViewContainerRef} className="blog-post-view-container">
                    {this.state.currentBlogPostView}

                    <button className="return-to-blog-posts-section-button" onMouseDown={this.#onReturnToBlogPostsSectionButtonMouseDown.bind(this)}>Return to blog posts section</button>
                </div>
            </div>
        );
    }
}

export default BlogView;
