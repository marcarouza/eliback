import {createRouter, createWebHistory} from 'vue-router';
// Importation des composants
import allmemberspage from '@/views/AllMembersPage.vue';
import apipage from '@/views/ApiPage.vue';
import confirmcontactpage from '@/views/ConfirmContactPage.vue';
import confirmloggedinpage from '@/views/ConfirmLoggedInPage.vue';
import confirmsignuppage from '@/views/ConfirmSignUpPage.vue';
import contactformpage from '@/views/ContactFormPage.vue';
import cookiespage from '@/views/CookiesPage.vue';
import cvpage from '@/views/CvPage.vue';
import homeblogpage from '@/views/HomeBlogPage.vue';
import homepage from '@/views/HomePage.vue';
import loguserpage from '@/views/LogUserPage.vue';
import noaccesspage from '@/views/NoAccessPage.vue';
import notfoundpage from '@/views/NotFoundPage.vue';
import projetspage from '@/views/ProjetsPage.vue';
import searchpostpage from '@/views/SearchPostPage.vue';
import signuserpage from '@/views/SignUserPage.vue';
import userstatuspage from '@/views/UserStatusPage.vue';
import writepostpage from '@/views/WritePostPage.vue';
import rgpdpage from '@/views/CguRgpdPage.vue';
import postdetailpage from '@/views/PostDetailPage.vue';
import passmodifypage from '@/views/PassModifyPage.vue';
import infoagentpage from '@/views/InfoAgentPage.vue';

const routes = [
	{
		path: '/homePage',
		alias: '/',
		name: 'homepage',
		component: homepage,
		meta: {showChatBox: true},
	},
	{
		path: '/infoagentPage',
		name: 'infoagentpage',
		component: infoagentpage,
	},

	{
		path: '/passmodifyPage',
		name: 'passmodifypage',
		component: passmodifypage,
	},
	{
		path: '/posts/:id',
		name: 'postdetailpage',
		component: postdetailpage,
	},
	{
		path: '/rgpdPage',
		name: 'rgpdpage',
		component: rgpdpage,
	},
	{
		path: '/confirmloggedinPage',
		name: 'confirmloggedinpage',
		component: confirmloggedinpage,
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
	},
	{
		path: '/allMembersPage',
		name: 'allmemberspage',
		component: allmemberspage,
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
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notfoundpage',
		component: notfoundpage,
		meta: {showChatBox: false},
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
