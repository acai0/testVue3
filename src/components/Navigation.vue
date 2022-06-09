<template>
  <div id="app">
    <nav class="navbar navbar-expand-md">
      <b-container>
        <b-img
          :src="require('../assets/logoUL.png')"
          style="max-width: 120px"
        />

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <b-nav-item href="/">
                <b-img
                  :src="require('../assets/logo.png')"
                  style="max-width: 120px"
              /></b-nav-item>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item">
              <b-dropdown variant="light" text="Système d'exploitation">
                <b-checkbox
                  :disabled="visibleFields.length == 1 && champ.visible"
                  v-for="champ in showFields"
                  :key="champ.key"
                  v-model="champ.visible"
                >
                  <!-- Affichage du nom des checkbox -->
                  {{ champ.label }}
                </b-checkbox>
              </b-dropdown>
            </li>
            <li class="nav-item">
              <input
                id="myInput"
                type="text"
                class="form-control"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Filtrer par tag, nom de paquet, OS, ..."
              />
            </li>
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </ul>
        </div>
      </b-container>
    </nav>
  </div>
</template>
<script>
// Fonction pour filtrer des noms
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable button").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
export default {
  name: "Header",
  data() {
    return {
      champs: [
        { key: "windows", label: "Windows", visible: false },
        { key: "ubuntu", label: "Ubuntu", visible: false },
        { key: "macos", label: "MacOS", visible: false },
      ],
    };
  },
};
</script>
<style scoped>
nav {
  background-color: #2c3e50 !important;
  height: 50px;
}
.container {
  display: flex;
  align-items: center;
}
</style>
