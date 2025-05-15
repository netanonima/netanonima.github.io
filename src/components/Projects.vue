<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalImage = ref('')

function showImageInModal(imageSrc) {
  modalImage.value = imageSrc
  showModal.value = true
}

const projects = [
  {
    title: 'Share your quizz',
    image: new URL('./../assets/projects/share-your-quizz.png', import.meta.url).href,
    description: `Application multilingue open-source de quiz en ligne permettant de créer et de partager des quiz avec ses amis/étudiants/collègues aussi bien en ligne qu'en présentiel.`,
    technos: ['Angular', 'Nestjs', 'socketIO', 'typeORM', 'mysql', 'Angular Internationalization (i18n)', 'Material UI'],
    link: 'https://share-your-quizz.ch/fr/',
    repo: 'https://github.com/netanonima/share_your_quizz'
  },
  {
    title: 'Swiss bill maker',
    image: new URL('./../assets/projects/swiss-bill-maker.png', import.meta.url).href,
    description: `Application simple pour générer des swiss factures selon les normes de six-group.`,
    technos: ['Angular', 'nodeJS', 'ExpressJS', 'puppeteer', 'qrcode-svg', 'i18n-iso-countries', 'Material UI'],
    link: 'https://noobill.ch/SwissBillMaker/',
    repo: 'https://github.com/netanonima/swiss-bill-maker/'
  },
  {
    title: 'Randoblazer',
    image: new URL('./../assets/projects/randoblazer.png', import.meta.url).href,
    description: `Application web pour comparer les temps de seeds hebdomadaires de la communauté Randoblazer (randomizer du jeu Soul Blazer sur SNES).`,
    technos: ['PHP', 'SQL', 'mysql', 'bootstrap'],
    link: 'https://randoblazer.com/weekly/'
  },
  {
    title: 'Blazer tracker',
    image: new URL('./../assets/projects/blazertracker.png', import.meta.url).href,
    description: `Application web pour suivre l'avancement dans une partie de Randoblazer.`,
    technos: ['PHP'],
    link: 'https://noobill.ch/blazer_tracker/'
  },
  {
    title: 'Timux',
    image: new URL('./../assets/projects/timux.png', import.meta.url).href,
    description: `Chronomètre (application de bureau) simple utile au speedrun afin de remplacer LiveSplit pour les speedrunners sur Linux mais également disponible pour les autres systèmes d'exploitation.`,
    technos: ['VueJS', 'ElectronJS'],
    repo: 'https://github.com/netanonima/timux/releases/tag/v1.0'
  },
  {
    title: 'Noobill',
    image: new URL('./../assets/projects/noobill.png', import.meta.url).href,
    description: `Application de gestion de facturation, de devis et de clients destinée aux PME actives dans les prestations de services.<br><br><strong>Plus maintenu depuis 2020.</strong>`,
    technos: ['PHP', 'SQL', 'mPDF', 'mysql'],
    link: 'https://noobill.ch/'
  }
]
</script>

<template>
  <!-- Section avec des marges adaptées et un conteneur centré -->
  <section class="py-10">
    <div class="container mx-auto px-4">

      <!-- Grille responsive : 1 colonne (xs) / 2 (sm) / 3 (md) / 4 (xl+) -->
      <div
          class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
      >
        <!-- Carte projet -->
        <article
            v-for="(project, index) in projects"
            :key="index"
            class="flex flex-col bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
        >
          <!-- Image avec ratio et hauteurs adaptées aux breakpoints -->
          <img
              :src="project.image"
              :alt="project.title"
              class="w-full object-cover rounded-t-lg h-48 sm:h-56 md:h-40 lg:h-44 xl:h-52"
              loading="lazy"
          />

          <!-- Contenu -->
          <div class="flex flex-col flex-1 p-5">
            <h5 class="mb-2 font-bold text-lg sm:text-xl">
              {{ project.title }}
            </h5>

            <p
                class="text-gray-700 text-sm sm:text-base mb-4 flex-1"
                v-html="project.description"
            ></p>

            <h6 class="font-semibold mb-2 text-sm sm:text-base">
              Technologies utilisées
            </h6>

            <ul
                class="list-disc list-inside text-gray-600 text-sm sm:text-base mb-4"
            >
              <li v-for="tech in project.technos" :key="tech">{{ tech }}</li>
            </ul>

            <!-- Boutons -->
            <div class="mt-auto flex flex-wrap gap-2">
              <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Vers le projet
                <svg
                    class="w-3.5 h-3.5 ml-2"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                  <path
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                  v-if="project.repo"
                  :href="project.repo"
                  target="_blank"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
              >
                Vers le repo
                <svg
                    class="w-3.5 h-3.5 ml-2"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                  <path
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </article>
        <!-- /Carte projet -->
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Tout est géré par Tailwind, mais vous pouvez ajouter des overrides ici si nécessaire */
</style>