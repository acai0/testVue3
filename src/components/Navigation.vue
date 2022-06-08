<template>
  <div>
    <b-navbar class="nav">
      <b-container>
        <b-navbar-brand>
          <b-img
            :src="require('../assets/logoUL.png')"
            style="max-width: 120px"
          />
        </b-navbar-brand>

        <b-navbar-nav>
          <b-nav-item href="/">
            <b-img
              :src="require('../assets/logo.png')"
              style="max-width: 120px"
          /></b-nav-item>
        </b-navbar-nav>

        <b-col md="3" class="position-absolute bottom end-0">
          <div class="input-group mb-1">
            <input
              id="myInput"
              type="text"
              class="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              placeholder="Filtrer par tag, nom de paquet, OS, ..."
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">
                <i class="bi bi-search"></i>
              </span>
            </div>
          </div>
        </b-col>

        <b-col md="8" class="position-absolute bottom end-0">
          <b-dropdown text="Système d'exploitation">
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
        </b-col>
      </b-container>
    </b-navbar>
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
};
</script>
<style scoped>
.nav {
  background-color: #2c3e50 !important;
  height: 50px;
}
.container {
  display: flex;
  align-items: center;
}
</style>
