import React from 'react';


const List = (props) => {

    const { sendUsers, deleteUser } = props;
    const length = sendUsers.length;

    // if there is a length to the array (there is an items in the array )
    const ViewItems = length ? (
        sendUsers.map(i => {
            return (
                <div key={i.id} >

                    <span className="data-span" > {i.name} </span>
                    <span className="data-span" > {i.age} </span>
                    <span className="data-span" onClick={() => deleteUser(i.id)} > &times; </span> 

                </div>
            )
        })
        // else  return a div to show that  there is no items to show 
    ) : (
        <p className="no-items">There is no items to show here </p>
    )

    return (
        <div className ="userList" >
            <div className="head">
                <span>Course</span>
                <span>Days</span>
                <span>Action</span>

            </div>

            {ViewItems}

        </div>
    );


}

export default List;
