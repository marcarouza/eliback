export const routeSitemap = [
	{
		path: '/allMembersPage',
		name: 'allMembersPage',
	},
	{
		path: '/apiPage',
		name: 'apiPage',
	},
	{
		path: '/chatroom',
		name: 'chatRoom',
	},
	{
		path: '/confirmContactPage',
		name: 'confirmContactPage',
	},
	{
		path: '/confirmloggedinPage',
		name: 'confirmLoggedInPage',
	},
	{
		path: '/confirmSignUpPage',
		name: 'confirmSignUpPage',
	},
	{
		path: '/contactFormPage',
		name: 'contactFormPage',
	},
	{
		path: '/cookiesPage',
		name: 'cookiesPage',
	},
	{
		path: '/cvPage',
		name: 'cvPage',
	},
	{
		path: '/homePage',
		alias: '/',
		name: 'homePage',
	},
	{
		path: '/homeblogPage',
		name: 'homeBlogPage',
	},
	{
		path: '/infoagentPage',
		name: 'infoAgentPage',
	},
	{
		path: '/loguserPage',
		name: 'logUserPage',
	},
	{
		path: '/noAccessPage',
		name: 'noAccessPage',
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'notFoundPage',
	},
	{
		path: '/passmodifyPage',
		name: 'passModifyPage',
	},
	{
		path: '/posts/:id',
		name: 'postDetailPage',
	},
	{
		path: '/projetsPage',
		name: 'projetsPage',
	},
	{
		path: '/rgpdPage',
		name: 'rgpdPage',
	},
	{
		path: '/searchpostPage',
		name: 'searchPostPage',
	},
	{
		path: '/signPage',
		name: 'signUserPage',
	},
	{
		path: '/userstatusPage',
		name: 'userStatusPage',
	},
	{
		path: '/wordcounter',
		name: 'wordCounter',
	},
	{
		path: '/writepostPage',
		name: 'writePostPage',
	},
];
export const routeSitemapWithMeta = routeSitemap.map(route => {
   return {
      ...route,
      meta: {
         showChatBox: true,
         ...route.meta,
      },
   };
});