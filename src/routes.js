import Index from './components/Index'
import CalApp from './containers/CalApp'
import TodoApp from './containers/TodoApp'


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
    }
]

export default routes