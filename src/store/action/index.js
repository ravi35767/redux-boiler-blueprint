

const set_data = () =>{
    return (dispatch) => {
        // console.log("running...");
        dispatch({
            type: "SETDATA",
            user: {name: "nari" , email: "nari@gmail.com"}
        })
    } 
}

export {
    set_data
}