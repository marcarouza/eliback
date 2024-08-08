//
import {createRouter, createWebHistory} from 'vue-router';
//
import homepage from '../views/HomePage.vue';
import cvpage from '../views/CvPage.vue';
//dashboard.render.com/
https: import projetspage from '../views/ProjetsPage.vue';
import contactpage from '../views/ContactPage.vue';
import signuserpage from '../views/SignUserPage.vue';
import loguserpage from '../views/LogUserPage.vue';
import homeblogpage from '../views/HomeBlog.vue';
import searchpostpage from '../views/SearchPostPage.vue';
import writepostpage from '../views/WritePostPage.vue';
import cookiespage from '../views/CookiesPage.vue';
import apipage from '../views/ApiPage.vue';
import userstatuspage from '../views/UserStatusPage.vue';
import notfoundpage from '../views/NotFoundPage.vue';
import confirmsignuppage from '../views/ConfirmSignUpPage.vue';
import confirmcontactpage from '../views/ConfirmContactPage.vue';

const routes = [
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
		path: '/projetsPage',
		name: 'projetspage',
		component: projetspage,
	},
	{
		path: '/contactPage',
		name: 'contactpage',
		component: contactpage,
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
