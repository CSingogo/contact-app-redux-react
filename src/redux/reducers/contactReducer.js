const initialState = [
    {
        id:0,
        name:'Somo Singogo',
        number:260975472614,
        email: 'singogosingogo@gmail.com'
    },
    {
        id:1,
        name:'Test Name',
        number:987654321,
        email: 'testname@gmail.com'
    }
];

const contactReducer = (state = initialState, action) => {
    switch (action.type){
        case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
        case "UPDATE_CONTACT":
        const updateState = state.map(contact=> contact.id === action.payload.id? action.payload : contact);
        state = updateState;
        case "DELETE_CONTACT":
         const filterContacts = state.filter(contact=> contact.id !== action.payload && contact);
            state = filterContacts;
            return state;
        default:
            return state;
    }
}

export default contactReducer;

// export const contactReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "ADD_CONTACT":
//         state = [...state, action.payload];
//         return state;
//       case "DELETE_CONTACT":
//         const contactFilter = state.filter((contact) =>
//           contact.id === action.payload ? null : contact
//         );
//         state = contactFilter;
//         return state;
//       case "UPDATE_CONTACT":
//         const contactUpdate = state.filter((contact) =>
//           contact.id === action.payload.id
//             ? Object.assign(contact, action.payload)
//             : contact
//         );
//         state = contactUpdate;
//         return state;
//       case "RESET_CONTACT":
//         state = [{ name: null, email: null, phone: null }];
//         return state;
//       default:
//         return state;
//     }
//   };