//
import {createRouter, createWebHistory} from 'vue-router';
//
import homepage from '../views/HomePage.vue';
import cvpage from '../views/CvPage.vue';
import projetspage from '../views/ProjetsPage.vue';
import contactpage from '../views/ContactPage.vue';
import signuserpage from '../views/SignUserPage.vue';
import loguserpage from '../views/LogUserPage.vue';
import confirmuserpage from '../views/ConfirmUserPage.vue';
import homeblog from '../views/HomeBlog.vue';
import searchpostpage from '../views/SearchPostPage.vue';
import writepostpage from '../views/WritePostPage.vue';
import cookiespage from '../views/CookiesPage.vue';
import apipage from '../views/ApiPage.vue';
import userstatuspage from '../views/UserStatusPage.vue';
import notfoundpage from '../views/NotFoundPage.vue';
import ConfirmUserPage from '../views/ConfirmUserPage.vue';
import confirmcontactpage from '../views/ConfirmContactPage.vue';

const routes = [
	{
		path: '/',
		name: 'HomePage',
		component: homepage,
	},
	{
		path: '/sign_user',
		name: 'SignUserPage',
		component: signuserpage,
	},
	{
		path: '/log_user',
		name: 'LogUserPage',
		component: loguserpage,
	},
	{
		path: '/projets',
		name: 'ProjetsPage',
		component: projetspage,
	},
	{
		path: '/contact',
		name: 'ContactPage',
		component: contactpage,
	},
	{
		path: '/cv',
		name: 'CvPage',
		component: cvpage,
	},
	{
		path: '/confirm_user',
		name: 'ConfirmUserPage',
		component: confirmuserpage,
	},

	{
		path: '/homeblog',
		name: 'homeblog',
		component: homeblog,
	},

	{
		path: '/searchpostpage',
		name: 'searchpostpage',
		component: searchpostpage,
	},
	{
		path: '/writepostpage',
		name: 'writepostpage',
		component: writepostpage,
	},
	{
		path: '/cookies',
		name: 'cookiespage',
		component: cookiespage,
	},
	{
		path: '/api',
		name: 'apipage',
		component: apipage,
	},

	{
		path: '/userstatus',
		name: 'userstatuspage',
		component: userstatuspage,
	},

	{
		path: '/confirm_contact',
		name: 'ConfirmContactPage',
		component: confirmcontactpage,
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
