import React from "react";

import "./BlogShell.css";

import logo from "../../assets/logo.png";

class BlogShell extends React.Component
{
    #navBarContainerRef = React.createRef();

    #footerNavContainerRef = React.createRef();

    #childElementsContainerRef = React.createRef();

    #redirectNameToCallbackMap = {
        "Home": this.onHomeButtonMouseDown,
        "Blog": this.onBlogButtonMouseDown,
        "Contact": this.onContactButtonMouseDown,
        "View the GitHub repository for this blog": this.onViewGitHubRepoButtonMouseDown
    };

    #app = null;

    constructor(props)
    {
        super(props);

        this.#app = this.props.getApp();
    }

    initNavBarButtons()
    {
        let navBarButtons = [];

        for (const redirectName of Object.keys(this.#redirectNameToCallbackMap))
        {
            navBarButtons.push(
                <button key={redirectName} onMouseDown={this.#redirectNameToCallbackMap[redirectName].bind(this)}>{redirectName}</button>
            );
        }

        return navBarButtons;
    }

    initFooterNavButtons()
    {
        let footerNavButtons = [];

        for (const redirectName of Object.keys(this.#redirectNameToCallbackMap))
        {
            footerNavButtons.push(
                <a key={redirectName} onMouseDown={this.#redirectNameToCallbackMap[redirectName].bind(this)}>{redirectName}</a>
            );
        }

        return footerNavButtons;
    }

    render()
    {
        return (
            <div className="blog-shell">
                <h1 className="main-header">Naveed's Portfolio Development (PFD) Blog</h1>

                <div ref={this.#navBarContainerRef} className="navbar-container">
                    {
                        this.initNavBarButtons()
                    }
                </div>

                <div ref={this.#childElementsContainerRef} className="shell-body-container">
                    {
                        this.props.children
                    }
                </div>

                <div className="footer-container">
                    <div className="footer-item" style={{display: "flex", flexDirection: "row", columnGap: "16px"}}>
                        <img width="64px" height="64px" src={logo} alt="The logo for this blog."/>

                        <h3 className="footer-item">Naveed's Portfolio Development (PFD) Blog</h3>
                    </div>

                    <div ref={this.#footerNavContainerRef} className="footer-item footer-nav-container">
                        {
                            this.initFooterNavButtons()
                        }
                    </div>
                </div>
            </div>
        );
    }

    onHomeButtonMouseDown()
    {
        this.#app.setState(
            {
                currentView: this.#app.views.homeView
            }
        );
    }

    onBlogButtonMouseDown()
    {
        this.#app.setState(
            {
                currentView: this.#app.views.blogView
            }
        );
    }

    onContactButtonMouseDown()
    {
        this.#app.setState(
            {
                currentView: this.#app.views.contactView
            }
        );
    }

    onViewGitHubRepoButtonMouseDown()
    {
        window.open("https://github.com/S10239861-NP/Portfolio-Development-Module-Blog-ReactJS-App", "_blank");
    }
}

export default BlogShell;
