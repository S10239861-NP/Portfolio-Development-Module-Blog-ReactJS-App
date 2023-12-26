import React from "react";

import BlogPostCard from "../blog-post-card/BlogPostCard";

class HomeView extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="home-view">
                <BlogPostCard header="About Me" style={{margin: "0px 20px"}}>
                    <p>
                        Hi there.<img style={{position: "relative", top: "5px"}} width="32px" height="32px" src="https://gifdb.com/images/high/cute-wave-emoji-hand-59s88kk0zj3xho40.gif" alt="A GIF of a waving hand."/> I am Naveed, a Year 2 student currently taking on a full-time diploma in Information Technology at Ngee Ann Polytechnic. Some of my interests include reading, writing, cycling, playing badminton, reverse engineering, researching and understanding how various things around us work and why they work the way they do, working out, playing chess, mathematics, software development, game development and developing mods for games.
                    </p>

                    <p>
                        I am a curious individual who is always interested in learning about new concepts, understanding other perspectives and expanding my knowledge on various matters.
                    </p>

                    <p>
                        I decided to take on this Information Technology diploma course as I am passionate about utilizing technology to help others by creating, innovating and developing solutions to all sorts of problems that might frequently occur in their daily lives and in other aspects of their lives.
                    </p>
                </BlogPostCard>
            </div>
        );
    }
}

export default HomeView;
