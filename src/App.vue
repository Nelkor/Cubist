<template>
  <v-app>

    <v-content class="mt-10">
      <component :is="stage" />
    </v-content>

  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

import Preparation from './components/Preparation';
import Countdown from './components/Countdown';
import Gameplay from './components/Gameplay';
import ResultBoard from './components/ResultBoard';

const getters = [
    'stage',
];

export default {
  name: 'App',
  components: {
      Preparation,
      Countdown,
      Gameplay,
      ResultBoard,
  },
  computed: {
      ...mapGetters(getters),
  },
};
</script>
