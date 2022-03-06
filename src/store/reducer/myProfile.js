const initial={
    url:'https://q1.qlogo.cn/g?b=qq&nk=84960390&s=640'
}
export default (prestate=initial,action)=>{
    let newState={...prestate};
    switch(action.type){
        case 'change':
            newState.url=action.url;
            return newState;
        default: return prestate;
    }
}