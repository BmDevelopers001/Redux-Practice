
const InitialState = {
    count: 0
}

function InDe(state = InitialState, action) {
    switch (action.type) {
        case 'Increment':
            return {
                count: state.count + 1
            }
        case 'Decrement':
            return {
                count: state.count - 1
            }
        default:return state
    }

}

export {InDe}