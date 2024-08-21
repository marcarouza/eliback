import {createRouter, createWebHistory} from 'vue-router';
// Importation des composants
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
import rgpdpage from '../views/CguRgpdPage.vue';
import postdetailpage from '../views/PostDetailPage.vue';
import passmodifypage from '../views/PassModifyPage.vue';

const routes = [
	{
		path: '/passmodifyPage',
		name: 'passmodifypage',
		component: passmodifypage,
		meta: {showChatBox: true},
	},
	{
		path: '/posts/:id',
		name: 'postdetailpage',
		component: postdetailpage,
		meta: {showChatBox: true},
	},
	{
		path: '/rgpdPage',
		name: 'rgpdpage',
		component: rgpdpage,
		meta: {showChatBox: true},
	},
	{
		path: '/confirmloggedinPage',
		name: 'confirmloggedinpage',
		component: confirmloggedinpage,
		meta: {requiresAuth: true},
		meta: {showChatBox: false},
	},
	{
		path: '/projetsPage',
		name: 'projetspage',
		component: projetspage,
		// meta: {showChatBox: true},
	},
	{
		path: '/noAccessPage',
		name: 'noaccesspage',
		component: noaccesspage,
		// meta: {showChatBox: true},
	},
	{
		path: '/allMembersPage',
		name: 'allmemberspage',
		component: allmemberspage,
		meta: {requiresAuth: true},
		// meta: {showChatBox: true},
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
		// meta: {showChatBox: true},
	},
	{
		path: '/signuserPage',
		name: 'signuserpage',
		component: signuserpage,
		// meta: {showChatBox: true},
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
		// meta: {showChatBox: true},
	},
	{
		path: '/cvPage',
		name: 'cvpage',
		component: cvpage,
		// meta: {showChatBox: true},
	},
	{
		path: '/homeblogPage',
		name: 'homeblogpage',
		component: homeblogpage,
		meta: {requiresAuth: true},
		// meta: {showChatBox: true},
	},
	{
		path: '/searchpostPage',
		name: 'searchpostPage',
		component: searchpostpage,
		// meta: {showChatBox: true},
	},
	{
		path: '/writepostPage',
		name: 'writepostPage',
		component: writepostpage,
		// meta: {showChatBox: true},
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
		meta: {requiresAuth: true},
		// meta: {showChatBox: true},
	},
	{
		path: '/confirmContactPage',
		name: 'confirmcontactpage',
		component: confirmcontactpage,
		// meta: {showChatBox: true},
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

// Guard global pour gérer les accès en fonction de l'authentification
// router.beforeEach((to, from, next) => {
// 	const localUser = JSON.parse(localStorage.getItem('localUser')); // Vérifier si localUser existe dans localStorage
// 	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth); // Vérifier si la route nécessite une authentification

// 	// Condition 1 : Si l'utilisateur est connecté et essaie d'accéder à la page de connexion

// 	if (
// 		localUser &&
// 		(to.name === 'loguserpage' || to.path === '/loguserPage')
// 	) {
// 		console.log(
// 			'🔄 Redirection vers userstatusPage car utilisateur déjà connecté'
// 		);
// 		return next({name: 'userstatusPage'}); // Redirige vers une page appropriée
// 	}

// 	// Condition 2 : Si la route nécessite une authentification et que l'utilisateur n'est pas connecté
// 	if (requiresAuth && !localUser) {
// 		console.log(
// 			'🔄 Redirection vers noaccessPage car utilisateur non connecté'
// 		);
// 		return next({name: 'noaccesspage'}); // Redirige vers la page d'accès refusé
// 	}

// 	// Permettre la navigation pour toutes les autres situations
// 	next();
// });

export default router;
