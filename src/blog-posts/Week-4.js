import BlogPostCard from "../components/blog-post-card/BlogPostCard";

import week4TrelloBoardSnapshotImage from "../assets/Week-4-Trello-Board-Snapshot.png";

export default (
    <BlogPostCard header="Week 4" readMoreEnabled="true">
        <h3><u>OAL Reflection</u></h3>

        <p>During this week's OAL, I learnt about multiple new concepts ranging from delivering interesting and memorable speeches to creating effective and intriguing presentations. Here are some of the key takeaways and key concepts that I learnt about during this week's OAL:</p>

        <h3><u>Things to talk about during a demo day pitch:</u></h3>

        <ul className="ul-1">
            <li>Give a short introduction about yourself.
                <ul className="ul-1">
                    <li>Mention who you are.</li>

                    <li>State any prominent or notable achievements that you have with relevance to what you are trying to pitch (e.g. if your pitch revolves around your business, mention if you already have a lot of customers or downloads).</li>
                </ul>
            </li>

            <li>Talk about the problem that your solution seeks to address.
                <ul className="ul-1">
                    <li>Emphasize the importance of the problem and why the audience should care about it in the first place.</li>
                
                    <li>Try to limit this section of the pitch to about 1 minute if possible.</li>
                </ul>
            </li>

            <li>Talk about your solution to the aforementioned problem.
                <ul className="ul-1">
                    <li>Keep it simple and do not delve excessively into the technical elements and details of the solution.</li>
                </ul>
            </li>

            <li>Demonstrate your solution.
                <ul className="ul-1">
                    <li>Conduct your demonstration from a first-time user's perspective so as to allow the audience to understand what the process of using your solution is like.</li>
                </ul>
            </li>

            <li>Talk about how your solution stands out from your competitors' solutions.</li>

            <li>Talk about how your solution can be profitable and monetizable.
                <ul className="ul-1">
                    <li>Talk about the business model for your solution.</li>

                    <li>Talking about this topic allows the audience to know more about what they can get in return from investing into your solution.</li>
                </ul>
            </li>

            <li>Talk about what makes the target market of your solution unique and the opportunities that your solution can provide.</li>

            <li>Talk about the team behind your solution.</li>

            <li>Create good presentation slides.
                <ul className="ul-1">
                    <li>Slides are a reflection of your solution, thus it is important to ensure that both your solution as well as your slides look good.</li>
                </ul>
            </li>

            <li>Make a good first impression to your audience at the start of the pitch.</li>
        </ul>

        <h3><u>Approaches to creating and designing effective presentations</u></h3>

        <ul className="ul-1">
            <li>Come up with good titles for your slides that are both concise and informative.
                <ul className="ul-1">
                    <li>The titles that you come up with should provide the audience a summary of the content from the slide.</li>
                
                    <li>The titles should also help the audience to understand the key takeaways from the slide.</li>

                    <li>Write a full sentence for the title (which can be about 1 to 2 lines in total).</li>
                </ul>
            </li>

            <li>Guide the audience.
                <ul className="ul-1">
                    <li>Allow the audience to understand the higher level idea first before going into the details.</li>
                
                    <li>Recommended order (from first to last):
                        <ol className="ol-1">
                            <li>Main idea</li>

                            <li>Supporting ideas</li>

                            <li>Details and data</li>
                        </ol>
                    </li>
                </ul>
            </li>

            <li>Add visual elements to your slides.
                <ul className="ul-1">
                    <li>Doing so can make your slides more eye-catching and prone to catching the audience's attention.</li>
                
                    <li>Supplementing points or information in your slides with visual elements (e.g. icons) can make the information more intuitive and understandable to the audience.</li>
                </ul>
            </li>

            <li>Annotate your charts.
                <ul className="ul-1">
                    <li>Allows the audience to have a better understanding of the key takeaways from your charts.</li>
                </ul>
            </li>

            <li>Bring a perspective
                <ul className="ul-1">
                    <li>Show what the data in your slides really mean, as opposed to using your slides as a way to show the data.</li>
                </ul>
            </li>

            <li>Create slides that make the audience feel smart.
                <ul className="ul-1">
                    <li>Your slides should ideally help and aid the audience in understanding the key takeaways and ideas that your presentation is trying to convey to them.</li>
                </ul>
            </li>
        </ul>

        <h3><u>How can I apply what I have learnt this week to the PFD project</u></h3>

        <ul className="ul-1">
            <li>I can utilize the methods that I have learnt this week to create presentation slides for the pitch that will allow the audience to understand how my solution solves our chosen problem, why it is different from other solutions and what are the benefits of choosing this solution over the other competing solutions.</li>

            <li>I can prepare a script for the pitch next Friday that will allow my team and I to effectively convey the relevant information about our product to the audience in a concise manner (e.g. what it does, what makes it unique, what makes it better etc).</li>
        </ul>

        <h3><u>Updated list of planned features for the PFD project (based on meetings with Workato mentors)</u></h3>

        <ul className="ul-1">
            <li>Discord chatbot.
                <ul className="ul-1">
                    <li>Allow new employees to ask questions and receive answers regarding topics such as their assigned department, company policies, team members, or other relevant information.</li>
                </ul>
            </li>

            <li>Integration of the Discord chatbot with the Kato web application.</li>

            <li>Kato web application
                <ul className="ul-1">
                    <li>Allow new employees to login using SSO (Single Sign-On), an authentication process that can make logging in more convenient for them.</li>
                
                    <li>Allow new employees to access and view a dashboard containing the following information:
                        <ul className="ul-1">
                            <li>Their full name.</li>

                            <li>Their assigned department.</li>

                            <li>Their assigned job position.</li>

                            <li>The date of their first day of work.</li>

                            <li>List of onboarding tasks that they must complete (e.g. relevant company trainings, installing certain software etc).</li>

                            <li>Estimated time of arrival (ETA) for the company device being delivered to them.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3><u>Progress on the PFD project</u></h3>

        <ul className="ul-1">
            <li>Login page for the Kato web application has been created and designed.</li>

            <li>Backend server can now handle requests made by the client for resources (e.g. HTML, CSS, JS and image files etc).</li>

            <li>GitHub repository for the Kato web application has been set up successfully.</li>

            <li>Version control system (VCS) for the Kato web application has been set up successfully.
                <ul className="ul-1">
                    <li>The version control system we will be using for this project is Git. We will use GitHub to host the Git repository for this project.</li>
                </ul>
            </li>
        </ul>

        <h3><u>Trello Board</u></h3>

        <img src={week4TrelloBoardSnapshotImage} alt=""/>
    </BlogPostCard>
);
