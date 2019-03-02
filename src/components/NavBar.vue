<template>
    <div id="nav">
      <nav class="nav">
        <router-link :to="{ name: 'home' }">Inicio</router-link> |
        <router-link :to="{ name: 'recetas-online' }">Recetas Online</router-link> |
        <router-link :to="{ name: 'sistema-inventario' }">Sistema Invetario</router-link>
      </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
