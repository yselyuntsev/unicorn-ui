<template>
  <u-app>
    <u-app-sidebar
      temporary
      v-if="!$breakpoints.isMobile"
      v-model="showSidebar"
    >
      <u-list nav dense>
        <u-list-item>
          <u-list-item-icon>
            <u-icon icon="mdi-home" />
          </u-list-item-icon>

          <u-list-item-content>
            <u-list-item-title>Главная</u-list-item-title>
          </u-list-item-content>
        </u-list-item>

        <u-list-item>
          <u-list-item-icon>
            <u-icon icon="mdi-clock-fast" />
          </u-list-item-icon>

          <u-list-item-content>
            <u-list-item-title>Расписание</u-list-item-title>
          </u-list-item-content>
        </u-list-item>

        <u-list-item>
          <u-list-item-icon>
            <u-icon icon="mdi-newspaper" />
          </u-list-item-icon>

          <u-list-item-content>
            <u-list-item-title>Новости и голосования</u-list-item-title>
          </u-list-item-content>
        </u-list-item>
      </u-list>
    </u-app-sidebar>

    <u-app-wrapper>
      <u-app-bar class="sticky top-0" :flat="!$breakpoints.isMobile">
        <u-btn
          v-if="!$breakpoints.isMobile"
          @click="showSidebar = !showSidebar"
          icon
          text
        >
          <u-icon :icon="toggleSidebarBtnIcon" />
        </u-btn>

        <u-spacer />

        <u-menu right>
          <template #activator="{ on }">
            <u-btn v-on="on" text :icon="$breakpoints.isMobile">
              <span v-if="!$breakpoints.isMobile">Иванов Сергей</span>
              <u-avatar :right="!$breakpoints.isMobile" size="32">
                <img src="https://randomuser.me/api/portraits/men/41.jpg" />
              </u-avatar>
            </u-btn>
          </template>

          <u-card>
            <u-list>
              <u-list-item disabled>
                <u-list-item-content>
                  <u-list-item-title>Иванов Сергей</u-list-item-title>
                  <u-list-item-subtitle>ФМФ 2Б</u-list-item-subtitle>
                </u-list-item-content>
              </u-list-item>

              <u-dialog width="360">
                <template #activator="{ open }">
                  <u-list-item @click="open">
                    <u-list-item-content>
                      <u-list-item-title>Выйти</u-list-item-title>
                    </u-list-item-content>
                  </u-list-item>
                </template>

                <u-card>
                  <u-card-title>Выйти из системы?</u-card-title>
                  <u-card-actions>
                    <u-spacer />
                    <u-btn class="mr-2" text>Нет, остаться</u-btn>
                    <u-btn text variant="error">Да, выйти</u-btn>
                  </u-card-actions>
                </u-card>
              </u-dialog>
            </u-list>
          </u-card>
        </u-menu>
      </u-app-bar>

      <u-app-main>
        <u-container> </u-container>
      </u-app-main>
    </u-app-wrapper>
  </u-app>
</template>
<script>
import UListItemContent from "@/components/UList/UListItemContent";
import UListItem from "@/components/UList/UListItem";
import UDialog from "@/components/UDialog/UDialog";
import UCard from "@/components/UCard/UCard";
import UList from "@/components/UList/UList";
import UListItemTitle from "@/components/UList/UListItemTitle";
import UListItemSubtitle from "@/components/UList/UListItemSubtitle";
import UAppSidebar from "@/components/UAppSidebar/UAppSidebar";
import UApp from "@/components/UApp/UApp";
import UListItemIcon from "@/components/UList/UListItemIcon";
import UIcon from "@/components/UIcon/UIcon";
import UAppWrapper from "@/components/UApp/UAppWrapper";
import UAppBar from "@/components/UAppBar/UAppBar";
import UBtn from "@/components/UBtn/UBtn";
import USpacer from "@/_for_development/USpacer/USpacer";
import UMenu from "@/components/UMenu/UMenu";
import UAvatar from "@/components/UAvatar/UAvatar";
import UCardTitle from "@/components/UCard/UCardTitle";
import UCardActions from "@/components/UCard/UCardActions";
import UAppMain from "@/components/UApp/UAppMain";
import UContainer from "@/components/UContainer/UContainer";
export default {
  components: {
    UContainer,
    UAppMain,
    UCardActions,
    UCardTitle,
    UAvatar,
    UMenu,
    USpacer,
    UBtn,
    UAppBar,
    UAppWrapper,
    UIcon,
    UListItemIcon,
    UApp,
    UAppSidebar,
    UListItemSubtitle,
    UListItemTitle,
    UList,
    UCard,
    UDialog,
    UListItem,
    UListItemContent,
  },
  data() {
    return {
      showSidebar: true,
    };
  },

  computed: {
    toggleSidebarBtnIcon() {
      return this.showSidebar ? "mdi-close" : "mdi-menu";
    },
  },
};
</script>
