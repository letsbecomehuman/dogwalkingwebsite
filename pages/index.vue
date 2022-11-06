<template>
  <b-row style="margin-left: 0; margin-right: 0">
    <b-col md="4">
      <b-img
        src="../assets/bigcitydogwalk.png"
        id="avatar-img"
        alt="Big City Dog Walkers"
      />
    </b-col>

    <b-col md="8">
      <h2 class="intro animate__animated animate__fadeInUp animate__fast">
        <br /><span>Welcome to Big City Dog Walkers</span>.
      </h2>

      <div class="col-md-10 info">
        We offer <b>Complete</b> and <b>Attentive</b> Pet Care for all your
        Canine Friends.
        <br />
        Cats are welcome too.
        <br />
        <div class="buttonsection">
          <b-button
            class="action-btn animate__animated animate__wobble animate__delay-4s animate__fast learnmore"
            to="/about"
          >
            Learn More >
          </b-button>

          <b-button
            class="action-btn"
            href="https://airtable.com/shrOWyEGEJknCN9Yl"
            variant="primary"
            target="_blank"
          >
            Get In Touch
          </b-button>
        </div>
        <!-- .SOCIAL LINKS SECTION -->
        <div
          class="social-icons animate__animated animate__fadeInUp animate__delay-1s"
        >
          <social-link :to="socialLinks.mail">
            <MailIcon />
          </social-link>

          <social-link :to="socialLinks.instagram">
            <InstagramIcon />
          </social-link>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import GithubIcon from "vue-ionicons/dist/logo-github.vue";
import LinkedinIcon from "vue-ionicons/dist/logo-linkedin.vue";
import TwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import FacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import YoutubeIcon from "vue-ionicons/dist/logo-youtube.vue";
import InstagramIcon from "vue-ionicons/dist/logo-instagram.vue";
import MailIcon from "vue-ionicons/dist/md-mail.vue";

export default {
  components: {
    GithubIcon,
    LinkedinIcon,
    TwitterIcon,
    FacebookIcon,
    YoutubeIcon,
    MailIcon,
    InstagramIcon,
  },

  data() {
    return {
      avatar: require("@/assets/avatar-1.webp"),
      // ADD YOUR SOCIAL LINKS HERE 👇
      socialLinks: {
        github: "https://github.com/Yukkuri-Studio/yukkuri-lava",
        youtube: "https://1intan99.my.id/youtube",
        instagram: "https://instagram.com/bigcitydogwalkers",
        mail: "mailto:hello@bigcitydogwalkers.com"
      },
    };
  },

  head: {
    title: "Big City Dog Walkers | Brooklyn & Manhattan Pet Care",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Brooklyn and Manhattan NYC based pet care services for your dogs, cats and other pets.",
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Big City Dog Walkers",
      },
      {
        property: "og:description",
        content:
          "Brookly and Manhattan NYC based pet care services for your dogs, cats and other pets.",
      },
      {
        hid: "og:image",
        name: "og:image",
        content: require(`@/assets/dogwalking.jpeg`)
      },
    ],
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>
