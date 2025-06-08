import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants
import ApiPage from '../views/ApiPage.vue';
import AllMembersPage from '../views/AllMembersPage.vue';
import CguRgpdPage from '../views/CguRgpdPage.vue';
import ChatRoom from '../components/ChatRoom.vue';
import ConfirmContactPage from '../views/ConfirmContactPage.vue';
import ConfirmLoggedInPage from '../views/ConfirmLoggedInPage.vue';
import ConfirmSignUpPage from '../views/ConfirmSignUpPage.vue';
import ContactFormPage from '../views/ContactFormPage.vue';
import CookiesPage from '../views/CookiesPage.vue';
import CvPage from '../views/CvPage.vue';
import HomeBlogPage from '../views/HomeBlogPage.vue';
import HomePage from '../views/HomePage.vue';
import InfoAgentPage from '../views/InfoAgentPage.vue';
import LogUserPage from '../views/LogUserPage.vue';
import NoAccessPage from '../views/NoAccessPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import PassModifyPage from '../views/PassModifyPage.vue';
import PostDetailPage from '../views/PostDetailPage.vue';
import ProjetsPage from '../views/ProjetsPage.vue';
import SearchPostPage from '../views/SearchPostPage.vue';
import SignUserPage from '../views/SignUserPage.vue';
import UserStatusPage from '../views/UserStatusPage.vue';
import WordCounter from '../components/WordCounter.vue';
import WritePostPage from '../views/WritePostPage.vue';








const routes = [
	{
		path: '/allMembersPage',
		name: 'allMembersPage',
		component: AllMembersPage,
	},
	{
		path: '/apiPage',
		name: 'apiPage',
		component: ApiPage,
		meta: {showChatBox: false},
	},
	{
		path: '/chatroom',
		name: 'chatRoom',
		component: ChatRoom,
		meta: {showChatBox: false},
	},
	{
		path: '/confirmContactPage',
		name: 'confirmContactPage',
		component: ConfirmContactPage,
	},
	{
		path: '/confirmloggedinPage',
		name: 'confirmLoggedInPage',
		component: ConfirmLoggedInPage,
		meta: {showChatBox: false},
	},
	{
		path: '/confirmSignUpPage',
		name: 'confirmSignUpPage',
		component: ConfirmSignUpPage,
		meta: {showChatBox: false},
	},
	{
		path: '/contactFormPage',
		name: 'contactFormPage',
		component: ContactFormPage,
	},
	{
		path: '/cookiesPage',
		name: 'cookiesPage',
		component: CookiesPage,
	},
	{
		path: '/cvPage',
		name: 'cvPage',
		component: CvPage,
	},
	{
		path: '/homePage',
		alias: '/',
		name: 'homePage',
		component: HomePage,
		meta: {showChatBox: true},
	},
	{
		path: '/homeblogPage',
		name: 'homeBlogPage',
		component: HomeBlogPage,
	},
	{
		path: '/infoagentPage',
		name: 'infoAgentPage',
		component: InfoAgentPage,
	},
	{
		path: '/loguserPage',
		name: 'logUserPage',
		component: LogUserPage,
		meta: {showChatBox: false},
	},
	{
		path: '/noAccessPage',
		name: 'noAccessPage',
		component: NoAccessPage,
		meta: {showChatBox: false},
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notFoundPage',
		component: NotFoundPage,
		meta: {showChatBox: false},
	},
	{
		path: '/passmodifyPage',
		name: 'passModifyPage',
		component: PassModifyPage,
	},
	{
		path: '/posts/:id',
		name: 'postDetailPage',
		component: PostDetailPage,
	},
	{
		path: '/projetsPage',
		name: 'projetsPage',
		component: ProjetsPage,
	},
	{
		path: '/rgpdPage',
		name: 'rgpdPage',
		component: CguRgpdPage,
	},
	{
		path: '/searchpostPage',
		name: 'searchPostPage',
		component: SearchPostPage,
	},
	{
		path: '/signPage',
		name: 'signUserPage',
		component: SignUserPage,
	},
	{
		path: '/userstatusPage',
		name: 'userStatusPage',
		component: UserStatusPage,
	},
	{
		path: '/wordcounter',
		name: 'wordCounter',
		component: WordCounter,
		meta: {showChatBox: false},
	},
	{
		path: '/writepostPage',
		name: 'writePostPage',
		component: WritePostPage,
	},
];


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});


export default router;
export {routes};