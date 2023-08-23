<script setup>

</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <div class="w-full px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <ol class="relative md:border-l border-gray-200 dark:border-gray-700">
        <div class="content-center">
          <ol class="relative border-l border-gray-200 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                EPSIC - Lausanne
              </h3>
              <time class="release-date">
                2020-2024
              </time>
              <p class="text">
                Cours professionnels en vue de l'obtention du CFC d'informaticien en développement d'applications.
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                HEG (HE-arc Gestion) - Neuchâtel
              </h3>
              <time class="release-date">
                2011-2014
              </time>
              <p class="text">
                Formation d'économiste d'entreprise avec spécialisation en supply chain management.
                Sans obtention du diplôme (bachelor).
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                MPM - Lausanne
              </h3>
              <time class="release-date">
                2005-2006
              </time>
              <p class="text">
                Cours préparatoire et obtention du brevet fédéral de spécialiste du commerce de détail.
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                MPM - Lausanne
              </h3>
              <time class="release-date">
                2005-2006
              </time>
              <p class="text">
                Cours préparatoire et obtention du cours de formation pour formateurs en entreprise (CFFE) anciennement cours de maitre d'apprentissage (CMA).
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                EPCL - Lausanne
              </h3>
              <time class="release-date">
                1999-2002
              </time>
              <p class="text">
                Cours professionnels et obtention du CFC de gestionnaire de vente (actuel gestionnaire du commerce de détail) en alimentation générale.
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                Institut Duployé
              </h3>
              <time class="release-date">
                1998
              </time>
              <p class="text">
                Cours parascolaires et obtention du certificat en correspondance et dactylographie de l'instutit Duployé.
              </p>
            </li>
            <li class="mb-10 ml-6">
              <span class="circle"/>
              <h3 class="title">
                Scolarité obligatoire - Vevey
              </h3>
              <time class="release-date">
                1990-1999
              </time>
              <p class="text">
                Cours professionnels et obtention du CFC de gestionnaire de vente (actuel gestionnaire du commerce de détail) en alimentation générale.
              </p>
            </li>
          </ol>
        </div>
      </ol>
    </div>
  </div>
</template>

<style scoped>
.circle {
  @apply absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900 md:block;
}
.title {
  @apply mb-2 text-2xl font-medium text-gray-700 dark:text-white;
}
.release-date {
  @apply block mb-2 text-lg font-light text-gray-500 dark:text-gray-500;
}
.text {
  @apply text-base font-normal text-gray-600 dark:text-gray-400;
}
</style>
