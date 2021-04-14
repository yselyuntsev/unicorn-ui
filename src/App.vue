<template>
  <u-app>
    <u-app-sidebar temporary v-model="value">
      APP TITLE
    </u-app-sidebar>

    <u-app-wrapper>
      <u-app-bar>
        <u-btn text @click="value = !value" icon>
          <u-icon icon="mdi-menu"/>
        </u-btn>

        <u-app-bar-title>kfjdlkjk</u-app-bar-title>
      </u-app-bar>

      <u-app-main>
        <u-btn>
          sdjkflsdjkf
        </u-btn>
      </u-app-main>
    </u-app-wrapper>
  </u-app>
</template>

<script>
import UApp from "./components/UApp/UApp";
import UAppBar from "./components/UAppBar/UAppBar";
import UAppBarTitle from "./components/UAppBar/UAppBarTitle";
import UAppWrapper from "./components/UApp/UAppWrapper";
import { UBtn } from "./components/UBtn";
import UIcon from "./components/UIcon/UIcon";
import UAppSidebar from "./components/UAppSidebar/UAppSidebar";
import UAppMain from "./components/UApp/UAppMain";
export default {
  name: "app",
  components: { UAppMain, UAppSidebar, UIcon, UBtn, UAppWrapper, UAppBarTitle, UAppBar, UApp },

  data() {
    return {
      value: true
    }
  }
};
</script>
