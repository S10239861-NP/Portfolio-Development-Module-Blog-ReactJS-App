import BlogPostCard from "../components/blog-post-card/BlogPostCard";

import systemDiagramsSS1Image from "../images/System-Diagrams-SS-1.png";

import systemDiagramsSS2Image from "../images/System-Diagrams-SS-2.png";

import week3TrelloBoardSnapshotImage from "../images/Week-3-Trello-Board-Snapshot.png";

export default (
    <BlogPostCard header="Week 3" readMoreEnabled="true">
        <h3><u>OAL Reflection</u></h3>

        <p>During this week's OAL, I had learnt about various concepts ranging from system diagrams and architecture diagram creation tools to design patterns and methods to design software architectures. Here are the key takeaways and key concepts that I learnt about during this week's OAL:</p>

        <h3><u>System Diagrams</u></h3>

        <ul class="ul-1">
            <li>They show how computer systems connect together.</li>

            <li>
                <div style={{display: "flex", flexDirection: "column", rowGap: "10px", marginBottom: "10px"}}>
                    <p>Computer systems need components that do the following:</p>

                    <img src={systemDiagramsSS1Image} alt=""/>
                </div>
            </li>

            <li>
                <div style={{display: "flex", flexDirection: "column", rowGap: "10px", marginBottom: "10px"}}>
                    <p>Here is an example of a system diagram for the security system of a data centre:</p>

                    <img src={systemDiagramsSS2Image} alt=""/>
                </div>
            </li>
        </ul>

        <h3><u>Free Architecture Diagram Software</u></h3>

        <ul class="ul-1">
            <li>Draw.io</li>
        </ul>

        <h3><u>Types of Design Patterns</u></h3>

        <ul class="ul-1">
            <li>Creational</li>

            <li>Structural</li>

            <li>Behavioural</li>
        </ul>

        <h3><u>Types of Creational Design Patterns</u></h3>

        <ul class="ul-1">
            <li>Singleton</li>

            <li>Prototype</li>

            <li>Builder</li>

            <li>Factory</li>
        </ul>

        <h3><u>Types of Structural Design Patterns</u></h3>

        <ul class="ul-1">
            <li>Facade</li>

            <li>Proxy</li>
        </ul>

        <h3><u>Types of Behavioural Design Patterns</u></h3>

        <ul class="ul-1">
            <li>Iterator</li>

            <li>Observer</li>

            <li>Mediator</li>

            <li>State</li>
        </ul>

        <h3><u>The Singleton Design Pattern</u></h3>

        <ul class="ul-1">
            <li>A singleton is a type of object that can only be created once.</li>
        </ul>

        <h3><u>The Prototype Design Pattern</u></h3>

        <ul class="ul-1">
            <li>It is an alternative way to implement inheritance (class inheritance), as inheritance can sometimes lead to a complex hierarchy of code.</li>

            <li>Instead of inheriting functionality from a class, the functionality comes from an object that has already been created.</li>

            <li>Results in a flat prototype chain that makes it much easier to share functionality between objects especially in a dynamic language like Javascript (which supports prototypal inheritance out of the box).</li>
        </ul>

        <h3><u>The Builder Design Pattern</u></h3>

        <ul class="ul-1">
            <li>Instead of creating the object and setting its properties in its constructor method, we instead create the object and set its properties step-by-step by using other methods.</li>

            <li>It is also possible to delegate the building logic to another class.</li>
        </ul>

        <h3><u>The Factory Design Pattern</u></h3>

        <ul class="ul-1">
            <li>Instead of creating an object using the “new” keyword (such as in languages like C#, Java and Javascript), we use a function or method to create the object.</li>
        </ul>

        <h3><u>The Facade Design Pattern</u></h3>

        <ul class="ul-1">
            <li>It is basically a simplified API to hide other low-level details in one's code base.</li>
        </ul>

        <h3><u>The Proxy Design Pattern</u></h3>

        <ul class="ul-1">
            <li>Despite its name, it refers to a substitute.</li>

            <li>An example of this design pattern being applied is the Reactivity system in the Vue.js framework.</li>

            <li>In the framework, one can create data.</li>

            <li>However, the framework itself needs a way to intercept that data and update the UI whenever that data changes.</li>

            <li>The way Vue.js handles this is by replacing the original object with a proxy, which takes the original object as the 1st argument to its constructor method and takes a handler as the 2nd argument to its constructor method.</li>

            <li>Inside the aforementioned handler, one can override methods such as the “get” method and “set” method to run code whenever a property on the object is accessed or modified.</li>

            <li>This allows developers using the framework to work with the proxy just like they would with a regular object, with the relevant handlers being triggered whenever they access or change a property (provided that the property in question has a handler that gets executed when it is accessed or modified).</li>

            <li>This design pattern is commonly used when one has a very large object that might be expensive to duplicate in memory.</li>
        </ul>

        <h3><u>The Iterator Design Pattern</u></h3>

        <ul class="ul-1">
            <li>Allows one to traverse through a collection of objects.</li>

            <li>An example of this design pattern being applied is the for-loop which is present in many modern programming languages such as C, C++, C# and Javascript.</li>

            <li>With iteration, one starts with a collection and then writes code to determine how to get from the start to the end.</li>

            <li>It is a pull-based system.</li>
        </ul>

        <h3><u>The Observer Design Pattern</u></h3>

        <ul class="ul-1">
            <li>It is a push-based system.</li>

            <li>It allows many objects to subscribe to events that are broadcast by another object.</li>

            <li>It is a one-to-many relationship.</li>

            <li>This design pattern is commonly used in application development. An example of this design pattern being used is in Firebase, when one's data changes on the server, all of the client applications that are subscribed to it are automatically updated with the latest data.</li>
        </ul>

        <h3><u>The Mediator Design Pattern</u></h3>

        <ul class="ul-1">
            <li>The mediator is similar to a middleman or a broker.</li>

            <li>Provides a centralised point for coordination and communication for many objects, thus preventing a messy and potentially ineffective many-to-many relationship.</li>

            <li>An example of this design pattern being used is in the Express.js framework, where there is a middleware system.</li>

            <li>Middleware sits in the middle of incoming requests and outgoing responses by intercepting every request and transforming it into the proper format for the response.</li>

            <li>This design pattern provides separation of concerns and prevents code duplication.</li>
        </ul>

        <h3><u>The State Design Pattern</u></h3>

        <ul class="ul-1">
            <li>In this design pattern, an object behaves differently based on a finite number of states.</li>

            <li>This design pattern allows one to start with a base class and then provide it with different functionality based on its internal state.</li>

            <li>The idea behind this design pattern is related to finite state machines and libraries like XState, where the goal is to make an object's behaviour predictable based on its underlying state.</li>

            <li>A way of implementing this design pattern is by creating a separate class for each possible state of an object and each of these classes will contain an identical method that behaves differently. Inside the class of the object that these states belong to, one sets the state as a property and whenever a method belonging to the state is called, we delegate it to the object's current state.</li>

            <li>This allows the object to behave in a different way whenever its state changes, while making it such that one does not need to change the API or use a bunch of conditional logic (such as if-statements or switch statements which do not scale so well).</li>
        </ul>

        <h3><u>Additional things to take note of when using design patterns</u></h3>

        <ul class="ul-1">
            <li>It is recommended for one to make use of their selected programming language's built-in features first when implementing a design pattern if it is possible for them to do so.</li>
        </ul>

        <h3><u>Software Architecture</u></h3>

        <ul class="ul-1">
            <li>Areas of Focus
                <ul class="ul-1">
                    <li>Structure (as opposed to the exact implementation details).</li>

                    <li>Anticipation of expensive choices.</li>

                    <li>Core decisions to allow the software to be of a higher quality.</li>
                </ul>
            </li>

            <li>Steps to plan out a software architecture:
                <ul class="ul-1">
                    <li>Get the context (the requirements and restrictions one will have to work with).
                        <ul class="ul-1">
                            <li>Gather the functional requirements (what the system should do).</li>

                            <li>Gather the non-functional requirements (how the system should behave).
                                <ul class="ul-1">
                                    <li>These requirements can impact the application in ways such as its functionality, reliability, usability, and efficiency.</li>

                                    <li>Examples of non-functional requirements and the aspects of the application that they impact:
                                        <ul class="ul-1">
                                            <li>Maintainable for several years (Maintainability).</li>

                                            <li>Be capable of serving millions of users (Scalability).</li>

                                            <li>Make it available 24/7 (Reliability).</li>

                                            <li>Good response latency (Efficiency).</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li>Take into consideration other restrictions that might limit the options that one might have for their software architecture (to design their system).</li>

                            <li>Examples of restrictions that can be taken into consideration:
                                <ul class="ul-1">
                                    <li>Legal compliance.</li>

                                    <li>Costs.</li>

                                    <li>Time to market.</li>

                                    <li>Standards.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>Figure out the priority levels of each of the requirements gathered in the previous step.
                        <ul class="ul-1">
                            <li>This step is essential as it is possible that some of the requirements or restrictions might conflict with one another.</li>

                            <li>After re-ordering the list of requirements and restrictions by priority, one should ensure that each of the trade-offs is acceptable or not, if they are acceptable, then one can move on to designing the software architecture.</li>

                            <li>There are several architectural patterns that can fit a system, these patterns include (but are not limited to):
                                <ul class="ul-1">
                                    <li>Layered</li>

                                    <li>Event Driven</li>

                                    <li>Microkernel</li>

                                    <li>Microservices</li>

                                    <li>Space-based</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>Vertical scaling (scaling up)
                <ul class="ul-1">
                    <li>It refers to making the nodes in a system stronger (e.g. if one has a server, then they can make the server stronger and faster by adding more hardware and making optimizations to the software that would allow the server to process more requests with the same number of resources in it).</li>
                </ul>
            </li>

            <li>Horizontal scaling (scaling out)
                <ul class="ul-1">
                    <li>It refers to splitting the load between different servers.</li>

                    <li>It improves scalability while also improving reliability due to having more redundancy.</li>

                    <li>Usually is the preferred way to scale.</li>
                </ul>
            </li>

            <li>Method to implement horizontal scaling:
                <ul class="ul-1">
                    <li>Making use of a load balancer that will direct traffic to different servers so as to optimize the load of performance on the system.</li>

                    <li>This method relies on the assumption that the servers have access to the same data.</li>

                    <li>If this assumption is met, one can split the data by using one of these methods: sharding, replication and partitioning.</li>

                    <li>By splitting the data in multiple servers, one will be able to scale each of them independently.</li>

                    <li>If there is state, then the CAP theorem must be taken into consideration.</li>
                </ul>
            </li>

            <li>Sharding
                <ul class="ul-1">
                    <li>When using this method, one can split the data using different approaches as well, such as doing a vertical split by feature or by value.</li>
                </ul>
            </li>

            <li>Replication
                <ul class="ul-1">
                    <li>When using this method, one stores multiple copies of the data in different servers.</li>

                    <li>This method is very useful when one has read-intensive applications due to being able to replicate the data between different nodes, if one knows that the application is going to read more then they can use those nodes to read and have eventual consistency to update those nodes.</li>
                </ul>
            </li>

            <li>Cache
                <ul class="ul-1">
                    <li>The cache is a component in a system that stores data so that future requests that request for the same data can be served faster.</li>

                    <li>It can be added to a system to better optimize it, however, the potential negative impacts of adding this component to a system should also be taken into consideration before deciding to go ahead and add it to a system.</li>

                    <li>Adding the cache component to a system could potentially introduce new issues such as cache invalidation, cache misses and update latency.</li>

                    <li>Examples of cache implementations include (but are not limited to):
                        <ul class="ul-1">
                            <li>CDN (Content Delivery Networks)
                                <ul class="ul-1">
                                    <li>Caches images and static assets.</li>
                                </ul>
                            </li>

                            <li>In-memory/local cache (on one's service)</li>

                            <li>Distributed cache
                                <ul class="ul-1">
                                    <li>Can be used as a layer before reaching the database.</li>

                                    <li>Examples of distributed cache:
                                        <ul class="ul-1">
                                            <li>Reddis</li>

                                            <li>Memcached</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>Event Driven Architecture (EDA)
                <ul class="ul-1">
                    <li>Can be referred to as a Publish/Subscribe Model too.</li>

                    <li>Event
                        <ul class="ul-1">
                            <li>Represents something that happens.</li>

                            <li>Can be communicated in the form of an event notification.</li>

                            <li>Can contain data associated with an event or a command or can just be a notification that something happened.</li>

                            <li>It is immutable.</li>
                        </ul>
                    </li>

                    <li>Command
                        <ul class="ul-1">
                            <li>Represents an order.</li>

                            <li>Also represents a request that you have from another party to give a response to.</li>

                            <li>Can be communicated in the form of a message.</li>
                        </ul>
                    </li>

                    <li>List of components that are present in an Event Driven Architecture (EDA):
                        <ul class="ul-1">
                            <li>Producer
                                <ul class="ul-1">
                                    <li>Creates the events that are going to be redirected by the Broker.</li>
                                </ul>
                            </li>

                            <li>Broker
                                <ul class="ul-1">
                                    <li>Redirects the events received from the Producer to the correct Consumers.</li>
                                </ul>
                            </li>

                            <li>Consumer
                                <ul class="ul-1">
                                    <li>React to each of the events received and execute the necessary procedures based on the event.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>Advantages of using EDA:
                        <ul class="ul-1">
                            <li>Allows one to decouple different components.</li>

                            <li>Allows one to invert dependencies.</li>

                            <li>Allows for better scalability.</li>

                            <li>Events can be persisted, this way, the information can be accessed even at later stages and not just only during the call.</li>

                            <li>There is no Single Point of Failure, enabling the system to be more robust.</li>
                        </ul>
                    </li>

                    <li>Disadvantages of using EDA:
                        <ul class="ul-1">
                            <li>Reduces performance.</li>

                            <li>Eventual inconsistency due to there being a delay between an event being sent and an event being received.</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3><u>Architecture Patterns used in Enterprise Software Development Today</u></h3>

        <ul class="ul-1">
            <li>An architectural pattern is defined as a general and reusable solution to a commonly occurring problem in software architecture within a given context.</li>

            <li>Layered Pattern (also known as the N-Tier architecture)
                <ul class="ul-1">
                    <li>Known to be the most commonly used pattern.</li>

                    <li>Used to build general desktop applications and simple web applications.</li>

                    <li>Tends to perform poorly in high-performance applications due to the inefficiency of going through multiple layers to fulfil a request.</li>

                    <li>Good for situations with a very tight budget and time constraints.</li>

                    <li>The following layers are usually present:
                        <ul class="ul-1">
                            <li>Presentation Layer</li>

                            <li>Application Layer</li>

                            <li>Business Logic Layer</li>

                            <li>Data Access Layer (DAL)</li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>Pipe-Filter Pattern
                <ul class="ul-1">
                    <li>In this pattern, a single event triggers a series of processing steps, with each of these steps performing a specific function.</li>

                    <li>Divides a large processing task into a sequence of smaller and independent processing steps or filters that are connected by channels/pipes.</li>

                    <li>Often used in compilers, where the filters perform tasks such as lexical analysis, parsing, semantic analysis, and code generation.</li>
                </ul>
            </li>

            <li>Client-Server Pattern
                <ul class="ul-1">
                    <li>The 2 main components of this pattern are:
                        <ul class="ul-1">
                            <li>Client
                                <ul class="ul-1">
                                    <li>Requests the service.</li>
                                </ul>
                            </li>

                            <li>Server
                                <ul class="ul-1">
                                    <li>Provides the service.</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

            <li>Model View Controller (MVC) Pattern</li>

            <li>Event Bus Pattern</li>

            <li>Microservices Architecture</li>

            <li>Broker Pattern</li>

            <li>Peer-To-Peer Pattern</li>

            <li>Blackboard Pattern</li>

            <li>Master-Slave Pattern</li>
        </ul>

        <h3><u>Ways to Design a Software Architecture</u></h3>

        <ul class="ul-1">
            <li>Identify the flow of components.</li>

            <li>Identify initial components.</li>

            <li>Identify actions (which can be based off of use cases).</li>

            <li>Map actions to actors.</li>

            <li>Map components to actions.</li>

            <li>Analyse the roles and responsibilities of each of the actors.</li>

            <li>Analyse the characteristics of the architecture.
                <ul class="ul-1">
                    <li>The characteristics that an architecture can have include (but are not limited to):
                        <ul class="ul-1">
                            <li>Elasticity</li>

                            <li>Availability</li>

                            <li>Scalability</li>

                            <li>Agility</li>

                            <li>Security</li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h3><u>How can I apply what I have learnt this week to the PFD project</u></h3>

        <ul class="ul-1">
            <li>I can make use of architecture diagrams to better plan out and visualize the systems that will be present in the end product that my team is developing (the Kato application).</li>

            <li>I can make use of various design patterns (such as the Singleton, Builder, Factory, and State design patterns) where applicable to resolve common problems or issues that I might face while implementing various features for the Kato application.</li>
        </ul>

        <h3><u>Key takeaways from the meeting with the Workato mentors this week</u></h3>

        <ul class="ul-1">
            <li>Overview of onboarding process for new employees at Workato
                <ul class="ul-1">
                    <li>MacBook ordered for the new employee.</li>

                    <li>7 days before the start of their job, Workato sends them a preparation email and checks that their device has arrived.</li>

                    <li>The new employee is then provided with a list of things to do on the first day of their job (varies according to their department).</li>

                    <li>Automation (might be done using Slack or other means) sends the new employee to specific Slack channels (depending on their department) for remote work.</li>

                    <li>The new employee is then provided with a checklist of things to do (e.g. security trainings etc) (the types of training that the new employee has to go for depending on their department).</li>

                    <li>The new employee is also allowed and encouraged to get to know about all of the concepts and information that are relevant to working at the company such as employee benefits and procedures/policies.</li>
                </ul>
            </li>
        </ul>

        <h3><u>Progress on the PFD project</u></h3>

        <ul class="ul-1">
            <li>Redesigning of the logo for the Kato application has been completed.</li>

            <li>Discussions have been held in my team regarding the list of proposed features that could be present within the Kato application. The features that I proposed include the following:
                <ol class="ol-1">
                    <li>Notify the new employee about what they will need to bring or do to prepare for their first day on the job at Workato ahead of time (this could be integrated into the virtual chatbot feature, or be added as a separate feature).</li>

                    <li>Show the new employee how long it will take for their device to arrive (and maybe even allow the new employee to track the location of their device while it is being delivered to them).
                        <ul class="ul-1">
                            <li>Once the new employee receives their device, Kato will notify them and they will be required to press a button to confirm that they have received their device. Once this action is performed, Workato will be automatically notified that the new employee has received their device, however, if this action has not been performed after 7 days, Workato will be automatically notified that the new employee has not received their device yet.</li>
                        </ul>
                    </li>

                    <li>Allow the new employee to keep track of the things that they have yet to do on the first day of their job, as well as the things that they have already done. If certain things that need to be done have deadlines, notify the new employees of the deadlines and help to automatically reorder the list of things to do based on deadlines and priorities/urgency.</li>

                    <li>Allow for a virtual chatbot to be integrated into the Kato application that is capable of answering the aforementioned information, as well as other miscellaneous questions that the new employee might have, such as the locations of various services and amenities (e.g. restrooms, canteens, rooms etc) within the company's facilities and department-specific questions.</li>
                </ol>
            </li>
        </ul>

        <h3><u>Trello Board</u></h3>

        <img src={week3TrelloBoardSnapshotImage} alt=""/>
    </BlogPostCard>
);
