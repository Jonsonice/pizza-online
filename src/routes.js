import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

export const routes = [{
		path: '/',
		components: {
			default:Home,
			'orderingGuide':OrderingGuide,
			'delivery':Delivery,
			'history':History
		},
		name: "homelink"
	},
	{
		path: '/menu',
		component: Menu,
		name: "menulink"
	},
	{
		path: '/admin',
		component: Admin,
		name: "adminlink",
		// ,beforeEnter: (to, from, next) => {
		//         alert("非登录状态，不能访问此页面！");
		// 				next('')
		//路由独享的守卫
		//判断store.gettes.isLogin ===false
		// 				if(to.path == '/login' || to.path == '/register'){
		// 					next();
		// 				}else{
		// 					alert("还未登录，请先登录！");
		// 					next('/login')
		// 				}
		// }
	},
	{
		path: '/about',
		component: About,
		name: "aboutlink",
		redirect: '/about/history',
		children: [{
				path: '/about/contact',
				name: 'contactLink',
				component: Contact,
				redirect: '/personname',
				children: [{
						path: '/phone',
						name: 'phoneLink',
						component: Phone
					},
					{
						path: '/personname',
						name: 'personNameLink',
						component: PersonName
					}
				]
			},
			{
				path: '/about/delivery',
				name: 'deliveryLink',
				component: Delivery
			},
			{
				path: '/about/history',
				name: 'historyLink',
				component: History
			},
			{
				path: '/about/orderingGuide',
				name: 'orderingGuideLink',
				component: OrderingGuide
			}
		]
	},
	{
		path: '/login',
		component: Login,
		name: "loginlink"
	},
	{
		path: '/register',
		component: Register,
		name: "registerlink"
	},
	{
		path: '*',
		redirect: '/'
	}
]

//全局守卫
// router.beforeEach((to,from,next)=>{
// // 	alert("还未登录，请先登录！");
// // 	next();
// // console.log(to);
// 
// 
// //判断store.gettes.isLogin ===false
// 	if(to.path == '/login' || to.path == '/register'){
// 		next();
// 	}else{
// 		alert("还未登录，请先登录！");
// 		next('/login')
// 	}
// })

//后置钩子
// router.afterEach((to,from)=>{
// 	alert("after each");
// })
