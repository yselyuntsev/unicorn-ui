<template>
  <!--  <div id="app" class="p-16 flex items-start flex-col gap-2">-->
  <u-app>
    <u-app-sidebar v-model="value" style="display: flex">
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
      <u-app-bar v-if="false">
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
          <u-toolbar class="-mx-4 mb-8" flat>
            <u-spacer />
            <u-btn @click="value = !value" text>
              Allow Jhonatan
              <u-avatar right size="32">
                <img
                  src="https://randomuser.me/api/portraits/men/59.jpg"
                  alt=""
                />
              </u-avatar>
            </u-btn>
          </u-toolbar>

          <h1 class="unicorn-h1 my-8">Lorem ipsum dolor</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium deleniti itaque iure nesciunt numquam quia quidem sint
            sunt totam velit. Architecto, eum expedita maxime mollitia nihil
            perferendis quod soluta suscipit!
          </p>

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
import UToolbar from "@/components/UToolbar/UToolbar";

export default {
  name: "App",
  mixins: [adaptable],
  components: {
    UToolbar,
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
