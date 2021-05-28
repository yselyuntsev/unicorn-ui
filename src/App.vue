<template>
  <u-app>
    <u-app-wrapper>
      <u-app-main>
        <u-container class="h-full">
          <div class="flex items-center gap-4 bg-red-100 h-full">
            <u-btn> 32 </u-btn>
            <u-btn variant="primary"> sdkfsdlk </u-btn>
            <u-btn variant="success">sdkfsd </u-btn>
            <u-btn variant="error"> sdkfsdlk </u-btn>
          </div>
        </u-container>
      </u-app-main>
    </u-app-wrapper>
  </u-app>
</template>
<script>
import UApp from "@/components/UApp/UApp";
import UAppWrapper from "@/components/UApp/UAppWrapper";
import UBtn from "@/components/UBtn/UBtn";
import UAppMain from "@/components/UApp/UAppMain";
import UContainer from "@/components/UContainer/UContainer";

export default {
  components: {
    UContainer,
    UAppMain,
    UBtn,
    UAppWrapper,
    UApp,
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
