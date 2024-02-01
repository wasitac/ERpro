/**
 * 정유진
 */

import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';

import infoIcon from '../../../../img/infoIcon.png';
import tradeIcon from '../../../../img/tradeIcon.png';
import logisticsIcon from '../../../../img/logisticsIcon.png';
import productionIcon from '../../../../img/productIcon.png';
import logo from '../../../../img/logo.png';
import profile from '../../../../img/profileIcon.png';

import "./reset.css";

const items = [
	{
		label: '기초정보',
		key: 'info',
		icon: <img src={infoIcon} alt="기초정보 아이콘" />,
		children: [
			{
				type: 'group',
				children: [menus.account, menus.items, menus.bom, menus.member]
			},
		],
	},
	{
		label: '거래',
		key: 'trade',
		icon: <img src={tradeIcon} alt="거래 아이콘" />,
		children: [
			{
				type: 'group',
				children: [menus.orders, menus.estimate, menus.invoice, menus.store],
			},
		],
	},
	{
		label: '물류/재고',
		key: 'logistics',
		icon: <img src={logisticsIcon} alt="물류재고 아이콘" />,
		children: [
			{
				type: 'group',
				children: [
					{
						label: '입고/출고 관리',
						key: 'setting:9',
					},
					{
						label: '재고 관리',
						key: 'setting:10',
					},
				],
			},
		],
	},
	{
		label: '생산',
		key: 'product',
		icon: <img src={productionIcon} alt="생산 아이콘" />,
		children: [
			{
				type: 'group',
				children: [menus.store, menus.inventory, menus.productionIcon, menus.inspection]
			},
		],
	},
];

const Navbar = () => {
	const setCurrent = useState('mail');
	const onClick = (e) => {
		console.log('click ', e);
		setCurrent(e.key);
	};
	return <div style={{ backgroundColor: '#f4f4f4', height: '90px', display: 'flex', alignItems: 'center', width: '100%', borderBottom: '1px solid rgba(5, 5, 5, 0.06)' }}>
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<img style={{ width: '150px', margin: '20px 20px 12px 20px' }} src={logo} alt="logo" />
			<Menu
				onClick={onClick}
				mode="horizontal"
				items={items}
				style={{
					backgroundColor: '#f4f4f4',
					marginTop: '26px',
					width: '600px',
				}}
			/>
		</div>
		<img style={{ marginLeft: 'auto', marginRight: '30px' }} src={profile} alt="profile" />
	</div>

};

export default Navbar;