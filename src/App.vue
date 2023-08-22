<script setup>
import { ref } from 'vue'
import moment from 'moment'
import { useRoute } from 'vue-router'

const route = useRoute();

let showMenu = ref(false);

let toggleMenu = function(){
  showMenu.value = !showMenu.value;
}
let closeMenu = function(){
  showMenu.value = false;
}

var allowedKeys = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  65: 'a',
  66: 'b'
};


let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let konamiCodePosition = 0;

document.addEventListener('keydown', function(e) {
  let key = allowedKeys[e.keyCode];
  let requiredKey = konamiCode[konamiCodePosition];

  if (key == requiredKey) {
    konamiCodePosition++;
    if (konamiCodePosition == konamiCode.length) {
      alert('Konami Code activé!');
      konamiCodePosition = 0;
    }
  } else {
    konamiCodePosition = 0;
  }
});

</script>

<template>
  <div class="navbar">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flavio Bertolini (netanonima)</span>
        <button @click="toggleMenu()" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link @click="closeMenu()" to="/" :class="route.path=='/'?'navbar-selected-link': 'navbar-link'" aria-current="page">Accueil</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/studies" :class="route.path=='/studies'?'navbar-selected-link': 'navbar-link'">Études</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/experiences" :class="route.path=='/experiences'?'navbar-selected-link': 'navbar-link'">Expériences</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/skills" :class="route.path=='/skills'?'navbar-selected-link': 'navbar-link'">Aptitudes</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/projects" :class="route.path=='/projects'?'navbar-selected-link': 'navbar-link'">Projets</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/hobbies" :class="route.path=='/hobbies'?'navbar-selected-link': 'navbar-link'">Hobbies</router-link>
            </li>
            <li>
              <router-link @click="closeMenu()" to="/contact" :class="route.path=='/contact'?'navbar-selected-link': 'navbar-link'">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="view">
    <router-view />
  </div>
  <footer>
    <div class="px-20 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {{ moment().format('YYYY') }} netanonima
        </span>
        <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a href="https://discord.com/users/180023943258701824" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" target="_blank">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="https://github.com/netanonima" class="text-gray-400 hover:text-gray-900 dark:hover:text-white" target="_blank">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
        </div>
      </div>
  </footer>
</template>

<style scoped>
.navbar-selected-link{
  @apply block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500
}
.navbar-link{
  @apply block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent
}
footer{
  @apply mt-8
}
.view{
  @apply px-20
}
</style>
