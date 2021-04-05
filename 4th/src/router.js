import Main from "@/pages/Main"
import Install from "@/pages/InstallPage"
import Route from "@/pages/RoutePage"
import Custom from "@/pages/CustomPage"

const router = [
    {
        path: '/',
        component: Main,
        title: 'Home'
    },
    {
        path: '/install',
        component: Install,
        title: 'Install'
    },
    {
        path: '/route',
        component: Route,
        title: 'Vue Route'
    },
    {
        path: '/Custom',
        component: Custom,
        title: 'Custom Input Component'
    },
]

export default router