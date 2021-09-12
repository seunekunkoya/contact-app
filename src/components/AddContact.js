import React from 'react'

class AddContact extends React.Component {
    render(){
        return(
            <div className="ui main">
                    
                <h2>Add Contact</h2> 

                <form className="ui form">
                <div className="field">
                    <label htmlFor="">Name</label>
                    <input type="text" name="name" id="" placeholder="Name"/>
                </div>

                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" id="" placeholder="Email"/>
                </div>
                <button type="submit" className="ui button blue">Add</button>
                </form>
            </div>


            
        )
    }
}

export default AddContact