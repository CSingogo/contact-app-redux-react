import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

// const Home = () => {

//   const contacts = useSelector(state=>state);

//   const dispatch = useDispatch()

//   const deleteContact = (id) => {
//     dispatch({type: 'DELETE_CONTACT', payload:id});
//     toast.success('contact deleted successfully!');
//   }

//   return (
//     <div className='container'>
//         <div className='row'>
//             <div className='col-md-12 my-5 text-right'>
//                 <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
//             </div>
//             <div className='col-md-20 mx-auto'>
//             <table className='table table-hover'>
//               <thead className='text-white bg-dark text-center'>
//                 <tr>
//                   <th scope='col'></th>
//                   <th scope='col'>Name</th>
//                   <th scope='col'>Email</th>
//                   <th scope='col'>Number</th>
//                   <th scope='col'>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                  {
//                   contacts.map((contact, id) => (
//                     <tr key={id}>
//                       <td>{id + 1}</td>
//                       <td>{contact.name}</td>
//                       <td>{contact.email}</td>
//                       <td>{contact.number}</td>
//                       <td>
//                       <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mr-2'>Edit</Link>
//                         <button type="button" onClick={()=> deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
//                       </td>
//                     </tr>
//                   ))
//                  }
//               </tbody>
//             </table>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Home

const Home = () => {
  // State for search input
  const [search, setSearch] = useState('');
  
  // Getting contacts from the Redux store
  const contacts = useSelector(state => state);
  
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Function to handle the deletion of a contact
  const deleteContact = (id) => {
    // Dispatching delete action with contact id
    dispatch({ type: 'DELETE_CONTACT', payload: id });
    // Showing a success message
    toast.success('Contact deleted successfully!');
  };

  // Filtering contacts based on the search input
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='container'>
      <div className='row'>
        {/* Button to navigate to the Add Contact page */}
        <div className='col-md-12 my-5 text-right'>
          <Link to='/add' className='btn btn-outline-dark'>Add Contact</Link>
        </div>
        
        {/* Search input field */}
        <div className='col-md-12 my-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search Contacts by Name'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        {/* Table to display contacts */}
        <div className='col-md-12 mx-auto'>
          <table className='table table-hover'>
            <thead className='text-white bg-dark text-center'>
              <tr>
                <th scope='col'></th>
                <th scope='col'>Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Number</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Display filtered contacts or a message if no contacts are found */}
              {filteredContacts.length > 0 ? (
                filteredContacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      {/* Edit button */}
                      <Link to={`/edit/${contact.id}`} className='btn btn-small btn-primary mr-2 m-3'>Edit</Link>
                      {/* Delete button */}
                      <button type='button' onClick={() => deleteContact(contact.id)} className='btn btn-small btn-danger'>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                // Message when no contacts are found
                <tr>
                  <td colSpan='5' className='text-center'>No Contacts Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
