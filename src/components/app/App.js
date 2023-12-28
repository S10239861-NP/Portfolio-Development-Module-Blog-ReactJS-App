import React from 'react';

import './App.css';

import BlogShell from '../blog-shell/BlogShell.js';

import HomeView from "../home-view/HomeView.js";

import BlogView from "../blog-view/BlogView.js";

import ContactView from "../contact-view/ContactView.js";

class App extends React.Component
{
  #blogViewRef = React.createRef();

  views = {
    homeView: <HomeView/>,
    blogView: <BlogView ref={this.#blogViewRef}/>,
    contactView: <ContactView/>
  };

  state = {
    currentView: this.views.homeView
  };

  constructor(props)
  {
    super(props);
  }

  /**
   * 
   * @returns {App}
   */
  getApp()
  {
    return this;
  }

  render()
  {
    return (
      <div className="App">
        <BlogShell getApp={this.getApp.bind(this)}>
          {
            this.state.currentView
          }
        </BlogShell>
      </div>
    );
  }

  componentDidUpdate()
  {
    if (this.state.currentView == this.views.blogView)
    {
      this.#blogViewRef.current.displayPostsSection();
    }
  }
}

export default App;
