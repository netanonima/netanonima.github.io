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
          <img class="rounded-t-lg" src="./../assets/projects/share-your-quizz.png" alt="share-your-quizz" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Share your quizz</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application multilingue open-source de quiz en ligne permettant de créer et de partager des quiz avec ses amis/étudiants/collègues aussi bien en ligne qu'en présentiel.
            </p>
            <a href="https://share-your-quizz.ch/fr/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers Share-your-quizz
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <a href="https://github.com/netanonima/share_your_quizz" target="_blank" class="inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers le repo
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg" src="./../assets/projects/swiss-bill-maker.png" alt="swiss bill maker" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Swiss bill maker</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application simple pour générer des swiss factures selon les normes de six-group.
            </p>
            <a href="https://noobill.ch/SwissBillMaker/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers Swiss bill maker
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <a href="https://github.com/netanonima/swiss-bill-maker/" target="_blank" class="inline-flex items-center ml-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers le repo
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg" src="./../assets/projects/randoblazer.png" alt="randoblazer" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Randoblazer</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application web pour comparer les temps de seeds hebdomadaires de la communauté Randoblazer (randomizer du jeu soul blazer sur snes).
            </p>
            <a href="https://randoblazer.com/weekly/" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
          <img class="rounded-t-lg" src="./../assets/projects/blazertracker.png" alt="blazertracker" />
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
          <img class="rounded-t-lg" src="./../assets/projects/timux.png" alt="timux" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Timux</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Chronomètre (application de bureau) simple utile au speedrun afin de remplacer liveSplit pour les speedrunners sur linux mais également disponible pour les autres systèmes d'exploitation.
            </p>
            <a href="https://github.com/netanonima/timux/releases/tag/v1.0" target="_blank" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Vers le repo
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2 mb-10">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img class="rounded-t-lg" src="./../assets/projects/noobill.png" alt="noobill" />
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noobill</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 h-32">
              Application de gestion de facturation, de devis et de clients destiné aux PME actives dans les prestations de services.<br><br>
              Plus maintenu depuis 2020.
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
    </div>
  </div>

</template>

<style scoped>

</style>
