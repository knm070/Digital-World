import { lazy } from 'react';
const Main = lazy(() => import('@/pages/main'));
const Login = lazy(() => import('@/pages/Login'));
const Experts = lazy(() => import('@/pages/Experts'));
const ExpertsSingle = lazy(() => import('@/pages/ExpertsSingle'));
const Activities = lazy(() => import('@/pages/Activities'));
const Ambassadors = lazy(() => import('@/pages/Ambassadors'));
const AmbassadorsSingle = lazy(() => import('@/pages/AmbassadorsSingle'));
const ActivitiesSingle = lazy(() => import('@/pages/ActivitiesSingle'));

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
		id: 4,
		path: '/experts/single',
		component: ExpertsSingle,
	},
	{
		id: 5,
		path: '/ambassadors',
		component:Ambassadors ,
	},
	{
		id: 6,
		path: '/activities',
		component: Activities,
		
	},
	{
		id: 7,
		path: '/ambassadors-single',
		component: AmbassadorsSingle,
	},
	{
		id: 8,
		path: '/activities-single',
		component: ActivitiesSingle,
	},
];
