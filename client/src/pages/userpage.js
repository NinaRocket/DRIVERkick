import React, { useState, useEffect } from "react";

function userPage() {
 // Setting our component's initial state
 const [users, setUsers] = useState([])
 const [formObject, setFormObject] = useState({})

 useEffect(() => {
    loadBooks()
  }, [])

 function loadUsers() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


  return (
    <>
    </>
  );

}