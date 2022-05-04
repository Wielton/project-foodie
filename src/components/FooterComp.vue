<template>
<v-footer
    color="#fd7132"
    padless
    >
    <v-row
        justify="center"
        no-gutters
        >
        <v-btn
            v-for="link in links"
            :key="link"
            color="white"
            text
            rounded
            class="my-2"
        >
        {{ link }}
        </v-btn>
        <v-col
            class="#fd7132 py-4 text-center white--text"
            cols="12"
        >
        {{ new Date().getFullYear() }} — <strong>WieltonWebDev</strong>
        </v-col>
        </v-row>
    </v-footer>
</template>

<script>

export default {
    data: () => ({
        links: [
            'Home',
            'About Us',
            'Team',
            'Services',
            'Blog',
            'Contact Us',
        ],
    }),
}
</script>
