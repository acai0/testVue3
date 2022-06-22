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
                <b-form-checkbox v-model="checkedW">
                  <!-- Affichage du nom des checkbox -->
                  <!-- {{ grpack.os }} -->
                  Windows
                </b-form-checkbox>
                <b-form-checkbox v-model="checkedU">
                  Ubuntu/ Debian
                </b-form-checkbox>
                <b-form-checkbox v-model="checkedM"> MacOs</b-form-checkbox>
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
// Filtrer button
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
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

// Filtrage accordion body
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var searchKey = $(this).val().toLowerCase();
    $(".accordion-body").each(function () {
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
/*
$(document).ready(function(){
  $(".checkbox").attr("checkedW",false).click(function(){
    if
  })
})
*/

export default {
  name: "Header",
  data() {
    return {
      checkedW: true,
      checkedU: true,
      checkedM: true,
    };
  },
  methods: {
    /*
    hide() {
      if ((this.checked = false)) {

      } */
    /*
      this.checkedW = !this.checkedW;
      this.checkedU = !this.checkedU;
      this.checkedM = !this.checkedM;
      
    },*/
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
