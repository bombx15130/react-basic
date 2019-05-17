// action
export const increase = 'INCREASE';
export const decrease = 'DECREASE';
export const todoList = 'TODOLIST';

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

export function addTodo(item) {
    return {
        type: todoList,
        list: item
    }
}