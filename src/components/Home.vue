<script setup>
import moment from 'moment'
</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <div class="w-full px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">

      <div class="mb-4">
        <img class="w-48 h-48 rounded-full drop-shadow-2xl mx-auto" src="./../assets/home/photoCV.png" alt="Rounded avatar">
      </div>

      <div class="text-center border-b pb-12">
        <h1 class="text-4xl font-medium text-gray-700">
          Flavio Bertolini,
          <span class="font-light text-gray-500">
            {{ moment().diff(moment('1983-09-01'), 'years')}} ans
          </span>
        </h1>
        <p class="font-light text-gray-600 mt-3">
          Lausanne, Suisse
        </p>
        <p class="mt-4 text-gray-700">
          Apprenti en 4ème année de développeur d'applications souhaitant s'orienter vers le full stack.
        </p>
        <p class="mt-4 text-gray-700">
          Souhaite trouver un employeur dans une entreprise réalisant des applications web.
        </p>
        <p class="mt-4 text-gray-700">
          Riche d'une expérience de plus de 15 ans dans le commerce de détail dont 5 en tant que cadre, j'ai décidé de me reconvertir dans le développement d'applications car c'était une passion de longue date.
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>
