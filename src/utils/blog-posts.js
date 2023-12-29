import Week4TrelloBoardSnapshot from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\assets\\Week-4-Trello-Board-Snapshot.png";
import Week3TrelloBoardSnapshot from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\assets\\Week-3-Trello-Board-Snapshot.png";
import SystemDiagramsSS2 from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\assets\\System-Diagrams-SS-2.png";
import SystemDiagramsSS1 from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\assets\\System-Diagrams-SS-1.png";
import BlogPostTitleCard from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\components\\blog-post-title-card\\BlogPostTitleCard.js";
import BlogPostView from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\components\\blog-post-view\\BlogPostView.js";
import CaptionedImage from "C:\\Users\\navee\\Poly\\PFD-Module\\Portfolio-Development-Module-Blog-ReactJS-App\\src\\components\\captioned-image\\CaptionedImage.js";
export default new Map([
  [
    "Week 1",
    {
      blogPostTitleCard: <BlogPostTitleCard title="Week 1" />,
      blogPostView: (
        <BlogPostView title="Week 1">
          <p>
            This week, I learnt about what design thinking is and how it can be
            utilized to approach a problem in a user-oriented manner and design
            solutions that are better catered for the needs and preferences of
            the end user.
          </p>
        </BlogPostView>
      ),
    },
  ],
  [
    "Week 2",
    {
      blogPostTitleCard: <BlogPostTitleCard title="Week 2" />,
      blogPostView: (
        <BlogPostView title="Week 2">
          <h3>Things that I learnt this week</h3>
          <ul className="ul-1">
            <li className="li-1">
              <p>What an inception deck is</p>
              <ul className="ul-1">
                <li className="li-1">
                  An inception deck is a collection of visual representations
                  that give team members a general overview of the project as
                  well as information about various aspects of the project, such
                  as its constraints, complexity and scope.
                </li>
              </ul>
            </li>
            <li className="li-1">
              <p>The parts of an inception deck, which are:</p>
              <ul className="ul-1">
                <li className="li-1">
                  The goal that the project seeks to achieve
                </li>
                <li className="li-1">
                  The elevator pitch which is a brief explanation and quick
                  rundown of the project
                </li>
                <li className="li-1">
                  The product box, which includes the name of the product, an
                  image of the product, a slogan, and the top 3 benefits of the
                  product
                </li>
                <li className="li-1">
                  The list of things that are out of the scope of the project
                  (e.g. features that are out of the scope of the project)
                </li>
                <li className="li-1">
                  A map of the project communities (e.g. potential supporters or
                  opposers, potential partners, helpers etc)
                </li>
                <li className="li-1">
                  Solution (which focuses on showing the technical architecture
                  and technology stack for the project)
                </li>
                <li className="li-1">Concerns regarding the project</li>
                <li className="li-1">
                  Estimated duration for the project and its respective phases
                </li>
                <li className="li-1">
                  Trade-offs that might have to be made with regards to the
                  project
                </li>
                <li className="li-1">
                  Required resources (e.g. budget) and people for the project
                </li>
              </ul>
            </li>
            <li className="li-1">
              <p>What design thinking is</p>
              <ul className="ul-1">
                <li className="li-1">
                  Design thinking is a design methodology that provides a more
                  human-centric approach to solving problems in the real world.
                </li>
              </ul>
            </li>
            <li className="li-1">
              <p>The reasons for why design thinking is needed</p>
              <ul className="ul-1">
                <li className="li-1">
                  Design thinking is needed because it can help us to tackle
                  problems that are much more ill-defined or even undefined in a
                  way that prioritizes the needs of the people that will be
                  impacted by it, in other words, the end users.
                </li>
              </ul>
            </li>
            <li className="li-1">
              <p>The various phases of design thinking, which are:</p>
              <ul className="ul-1">
                <li className="li-1">Empathizing</li>
                <li className="li-1">Defining</li>
                <li className="li-1">Ideating</li>
                <li className="li-1">Prototyping</li>
                <li className="li-1">Testing</li>
              </ul>
            </li>
          </ul>
          <h3>
            How can I apply what I have learnt this week to the PFD project
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              I can create an inception deck and make use of it to enable me and
              my teammates to have a better understanding of the general aspects
              of the project, such as the constraints we will have to work with,
              the scope of this project, and how complex it could potentially
              get.
            </li>
            <li className="li-1">
              I can use the design thinking principles to ensure that the
              product that we will be producing at the end of the PDF project
              will truly be capable of benefitting our target end users.
            </li>
          </ul>
          <h3>Finalized PFD project idea</h3>
          <p>
            As part of this PFD project, my teammates and I will be developing
            an Android application called &quot;Kato&quot; to address our
            selected problem statement which has to do with helping Workato
            enhance their onboarding process for new hires and new employees.
          </p>
          <h3>My progress on the PFD project so far</h3>
          <ul className="ul-1">
            <li className="li-1">
              Finished setting up the version control system that will be used
              for the Kato Android application (we will be using Git for version
              control).
            </li>
            <li className="li-1">
              Finished setting up a Github repository for the Kato Android
              application, which can be viewed
              <a href="https://github.com/S10239861-NP/Kato">here</a>.
            </li>
            <li className="li-1">Created and designed a login screen.</li>
            <li className="li-1">Implemented login functionality.</li>
            <li className="li-1">Created and designed a welcome screen.</li>
            <li className="li-1">
              Patched a few UI related bugs, as well as another bug that caused
              the application to crash on startup initially. Android layouts and
              UI components can be tricky to work with sometimes...
            </li>
            <li className="li-1">
              Designed and implemented a message popup box that would appear at
              certain points during the application's runtime for various
              purposes, such as to notify a user if they had entered incorrect
              credentials when attempting to log in to an account in the
              application.
            </li>
          </ul>
        </BlogPostView>
      ),
    },
  ],
  [
    "Week 3",
    {
      blogPostTitleCard: <BlogPostTitleCard title="Week 3" />,
      blogPostView: (
        <BlogPostView title="Week 3">
          <h3>OAL Reflection</h3>
          <p>
            During this week's OAL, I had learnt about various concepts ranging
            from system diagrams and architecture diagram creation tools to
            design patterns and methods to design software architectures. Here
            are the key takeaways and key concepts that I learnt about during
            this week's OAL:
          </p>
          <h3>System Diagrams</h3>
          <ul className="ul-1">
            <li className="li-1">
              <p>They show how computer systems connect together.</p>
            </li>
            <li className="li-1">
              <p>
                Computer systems need components that do the following:
                <CaptionedImage
                  src={SystemDiagramsSS1}
                  alt="image"
                  caption="A sample diagram showing the various components of a system."
                />
              </p>
            </li>
            <li className="li-1">
              <p>
                Here is an example of a system diagram for the security system
                of a data centre:
                <CaptionedImage
                  src={SystemDiagramsSS2}
                  alt="image"
                  caption="A system diagram for the security system of a data centre."
                />
              </p>
            </li>
          </ul>
          <h3>Free Architecture Diagram Software</h3>
          <ul className="ul-1">
            <li className="li-1">Draw.io</li>
          </ul>
          <h3>Types of Design Patterns</h3>
          <ul className="ul-1">
            <li className="li-1">Creational</li>
            <li className="li-1">Structural</li>
            <li className="li-1">Behavioural</li>
          </ul>
          <h3>Types of Creational Design Patterns</h3>
          <ul className="ul-1">
            <li className="li-1">Singleton</li>
            <li className="li-1">Prototype</li>
            <li className="li-1">Builder</li>
            <li className="li-1">Factory</li>
          </ul>
          <h3>Types of Structural Design Patterns</h3>
          <ul className="ul-1">
            <li className="li-1">Facade</li>
            <li className="li-1">Proxy</li>
          </ul>
          <h3>Types of Behavioural Design Patterns</h3>
          <ul className="ul-1">
            <li className="li-1">Iterator</li>
            <li className="li-1">Observer</li>
            <li className="li-1">Mediator</li>
            <li className="li-1">State</li>
          </ul>
          <h3>The Singleton Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              A singleton is a type of object that can only be created once.
            </li>
          </ul>
          <h3>The Prototype Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              It is an alternative way to implement inheritance (class
              inheritance), as inheritance can sometimes lead to a complex
              hierarchy of code.
            </li>
            <li className="li-1">
              Instead of inheriting functionality from a class, the
              functionality comes from an object that has already been created.
            </li>
            <li className="li-1">
              Results in a flat prototype chain that makes it much easier to
              share functionality between objects especially in a dynamic
              language like Javascript (which supports prototypal inheritance
              out of the box).
            </li>
          </ul>
          <h3>The Builder Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              Instead of creating the object and setting its properties in its
              constructor method, we instead create the object and set its
              properties step-by-step by using other methods.
            </li>
            <li className="li-1">
              It is also possible to delegate the building logic to another
              class.
            </li>
          </ul>
          <h3>The Factory Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              Instead of creating an object using the “new” keyword (such as in
              languages like C#, Java and Javascript), we use a function or
              method to create the object.
            </li>
          </ul>
          <h3>The Facade Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              It is basically a simplified API to hide other low-level details
              in one's code base.
            </li>
          </ul>
          <h3>The Proxy Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              Despite its name, it refers to a substitute.
            </li>
            <li className="li-1">
              An example of this design pattern being applied is the Reactivity
              system in the Vue.js framework.
            </li>
            <li className="li-1">In the framework, one can create data.</li>
            <li className="li-1">
              However, the framework itself needs a way to intercept that data
              and update the UI whenever that data changes.
            </li>
            <li className="li-1">
              The way Vue.js handles this is by replacing the original object
              with a proxy, which takes the original object as the 1st argument
              to its constructor method and takes a handler as the 2nd argument
              to its constructor method.
            </li>
            <li className="li-1">
              Inside the aforementioned handler, one can override methods such
              as the “get” method and “set” method to run code whenever a
              property on the object is accessed or modified.
            </li>
            <li className="li-1">
              This allows developers using the framework to work with the proxy
              just like they would with a regular object, with the relevant
              handlers being triggered whenever they access or change a property
              (provided that the property in question has a handler that gets
              executed when it is accessed or modified).
            </li>
            <li className="li-1">
              This design pattern is commonly used when one has a very large
              object that might be expensive to duplicate in memory.
            </li>
          </ul>
          <h3>The Iterator Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              Allows one to traverse through a collection of objects.
            </li>
            <li className="li-1">
              An example of this design pattern being applied is the for-loop
              which is present in many modern programming languages such as C,
              C++, C# and Javascript.
            </li>
            <li className="li-1">
              With iteration, one starts with a collection and then writes code
              to determine how to get from the start to the end.
            </li>
            <li className="li-1">It is a pull-based system.</li>
          </ul>
          <h3>The Observer Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">It is a push-based system.</li>
            <li className="li-1">
              It allows many objects to subscribe to events that are broadcast
              by another object.
            </li>
            <li className="li-1">It is a one-to-many relationship.</li>
            <li className="li-1">
              This design pattern is commonly used in application development.
              An example of this design pattern being used is in Firebase, when
              one's data changes on the server, all of the client applications
              that are subscribed to it are automatically updated with the
              latest data.
            </li>
          </ul>
          <h3>The Mediator Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              The mediator is similar to a middleman or a broker.
            </li>
            <li className="li-1">
              Provides a centralised point for coordination and communication
              for many objects, thus preventing a messy and potentially
              ineffective many-to-many relationship.
            </li>
            <li className="li-1">
              An example of this design pattern being used is in the Express.js
              framework, where there is a middleware system.
            </li>
            <li className="li-1">
              Middleware sits in the middle of incoming requests and outgoing
              responses by intercepting every request and transforming it into
              the proper format for the response.
            </li>
            <li className="li-1">
              This design pattern provides separation of concerns and prevents
              code duplication.
            </li>
          </ul>
          <h3>The State Design Pattern</h3>
          <ul className="ul-1">
            <li className="li-1">
              In this design pattern, an object behaves differently based on a
              finite number of states.
            </li>
            <li className="li-1">
              This design pattern allows one to start with a base class and then
              provide it with different functionality based on its internal
              state.
            </li>
            <li className="li-1">
              The idea behind this design pattern is related to finite state
              machines and libraries like XState, where the goal is to make an
              object's behaviour predictable based on its underlying state.
            </li>
            <li className="li-1">
              A way of implementing this design pattern is by creating a
              separate class for each possible state of an object and each of
              these classes will contain an identical method that behaves
              differently. Inside the class of the object that these states
              belong to, one sets the state as a property and whenever a method
              belonging to the state is called, we delegate it to the object's
              current state.
            </li>
            <li className="li-1">
              This allows the object to behave in a different way whenever its
              state changes, while making it such that one does not need to
              change the API or use a bunch of conditional logic (such as
              if-statements or switch statements which do not scale so well).
            </li>
          </ul>
          <h3>Additional things to take note of when using design patterns</h3>
          <ul className="ul-1">
            <li className="li-1">
              It is recommended for one to make use of their selected
              programming language's built-in features first when implementing a
              design pattern if it is possible for them to do so.
            </li>
          </ul>
          <h3>Software Architecture</h3>
          <ul className="ul-1">
            <li className="li-1">
              Areas of Focus
              <ul className="ul-1">
                <li className="li-1">
                  Structure (as opposed to the exact implementation details).
                </li>
                <li className="li-1">Anticipation of expensive choices.</li>
                <li className="li-1">
                  Core decisions to allow the software to be of a higher
                  quality.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Steps to plan out a software architecture:
              <ul className="ul-1">
                <li className="li-1">
                  Get the context (the requirements and restrictions one will
                  have to work with).
                  <ul className="ul-1">
                    <li className="li-1">
                      Gather the functional requirements (what the system should
                      do).
                    </li>
                    <li className="li-1">
                      Gather the non-functional requirements (how the system
                      should behave).
                      <ul className="ul-1">
                        <li className="li-1">
                          These requirements can impact the application in ways
                          such as its functionality, reliability, usability, and
                          efficiency.
                        </li>
                        <li className="li-1">
                          Examples of non-functional requirements and the
                          aspects of the application that they impact:
                          <ul className="ul-1">
                            <li className="li-1">
                              Maintainable for several years (Maintainability).
                            </li>
                            <li className="li-1">
                              Be capable of serving millions of users
                              (Scalability).
                            </li>
                            <li className="li-1">
                              Make it available 24/7 (Reliability).
                            </li>
                            <li className="li-1">
                              Good response latency (Efficiency).
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="li-1">
                      Take into consideration other restrictions that might
                      limit the options that one might have for their software
                      architecture (to design their system).
                    </li>
                    <li className="li-1">
                      Examples of restrictions that can be taken into
                      consideration:
                      <ul className="ul-1">
                        <li className="li-1">Legal compliance.</li>
                        <li className="li-1">Costs.</li>
                        <li className="li-1">Time to market.</li>
                        <li className="li-1">Standards.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="li-1">
                  Figure out the priority levels of each of the requirements
                  gathered in the previous step.
                  <ul className="ul-1">
                    <li className="li-1">
                      This step is essential as it is possible that some of the
                      requirements or restrictions might conflict with one
                      another.
                    </li>
                    <li className="li-1">
                      After re-ordering the list of requirements and
                      restrictions by priority, one should ensure that each of
                      the trade-offs is acceptable or not, if they are
                      acceptable, then one can move on to designing the software
                      architecture.
                    </li>
                    <li className="li-1">
                      There are several architectural patterns that can fit a
                      system, these patterns include (but are not limited to):
                      <ul className="ul-1">
                        <li className="li-1">Layered</li>
                        <li className="li-1">Event Driven</li>
                        <li className="li-1">Microkernel</li>
                        <li className="li-1">Microservices</li>
                        <li className="li-1">Space-based</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="li-1">
              Vertical scaling (scaling up)
              <ul className="ul-1">
                <li className="li-1">
                  It refers to making the nodes in a system stronger (e.g. if
                  one has a server, then they can make the server stronger and
                  faster by adding more hardware and making optimizations to the
                  software that would allow the server to process more requests
                  with the same number of resources in it).
                </li>
              </ul>
            </li>
            <li className="li-1">
              Horizontal scaling (scaling out)
              <ul className="ul-1">
                <li className="li-1">
                  It refers to splitting the load between different servers.
                </li>
                <li className="li-1">
                  It improves scalability while also improving reliability due
                  to having more redundancy.
                </li>
                <li className="li-1">Usually is the preferred way to scale.</li>
              </ul>
            </li>
            <li className="li-1">
              Method to implement horizontal scaling:
              <ul className="ul-1">
                <li className="li-1">
                  Making use of a load balancer that will direct traffic to
                  different servers so as to optimize the load of performance on
                  the system.
                </li>
                <li className="li-1">
                  This method relies on the assumption that the servers have
                  access to the same data.
                </li>
                <li className="li-1">
                  If this assumption is met, one can split the data by using one
                  of these methods: sharding, replication and partitioning.
                </li>
                <li className="li-1">
                  By splitting the data in multiple servers, one will be able to
                  scale each of them independently.
                </li>
                <li className="li-1">
                  If there is state, then the CAP theorem must be taken into
                  consideration.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Sharding
              <ul className="ul-1">
                <li className="li-1">
                  When using this method, one can split the data using different
                  approaches as well, such as doing a vertical split by feature
                  or by value.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Replication
              <ul className="ul-1">
                <li className="li-1">
                  When using this method, one stores multiple copies of the data
                  in different servers.
                </li>
                <li className="li-1">
                  This method is very useful when one has read-intensive
                  applications due to being able to replicate the data between
                  different nodes, if one knows that the application is going to
                  read more then they can use those nodes to read and have
                  eventual consistency to update those nodes.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Cache
              <ul className="ul-1">
                <li className="li-1">
                  The cache is a component in a system that stores data so that
                  future requests that request for the same data can be served
                  faster.
                </li>
                <li className="li-1">
                  It can be added to a system to better optimize it, however,
                  the potential negative impacts of adding this component to a
                  system should also be taken into consideration before deciding
                  to go ahead and add it to a system.
                </li>
                <li className="li-1">
                  Adding the cache component to a system could potentially
                  introduce new issues such as cache invalidation, cache misses
                  and update latency.
                </li>
                <li className="li-1">
                  Examples of cache implementations include (but are not limited
                  to):
                  <ul className="ul-1">
                    <li className="li-1">
                      CDN (Content Delivery Networks)
                      <ul className="ul-1">
                        <li className="li-1">
                          Caches images and static assets.
                        </li>
                      </ul>
                    </li>
                    <li className="li-1">
                      In-memory/local cache (on one's service)
                    </li>
                    <li className="li-1">
                      Distributed cache
                      <ul className="ul-1">
                        <li className="li-1">
                          Can be used as a layer before reaching the database.
                        </li>
                        <li className="li-1">
                          Examples of distributed cache:
                          <ul className="ul-1">
                            <li className="li-1">Reddis</li>
                            <li className="li-1">Memcached</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="li-1">
              Event Driven Architecture (EDA)
              <ul className="ul-1">
                <li className="li-1">
                  Can be referred to as a Publish/Subscribe Model too.
                </li>
                <li className="li-1">
                  Event
                  <ul className="ul-1">
                    <li className="li-1">Represents something that happens.</li>
                    <li className="li-1">
                      Can be communicated in the form of an event notification.
                    </li>
                    <li className="li-1">
                      Can contain data associated with an event or a command or
                      can just be a notification that something happened.
                    </li>
                    <li className="li-1">It is immutable.</li>
                  </ul>
                </li>
                <li className="li-1">
                  Command
                  <ul className="ul-1">
                    <li className="li-1">Represents an order.</li>
                    <li className="li-1">
                      Also represents a request that you have from another party
                      to give a response to.
                    </li>
                    <li className="li-1">
                      Can be communicated in the form of a message.
                    </li>
                  </ul>
                </li>
                <li className="li-1">
                  List of components that are present in an Event Driven
                  Architecture (EDA):
                  <ul className="ul-1">
                    <li className="li-1">
                      Producer
                      <ul className="ul-1">
                        <li className="li-1">
                          Creates the events that are going to be redirected by
                          the Broker.
                        </li>
                      </ul>
                    </li>
                    <li className="li-1">
                      Broker
                      <ul className="ul-1">
                        <li className="li-1">
                          Redirects the events received from the Producer to the
                          correct Consumers.
                        </li>
                      </ul>
                    </li>
                    <li className="li-1">
                      Consumer
                      <ul className="ul-1">
                        <li className="li-1">
                          React to each of the events received and execute the
                          necessary procedures based on the event.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="li-1">
                  Advantages of using EDA:
                  <ul className="ul-1">
                    <li className="li-1">
                      Allows one to decouple different components.
                    </li>
                    <li className="li-1">Allows one to invert dependencies.</li>
                    <li className="li-1">Allows for better scalability.</li>
                    <li className="li-1">
                      Events can be persisted, this way, the information can be
                      accessed even at later stages and not just only during the
                      call.
                    </li>
                    <li className="li-1">
                      There is no Single Point of Failure, enabling the system
                      to be more robust.
                    </li>
                  </ul>
                </li>
                <li className="li-1">
                  Disadvantages of using EDA:
                  <ul className="ul-1">
                    <li className="li-1">Reduces performance.</li>
                    <li className="li-1">
                      Eventual inconsistency due to there being a delay between
                      an event being sent and an event being received.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            Architecture Patterns used in Enterprise Software Development Today
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              An architectural pattern is defined as a general and reusable
              solution to a commonly occurring problem in software architecture
              within a given context.
            </li>
            <li className="li-1">
              Layered Pattern (also known as the N-Tier architecture)
              <ul className="ul-1">
                <li className="li-1">
                  Known to be the most commonly used pattern.
                </li>
                <li className="li-1">
                  Used to build general desktop applications and simple web
                  applications.
                </li>
                <li className="li-1">
                  Tends to perform poorly in high-performance applications due
                  to the inefficiency of going through multiple layers to fulfil
                  a request.
                </li>
                <li className="li-1">
                  Good for situations with a very tight budget and time
                  constraints.
                </li>
                <li className="li-1">
                  The following layers are usually present:
                  <ul className="ul-1">
                    <li className="li-1">Presentation Layer</li>
                    <li className="li-1">Application Layer</li>
                    <li className="li-1">Business Logic Layer</li>
                    <li className="li-1">Data Access Layer (DAL)</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="li-1">
              Pipe-Filter Pattern
              <ul className="ul-1">
                <li className="li-1">
                  In this pattern, a single event triggers a series of
                  processing steps, with each of these steps performing a
                  specific function.
                </li>
                <li className="li-1">
                  Divides a large processing task into a sequence of smaller and
                  independent processing steps or filters that are connected by
                  channels/pipes.
                </li>
                <li className="li-1">
                  Often used in compilers, where the filters perform tasks such
                  as lexical analysis, parsing, semantic analysis, and code
                  generation.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Client-Server Pattern
              <ul className="ul-1">
                <li className="li-1">
                  The 2 main components of this pattern are:
                  <ul className="ul-1">
                    <li className="li-1">
                      Client
                      <ul className="ul-1">
                        <li className="li-1">Requests the service.</li>
                      </ul>
                    </li>
                    <li className="li-1">
                      Server
                      <ul className="ul-1">
                        <li className="li-1">Provides the service.</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="li-1">Model View Controller (MVC) Pattern</li>
            <li className="li-1">Event Bus Pattern</li>
            <li className="li-1">Microservices Architecture</li>
            <li className="li-1">Broker Pattern</li>
            <li className="li-1">Peer-To-Peer Pattern</li>
            <li className="li-1">Blackboard Pattern</li>
            <li className="li-1">Master-Slave Pattern</li>
          </ul>
          <h3>Ways to Design a Software Architecture</h3>
          <ul className="ul-1">
            <li className="li-1">Identify the flow of components.</li>
            <li className="li-1">Identify initial components.</li>
            <li className="li-1">
              Identify actions (which can be based off of use cases).
            </li>
            <li className="li-1">Map actions to actors.</li>
            <li className="li-1">Map components to actions.</li>
            <li className="li-1">
              Analyse the roles and responsibilities of each of the actors.
            </li>
            <li className="li-1">
              Analyse the characteristics of the architecture.
              <ul className="ul-1">
                <li className="li-1">
                  The characteristics that an architecture can have include (but
                  are not limited to):
                  <ul className="ul-1">
                    <li className="li-1">Elasticity</li>
                    <li className="li-1">Availability</li>
                    <li className="li-1">Scalability</li>
                    <li className="li-1">Agility</li>
                    <li className="li-1">Security</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            How can I apply what I have learnt this week to the PFD project
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              I can make use of architecture diagrams to better plan out and
              visualize the systems that will be present in the end product that
              my team is developing (the Kato application).
            </li>
            <li className="li-1">
              I can make use of various design patterns (such as the Singleton,
              Builder, Factory, and State design patterns) where applicable to
              resolve common problems or issues that I might face while
              implementing various features for the Kato application.
            </li>
          </ul>
          <h3>
            Key takeaways from the meeting with the Workato mentors this week
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              Overview of onboarding process for new employees at Workato
              <ul className="ul-1">
                <li className="li-1">MacBook ordered for the new employee.</li>
                <li className="li-1">
                  7 days before the start of their job, Workato sends them a
                  preparation email and checks that their device has arrived.
                </li>
                <li className="li-1">
                  The new employee is then provided with a list of things to do
                  on the first day of their job (varies according to their
                  department).
                </li>
                <li className="li-1">
                  Automation (might be done using Slack or other means) sends
                  the new employee to specific Slack channels (depending on
                  their department) for remote work.
                </li>
                <li className="li-1">
                  The new employee is then provided with a checklist of things
                  to do (e.g. security trainings etc) (the types of training
                  that the new employee has to go for depending on their
                  department).
                </li>
                <li className="li-1">
                  The new employee is also allowed and encouraged to get to know
                  about all of the concepts and information that are relevant to
                  working at the company such as employee benefits and
                  procedures/policies.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Progress on the PFD project</h3>
          <ul className="ul-1">
            <li className="li-1">
              Redesigning of the logo for the Kato application has been
              completed.
            </li>
            <li className="li-1">
              Discussions have been held in my team regarding the list of
              proposed features that could be present within the Kato
              application. The features that I proposed include the following:
              <ol className="ol-1">
                <li className="li-1">
                  Notify the new employee about what they will need to bring or
                  do to prepare for their first day on the job at Workato ahead
                  of time (this could be integrated into the virtual chatbot
                  feature, or be added as a separate feature).
                </li>
                <li className="li-1">
                  Show the new employee how long it will take for their device
                  to arrive (and maybe even allow the new employee to track the
                  location of their device while it is being delivered to them).
                  <ul className="ul-1">
                    <li className="li-1">
                      Once the new employee receives their device, Kato will
                      notify them and they will be required to press a button to
                      confirm that they have received their device. Once this
                      action is performed, Workato will be automatically
                      notified that the new employee has received their device,
                      however, if this action has not been performed after 7
                      days, Workato will be automatically notified that the new
                      employee has not received their device yet.
                    </li>
                  </ul>
                </li>
                <li className="li-1">
                  Allow the new employee to keep track of the things that they
                  have yet to do on the first day of their job, as well as the
                  things that they have already done. If certain things that
                  need to be done have deadlines, notify the new employees of
                  the deadlines and help to automatically reorder the list of
                  things to do based on deadlines and priorities/urgency.
                </li>
                <li className="li-1">
                  Allow for a virtual chatbot to be integrated into the Kato
                  application that is capable of answering the aforementioned
                  information, as well as other miscellaneous questions that the
                  new employee might have, such as the locations of various
                  services and amenities (e.g. restrooms, canteens, rooms etc)
                  within the company's facilities and department-specific
                  questions.
                </li>
              </ol>
            </li>
          </ul>
          <h3>Trello Board</h3>
          <p>
            <CaptionedImage
              src={Week3TrelloBoardSnapshot}
              alt="image"
              caption="A snapshot of my team's Trello board for the PFD project, taken during Week 3."
            />
          </p>
        </BlogPostView>
      ),
    },
  ],
  [
    "Week 4",
    {
      blogPostTitleCard: <BlogPostTitleCard title="Week 4" />,
      blogPostView: (
        <BlogPostView title="Week 4">
          <h3>OAL Reflection</h3>
          <p>
            During this week's OAL, I learnt about multiple new concepts ranging
            from delivering interesting and memorable speeches to creating
            effective and intriguing presentations. Here are some of the key
            takeaways and key concepts that I learnt about during this week's
            OAL:
          </p>
          <h3>Things to talk about during a demo day pitch:</h3>
          <ul className="ul-1">
            <li className="li-1">
              Give a short introduction about yourself.
              <ul className="ul-1">
                <li className="li-1">Mention who you are.</li>
                <li className="li-1">
                  State any prominent or notable achievements that you have with
                  relevance to what you are trying to pitch (e.g. if your pitch
                  revolves around your business, mention if you already have a
                  lot of customers or downloads).
                </li>
              </ul>
            </li>
            <li className="li-1">
              Talk about the problem that your solution seeks to address.
              <ul className="ul-1">
                <li className="li-1">
                  Emphasize the importance of the problem and why the audience
                  should care about it in the first place.
                </li>
                <li className="li-1">
                  Try to limit this section of the pitch to about 1 minute if
                  possible.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Talk about your solution to the aforementioned problem.
              <ul className="ul-1">
                <li className="li-1">
                  Keep it simple and do not delve excessively into the technical
                  elements and details of the solution.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Demonstrate your solution.
              <ul className="ul-1">
                <li className="li-1">
                  Conduct your demonstration from a first-time user's
                  perspective so as to allow the audience to understand what the
                  process of using your solution is like.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Talk about how your solution stands out from your competitors'
              solutions.
            </li>
            <li className="li-1">
              Talk about how your solution can be profitable and monetizable.
              <ul className="ul-1">
                <li className="li-1">
                  Talk about the business model for your solution.
                </li>
                <li className="li-1">
                  Talking about this topic allows the audience to know more
                  about what they can get in return from investing into your
                  solution.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Talk about what makes the target market of your solution unique
              and the opportunities that your solution can provide.
            </li>
            <li className="li-1">Talk about the team behind your solution.</li>
            <li className="li-1">
              Create good presentation slides.
              <ul className="ul-1">
                <li className="li-1">
                  Slides are a reflection of your solution, thus it is important
                  to ensure that both your solution as well as your slides look
                  good.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Make a good first impression to your audience at the start of the
              pitch.
            </li>
          </ul>
          <h3>Approaches to creating and designing effective presentations</h3>
          <ul className="ul-1">
            <li className="li-1">
              Come up with good titles for your slides that are both concise and
              informative.
              <ul className="ul-1">
                <li className="li-1">
                  The titles that you come up with should provide the audience a
                  summary of the content from the slide.
                </li>
                <li className="li-1">
                  The titles should also help the audience to understand the key
                  takeaways from the slide.
                </li>
                <li className="li-1">
                  Write a full sentence for the title (which can be about 1 to 2
                  lines in total).
                </li>
              </ul>
            </li>
            <li className="li-1">
              Guide the audience.
              <ul className="ul-1">
                <li className="li-1">
                  Allow the audience to understand the higher level idea first
                  before going into the details.
                </li>
                <li className="li-1">
                  Recommended order (from first to last):
                  <ol className="ol-1">
                    <li className="li-1">Main idea</li>
                    <li className="li-1">Supporting ideas</li>
                    <li className="li-1">Details and data</li>
                  </ol>
                </li>
              </ul>
            </li>
            <li className="li-1">
              Add visual elements to your slides.
              <ul className="ul-1">
                <li className="li-1">
                  Doing so can make your slides more eye-catching and prone to
                  catching the audience's attention.
                </li>
                <li className="li-1">
                  Supplementing points or information in your slides with visual
                  elements (e.g. icons) can make the information more intuitive
                  and understandable to the audience.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Annotate your charts.
              <ul className="ul-1">
                <li className="li-1">
                  Allows the audience to have a better understanding of the key
                  takeaways from your charts.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Bring a perspective
              <ul className="ul-1">
                <li className="li-1">
                  Show what the data in your slides really mean, as opposed to
                  using your slides as a way to show the data.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Create slides that make the audience feel smart.
              <ul className="ul-1">
                <li className="li-1">
                  Your slides should ideally help and aid the audience in
                  understanding the key takeaways and ideas that your
                  presentation is trying to convey to them.
                </li>
              </ul>
            </li>
          </ul>
          <h3>
            How can I apply what I have learnt this week to the PFD project
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              I can utilize the methods that I have learnt this week to create
              presentation slides for the pitch that will allow the audience to
              understand how my solution solves our chosen problem, why it is
              different from other solutions and what are the benefits of
              choosing this solution over the other competing solutions.
            </li>
            <li className="li-1">
              I can prepare a script for the pitch next Friday that will allow
              my team and I to effectively convey the relevant information about
              our product to the audience in a concise manner (e.g. what it
              does, what makes it unique, what makes it better etc).
            </li>
          </ul>
          <h3>
            Updated list of planned features for the PFD project (based on
            meetings with Workato mentors)
          </h3>
          <ul className="ul-1">
            <li className="li-1">
              Discord chatbot.
              <ul className="ul-1">
                <li className="li-1">
                  Allow new employees to ask questions and receive answers
                  regarding topics such as their assigned department, company
                  policies, team members, or other relevant information.
                </li>
              </ul>
            </li>
            <li className="li-1">
              Integration of the Discord chatbot with the Kato web application.
            </li>
            <li className="li-1">
              Kato web application
              <ul className="ul-1">
                <li className="li-1">
                  Allow new employees to login using SSO (Single Sign-On), an
                  authentication process that can make logging in more
                  convenient for them.
                </li>
                <li className="li-1">
                  Allow new employees to access and view a dashboard containing
                  the following information:
                  <ul className="ul-1">
                    <li className="li-1">Their full name.</li>
                    <li className="li-1">Their assigned department.</li>
                    <li className="li-1">Their assigned job position.</li>
                    <li className="li-1">
                      The date of their first day of work.
                    </li>
                    <li className="li-1">
                      List of onboarding tasks that they must complete (e.g.
                      relevant company trainings, installing certain software
                      etc).
                    </li>
                    <li className="li-1">
                      Estimated time of arrival (ETA) for the company device
                      being delivered to them.
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>Progress on the PFD project</h3>
          <ul className="ul-1">
            <li className="li-1">
              Login page for the Kato web application has been created and
              designed.
            </li>
            <li className="li-1">
              Backend server can now handle requests made by the client for
              resources (e.g. HTML, CSS, JS and image files etc).
            </li>
            <li className="li-1">
              GitHub repository for the Kato web application has been set up
              successfully.
            </li>
            <li className="li-1">
              Version control system (VCS) for the Kato web application has been
              set up successfully.
              <ul className="ul-1">
                <li className="li-1">
                  The version control system we will be using for this project
                  is Git. We will use GitHub to host the Git repository for this
                  project.
                </li>
              </ul>
            </li>
          </ul>
          <h3>Trello Board</h3>
          <p>
            <CaptionedImage
              src={Week4TrelloBoardSnapshot}
              alt="image"
              caption="A snapshot of my team's Trello board for the PFD project, taken during Week 4."
            />
          </p>
        </BlogPostView>
      ),
    },
  ],
  [
    "Week 5",
    {
      blogPostTitleCard: <BlogPostTitleCard title="Week 5" />,
      blogPostView: (
        <BlogPostView title="Week 5">
          <p>
            This week, my teammates and I pitched our newly developed website to
            the stakeholders at Workato.
          </p>
        </BlogPostView>
      ),
    },
  ],
]);
