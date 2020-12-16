export default {
    computed: {
        whatsappLink() {
            const url = 'https://wa.me/5493512041979?text=';
            const message = 'Hola, me comunico desde web de La Pampita y quiero solicitar información sobre tus servicios.';
            return `${url}${encodeURI(message)}`
        }
    }
};
