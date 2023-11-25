export type StateType = {
    collapsed: boolean
}

export const collapseReducer = (state: StateType, action: ActionsType): StateType => {
    switch (action.type) {
        case 'toggle':
            //debugger;
            return {...state, collapsed: action.payload.value}
        default:
            return state;
    }
}

export type ActionsType = toggleACType | testACType

export type toggleACType = ReturnType<typeof toggleAC>;
export type testACType = ReturnType<typeof testAC>;

export const toggleAC = (value: boolean) => {
    return {
        type: 'toggle',
        payload: {
            value,
        }
    } as const
}

export const testAC = () => {
    return {
        type: 'unknown',
        payload: {
            value: false
        }
    } as const
}