import Index from './components/Index'
import CalApp from './containers/CalApp'



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
    }
]

export default routes