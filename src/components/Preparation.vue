<template>
  <div class="container">
    <v-layout wrap>

      <v-flex
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-text-field
          v-model="attempts_count"
          type="number"
          min="1"
          label="Количество попыток"
          outlined
        ></v-text-field>
      </v-flex>

      <v-flex
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-switch
          v-model="tips"
          label="Подсказки"
        ></v-switch>
      </v-flex>

      <v-flex
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-btn
          x-large
          block
          color="success"
          @click="change_state(2)"
        >Старт</v-btn>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

const actions = [
    'change_state',
];

export default {
    name: "preparation",
    computed: {
        attempts_count: {
            get() {
                return this.$store.state.cubist.attempts_count;
            },
            set(value) {
                return this.$store.dispatch('recount', value);
            },
        },
        tips: {
            get() {
                return this.$store.state.cubist.tips;
            },
            set(value) {
                return this.$store.dispatch('set_tips', value);
            },
        },
    },
    methods: {
        ...mapActions(actions),
    },
};
</script>
