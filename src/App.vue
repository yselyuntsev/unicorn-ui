<template>
  <u-app>
    <u-sidebar collapsible>
      <template #header>
        <u-icon
          background="bg-purple-100"
          color="text-purple-700"
          filled
          icon="mdi-github"
        />
      </template>

      <u-sidebar-subtitle>Admin</u-sidebar-subtitle>

      <u-sidebar-item active icon="mdi-view-grid-outline">
        Home
      </u-sidebar-item>
      <u-sidebar-item icon="mdi-chart-box-outline"> Exchange </u-sidebar-item>
      <u-sidebar-item icon="mdi-file-document-outline"> Prices </u-sidebar-item>

      <u-sidebar-subtitle>Money</u-sidebar-subtitle>
      <u-sidebar-item icon="mdi-wallet-outline"> Wallets </u-sidebar-item>
      <u-sidebar-item icon="mdi-ticket-percent-outline">
        Promotions
      </u-sidebar-item>
    </u-sidebar>

    <u-main>
      <div class="flex items-center justify-between">
        <u-spacer />
        <div class="flex items-center">
          <u-menu class="mr-4" right width="360">
            <template #activator="{ toggle }">
              <u-button @click="toggle" icon text variant="secondary">
                <u-badge animated />
                <u-icon icon="mdi-bell-outline" />
              </u-button>
            </template>

            <u-card>
              <u-card-title>External authentication</u-card-title>
              <u-card-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aperiam aspernatur atque consectetur consequatur,
                culpa eius explicabo facilis hic incidunt modi omnis pariatur
                perspiciatis quo ratione sed, ut. Blanditiis, cupiditate.
              </u-card-body>
            </u-card>
          </u-menu>

          <u-menu class="mr-4" right width="360">
            <template #activator="{ toggle }">
              <u-button @click="toggle" icon text variant="secondary">
                <u-icon icon="mdi-qrcode" />
              </u-button>
            </template>

            <u-card>
              <u-card-title>External authentication</u-card-title>
              <u-card-body>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aperiam aspernatur atque consectetur consequatur,
                culpa eius explicabo facilis hic incidunt modi omnis pariatur
                perspiciatis quo ratione sed, ut. Blanditiis, cupiditate.
              </u-card-body>
            </u-card>
          </u-menu>

          <u-menu right width="240">
            <template #activator="{ toggle }">
              <u-button @click="toggle" text variant="secondary">
                Jhon Doe
              </u-button>
            </template>

            <u-card>
              <u-card-title>Settings</u-card-title>

              <u-list>
                <u-dialog width="320">
                  <template #activator="{ open }">
                    <u-list-item @click="open">
                      <u-list-item-content>Logout</u-list-item-content>
                    </u-list-item>
                  </template>

                  <u-card>
                    <u-card-title> Exit from app? </u-card-title>
                    <u-card-actions>
                      <u-spacer />
                      <u-button class="mr-2" text variant="secondary">
                        Cancel
                      </u-button>
                      <u-button variant="danger" text> Yes, exit </u-button>
                    </u-card-actions>
                  </u-card>
                </u-dialog>
              </u-list>
            </u-card>
          </u-menu>
        </div>
      </div>

      <h4 class="unicorn-h4 mt-4">Unity Exchange</h4>
      <h1 class="unicorn-h1">Promotions</h1>

      <u-tabs class="mb-16 mt-8">
        <u-tab>All</u-tab>
        <u-tab>Withdraw</u-tab>
        <u-tab>Deposit</u-tab>
        <u-tab>Bank withdraws</u-tab>
      </u-tabs>

      <h3 class="unicorn-h3 mb-8">Search by token name, symbol, or address</h3>

      <u-simple-table>
        <tbody>
          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>
          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>

          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>
          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>
          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>
          <tr>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
            <td>djkfskl</td>
          </tr>
        </tbody>
      </u-simple-table>
      <!--      <u-card>-->
      <!--        <u-card-title>-->
      <!--          Categories-->
      <!--          <p class="text-sm text-gray-500">-->
      <!--            Find the best prices across exchange networks-->
      <!--          </p>-->
      <!--        </u-card-title>-->

      <!--        <u-card-body>-->
      <!--          dlkfs Lorem ipsum dolor sit amet, consectetur adipisicing elit.-->
      <!--          Consequatur, nihil, sed? Alias, dolorem dolorum eligendi error,-->
      <!--          excepturi impedit in ipsam labore magnam minima necessitatibus optio-->
      <!--          quisquam quod sit velit voluptates!-->
      <!--        </u-card-body>-->
      <!--      </u-card>-->
    </u-main>
  </u-app>
</template>

<script>
import UApp from "@/components/UApp/UApp";
import USidebar from "@/components/USidebar/USidebar";
import USidebarItem from "@/components/USidebar/USidebarItem";
import UIcon from "@/components/UIcon/UIcon";
import USidebarSubtitle from "@/components/USidebar/USidebarSubtitle";
import UMain from "@/components/UMain/UMain";
import USpacer from "@/components/USpacer/USpacer";
import UButton from "@/components/UButton/UButton";
import UMenu from "@/components/UMenu/UMenu";
import UCard from "@/components/UCard/UCard";
import UCardBody from "@/components/UCard/UCardBody";
import UCardTitle from "@/components/UCard/UCardTitle";
import UList from "@/components/UList/UList";
import UListItem from "@/components/UList/UListItem";
import UListItemContent from "@/components/UList/UListItemContent";
import UDialog from "@/components/UDialog/UDialog";
import UCardActions from "@/components/UCard/UCardActions";
import UBadge from "@/components/UBadge/UBadge";
import UTabs from "@/components/UTabs/UTabs";
import UTab from "@/components/UTabs/UTab";
import USimpleTable from "@/components/USimpleTable/USimpleTable";

export default {
  name: "App",
  components: {
    USimpleTable,
    UTab,
    UTabs,
    UBadge,
    UCardActions,
    UDialog,
    UListItemContent,
    UListItem,
    UList,
    UCardTitle,
    UCardBody,
    UCard,
    UMenu,
    UButton,
    USpacer,
    UMain,
    USidebarSubtitle,
    UIcon,
    USidebarItem,
    USidebar,
    UApp,
  },

  data() {
    return {
      isOn: [],
    };
  },
};
</script>
