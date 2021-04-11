let initialState = {
    student: {
        id: "1512",
        name: "Danh",
        phone: "0963705653",
        email: "npdanh1512@gmail.com",
    }
}

export default (state = initialState, { type, student }) => {
    switch (type) {

    // case typeName:
    //     return { ...state, ...payload }

    default:
        return JSON.parse(JSON.stringify(state));
    }
}
