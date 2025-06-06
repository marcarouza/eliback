import {ref} from 'vue';

export interface Project {
	id: number;
	title: string;
	url: string;
	description: string;
	imageUrl: string;
	tags: string[];
	accentColor: string;
}

export const projectsData = ref<Project[]>([
	{
		id: 1,
		title: 'Céline Azoura',
		url: 'https://celine-azoura.fr',
		description:
			"Site professionnel mettant en avant les services et l'expertise de Céline Azoura.",
		imageUrl: 'https://eliazoura.fr/vitrine/celine-azoura.png',
		tags: [
			'Figma',
			'Angular v18',
			'Node.js v22',
			'Express 4',
			'MongoDB 8',
			'Tailwindcss & DaisyUI',
			'Typescript',
		],
		accentColor: '#1266f1',
	},
	{
		id: 2,
		title: 'LMS Ifocop',
		url: 'https://lms-ifocop.fr',
		description:
			"Plateforme d'apprentissage en ligne pour les étudiants et formateurs de l'Ifocop.",
		imageUrl: 'https://eliazoura.fr/vitrine/lms.png',
		tags: ['Figma', 'Moodle', 'Php', 'MySql'],
		accentColor: '#ff9800',
	},
	{
		id: 3,
		title: 'Eli Azoura',
		url: 'https://eliazoura.fr',
		description:
			'Site personnel présentant mon portfolio et mes compétences de développeur full-stack.',
		imageUrl: 'https://eliazoura.fr/vitrine/elifr.png',
		tags: ['Vue.JS v3','TypeScript' , 'Node.js v22', 'Express 4', 'MongoDB 8', 'MDB 5'],

		accentColor: '#f44336',
	},
	{
		id: 4,
		title: 'Superalloys',
		url: 'https://www.bramisuperalloys.com/',
		description:
			'Site corporate spécialisé dans les alliages et matériaux techniques.',
		imageUrl:
			'https://static.wixstatic.com/media/24c25f_51a939fcd534463582a7a4137f8cfd7e~mv2.jpg/v1/fill/w_1956,h_952,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/24c25f_51a939fcd534463582a7a4137f8cfd7e~mv2.jpg',
		tags: ['WordPress vers Wix'],
		accentColor: '#fbc02d',
	},
	{
		id: 5,
		title: 'Appartements du Louvre',
		url: 'https://www.apartmentsdulouvre.com/',
		description:
			"Site de location d'appartements de luxe situés à proximité du musée du Louvre.",
		imageUrl:
			'https://static.wixstatic.com/media/a55e99_65a86ead4e2746b3ad7fd6e93b1d391bf000.jpg/v1/fill/w_1425,h_756,al_t,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/a55e99_65a86ead4e2746b3ad7fd6e93b1d391bf000.jpg',
		tags: ['Wix'],
		accentColor: '#9c27b0',
	},
	{
		id: 6,
		title: 'Verpal',
		url: 'https://verpal.fr',
		description:
			"Site vitrine pour l'entreprise Verpal, spécialisée dans la création de bijoux faits main.",
		imageUrl:
			'https://verpal.fr/cdn/shop/collections/image-collection-bagues.jpg?v=1684528588&width=1080',
		tags: ['Wix vers Shopify'],
		accentColor: '#00bcd4',
	},
	{
		id: 7,
		title: 'Harry Cover',
		url: 'https://www.harry-cover.co/',
		description:
			'Site vitrine pour Harry Cover, primeur de référence haut de gamme situé à Paris.',
		imageUrl: 'https://eliazoura.fr/vitrine/harrycover.png',
		tags: ['Prestashop vers Wix'],
		accentColor: '#00bcd4',
	},
]);
