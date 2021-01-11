
const INITIAL_STATE = {
    users: [
        {
            name: "Ravi Shankar",
            email: "ravishankar.mlahi1@gmail.com"
        },
        {
            name: "karan Kumar",
            email: "karan@gmail.com"
        }
    ]
}

export default (state = INITIAL_STATE, action) =>{
    switch (action.type){
        case "SETDATA":
            return({
                ...state,
                users: [...state.users,action.user]
            })
    }
    return state
}