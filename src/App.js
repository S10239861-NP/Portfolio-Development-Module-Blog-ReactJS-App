import React from 'react';

import './App.css';

import BlogShell from './BlogShell';

import HomeView from "./HomeView.js";

import BlogView from "./BlogView.js";

import ContactView from "./ContactView.js";

class App extends React.Component
{
  views = {
    HomeView: <HomeView/>,
    BlogView: <BlogView/>,
    ContactView: <ContactView/>
  };

  state = {
    currentView: this.views.HomeView
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
}

export default App;
