//
import {createRouter, createWebHistory} from 'vue-router';
//

import allmemberspage from '../views/AllMembersPage';
import apipage from '../views/ApiPage.vue';
import confirmcontactpage from '../views/ConfirmContactPage.vue';
import confirmloggedinpage from '../views/ConfirmLoggedInPage.vue';
import confirmsignuppage from '../views/ConfirmSignUpPage.vue';
import contactformpage from '../views/ContactFormPage.vue';
import cookiespage from '../views/CookiesPage.vue';
import cvpage from '../views/CvPage.vue';
import homeblogpage from '../views/HomeBlogPage.vue';
import homepage from '../views/HomePage.vue';
import loguserpage from '../views/LogUserPage.vue';
import noaccesspage from '../views/NoAccessPage.vue';
import notfoundpage from '../views/NotFoundPage.vue';
import projetspage from '../views/ProjetsPage.vue';
import searchpostpage from '../views/SearchPostPage.vue';
import signuserpage from '../views/SignUserPage.vue';
import userstatuspage from '../views/UserStatusPage.vue';
import writepostpage from '../views/WritePostPage.vue';
import rgpdpage from '../views/RgpdPage.vue';

const routes = [
	{
		path: '/rgpdPage',
		name: 'rgpdpage',
		component: rgpdpage,
	},
	{
		path: '/confirmloggedinPage',
		name: 'confirmloggedinpage',
		component: confirmloggedinpage,
	},
	{
		path: '/projetsPage',
		name: 'projetspage',
		component: projetspage,
	},

	{
		path: '/noAccessPage',
		name: 'noaccesspage',
		component: noaccesspage,
	},
	{
		path: '/allMembersPage',
		name: 'allmemberspage',
		component: allmemberspage,
	},
	{
		path: '/homePage',
		name: 'homepage',
		component: homepage,
	},
	{
		path: '/',
		name: 'homepage_alt',
		component: homepage,
	},
	{
		path: '/signuserPage',
		name: 'signuserpage',
		component: signuserpage,
	},
	{
		path: '/loguserPage',
		name: 'loguserpage',
		component: loguserpage,
	},

	{
		path: '/contactFormPage',
		name: 'contactformpage',
		component: contactformpage,
	},
	{
		path: '/cvPage',
		name: 'cvpage',
		component: cvpage,
	},

	{
		path: '/homeblogPage',
		name: 'homeblogpage',
		component: homeblogpage,
	},

	{
		path: '/searchpostPage',
		name: 'searchpostPage',
		component: searchpostpage,
	},
	{
		path: '/writepostPage',
		name: 'writepostPage',
		component: writepostpage,
	},
	{
		path: '/cookiesPage',
		name: 'cookiespage',
		component: cookiespage,
	},
	{
		path: '/apiPage',
		name: 'apipage',
		component: apipage,
	},

	{
		path: '/userstatusPage',
		name: 'userstatusPage',
		component: userstatuspage,
	},

	{
		path: '/confirmContactPage',
		name: 'confirmcontactpage',
		component: confirmcontactpage,
	},

	{
		path: '/confirmSignUpPage',
		name: 'confirmsignuppage',
		component: confirmsignuppage,
	},

	{
		path: '/:pathMatch(.*)*',
		name: 'notfoundpage',
		component: notfoundpage,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
