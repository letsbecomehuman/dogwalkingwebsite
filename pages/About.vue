<template>
<div class="container animate__animated animate__fadeIn">
  <div class="row">
    <div class="mx-auto col-md-6">
      <div class="about">
        <h1 class="line-after">About Us</h1>
        <h4 class="mt-4">Best Dog Walkers in Town</h4>
        <p>
          A lot of pet care companies suffer from extremely high turnover and underpaid staff with low morale.
          <b>Big City Dog Walkers is different.</b> As independent walkers, we make sure the people doing the work are the ones getting paid.
          With happy walkers we can ensure your pets are getting the best care possible. 
        </p>
          <div alt="BCDW Wallpaper" class="abt-img vignette-inset" />
        </div>

        <h4 class="mt-5">Our Territory</h4>

        <div class="nested_row coverage_area">
          <div class="col animate__animated animate__fadeInUp ">
            <h5>Brooklyn</h5>
            <ul style="list-style-type: circle">
              <li>Caroll Gardens</li>
              <li>Brooklyn Heights</li>
              <li>Cobble Hill</li>
              <li>Downtown Brooklyn</li>
            </ul>
          </div>
          <div class="col animate__animated animate__fadeInUp ">
            <h5>Manhattan</h5>
            <ul style="list-style-type: circle">
              <li>Lower East Side</li>
              <li>Tribeca</li>
              <li>Nolita</li>
              <li>SOHO</li>
            </ul>
          </div>
        </div>
        <div class="line-after bottom"></div>
        <Socials />
      </div>
    </div>
  </div>
</template>
<script>
export default {


      head: {
        title: "Big City Dog Walkers | About",
        meta: [{
          hid: "description",
          name: "description",
          // currYear - startYear
          content: `"Brooklyn and Manhattan NYC based pet care services for your dogs, cats and other pets.`,
        }, ],
      }
    }

</script>
<style scoped>
.image_grid {
  padding: 20px;
}

.container {
  margin-top: 140px;
  text-align: left;
}

.vignette-inset {
  position: relative;
  height: 400px;
  display: block;
  background-image: url('../assets/brooklyn_dog_walking.jpg');
  background-position: center;
  background-size: cover;
  border-radius: 0px;
}

.coverage_area {
  position: relative;
  height: 400px;
  color:white;
  display: block;
  background-image: url('../assets/coverage_area.png');
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  padding: 20px 10px;

}
.vignette-inset:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: inset 0px 0px 150px black;
  border-radius: 0px;
}

/* removing shadow on hover
for demonstration purposes */


.nested_row {
  margin-top: 20px !important;
}

.line-after {
  overflow: hidden;
}

.line-after::after {
  content: "";
  display: inline-block;
  height: 0.5em;
  vertical-align: bottom;
  width: 100%;
  margin-right: -100%;
  margin-left: 10px;
  border-top: 4px solid #a35663;
  border-radius: 0px;
}

.abt-img {
  width: inherit;
  height: inherit;
  border-radius: 0px;
  height: 400px !important;
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;

}

/* .abt-img:hover {
  animation: swing;
  animation-duration: 2s;
} */
</style>
