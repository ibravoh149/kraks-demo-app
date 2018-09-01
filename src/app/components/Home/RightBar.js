import React, { Component } from 'react';
import LatestStory from './LatestStory';
import LatestSports from './LatestSports';

const RightBar = (props) => {
    return (
        <div>
            {/* latest sports */}
            <LatestStory />
            {/* latest sports */}

            {/* latest sports */}
            <LatestSports/>
            {/* latest sports */}

            {/* right bar */}
        </div>
    );
}

export default RightBar;