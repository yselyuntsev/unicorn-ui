<template>
  <u-app>
    <u-sidebar>
      <template #prepend>
        <div class="text-4xl flex items-baseline">
          unicorn
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 pt-1 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          ui
        </div>
      </template>

      <u-sidebar-group>
        <template #activator="{ on }">
          <u-sidebar-item v-on="on"> Перед началом работы </u-sidebar-item>
        </template>

        <u-sidebar-item> Общие принципы </u-sidebar-item>
        <u-sidebar-item> Предложение </u-sidebar-item>
        <u-sidebar-item> Слово </u-sidebar-item>
        <u-sidebar-item> Знак </u-sidebar-item>
        <u-sidebar-item> Оформление </u-sidebar-item>
        <u-sidebar-item> Глоссарий </u-sidebar-item>
      </u-sidebar-group>

      <u-sidebar-item> Цвета </u-sidebar-item>
      <u-sidebar-item> Типографика </u-sidebar-item>
      <u-sidebar-item> Иконографика </u-sidebar-item>
      <u-sidebar-item> Структура и сетка </u-sidebar-item>

      <u-sidebar-group>
        <template #activator="{ on }">
          <u-sidebar-item v-on="on"> Редполитика </u-sidebar-item>
        </template>

        <u-sidebar-item> Общие принципы </u-sidebar-item>
        <u-sidebar-item> Предложение </u-sidebar-item>
        <u-sidebar-item> Слово </u-sidebar-item>
        <u-sidebar-item> Знак </u-sidebar-item>
        <u-sidebar-item> Оформление </u-sidebar-item>
        <u-sidebar-item> Глоссарий </u-sidebar-item>
      </u-sidebar-group>

      <u-sidebar-group>
        <template #activator="{ on }">
          <u-sidebar-item v-on="on">Компоненты</u-sidebar-item>
        </template>

        <u-sidebar-item>Alerts</u-sidebar-item>
        <u-sidebar-item active>Buttons</u-sidebar-item>
        <u-sidebar-item>Cards</u-sidebar-item>
      </u-sidebar-group>

      <u-sidebar-item>Sidebar Item 2</u-sidebar-item>
    </u-sidebar>

    <u-main>
      <template #prepend>
        <u-app-bar> dsf </u-app-bar>
      </template>

      <div class="flex justify-between">
        <h1>fdfjdsk</h1>

        <!--        <u-dropdown>-->
        <!--          <template #activator="{ on }">-->
        <!--            <u-btn v-on="on">Activator</u-btn>-->
        <!--          </template>-->

        <!--          <u-card>-->
        <!--            <p>-->
        <!--              Lorem ipsum dolor sit amet, consectetur adipisicing elit.-->
        <!--              Accusamus aspernatur assumenda at deleniti dolor dolorem doloribus-->
        <!--              eveniet excepturi molestiae molestias nemo neque nisi nulla,-->
        <!--              praesentium quas quidem quis totam voluptatem!-->
        <!--            </p>-->
        <!--          </u-card>-->
        <!--        </u-dropdown>-->
      </div>

      <u-alert dismissible class="my-4">
        <u-row>
          <u-col cols="12">
            <u-select
              v-model="selected"
              label="Select"
              :items="[
                { text: 'GGGG', value: 'dsfds' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
                { text: 'sdjfsdjfk', value: 'wer534534' },
              ]"
            />
          </u-col>
        </u-row>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eveniet
          ipsa molestiae nemo veritatis. Adipisci, aliquam dolor doloribus eum
          fugit maiores non nostrum repellat sapiente tempora velit, voluptas
          voluptate voluptatibus.
        </p>
      </u-alert>

      <u-bottom-navigation>
        <u-bottom-navigation-item>
          <template #icon>
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </template>
          Главная
        </u-bottom-navigation-item>

        <u-bottom-navigation-item>
          <template #icon>
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </template>
          Главная
        </u-bottom-navigation-item>

        <u-bottom-navigation-item active>
          <template #icon>
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
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </template>
          Главная
        </u-bottom-navigation-item>
      </u-bottom-navigation>

      <u-group-header>
        Group header

        <template #actions>
          <u-text-field dense disable-hint placeholder="Search..." class="mr-2">
            <template #prepend>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                /></svg
            ></template>
          </u-text-field>
          <u-btn dense>Показать все</u-btn>
        </template>
      </u-group-header>

      <u-card wheel>
        <u-row>
          <u-col cols="6">
            <u-card>
              <u-dropdown>
                <template #activator="{ on }">
                  <u-btn v-on="on">Activator</u-btn>
                </template>

                <u-card>
                  <u-dialog v-model="show" :width="640">
                    <template #activator="{ on: gg }">
                      <u-btn v-on="gg" class="mt-4">Trigger modal</u-btn>
                    </template>

                    <u-card>
                      <u-avatar> ST </u-avatar>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet aperiam atque commodi, cumque deserunt
                        doloremque earum eum id, iusto modi molestias,
                        necessitatibus nesciunt non pariatur possimus quasi
                        ratione rem voluptatibus.
                      </p>
                    </u-card>
                  </u-dialog>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                    asperiores autem deserunt distinctio eaque enim ex facilis
                    iusto laboriosam minima nesciunt nihil perferendis quasi,
                    quos ratione reiciendis repellat rerum voluptate.
                  </p>
                </u-card>
              </u-dropdown>

              <u-dialog v-model="show" :width="640">
                <template #activator="{ on }">
                  <u-btn v-on="on" class="mt-4">Trigger modal</u-btn>
                </template>

                <u-card>
                  <u-avatar> ST </u-avatar>

                  <u-dialog v-model="show" :width="640">
                    <template #activator="{ on: gg }">
                      <u-btn v-on="gg" class="mt-4">Trigger modal</u-btn>
                    </template>

                    <u-card>
                      <u-avatar> ST </u-avatar>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Amet aperiam atque commodi, cumque deserunt
                        doloremque earum eum id, iusto modi molestias,
                        necessitatibus nesciunt non pariatur possimus quasi
                        ratione rem voluptatibus.
                      </p>
                    </u-card>
                  </u-dialog>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Amet aperiam atque commodi, cumque deserunt doloremque earum
                    eum id, iusto modi molestias, necessitatibus nesciunt non
                    pariatur possimus quasi ratione rem voluptatibus.
                  </p>
                </u-card>
              </u-dialog>

              <br />

              <u-text-field label="Датапикер" placeholder="Выберите дату" />
              <u-text-field label="Датапикер" placeholder="Выберите дату">
                <template #prepend>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </template>
              </u-text-field>

              <u-btn @click="show = !show" muted variant="primary">
                Авторизоваться
              </u-btn>
            </u-card>
          </u-col>

          <u-col cols="6">
            <u-card flat>
              <h4 class="mt-0 mb-8">Авторизация</h4>

              <u-btn class="w-full justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                  />
                </svg>
                Войти через QR-Код</u-btn
              >

              <u-divider> Или </u-divider>

              <u-text-field label="Введите токен доступа" placeholder="_ _ _ _">
                <template #prepend> +7 </template>
              </u-text-field>

              <u-btn variant="primary" class="w-full mt-4 justify-center">
                Войти
              </u-btn>
            </u-card>
          </u-col>
        </u-row>
      </u-card>
    </u-main>
  </u-app>
</template>

<script>
import UApp from "./new_components/UApp";
import USidebar from "./new_components/USidebar";
import UMain from "./new_components/UMain";

import UCard from "./new_components/UCard";
import UTextField from "./new_components/UTextField";
import UBtn from "./new_components/UBtn";
import USidebarItem from "./new_components/USidebarItem";
import UDropdown from "./new_components/UDropdown";
import UAlert from "./new_components/UAlert";
import UGroupHeader from "./new_components/UGroupHeader";
import URow from "./new_components/URow";
import UCol from "./new_components/UCol";
import UDivider from "./new_components/UDivider";
import UDialog from "./new_components/UDialog";
import UAvatar from "./new_components/UAvatar";
import USidebarGroup from "./new_components/USidebarGroup";
import UBottomNavigation from "./new_components/UBottomNavigation";
import UBottomNavigationItem from "./new_components/UBottomNavigationItem";
import UAppBar from "./new_components/UAppBar";
import USelect from "./new_components/USelect";

export default {
  name: "App",
  components: {
    USelect,
    UAppBar,
    UBottomNavigationItem,
    UBottomNavigation,
    USidebarGroup,
    UAvatar,
    UDialog,
    UDivider,
    UCol,
    URow,
    UGroupHeader,
    UAlert,
    UDropdown,
    USidebarItem,
    UBtn,
    UTextField,
    UCard,
    UMain,
    USidebar,
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
