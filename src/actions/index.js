// action
export const increase = 'INCREASE';
export const decrease = 'DECREASE';

// actionType
export function plus() {
    return {
        type: increase,
        num: 1
    }
}

export function minus() {
    return {
        type: decrease,
        num: 1
    }
}