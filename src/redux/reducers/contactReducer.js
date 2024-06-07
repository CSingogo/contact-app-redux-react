const initialState = [
    {
        id:0,
        name:'Somo Singogo',
        number:260975472614,
        email: 'singogosingogo@gmail.com'
    },
    {
        id:1,
        name:'John Banda',
        number:987654321,
        email: 'testname@gmail.com'
    }, {
        id:2,
        name:'Jimmy Phiri',
        number:260975423145,
        email: 'email3@gmail.com'
    },
    {
        id:3,
        name:'Ann Jones',
        number:987654444,
        email: 'email4@gmail.com'
    }, {
        id:4,
        name:'Fred Red',
        number:260976672614,
        email: 'fred@gmail.com'
    },
    {
        id:5,
        name:'Peter Peter',
        number:987854311,
        email: 'peter@gmail.com'
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        // Action to add a new contact
        case "ADD_CONTACT":
            // Adding the new contact to the existing state
            state = [...state, action.payload];
            return state;

        // Action to update an existing contact
        case "UPDATE_CONTACT":
            // Updating the state by replacing the contact with the updated one
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;

        // Action to delete a contact
        case "DELETE_CONTACT":
            // Filtering out the contact with the given id
            const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContacts;
            return state;

        // Default case, returns the current state if action type is not recognized
        default:
            return state;
    }
}

export default contactReducer;
