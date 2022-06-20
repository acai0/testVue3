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
                <!--<div v-for="grpack in grpacks" :key="grpack.id"> -->
                <!-- <div v-for="(grpack, index) in grpack.packages" :key="index"> -->
                <b-form-checkbox id="windows">
                  <!-- Affichage du nom des checkbox -->
                  <!-- {{ grpack.os }} -->
                  Windows
                </b-form-checkbox>
                <b-form-checkbox id="ubuntu"> Ubuntu/ Debian </b-form-checkbox>
                <b-form-checkbox id="macos"> MacOs</b-form-checkbox>
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
    var unicode = event.charCode ? event.charCode : event.keyCode;
    if (unicode == 27) {
      $(this).val("");
    }
    var searchKey = $(this).val().toLowerCase();
    $(".accordion-button").each(function () {
      var cellText = $(this).text().toLowerCase();

      if (cellText.indexOf(searchKey) >= 0) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
        $(".accordion-body.in").collapse("hide");
      }
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
