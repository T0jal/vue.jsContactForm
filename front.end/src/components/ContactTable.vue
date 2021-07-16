<template>
<div class="overflow-x-auto">
        <div class=" flex items-center justify-center font-sans overflow-hidden">
            <div class="w-full lg:w-1/3">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead>
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th class="py-3 px-6 text-center">Name</th>
                                <th class="py-3 px-6 text-center">Phone Number</th>
                                <th class="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light " v-for="contact in contacts" :key="contact.id.value">
                            <tr class="border-b border-gray-200 hover:bg-gray-100">
                                <td class="py-3 text-center whitespace-nowrap">
                                    <div class="flex item-center justify-center">
                                        <span class="font-medium ">{{contact.name}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        <span>{{contact.phone_number}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <div @click="updateOne(contact.id)" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div @click="deleteOne(contact.id)" class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {getAllContacts, getContactById, deleteContact} from '../services/contact.js'

export default {
    data(){
        return {
            contacts      : [],

            id            : '',
            name          : '',
            phone_number  : '',
        }
    },
    async mounted(){
        this.contacts = await getAllContacts()
    },

    async created() {
        window.Event.$on('update-table', async () => {
    
            this.contacts = await getAllContacts()
    
        })
    },

    methods:{
        async updateOne(id) {
            let updateContact = await getContactById(id)
            window.Event.$emit("update-contact", updateContact)
            console.log(updateContact)
        },

        async deleteOne (id) {
            if (confirm('Are you sure you want to delete this contact?')) {
                await deleteContact(id)
                window.Event.$emit("update-table")
            }
        },
    }
}
</script>


<style scoped>

</style>