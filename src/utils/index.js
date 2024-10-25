import { lazy } from 'react';
const Main = lazy(() => import('@/pages/main'));
const Login = lazy(() => import('@/pages/Login'));
const Experts = lazy(() => import('@/pages/Experts'));
const ExpertsSingle = lazy(() => import('@/pages/ExpertsSingle'));
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
];
