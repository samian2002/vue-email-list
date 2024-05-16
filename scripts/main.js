const app = Vue.createApp({
    data() {
        return {
            emails: []
        };
    },
    methods: {
        generateEmails() {
            this.emails = [];
            const totalEmails = 10;
            for (let i = 0; i < totalEmails; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(response => {
                        this.emails.push(response.data.response);
                    });
            }
        }
    }
}).mount('#app');
