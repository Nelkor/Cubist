<template>
  <div class="container">
    <v-layout justify-center>
      <h1 class="display-4">{{ counter }}</h1>
    </v-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const actions = [
    'change_state',
    'generate',
];

export default {
    name: "countdown",
    data: () => ({
        counter: 3,
    }),
    methods: {
        ...mapActions(actions),
    },
    mounted() {
        this.generate();

        const delay = 1e3;

        const on_timeout = () => {
            if ( ! --this.counter) {
                this.change_state(3);
            } else {
                setTimeout(on_timeout, delay);
            }
        };

        setTimeout(on_timeout, delay);
    },
};
</script>
