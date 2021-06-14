<template>
  <u-app id="app">
    <u-sidebar></u-sidebar>

    <u-app-main>
      <template #prepend>
        <u-app-bar>
          dfs
          <u-spacer />

          <u-dropdown>
            <template #activator="{ on }">
              <u-btn icon v-on="on" text>
                <u-avatar v-if="false" size="24"></u-avatar>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </u-btn>
            </template>

            <u-card> sdkfsdjkl </u-card>
          </u-dropdown>
        </u-app-bar>
      </template>

      <u-card class="mb-4">
        <u-collapse>
          <template #header> sdfksdfk </template>

          <u-list>
            <u-list-item>dsjfhjks</u-list-item>
            <u-list-item>dsjfhjks</u-list-item>
            <u-list-item>dsjfhjks</u-list-item>
            <u-list-item>dsjfhjks</u-list-item>
          </u-list>
        </u-collapse>
      </u-card>

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
          <u-btn dense> Default Dense </u-btn>

          <u-btn dense variant="primary">
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                />
              </svg>
            </template>

            Primary Dense
          </u-btn>

          <u-btn dense variant="success">
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            Success Dense
          </u-btn>

          <u-btn dense variant="error">Error Dense</u-btn>
          <u-btn dense variant="warning">Warning Dense</u-btn>
          <u-btn dense variant="info">Info Dense</u-btn>
        </div>

        <u-divider dense />

        <div class="flex gap-4">
          <u-btn muted>Default Muted</u-btn>
          <u-btn muted variant="primary">Primary Muted</u-btn>
          <u-btn muted variant="success">Success Muted</u-btn>
          <u-btn muted variant="error">
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </template>
            Error Muted
          </u-btn>
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
import USpacer from "./components/USpacer/USpacer";
import UAvatar from "./components/UAvatar/UAvatar";
import UDropdown from "./components/UDropdown/UDropdown";
import UCollapse from "./components/UCollapse/UCollapse";
import UList from "./components/UList/UList";
import UListItem from "./components/UList/UListItem";

export default {
  name: "App",

  components: {
    UListItem,
    UList,
    UCollapse,
    UDropdown,
    UAvatar,
    USpacer,
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
