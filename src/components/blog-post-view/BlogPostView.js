import React from "react";

import "./BlogPostView.css";

import BlogPostReadingTimeCalculator from "../../utils/blog-post-reading-time-calculator";

class BlogPostView extends React.Component
{
    rootElementRef = React.createRef();

    state = {
        averageReadingTimeInMinutes: 0
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
          <div ref={this.rootElementRef} className="blog-post-view">
            <h1>{this.props.title}</h1>

            <div className="author-section">
                <svg width="32" height="32" viewBox="0 0 1000 1000" className="dDcMfv">
                    <circle cx="500" cy="500" r="500" fill="#cccccc"></circle>

                    <path fill="#a0a09f" d="M830.8,874.927c-77.344-60.8-187.181-104.877-227.88-111.347-20.335-3.233-20.8-59.1-20.8-59.1s59.746-59.106,72.768-138.584c35.029,0,56.666-84.5,21.631-114.226C677.986,420.37,721.551,206,501,206S324.015,420.37,325.473,451.666c-35.033,29.729-13.4,114.226,21.632,114.226,13.021,79.478,72.77,138.584,72.77,138.584s-0.464,55.871-20.8,59.1c-40.883,6.5-151.537,50.943-228.934,112.176C65.84,784.12,0,649.751,0,500,0,223.858,223.858,0,500,0s500,223.858,500,500C1000,649.3,934.559,783.311,830.8,874.927ZM500,1000h0Z"></path>
                </svg>

                <p>Naveed Fazlan</p>

                <svg xmlns="http://www.w3.org/2000/svg" width="19" viewBox="0 0 19 19" style={{fillRule: "evenodd", fill: "#FFD700"}} className="blog-icon-fill">
                    <title>Owner</title>

                    <path d="M15.3812,6.495914 L12.6789333,8.77258837 C12.6191333,8.84477644 12.5099333,8.85722265 12.4354,8.79997005 C12.4215333,8.79001308 12.4094,8.77756686 12.3998667,8.76429089 L9.78686667,6.14327115 C9.67766667,5.99225704 9.46186667,5.95491839 9.305,6.05863687 C9.26946667,6.08186981 9.23913333,6.11091099 9.21573333,6.14493065 L6.60013333,8.81075677 C6.5464,8.88626383 6.43893333,8.90534803 6.3592,8.85390366 C6.34446667,8.84394669 6.33146667,8.83233022 6.32106667,8.81905425 L3.61966667,6.50587098 C3.5018,6.36149485 3.28426667,6.33577266 3.13346667,6.44861837 C3.0494,6.51167921 3,6.60792997 3,6.70998895 L4,14 L15,14 L16,6.70169148 C16,6.51831719 15.8448667,6.36979232 15.6533333,6.36979232 C15.5476,6.36979232 15.4470667,6.41625821 15.3812,6.495914 Z"></path>
                </svg>

                <div style={{width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "gray", marginTop: "auto", marginBottom: "auto"}}/>

                <p>{this.state.averageReadingTimeInMinutes} minutes</p>
            </div>

            {this.props.children}
          </div>
        );
    }

    componentDidMount()
    {
        this.setState(
            {
                averageReadingTimeInMinutes: BlogPostReadingTimeCalculator.instance.getAverageReadingTimeForBlogPost(this)
            }
        );
    }
}

export default BlogPostView;
