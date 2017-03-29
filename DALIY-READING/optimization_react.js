/**
    https://medium.com/dailyjs/react-is-slow-react-is-fast-optimizing-react-apps-in-practice-394176a11fba#.xvzkcp79h

    Continue to read about optimization by Recompose, Reselector, Redux, 
    And even more about the optimization process of the react
*/


// in Datagrid.js
import React, { Children } from 'react'

/*
    React.Children

    React.Children provides utilities for dealing with the 
    this.props.children opaque data structure.

---------------------------------------------------------------

    React.Children.map(children, function[(thisArg)])

    Invokes a function 
    on every immediate child contained within children with this set to thisArg.

    If children is a keyed fragment or array it will be traversed: 
    the function will never be passed the container objects. 
    If children is null or undefined, returns null or undefined rather than an array.
*/

render() {
    const { 
        resource,
        children,
        ids,
        data,
        currentSort
    } = this.props;
    return (
        <table>
            <thead>
                <tr>
                    {Children.map(children, (field, index) =>
                        <DatagridHeaderCell
                            key={index}
                            field={field}
                            currentSort={currentSort}
                            updateSort={this.updateSort}
                        />
                    )}
                </tr>
            </thead>
            <tbody>
                {ids.map(id => (
                    <tr key={id}>
                        {Children.map(children, (field, index) =>
                            <DatagridCell
                                record={data[id]}
                                key={`${id}-${index}`}
                                field={field}
                                resource={resource}
                            />
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

/*
    The implementation above is very inefficient
    Each <DatagridCell /> call renders at least two or three components 

*/

/*
    In order to avoid a useless rendering of the table body, I must first *extract* it:
*/

// in Datagrid.js
render() {
    const { 
        resource,
        children,
        ids,
        data,
        currentSort
    } = this.props;
    return (
        <table>
            <thead>
                <tr>
                    {React.Children.map(children, (field, index) =>
                        <DatagridHeaderCell
                            key={index}
                            field={field}
                            currentSort={currentSort}
                            updateSort={this.updateSort}
                        />
                    )}
                </tr>
            </thead>
            <DatagridBody resource={resource} ids={ids} data={data}>
                {children}
            </DatagridBody>
            </table>
        );
    );
}

/*
    A new <DatagridBody /> component by extracting the table body logic
*/
// in DatagridBody.js
import React, { Children } from 'react';

class DatagridBody extends Component {

    // use shouldComponentUpdate to avoid useless rerendering
    shouldComponentUpdate(nextProps) {
        return (nextProps.ids !== this.props.ids 
                || nextProps.data !== this.props.data);
    }

    render() {
        const { resource, ids, data, children } = this.props

        return (
            <tbody>
                {ids.map(id => (
                    <tr key={id}>
                        {Children.map(children, (field, index) =>
                            <DatagridCell
                                record={data[id]}
                                key={`${id}-${index}`}
                                field={field}
                                resource={resource}
                            />
                        )}
                    </tr>
                ))}
            </tbody> 
        )
    }
}

export default DatagridBody;

/*

    Don’t do it everywhere — executing shouldComponentUpdate on simple components is sometimes 
    slower than just rendering the component. 

    Don’t do that too early in the life of an application either 
    — this would be premature optimization. But as your apps grow, 
    and you can detect performance bottlenecks in your components, 
    add shouldComponentUpdate logic to remain fast.

*/

/**
    ABOUT OBJECT LITERALS IN JSX
*/

/*
    In fact, each time you pass an object literal as prop to a child component, 
    you break purity

*/

import React from 'react';
import MyTableComponent from './MyTableComponent';
const Datagrid = (props) => (
    <MyTableComponent style={{ marginTop: 10 }}>
        ...
    </MyTableComponent>
)

/*
    The following will be better
*/

import React from 'react';
import MyTableComponent from './MyTableComponent';

const tableStyle = { marginTop: 10 };
const Datagrid = (props) => (
    <MyTableComponent style={tableStyle}>
        ...
    </MyTableComponent>
)

/*
    Another usual suspect for hijacking pure components is React.cloneElement(). 
    If you pass a prop by value as second parameter, 
    the cloned element will receive new props at every render.
*/

// bad
const MyComponent = (props) =>
    <div>{React.cloneElement(Foo, { bar: 1 })}</div>;
// good
const additionalProps = { bar: 1 };
const MyComponent = (props) =>
    <div>{React.cloneElement(Foo, additionalProps)}</div>;




