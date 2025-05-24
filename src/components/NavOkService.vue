<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid justify-content-between">
      <!-- Left elements -->
      <div class="d-flex">
        <!-- Brand -->
        <router-link class="navbar-brand" to="/">
          <img class="d-inline-block align-text-top elilogo" src="/pix/logos/eliLogo192x192.png" alt="Eli Azoura" />
        </router-link>
      </div>

      <!-- Center elements -->
      <ul class="navbar-nav flex-row justify-content-center">
        <li class="nav-item me-1 me-lg-1">
          <router-link class="nav-link" to="/cvPage" active-class="active">
            <i class="fas fa-user-circle custom-icon" title="CV" aria-label="CV"></i>
          </router-link>
        </li>
        <li class="nav-item me-1 me-lg-1">
          <router-link class="nav-link" to="/projetsPage" active-class="active">
            <i class="fas fa-code custom-icon" title="PROJETS" aria-label="PROJETS"></i>
          </router-link>
        </li>
        <li class="nav-item me-1 me-lg-1">
          <router-link class="nav-link" to="/contactFormPage" active-class="active">
            <i class="fas fa-paper-plane custom-icon" title="CONTACT" aria-label="CONTACT"></i>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link id="blogLink" to="/homeblogPage" class="nav-link small-caps"
           @click.prevent="navigateToBlog"
            :class="{ active: $route.path === '/homeblogPage' }">
            <i class="fas fa-video custom-icon" title="BLOG" aria-label="BLOG"></i>
          </router-link>
        </li>
      </ul>

      <!-- Right elements -->
      <ul class="navbar-nav flex-row">
        <!-- Example split primary button -->

<!-- TEST NOUVO BOUTON -->
<!-- <div class="btn-group">
  <button type="button" class="btn btn-primary">Action</button>
  <button
    type="button"
    class="btn btn-primary dropdown-toggle dropdown-toggle-split"
    data-mdb-dropdown-init
    data-mdb-ripple-init
    aria-expanded="false"
  >
    <span class="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider" /></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> -->

<!--  -->
        <li class="nav-item  me-lg-1">
          <a class="nav-link d-flex align-items-center" href="#">
            <!-- <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle" height="22"
              alt="User avatar" loading="lazy" /> -->
            <strong class="">Eli</strong>
          </a>
        </li>
        <li class="nav-item dropdown  me-lg-1">
          <a data-mdb-dropdown-init class="nav-link dropdown-toggle hidden-arrow" href="#" id="navbarDropdownUser"
            role="button" aria-expanded="false">
            <i class="fas fa-chevron-circle-down fa-lg"></i>
          </a>
          <ul v-if="userID" class="dropdown-menu dropdown-menu-end dropdown-menu-dark"
            aria-labelledby="navbarDropdownUser">
            <li>
              <router-link class="dropdown-item" to="/userstatusPage" @click.prevent="navigateToPrivate">
                <i class="fas fa-user-circle me-2"></i> Mon compte
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/allMembersPage">
                <i class="fas fa-users me-2"></i> Tous les membres
              </router-link>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a href="#" class="dropdown-item" @click.prevent="logOUTapi">
                <i class="fas fa-sign-out-alt me-2"></i> Déconnexion
              </a>
            </li>
          </ul>

          <!-- Menu for non-logged-in user -->
          <ul v-else class="dropdown-menu dropdown-menu-end dropdown-menu-dark" aria-labelledby="navbarDropdownUser">
            <li>
              <router-link class="dropdown-item" to="/logUserPage">
                <i class="fas fa-sign-in-alt me-2"></i> Connexion
              </router-link>
            </li>
            <li>
              <router-link class="dropdown-item" to="/signPage">
                <i class="fas fa-user-plus me-2"></i> Créer un compte
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- Right elements -->
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { Dropdown, initMDB } from 'mdb-ui-kit';
import { useRouter } from 'vue-router';
import {
  userID,
  userPseudo,
  isLoggedIn,
  userGlobalService,
  checkUserStatus,
  getLocalUser,
  logOUTapi as globalLogOUTapi,
} from '@/services/userGlobalService';


// ✅ Définition des types
const router = useRouter();

const userId = ref(userID);
const userPseudoVal = ref(userPseudo);
const isUserLoggedIn = ref(isLoggedIn);

onMounted(() => {
  initMDB({ Dropdown });
  console.log(
    'NavOkService: userId, userPseudoVal, isUserLoggedIn =>',
    userId.value,
    userPseudoVal.value,
    isUserLoggedIn.value
  );
});


// ✅ Fonctions avec typage
function navigateToBlog() {
  if (isUserLoggedIn.value) {
    router.push({ name: 'homeblogpage' });
  } else {
    router.push({ name: 'noaccesspage' });
  }
}


function navigateToPrivate() {
  if (isUserLoggedIn.value) {
    router.push({ name: 'userstatusPage' });
  } else {
    router.push({ name: 'noaccesspage' });
  }
}

async function logOUTapi(){
  await globalLogOUTapi(router);
}
</script>



<style scoped>
.custom-icon {
  font-size: 1.5rem;
  color: #f8fafc;
  transition: color 0.3s ease;
}

.custom-icon:hover {
  color: #3B82F6;
}

/* Réduire le padding de la barre de navigation */
.navbar {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

/* Ajuster le logo si besoin */
.navbar-brand img {
  height: 30px;
  /* par exemple, réduire la hauteur */
}

/* Réduire le padding des éléments de navigation */
.navbar-nav .nav-link {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}



.connected {
  font-size: 1rem;
  color: rgb(0, 209, 112);
}

.custom-icon {
  font-size: 1.1rem;
  color: #ffffff;
  transition: color 0.3s ease, transform 0.15s ease;
}

.custom-icon:hover {
  font-size: 1.2rem;

  color: #ffffff;

  transform: rotate(15deg);
}

.userMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  gap: 5px;
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.nav-item {
  margin-left: 30px;
  /* margin-right: 5px; */
}

.small-caps {
  font-variant: small-caps;
}

.hello {
  font-size: 1rem;
  color: rgb(255, 255, 255);
  padding-left: 1rem;
}

#blogLink {
  cursor: pointer;
}

.icon-disconnected {
  color: rgb(255, 157, 0);
  font-size: 0.8rem;
}

.account {
  color: #ff2200 !important;
}

/* Style pour le logo */

.userlogged {
  font-size: 0.8rem;
  color: rgb(0, 223, 0);
}

.active {
  font-weight: bold;
}

.elilogo {
  width: 30px;
  height: 30px;
}

/* Styles pour le menu utilisateur */
.user_menu {
  min-width: 50px !important;
  background-color: #212529;
  padding: 0;
  white-space: nowrap;
}

.user_menu_item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 8px 16px;
  color: #fff;
  font-size: 0.8rem;
}

/* Autres styles potentiellement nécessaires */
.navbar .dropdown-toggle.btn {
  padding: 0.2rem 0.5rem;
  margin: 0;
}

.navbar-nav .dropdown-menu {
  position: absolute;
  border-radius: 0 0 0.25rem 0.25rem;
  left: -30px;
  top: 120%;
  border: 0px;
}

.navbar .bi-person {
  font-size: 1.5rem;
}

@media (max-width: 576px) {
  .connected {
    font-size: 0.8rem;
  }

  .navbar-nav .dropdown-menu {
    position: absolute;

    left: -45px;
  }

  .custom-icon {
    font-size: 1rem;
    color: #ffffff;
  }
}

@media (max-width: 430px) {
  .connected {
    font-size: 0.8rem;
  }

  .navGlobal {
    display: flex;
    flex-direction: row !important;
    align-items: center;
  }

  .custom-icon {
    font-size: 1rem;
    color: #ffffff;
  }

  .user_menu_item {
    padding: 5px 8px 8px 8px;
    color: #fff;
    font-size: 0.8rem;
    justify-content: flex-end;
  }

  .user_menu {
    min-width: 100px !important;
    /* width: 50px; */
    background-color: #212529;
    /* white-space: nowrap; */
  }


}
</style>