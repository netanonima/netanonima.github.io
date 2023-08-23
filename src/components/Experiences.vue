<script setup>

</script>

<template>
  <div class="content-center">
    <ol class="relative border-l border-gray-200 dark:border-gray-700">
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              GoLink SA - Paudex (VD)
            </h3>
            <time class="release-date">
              2021-2024
            </time>
            <p class="text">
              Formation (CFC d'informaticien en développement d'applications). 
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              ORIF - Aigle
            </h3>
            <time class="release-date">
              2020-2021
            </time>
            <p class="text">
              Première année de formation (CFC d'informaticien en développement d'applications). 
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              SwissAgiSan - Aigle
            </h3>
            <time class="release-date">
              2020
            </time>
            <p class="text">
              Stage en tant que développeur d'applications web dans le cadre de ma préformation au sein de l'ORIF d'Aigle.
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              Burri IT - Cernier (NE)
            </h3>
            <time class="release-date">
              2019
            </time>
            <p class="text">
              Stage en tant que développeur d'applications web dans le cadre de ma préformation au sein de l'ORIF de La Chaux-de-Fonds.
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              Manor AG - Marin (NE)
            </h3>
            <time class="release-date">
              2015-2018
            </time>
            <p class="text">
              Collaborateur de vente food dans divers rayons. 
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              Denner AG - divers points de vente
            </h3>
            <time class="release-date">
              2007-2012
            </time>
            <p class="text">
              Adjoint gérant de succursale dans divers points de vente de la riviera vaudoise ainsi qu'à Bienne. 
            </p>
        </li>
        <li class="mb-10 ml-6">
            <span class="circle"/>
            <h3 class="title">
              Coop - divers points de vente
            </h3>
            <time class="release-date">
              1999-2007
            </time>
            <p class="text">
              Apprenti, employé puis responsable de rayon dans divers points de vente des cantons de Vaud et Fribourg. 
            </p>
        </li>
    </ol>
  </div>
</template>

<style scoped>
.circle{
  @apply absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900
}
.title{
  @apply mb-1 text-lg font-semibold text-gray-900 dark:text-white
}
.release-date{
  @apply block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500
}
.text{
  @apply text-base font-normal text-gray-500 dark:text-gray-400
}
</style>
