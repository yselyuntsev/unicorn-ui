<template>
  <!--  <div id="app" class="p-16 flex items-start flex-col gap-2">-->
  <u-app>
    <u-app-sidebar temporary v-model="value" style="display: flex">
      <template #prepend>
        <u-icon filled icon="mdi-github" />
      </template>

      <u-divider flat dense />

      <u-list dense nav>
        <u-list-item active>
          <u-list-item-icon>
            <u-icon icon="mdi-apps"></u-icon>
          </u-list-item-icon>

          <u-list-item-content>
            <u-list-item-title>
              dfkjlsdsfsdfdsffdfdfddfsdfsdfsdfdf
            </u-list-item-title>
          </u-list-item-content>
        </u-list-item>
      </u-list>
    </u-app-sidebar>

    <u-app-wrapper>
      <u-app-bar>
        <u-btn @click="value = !value" icon text>
          <u-icon icon="mdi-menu" />
        </u-btn>

        <u-app-bar-title></u-app-bar-title>

        <u-spacer />

        <u-btn text>
          Allow Jhonatan
          <u-avatar right size="32">
            <img src="https://randomuser.me/api/portraits/men/59.jpg" alt="" />
          </u-avatar>
        </u-btn>
      </u-app-bar>

      <u-app-main>
        <u-container>
          <h1 class="unicorn-h1 mb-8">Demo</h1>

          <u-demo />
        </u-container>
      </u-app-main>
    </u-app-wrapper>
  </u-app>
</template>

<script>
import UAppSidebar from "@/components/UAppSidebar/UAppSidebar";
import { UApp, UAppWrapper, UAppMain } from "@/components/UApp";
import { UAppBar, UAppBarTitle } from "@/components/UAppBar";
import UContainer from "@/components/UContainer/UContainer";
import UBtn from "./components/UBtn";
import UIcon from "@/components/UIcon";
import {
  UList,
  UListItemContent,
  UListItemIcon,
  UListItemTitle,
} from "@/components/UList";
import UListItem from "@/components/UList/UListItem";
import UDivider from "@/components/UDivider/UDivider";
import USpacer from "@/_for_development/USpacer/USpacer";
import UAvatar from "@/components/UAvatar/UAvatar";
import adaptable from "./mixins/adaptable";
import UDemo from "@/components/UDemo";

export default {
  name: "App",
  mixins: [adaptable],
  components: {
    UDemo,
    UAvatar,
    USpacer,
    UDivider,
    UAppBarTitle,
    UListItem,
    UList,
    UIcon,
    UBtn,
    UContainer,
    UAppBar,
    UListItemTitle,
    UListItemContent,
    UListItemIcon,
    UAppWrapper,
    UAppMain,
    UApp,
    UAppSidebar,
  },
  data() {
    return {
      value: true,
      bar: 20,
    };
  },
  methods: {
    log() {
      console.log(7489735983478);
    },
  },
};
</script>
