import React from "react";

import "./CaptionedImage.css";

class CaptionedImage extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="captioned-image">
                <img src={this.props.src} alt={this.props.alt}/>

                <em>{this.props.caption}</em>
            </div>
        );
    }
}

export default CaptionedImage;