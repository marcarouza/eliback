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
import chatroom from '@/components/ChatRoom.vue';


const routes = [
	{
		path: '/homePage',
		alias: '/',
		name: 'homepage',
		component: homepage,
		meta: {showChatBox: false},
	},
	{
		path: '/infoagentPage',
		name: 'infoagentpage',
		component: infoagentpage,
		meta: {showChatBox: false},
	},

	{
		path: '/passmodifyPage',
		name: 'passmodifypage',
		component: passmodifypage,
		meta: {showChatBox: false},
	},
	{
		path: '/posts/:id',
		name: 'postdetailpage',
		component: postdetailpage,
		meta: {showChatBox: false},
	},
	{
		path: '/rgpdPage',
		name: 'rgpdpage',
		component: rgpdpage,
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
	},
	{
		path: '/signPage',
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
		meta: {showChatBox: false},
	},
	{
		path: '/cvPage',
		name: 'cvpage',
		component: cvpage,
		meta: {showChatBox: false},
	},
	{
		path: '/homeblogPage',
		name: 'homeblogpage',
		component: homeblogpage,
		meta: {showChatBox: false},
	},
	{
		path: '/searchpostPage',
		name: 'searchpostPage',
		component: searchpostpage,
		meta: {showChatBox: false},
	},
	{
		path: '/writepostPage',
		name: 'writepostPage',
		component: writepostpage,
		meta: {showChatBox: false},
	},
	{
		path: '/cookiesPage',
		name: 'cookiespage',
		component: cookiespage,
		meta: {showChatBox: false},
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
		meta: {showChatBox: false},
	},
	{
		path: '/confirmContactPage',
		name: 'confirmcontactpage',
		component: confirmcontactpage,
		meta: {showChatBox: false},
	},
	{
		path: '/confirmSignUpPage',
		name: 'confirmsignuppage',
		component: confirmsignuppage,
		meta: {showChatBox: false},
	},
	{
		path: '/chatroom',
		name: 'chatroom',
		component: chatroom,
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
