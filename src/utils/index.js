import { lazy } from 'react';
const Main = lazy(() => import('@/pages/main'));
const Login = lazy(() => import('@/pages/Login'));
const Experts = lazy(() => import('@/pages/Experts'));
<<<<<<< HEAD
const Ambassadors = lazy(() => import('@/pages/Ambassadors'));
const Activities = lazy(() => import('@/pages/Activities'));


=======
const ExpertsSingle = lazy(() => import('@/pages/ExpertsSingle'));
>>>>>>> d3aadc1e415cb128e854e631985681a086d03a49
export const Data = [
	{
		id: 1,
		path: '/',
		component: Main,
	},
	{
		id: 2,
		path: '/login',
		component: Login,
	},
	{
		id: 3,
		path: '/experts',
		component: Experts,
	},
	{
<<<<<<< HEAD
		id: 5,
		path: '/ambassadors',
		component:Ambassadors ,
	},
	{
		id: 6,
		path: '/activities',
		component: Activities,
=======
		id: 4,
		path: '/experts/single',
		component: ExpertsSingle,
>>>>>>> d3aadc1e415cb128e854e631985681a086d03a49
	},
];
