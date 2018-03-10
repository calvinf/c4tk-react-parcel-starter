// Hello!

// If you're curious what's going on here, this is a starter template
// for building a web app (using client-side rendering) with React.js.
// This project makes use of ES2015+ (latest versions of JavaScript)
// and JSX syntax.  Learn more about React (reactjs.com) and Parcel (https://parceljs.org/)
// on their websites.

// We need React and React-DOM
import React from 'react';
import {render} from 'react-dom';

// Import any styles needed for this page.
// Parcel does some magic to add this to the page.
import './hello.scss';

// Heading component
const Hello = ({name}) => {
    return (
        <h1 className="banner">Hello, {name}</h1>
    );
};

// Body of the page
const Body = () => {
    return (
        <div>
            This is your page content.
        </div>
    );
};

// Page
const Page = () => {
    return (
        <div className="page">
            <header>
                <Hello name="C4TK" />
            </header>
            <Body />
        </div>
    );
};

render(
    <Page />,
    document.querySelector('#app'),
);
