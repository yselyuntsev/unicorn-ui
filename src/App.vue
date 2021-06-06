<template>
  <u-app>
    <u-sidebar>
      <u-sidebar-item active>
        <template #icon>
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
        Sidebar Item
      </u-sidebar-item>

      <u-sidebar-item>Sidebar Item 2</u-sidebar-item>
      <u-sidebar-item>Sidebar Item 2</u-sidebar-item>
    </u-sidebar>

    <u-main>
      <div class="flex justify-between">
        <h1>fdfjdsk</h1>

        <u-dropdown>
          <template #activator="{ on }">
            <u-btn v-on="on">Activator</u-btn>
          </template>

          <u-card>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus aspernatur assumenda at deleniti dolor dolorem doloribus
              eveniet excepturi molestiae molestias nemo neque nisi nulla,
              praesentium quas quidem quis totam voluptatem!
            </p>
          </u-card>
        </u-dropdown>
      </div>

      <u-alert class="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          magnam provident quibusdam tempore? Adipisci asperiores beatae cum
          cupiditate eius esse eum laboriosam, quam, quod repellat sapiente,
          sunt! Architecto, explicabo facere.
        </p>
      </u-alert>

      <u-alert variant="success" class="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          magnam provident quibusdam tempore? Adipisci asperiores beatae cum
          cupiditate eius esse eum laboriosam, quam, quod repellat sapiente,
          sunt! Architecto, explicabo facere.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam
          consequatur culpa cumque dicta distinctio esse excepturi inventore
          itaque libero nam numquam obcaecati pariatur praesentium, saepe sint
          temporibus vel voluptatibus.
        </p>
      </u-alert>

      <u-alert variant="error" class="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          magnam provident quibusdam tempore? Adipisci asperiores beatae cum
          cupiditate eius esse eum laboriosam, quam, quod repellat sapiente,
          sunt! Architecto, explicabo facere.
        </p>
      </u-alert>

      <u-alert variant="warning" class="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          magnam provident quibusdam tempore? Adipisci asperiores beatae cum
          cupiditate eius esse eum laboriosam, quam, quod repellat sapiente,
          sunt! Architecto, explicabo facere.
        </p>
      </u-alert>

      <u-alert variant="info" class="my-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          magnam provident quibusdam tempore? Adipisci asperiores beatae cum
          cupiditate eius esse eum laboriosam, quam, quod repellat sapiente,
          sunt! Architecto, explicabo facere.
        </p>
      </u-alert>

      <u-card wheel>
        <u-card>
          <u-dropdown>
            <template #activator="{ on }">
              <u-btn v-on="on">Activator</u-btn>
            </template>

            <u-card>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aspernatur assumenda at deleniti dolor dolorem
                doloribus eveniet excepturi molestiae molestias nemo neque nisi
                nulla, praesentium quas quidem quis totam voluptatem!
              </p>
            </u-card>
          </u-dropdown>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            ex id maiores maxime numquam praesentium repudiandae. Architecto
            aspernatur deleniti fuga harum ipsa, iusto, molestiae officiis porro
            quis quisquam, repudiandae voluptatem.
          </p>

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

          <u-btn muted variant="primary"> Авторизоваться </u-btn>
        </u-card>
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

export default {
  name: "App",
  components: {
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
};
</script>
