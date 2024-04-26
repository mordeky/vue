export default {
    methods: {
        greet(name) {
            return `${this.greeting}, ${name}!`;
        }
    },
    data() {
        return {greeting: 'Hello'}
    },
    mounted() {
        console.log('Greeter mixin mounted hook')
    }
}
