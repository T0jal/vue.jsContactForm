<template>
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-6 md:gap-6">
    <div class="col-start-3 col-span-2">
      <form >
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6 ">
            <div class="grid grid-cols-6 gap-6 ">
              
              <div class="col-span-6 sm:col-span-12 text-green-600">
                <h1><b> Contact Form </b></h1>
              </div>

              <input ref="id" v-model="id" name=id type=hidden>

              <div class="col-span-6 sm:col-span-12">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input ref="name" v-model="name" type="text" name="name" id="name" autocomplete="name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-12">
                <label for="phone_number" class="block text-sm font-medium text-gray-700">Phone Number</label>
                <input ref="phone_number" v-model="phone_number" type="text"  name="phone_number" id="phone_number" autocomplete="phone_number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

            </div>
          </div>
          
          <div class="flex item-center justify-center px-4 py-3 bg-gray-50 text-right sm:px-6 flex space-x-4">
            
            <button @click.prevent="clear" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-warning-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Clear
            </button>
            <button @click.prevent="submitOne" type="submit" :style="isFilled" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

</template>

<script>

import {saveContact}  from '../services/contact.js'
import Contact        from '../models/contact.js'

export default {

  data: function(){
    return {
      id            : '',
      name          : '',
      phone_number  : ''


    }
  },
 
  created() {
    window.Event.$on('update-contact', (updateContact) => {

      this.id                = updateContact._id;
      this.name              = updateContact.name;
      this.phone_number      = updateContact.phone_number;
    })
  },
    
  methods: {
    clear : function () {
      this.id             = "";
      this.name           = "";
      this.phone_number   = "";
    },

    submitOne : async function () {
          const newContact = new Contact (
          this.id,
          this.name,
          this.phone_number
      )

      console.log(newContact)
      await saveContact(newContact)
      window.Event.$emit("update-table")
    },
  },

  computed: {
  isFilled() {
    if(this.name != '' && this.phone_number != '')
      return 'display:block'
    else
      return 'display:none'
  }
}
}

</script>

<style scoped>

</style>