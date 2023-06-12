import Home01 from './Home01'
import AboutUs from './AboutUs'
import Testimonial from './Testimonial'
import Blog from './Blog'
import Contact from './Contact'
import BlogDetails from './BlogSingle'
import Category from './Category'
import ProductDetail from './ProductDetail'
import Login from '../admin-panel/login/login'
import ShowBlog from '../admin-panel/blog/showblog'
import Comment from '../admin-panel/comment/comment'
import CreateBlog from '../admin-panel/create-blog/add-blog'
import EditBlog from '../admin-panel/edit-blog/editblog'
import PrivateRoute from '../admin-panel/privateroutes'

const routes = [
    { path: '/', component: Home01 },
    { path: '/about-us', component: AboutUs },
    { path: '/holzmac', component: Category },
    { path: '/promac', component: Category },
    { path: '/holzmac/:slug', component: ProductDetail },
    { path: '/promac/:slug', component: ProductDetail },
    { path: '/page-testimonial', component: Testimonial },
    { path: '/blogs', component: Blog },
    {path:'/blog/:blog_slug', component:BlogDetails},
    { path: '/contact-us', component: Contact },
    // admin panel route
    {path:'/all-blogs' , component:ShowBlog},
    {path:"/all-comment" , component:Comment},
    {path:'/create-blog' , component: CreateBlog},
    {path: '/edit-blog/:id' , component:EditBlog},
    { path: '/admin-login', component: Login },
    
    
]

export default routes;