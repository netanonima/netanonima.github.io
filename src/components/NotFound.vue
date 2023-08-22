<script setup>

</script>

<template>
    <main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div class="text-center">
            <p class="text-base font-semibold text-gray-700">Erreur 404</p>
            <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page absente</h1>
            <p class="mt-6 text-base leading-7 text-gray-600">Désolé, nous ne pouvons pas trouver la page que vous recherchez. </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
            <router-link to="/" class="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-700">
                Retour à l'accueil
            </router-link>
            </div>
        </div>
    </main>
</template>

<style scoped>

</style>
