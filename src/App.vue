<template>
  <u-app id="app">
    <u-sidebar></u-sidebar>

    <u-app-main>
      <template #prepend>
        <u-app-bar> dfs </u-app-bar>
      </template>

      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <u-btn>Default</u-btn>
          <u-btn variant="primary">Primary</u-btn>
          <u-btn variant="success">Success</u-btn>
          <u-btn variant="error">Error</u-btn>
          <u-btn variant="warning">Warning</u-btn>
          <u-btn variant="info">Info</u-btn>
        </div>

        <u-divider dense />

        <div class="flex gap-4">
          <u-btn dense>Default Dense</u-btn>
          <u-btn dense variant="primary">Primary Dense</u-btn>
          <u-btn dense variant="success">Success Dense</u-btn>
          <u-btn dense variant="error">Error Dense</u-btn>
          <u-btn dense variant="warning">Warning Dense</u-btn>
          <u-btn dense variant="info">Info Dense</u-btn>
        </div>

        <u-divider dense />

        <div class="flex gap-4">
          <u-btn muted>Default Muted</u-btn>
          <u-btn muted variant="primary">Primary Muted</u-btn>
          <u-btn muted variant="success">Success Muted</u-btn>
          <u-btn muted variant="error">Error Muted</u-btn>
          <u-btn muted variant="warning">Warning Muted</u-btn>
          <u-btn muted variant="info">Info Muted</u-btn>
        </div>

        <u-divider dense />

        <div class="flex gap-4">
          <u-btn muted dense>Default Muted Dense</u-btn>
          <u-btn muted dense variant="primary">Primary Muted Dense</u-btn>
          <u-btn muted dense variant="success">Success Muted Dense</u-btn>
          <u-btn muted dense variant="error">Error Muted Dense</u-btn>
          <u-btn muted dense variant="warning">Warning Muted Dense</u-btn>
          <u-btn muted dense variant="info">Info Muted Dense</u-btn>
        </div>

        <u-divider dense />

        <div class="flex gap-4">
          <u-btn text>Default Muted Dense</u-btn>
          <u-btn text variant="primary">Primary Text</u-btn>
          <u-btn text variant="success">Success Text</u-btn>
          <u-btn text variant="error">Error Text</u-btn>
          <u-btn text variant="warning">Warning Text</u-btn>
          <u-btn text variant="info">Info Text</u-btn>
        </div>

        <u-divider dense />

        <div class="flex relative w-16 h-16 bg-red-100" style="color: blue">
          <u-ripple-effect />
        </div>

        <u-card>
          <u-ripple-effect />
        </u-card>

        <div class="flex gap-4">
          <u-btn text dense>Default Text Dense</u-btn>
          <u-btn text dense variant="primary">Primary Text Dense</u-btn>
          <u-btn text dense variant="success">Success Text Dense</u-btn>
          <u-btn text dense variant="error">Error Text Dense</u-btn>
          <u-btn text dense variant="warning">Warning Text Dense</u-btn>
          <u-btn text dense variant="info">Info Text Dense</u-btn>
        </div>
      </div>
    </u-app-main>
  </u-app>
</template>

<script>
import UApp from "./components/UApp/UApp";
import UAppMain from "./components/UApp/UAppMain";
import UAppBar from "./components/UApp/UAppBar";
import USidebar from "./components/USidebar/USidebar";
import UBtn from "./components/UBtn/UBtn";
import UDivider from "./components/UDivider/UDivider";
import URippleEffect from "./components/URippleEffect/URippleEffect";
import UCard from "./components/UCard/UCard";

export default {
  name: "App",

  components: {
    UCard,
    URippleEffect,
    UDivider,
    UBtn,
    USidebar,
    UAppBar,
    UAppMain,
    UApp,
  },

  data() {
    return {
      show: false,
      selected: null,
    };
  },
};
</script>
