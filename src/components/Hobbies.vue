<script setup>

</script>

<template>
  <div class="flex flex-col items-center mt-10">
    <div class="flex flex-wrap w-full px-4 md:px-0 md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
      <div class="category w-full md:w-1/2 px-2">
        <h3 class="title">
          Centres d'intérêt
        </h3>
        <div>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3">
              <span>Création et écoute de musique</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Films</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Mythologie grecque</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Jeux vidéos</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Lecture</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Bières artisanale</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2">
        <h3 class="title">
          Création musicale
        </h3>
        <div>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3">
              <span>Musique assistée par ordinateur (MAO)</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Ukulele</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Chant</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Djing</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2">
        <h3 class="title">
          Type de films
        </h3>
        <div>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3">
              <span>Science fiction</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Fantasy</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Comédies</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2">
        <h3 class="title">
          Jeux vidéos
        </h3>
        <div>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3">
              <span>Divers jeux 2d en pixel art</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Randoblazer</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Minecraft</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="category w-full md:w-1/2 px-2">
        <h3 class="title">
          Lecture
        </h3>
        <div>
          <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400">
            <li class="flex items-center space-x-3">
              <span>Science fiction</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Horreur</span>
            </li>
            <li class="flex items-center space-x-3">
              <span>Fantasy</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>
.title {
  @apply mb-3 text-2xl font-medium text-gray-700 dark:text-white;
}
.category{
  @apply mb-7;
}
</style>
