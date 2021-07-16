<template>
  <div id="app">
    <contact-form>

    </contact-form>
    <contact-table >

    </contact-table>
  </div>
</template>

<script>
import ContactForm from './components/ContactForm.vue'
import ContactTable from './components/ContactTable.vue'

export default {
  name: 'App',
  components: {
    "contact-form" : ContactForm,
    "contact-table" : ContactTable,
  }
}
</script>

<style>
body{
  background-color: darkslategrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
