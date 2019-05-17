import Index from './containers/Index'
import CalApp from './containers/CalApp'
import TodoApp from './containers/TodoApp'
import ClockApp from './containers/ClockApp'
import GameApp from './containers/GameApp'

const routes = [
    {
        key: 1,
        path: '/',
        exact: true,
        component: Index
    },
    {
        key: 2,
        path: '/calculate',
        exact: false,
        component: CalApp
    },
    {
        key: 3,
        path: '/todoApp',
        exact: true,
        component: TodoApp
    },
    {
        key: 4,
        path: '/clockApp',
        exact: true,
        component: ClockApp
    },
    {
        key: 5,
        path: '/gameApp',
        exact: true,
        component: GameApp
    }
]

export default routes