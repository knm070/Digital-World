import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import logo from '../assets/icons/logo.svg';
import Navbar from '@/component/Navbar';
import Opportunity from '@/component/Opportunity';
import Statistics from '@/component/Statistics';
import Activities from '@/component/Activities';
import Ambassadors from '@/component/Ambassadors';
import Experts from '@/component/Experts';
import Footer from '@/component/Footer';


const Main = () => {
	// const { data, error, isLoading } = useQuery({
	// 	queryKey: ['todos'],
	// 	queryFn: async () => {
	// 		const response = await axios.get('https://catfact.ninja/fact');
	// 		return response.data;
	// 	},
	// });
	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error.message}</div>;
	return (
		<div className='bg-[#F3F3F7] w-full'>
			<Navbar/>
			<Opportunity/>
			<Statistics/>
			<Activities/>
			<Ambassadors/>
			<Experts/>
			<Footer/>
		</div>
	);
};

export default Main;
