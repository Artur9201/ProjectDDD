export default {
    name: 'testing-task',
    data () {
        return {
            cardNumber: '',
            comission: 0,
        }
    },
    created () {
        this.percentageEval(0.03, 100)
        this.percentageEval(0.04, 99)
        this.percentageEval(0.10, 20)
        this.percentageEval(0.05, 1000)
    },
    methods: {
      percentageEval(percent, number) {
        console.log(Math.ceil(percent * number))
      }
    },
    filters: {
        cardNumber: (value) => {
            if (!value || value.length < 16) return ''
            value = value.toString().replace(/\s+/g, '')
            return value.substring(0, 4) + ' **** **** ' + value.slice(12)
        }
}
}
