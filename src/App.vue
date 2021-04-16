<template>
  <u-app>
    <u-app-sidebar temporary v-model="value"> APP TITLE </u-app-sidebar>

    <u-app-wrapper>
      <u-app-bar>
        <u-btn text @click="value = !value" icon>
          <u-icon icon="mdi-menu" />
        </u-btn>

        <u-app-bar-title>
          <u-avatar size="40" squared class="mr-4" />
          dkjfds
        </u-app-bar-title>
      </u-app-bar>

      <u-app-main>
        <u-menu width="460">
          <template #activator="{ on }">
            <u-btn v-on="on"> sdjkflsdjkf </u-btn>
          </template>

          <u-card>
            <u-card-body>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Adipisci, alias amet asperiores aspernatur deserunt dignissimos
              dolor eius error explicabo, harum nesciunt quae quia
              reprehenderit, sunt veniam? Aliquid doloremque id omnis?
            </u-card-body>
          </u-card>
        </u-menu>

        <u-divider />

        <p>{{ tabs }}</p>

        <u-tabs v-model="tabs">
          <u-tab active>dfsf</u-tab>
          <u-tab>dfsf</u-tab>
        </u-tabs>

        <u-tabs-items v-model="tabs">
          <u-tabs-item>dsfsd</u-tabs-item>
          <u-tabs-item>12</u-tabs-item>
        </u-tabs-items>
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
import { UIcon } from "./components/UIcon";
import UAppSidebar from "./components/UAppSidebar/UAppSidebar";
import UAppMain from "./components/UApp/UAppMain";
import UMenu from "@/components/UMenu/UMenu";
import UCard from "@/components/UCard/UCard";
import UCardBody from "@/components/UCard/UCardBody";
import UAvatar from "@/components/UAvatar/UAvatar";
import UDivider from "@/components/UDivider/UDivider";
import UTabs from "./components/UTabs/UTabs";
import UTab from "@/_for_development/UTabs/UTab";
import UTabsItems from "@/_for_development/UTabs/UTabsItems";
import UTabsItem from "@/_for_development/UTabs/UTabsItem";
export default {
  name: "app",
  components: {
    UTabsItem,
    UTabsItems,
    UTab,
    UTabs,
    UDivider,
    UAvatar,
    UCardBody,
    UCard,
    UMenu,
    UAppMain,
    UAppSidebar,
    UIcon,
    UBtn,
    UAppWrapper,
    UAppBarTitle,
    UAppBar,
    UApp,
  },

  data() {
    return {
      value: false,
      tabs: null,
    };
  },
};
</script>
