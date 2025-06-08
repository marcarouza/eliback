
// const CONFIG = `production`   
const CONFIG = `development`   

const URL2BASE = CONFIG === 'production' ? 'https://eliazoura.fr/' : 'https://eliback.onrender.com/';

console.log('🚀 -------------------------------------------------🚀')
console.log('🚀 ~ configDevProd.js:7 ~ URL2BASE  ==> ', URL2BASE)
console.log('🚀 -------------------------------------------------🚀')



export const API_BASE_URL = URL2BASE;

