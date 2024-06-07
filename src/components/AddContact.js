import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  // State variables for name, email, and phone number
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  // Get contacts from Redux store
  const contacts = useSelector((state) => state);
  
  // Dispatch function for updating Redux store
  const dispatch = useDispatch();

  // Hook for navigation
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the number already exists
    const checkNumber = contacts.find((contact) => contact.number === parseInt(number));

    // Check if the email already exists
    const checkEmail = contacts.find((contact) => contact.email === email && email);

    // Validate input fields
    if (!email || !number || !name) {
      return toast.warning('Please fill in all fields');
    }

    // If email already exists, show error
    if (checkEmail) {
      return toast.error('This contact already exists!');
    }

    // If number already exists, show error
    if (checkNumber) {
      return toast.error('This number already exists!');
    }

    // Create new contact object
    const data = {
      id: contacts.length + 1, // Generate unique ID
      name,
      email,
      number
    };

    // Dispatch action to add contact
    dispatch({ type: "ADD_CONTACT", payload: data });
    
    // Show success message
    toast.success('Contact added successfully');
    
    // Navigate back to home page
    navigate('/');
  };

  return (
    <div className='container'>
      <h1 className='display-3 my-5 text-center'>
        Add Contact
      </h1>
      <div className='row'>
        <div className='col-md-6 shadow mx-auto p-5'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                className='form-control'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                placeholder='Email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='number'
                placeholder='Phone Number'
                className='form-control'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <input
                type='submit'
                value='Add Contact'
                className='btn btn-block btn-dark'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
