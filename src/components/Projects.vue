<script setup>
import { ref } from 'vue';

let showModal = ref(false);
let modalImage = ref('');

function showImageInModal(imageSrc) {
  modalImage.value = imageSrc;
  showModal.value = true;
}
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <div class="flex flex-wrap w-full px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img @click="showImageInModal('./../src/assets/projects/noobill.png')" class="rounded-t-lg cursor-pointer" src="./../assets/projects/noobill.png" alt="noobill" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noobill</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application de gestion de facturation, de devis et de clients destiné aux PME actives dans les prestations de services.
            </p>
            <a href="https://noobill.ch/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers noobill
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img @click="showImageInModal('./../src/assets/projects/randoblazer.png')" class="rounded-t-lg cursor-pointer" src="./../assets/projects/randoblazer.png" alt="randoblazer" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Randoblazer</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application web pour comparer les temps de seeds hebdomadaires de la communauté Randoblazer (randomizer du jeu soul blazer sur snes).
            </p>
            <a href="https://randoblazer.com/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers Randoblazer
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img @click="showImageInModal('./../src/assets/projects/blazertracker.png')" class="rounded-t-lg cursor-pointer" src="./../assets/projects/blazertracker.png" alt="blazertracker" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blazer tracker</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application web pour suivre l'avancement dans une partie de randoblazer.
            </p>
            <a href="https://noobill.ch/blazer_tracker/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers Blazer tracker
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img @click="showImageInModal('./../src/assets/projects/timux.png')" class="rounded-t-lg cursor-pointer" src="./../assets/projects/timux.png" alt="timux" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Timux</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Chronomètre (application de bureau) simple utile au speedrun afin de remplacer liveSplit pour les speedrunners sur linux mais également disponible pour les autres systèmes d'exploitation.
            </p>
            <a href="https://github.com/netanonima/timux/releases/tag/v1.0" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers Timux
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showModal" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-center justify-center min-h-screen">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="showModal = false"></div>
      <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all">
        <div class="flex items-center justify-center">
          <img :src="modalImage" alt="Project Image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
