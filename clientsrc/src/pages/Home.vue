<template>
  <div class="home">
    <h1 class="text-light px-0 mx-0">Welcome to Kanban</h1>
  </div>
</template>


<script>
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.home {  background-image: url("https://codeprojects.org/r-xuvP6oiF16nWdJh0CyfeiIiMZrQlyIOgWKpGfLcK0/MW-EC045_comput_ZH_20151224095234.jpg");  background-color: #cccccc; }

.home {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex-grow: 1;
}

h1 {
  text-shadow: 3px 3px black;
  font-size: 5em;
  margin-top: 15%;
 }

</style>