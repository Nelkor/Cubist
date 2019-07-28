<template>
  <div class="container">
    <v-layout wrap>

      <v-flex
        md6 offset-md3
        sm10 offset-sm1
        xs12
        text-center
      >
        <span
          class="grey--text text--lighten-2"
          v-if="tips"
        >{{ less_tip | numbers }}</span>
        <span
          class="grey--text text--lighten-2 mx-5"
          v-if="tips"
        >&lt;</span>
        <span class="headline">{{ riddle | numbers }}</span>
        <span
          class="grey--text text--lighten-2 mx-5"
          v-if="tips"
        >&lt;</span>
        <span
          class="grey--text text--lighten-2"
          v-if="tips"
        >{{ greater_tip | numbers }}</span>
      </v-flex>

      <v-flex
        class="mt-4"
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-text-field
          v-model="answer"
          type="number"
          solo
          autofocus
          @keydown.enter="enter"
        ></v-text-field>
      </v-flex>

      <v-flex
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-progress-linear :value="part"></v-progress-linear>
      </v-flex>

      <v-flex
        class="mt-4"
        md6 offset-md3
        sm10 offset-sm1
        xs12
      >
        <v-btn
          block
          @click="clear"
        >Заново</v-btn>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';

    const getters = [
        'tips',
        'part',
        'riddle',
        'less_tip',
        'greater_tip',
    ];

    const actions = [
        'to_answer',
        'start',
        'clear',
    ];

    export default {
        name: "gameplay",
        data: () => ({
            answer: null,
        }),
        computed: {
            ...mapGetters(getters),
        },
        methods: {
            ...mapActions(actions),
            enter() {
                this.to_answer(+this.answer);
                this.answer = null;
            },
        },
        mounted() {
            this.start();
        },
    };
</script>
