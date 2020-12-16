export default {
    data() {
        return {
            contacts: [
                {
                    icon: 'fab fa-whatsapp-square',
                    title: 'Cabañas La Pampita',
                    href: 'whatsappLink'
                },
                {
                    icon: 'fas fa-globe-americas',
                    title: 'Web La Pampita',
                    href: 'http://www.lapampita.com/'
                },
                {
                    icon: 'fab fa-instagram-square',
                    title: '@lapmapitavla',
                    href: 'https://www.instagram.com/lapampitavla/'
                },
                {
                    icon: 'fab fa-facebook-square',
                    title: 'Cabañas La Pampita',
                    href: 'https://es-la.facebook.com/cabanas.lapampita'
                },
                {
                    icon: 'fas fa-envelope-square',
                    title: 'info@lapampita.com',
                    href: 'mailto:info@lapampita.com'
                },
            ]
        } 
    },
    computed: {
        whatsappLink() {
            const url = 'https://wa.me/5493512041979?text=';
            const message = 'Hola, me comunico desde la web La Pampita y quiero solicitar información sobre las cabañas.';
            return `${url}${encodeURI(message)}`;
        }
    }
};
