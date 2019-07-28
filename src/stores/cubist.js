const stages = {
    1: 'preparation',
    2: 'countdown',
    3: 'gameplay',
    4: 'result-board',
};

export default {
    state: {
        stage: stages[1],
        attempts_count: 10,
        tips: true,
        answers: [],
        riddles: [],
        current_riddle: 0,
        start_time: 0,
        end_time: 0,
    },
    actions: {
        change_state: (ctx, value) => {
            if ( ! stages[value]) return;

            ctx.commit('change_state', stages[value]);
        },
        recount: (ctx, value) => {
            value = +value | 0;

            if (value < 1) value = 1;
            if (value > 1000) value = 1000;

            ctx.commit('attempts_recount', value);
        },
        set_tips: (ctx, value) => ctx.commit('set_tips', value),
        start: ctx => ctx.commit('start'),
        clear: ctx => ctx.commit('clear'),
        generate: ctx => ctx.commit('generate'),
        to_answer: (ctx, value) => ctx.commit('to_answer', value),
    },
    mutations: {
        change_state: (state, value) => state.stage = value,
        attempts_recount: (state, value) => state.attempts_count = value,
        set_tips: (state, value) => state.tips = !! value,
        start: state => state.start_time = Date.now(),
        clear: state => {
            state.stage = stages[1];
            state.answers = [];
        },
        generate: state => {
            state.riddles = new Array(state.attempts_count)
                .fill(null)
                .map(() => (Math.random() * 90 | 0) + 10);

            state.current_riddle = state.riddles.pop();
        },
        to_answer: (state, value) => {
            const answer = {
                question: state.current_riddle,
                result: value,
            };

            state.answers.push(answer);

            if ( ! state.riddles.length) {
                state.end_time = Date.now();
                state.stage = stages[4];

                return;
            }

            state.current_riddle = state.riddles.pop();
        },
    },
    getters: {
        tips: state => state.tips,
        stage: state => state.stage,
        riddle: state => state.current_riddle ** 3,
        less_tip: state => {
            let floor = (state.current_riddle / 10 | 0) * 10;

            if (floor == state.current_riddle) floor -= 10;

            return floor ** 3;
        },
        greater_tip: state => {
            let ceil = Math.ceil(state.current_riddle / 10) * 10;

            if (ceil == state.current_riddle) ceil += 10;

            return ceil ** 3;
        },
        part: state => {
            const out = state.attempts_count - state.riddles.length;

            return (out / state.attempts_count) * 100 | 0;
        },
        session_time: state => (state.end_time - state.start_time) / 1e3 | 0,
        answers: state => state.answers,
    },
};
