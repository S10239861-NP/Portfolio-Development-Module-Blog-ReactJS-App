import BlogPostCard from "../components/blog-post-card/BlogPostCard";

export default (
    <BlogPostCard header="Week 2" readMoreEnabled="true">
        <h3><u>Things that I learnt this week</u></h3>

        <ul className="ul-1">
            <li className="li-1">
                <div className="list-element-child-container">
                    <p>What an inception deck is</p>

                    <ul className="ul-1">
                        <li>An inception deck is a collection of visual representations that give team members a general overview of the project as well as information about various aspects of the project, such as its constraints, complexity and scope.</li>
                    </ul>
                </div>
            </li>

            <li className="li-1">
                <div className="list-element-child-container">
                    <p>The parts of an inception deck, which are:</p>

                    <ul className="ul-1">
                        <li>The goal that the project seeks to achieve</li>

                        <li>The elevator pitch which is a brief explanation and quick rundown of the project</li>

                        <li>The product box, which includes the name of the product, an image of the product, a slogan, and the top 3 benefits of the product</li>

                        <li>The list of things that are out of the scope of the project (e.g. features that are out of the scope of the project)</li>

                        <li>A map of the project communities (e.g. potential supporters or opposers, potential partners, helpers etc)</li>
                    
                        <li>Solution (which focuses on showing the technical architecture and technology stack for the project)</li>

                        <li>Concerns regarding the project</li>

                        <li>Estimated duration for the project and its respective phases</li>

                        <li>Trade-offs that might have to be made with regards to the project</li>

                        <li>Required resources (e.g. budget) and people for the project</li>
                    </ul>
                </div>
            </li>

            <li className="li-1">
                <div className="list-element-child-container">
                    <p>What design thinking is</p>

                    <ul className="ul-1">
                        <li>Design thinking is a design methodology that provides a more human-centric approach to solving problems in the real world.</li>
                    </ul>
                </div>
            </li>

            <li className="li-1">
                <div className="list-element-child-container">
                    <p>The reasons for why design thinking is needed</p>

                    <ul className="ul-1">
                        <li>Design thinking is needed because it can help us to tackle problems that are much more ill-defined or even undefined in a way that prioritizes the needs of the people that will be impacted by it, in other words, the end users.</li>
                    </ul>
                </div>
            </li>

            <li className="li-1">
                <div className="list-element-child-container">
                    <p>The various phases of design thinking, which are:</p>

                    <ul className="ul-1">
                        <li>Empathizing</li>

                        <li>Defining</li>

                        <li>Ideating</li>

                        <li>Prototyping</li>

                        <li>Testing</li>
                    </ul>
                </div>
            </li>
        </ul>

        <h3><u>How can I apply what I have learnt this week to the PFD project</u></h3>

        <ul className="ul-1">
            <li>I can create an inception deck and make use of it to enable me and my teammates to have a better understanding of the general aspects of the project, such as the constraints we will have to work with, the scope of this project, and how complex it could potentially get.</li>

            <li>I can use the design thinking principles to ensure that the product that we will be producing at the end of the PDF project will truly be capable of benefitting our target end users.</li>
        </ul>

        <h3><u>Finalized PFD project idea</u></h3>

        <p>As part of this PFD project, my teammates and I will be developing an Android application called "Kato" to address our selected problem statement which has to do with helping Workato enhance their onboarding process for new hires and new employees.</p>

        <h3><u>My progress on the PFD project so far</u></h3>

        <ul className="ul-1">
            <li>Finished setting up the version control system that will be used for the Kato Android application (we will be using Git for version control).</li>

            <li>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <p>Finished setting up a Github repository for the Kato Android application, which can be viewed</p>
                
                    <a style={{marginLeft: "4px"}} href="https://github.com/S10239861-NP/Kato">here</a>

                    <p>.</p>
                </div>
            </li>

            <li>Created and designed a login screen.</li>

            <li>Implemented login functionality.</li>

            <li>Created and designed a welcome screen.</li>

            <li>Patched a few UI related bugs, as well as another bug that caused the application to crash on startup initially. Android layouts and UI components can be tricky to work with sometimes...</li>

            <li>Designed and implemented a message popup box that would appear at certain points during the application's runtime for various purposes, such as to notify a user if they had entered incorrect credentials when attempting to log in to an account in the application.</li>
        </ul>
    </BlogPostCard>
);
