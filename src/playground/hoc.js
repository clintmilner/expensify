console.log('Higher Order Components (HOC)');

// react component (HOC) that renders another component (regular component)
// the goal is to reuse code
// render hijacking
// prop manipulation
// abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);


const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <strong>This is Private Information - Please don't share!</strong> }
            <WrappedComponent {...props}/>
        </div>
    );
};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p>Please log-in to view this information!</p>) }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);








// ReactDOM.render(<AdminInfo info='Clint Rocks!' isAdmin={true} />, document.getElementById('app'));
ReactDOM.render(<AuthInfo info='Clint Rocks!' isAuthenticated={true} />, document.getElementById('app'));