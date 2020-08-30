import React from 'react';
import './assignment01.css'

const Assignment01 = ({ name }) => {
    return (
        <div className='Assign-body'>
            <div className="container">
                <h1>Assignment 01 from Dave Cadia React Tutorial</h1>

                <hr />

                <p>Hello <strong> {name}! </strong> </p>

                <hr />

                <h4>This is Heading (Category 4)</h4>

                <hr />

                <ul>
                    <h4>Unordered List</h4>
                    <li>Biryani</li>
                    <li>Karahi</li>
                    <li>Qourma</li>
                </ul>

                <hr />

                <ol>
                    <h4>Ordered List</h4>
                    <li>Kheer</li>
                    <li>Jaleebi</li>
                </ol>

                <hr />

                <p>5 + 10 = {5 + 10} <br />
                How to perform this Calculation is just put your JAVASCRIPT into Curly Braces i.e, 	&#123;5 + 10&#125;
                </p>
            </div>
        </div>
    )
}

export default Assignment01;