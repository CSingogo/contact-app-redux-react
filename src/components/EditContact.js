import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';


const EditContact = () => {
    const { id } = useParams();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact => contact.id === parseInt(id));

    useEffect(()=> {
        if (currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkNumber = contacts.find(contact=> contact.id !== parseInt(id)  && contact.number === parseInt(number));

        const checkEmail = contacts.find(contact=> contact.id !== parseInt(id)  && contact.email === email);

        if(!email || !number || !name){
            return toast.warning('please fill in all fields')
        }


        if(checkEmail){
            return toast.error('This email already Exists!')
        }

        if(checkNumber){
            return toast.error('This number already Exists!')
        }

        const data = {
            id: parseInt(id),
            name,
            email,
            number
        };

        dispatch({type: "UPDATE_CONTACT", payload:data});
        toast.success('Contact Updated Successfully!!');
        navigate('/');
    };

  
    return (
            <div className='container'>
                {currentContact ? (
                 <> 
                   <h1 className='display-3 my-5 text-center'>
                    Edit Contact {id}
                    </h1>
                 <div className='row'>
                    <div className='col-md-6 shadow mx-auto p-5'></div>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <input type='text' placeholder='Name' className='form-control' 
                            value={name} onChange={e => setName(e.target.value)}/>
                        </div>

                        <div className='form-group'>
                            <input type='email' placeholder='Email' className='form-control'
                            value={email} onChange={e => setEmail(e.target.value)} />
                        </div>

                        <div className='form-group'>
                            <input type='number' placeholder='Phone Number' className='form-control' 
                            value={number} onChange={e => setNumber(e.target.value)}/>
                        </div>


                        <div className='form-group'>
                            <input type='submit' value='Update Contact' className='btn btn-dark' />
                        </div>

                        <Link className='btn btn-danger ml-3 mt-3'
                            to='/'>
                            Cancel
                        </Link>
                    </form>
                  </div>
               </> ):( <h1 className='display-3 my-5 text-center'>
                    Contact with id {id} does not exist
                    </h1>)}
                
            </div>
    )
}

export default EditContact
