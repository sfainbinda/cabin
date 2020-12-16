export default {
    computed: {
      whatsappLink () {
        const url = 'https://wa.me/5493512041979?text='
        const message =
          'Hola, me comunico desde la web de La Pampita y quiero solicitar información.'
  
        return `${url}${encodeURI(message)}`
      }
    }
  };