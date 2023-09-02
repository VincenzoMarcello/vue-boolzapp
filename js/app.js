const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
    };
  },

  created() {
    console.log(contacts);
  },
}).mount("#app");
