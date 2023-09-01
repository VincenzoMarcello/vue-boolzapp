const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts,
      message: "casa",
    };
  },

  created() {
    console.log(contacts);
  },
}).mount("#app");
