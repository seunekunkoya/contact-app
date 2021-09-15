import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [{
    id: "1",
    "name": "Olekun",
    "email": "test@gmail.com"
  }]

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteHandler}></ContactCard>
    );
  });

  return ( 
        <div className="ui main">
            <h2>Contact List</h2>
              <div className="ui celled list">
                {renderContactList}
              </div>
        </div>
  )
};

export default ContactList;
