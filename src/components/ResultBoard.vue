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
          class="headline"
        >Время: {{ time_formed }}, правильно: {{ percents }}%</span>
      </v-flex>

      <v-flex
        class="my-4"
        md6 offset-md3
        sm10 offset-sm1
        xs12
        text-center
      >
        <v-simple-table>
          <thead>
          <tr>
            <th class="text-left">ЗАГАДАНО</th>
            <th class="text-left">ОТВЕТ</th>
          </tr>
          </thead>
          <tbody>
          <tr
            v-for="(a, index) in answers"
            :key="index"
          >
            <td
              class="text-left"
            >{{ a.question }} ** 3 = {{ a.question ** 3 | numbers }}</td>
            <td class="text-left">
              <span
                :class="{
                  'green--text': a.question == a.result,
                  'red--text': a.question != a.result,
                }"
              >{{ a.result }}</span>
            </td>
          </tr>
          </tbody>
        </v-simple-table>
      </v-flex>

      <v-flex
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
    'answers',
    'session_time',
];

const actions = [
    'clear',
];

export default {
    name: "result-board",
    methods: {
        ...mapActions(actions),
    },
    computed: {
        ...mapGetters(getters),
        percents() {
            const right_answers =
                this.answers.filter(a => a.question == a.result);

            const part = right_answers.length / this.answers.length;

            return Math.round(part * 100);
        },
        time_formed() {
            let min = this.session_time / 60 | 0;
            let sec = this.session_time % 60;

            if (min < 10) min = `0${min}`;
            if (sec < 10) sec = `0${sec}`;

            return `${min} м, ${sec} с`;
        },
    },
};
</script>
