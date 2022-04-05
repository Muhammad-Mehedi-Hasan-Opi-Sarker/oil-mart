import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>What is a semantic tag ?</h1>
            <p>Semantic is support on morden bowser . It is helpful for readable code. Before days was don’t understand as like Semantic tag codes make it easy to read. As a result of using semantic tags, code codes can now be read exactly. This was not the case before. Semantic tags can be used to understand what is being used here and what is being done.
                As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.
                List of new semantic elements
                The semantic elements added in HTML5 are:</p>
            <ul>
                <li>artical </li>
                <li>aside</li>
                <li>details</li>
                <li>figure</li>
                <li>figcaption</li>
                <li>footer</li>
                <li>header</li>
                <li>main</li>
                <li>mark</li>
                <li>nav</li>
                <li>section</li>
                <li>time</li>
                <li>summary</li>
            </ul>
            <h1>What is context API ?</h1>
            <p>Any child component at the bottom of the tree will get access to any component at the top of the tree without mapping props with context API. Context treats shared data as global so that everyone in the component tree has fair access. Before works on react that data passing from parent component to child component times had a big proble m .
                Before working on react that data passing time from parent component to child component had a big problem. If have been parent components has been more child components that time was a big problem. It was a time waste. But our problem solved context API.
            </p>
        </div>
    );
};

export default Blogs;