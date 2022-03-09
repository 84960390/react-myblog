const initial = {
    calculate: 0,
    create_time: "2022-03-02T11:30:12.000Z",
    css: 0,
    daily: 0,
    id: 0,
    javascript: 0,
    shell: 0,
    visit: 1,
}
export default (prestate = initial, action) => {
    let newState = {}
    switch (action.type) {
        case 'changeData':
            newState = action.data;
            return newState;
        default: return prestate;
    }
}