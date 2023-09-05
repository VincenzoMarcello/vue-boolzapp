const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      // # INIZIALIZZO UN CONTATORE
      activeContact: 0,
      // # INIZIALIZZO UNA STRINGA VUOTA
      newMessage: "",
      // # COLLEGAMENTO ALLA BARRA SEARCH
      searchText: "",
    };
  },

  // ! METODI
  methods: {
    // # METODO CHE RENDE IL CONTATORE UGUALE ALL'INDEX
    selectContact(index) {
      this.activeContact = index;
    },

    // # METODO CHE PUSHA UN NUOVO MESSAGGIO NELLA CHAT
    // ? HA UN CONTROLLO CHE IMPEDISCE DI PUSHARE MESSAGGI VUOTI
    // ? DOPO AVER INVIATO UN MESSAGGIO L'INPUT SI SVUOTA
    // ? HA UNA TIMING FUNCTION CHE MANDA UN MESSAGGIO DOPO 1S
    submitNewMessage() {
      if (this.newMessage != "") {
        const newMessage = {
          date: new Date().toLocaleString(),
          message: this.newMessage,
          status: "sent",
        };

        this.contacts[this.activeContact].messages.push(newMessage);
        this.newMessage = "";
      }

      setTimeout(() => {
        const receivedMessage = {
          date: new Date().toLocaleString(),
          message: "ok",
          status: "received",
        };

        this.contacts[this.activeContact].messages.push(receivedMessage);
      }, 1000);
    },

    // # METODO CHE FILTRA I NOMI NELLA BARRA DI RICERCA
    // ? FACCIAMO UN FOR PER SCORRERE I CONTATTI NELL'ARRAY DI CONTATTI
    // ? METTIAMO UN CONTROLLO TRAMITE IL COLLEGAMENTO FATTO CON L'INPUT searchText
    // ? SE IL CONTATTO INCLUDE QUELLO SCRITTO NEL'INPUT searchText ALLORA visible SARA true
    // ? AlTRIMENTI SARA' false E QUINDI NON SI VEDRANNO
    // ? AGGIUNGIAMO UN CONTROLLO PER FARSI CHE QUANDO SCRIVIAMO ANCHE CON LETTERA MINUSCOLA
    // ? FUNZIONI TUTTO CORRETTAMENTE QUINDI AGGIUNGIAMO toLowerCase()
    searchContacts() {
      for (contact of this.contacts) {
        if (
          contact.name.toLowerCase().includes(this.searchText.toLowerCase())
        ) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      }
    },
  },

  // ! CREATED
  created() {
    console.log(contacts);
  },
}).mount("#app");
