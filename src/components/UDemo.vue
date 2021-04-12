<template>
  <u-card outlined flat>
    <u-toolbar simple flat>
      <u-tabs>
        <u-tab>Preview</u-tab>
        <u-tab>HTML</u-tab>
        <u-tab>Script</u-tab>
      </u-tabs>
    </u-toolbar>

    <u-divider simple />

    <u-card flat>
      <u-card-body>
        <u-btn>Click me!</u-btn>
      </u-card-body>
    </u-card>
  </u-card>
</template>

<script>
import { UCard, UCardBody } from "@/components/UCard";
import UTabs from "@/_for_development/UTabs/UTabs";
import UTab from "@/_for_development/UTabs/UTab";
import UToolbar from "@/components/UToolbar/UToolbar";
import UDivider from "@/components/UDivider/UDivider";
import UBtn from "@/components/UBtn";
export default {
  name: "UDemo",
  components: {
    UBtn,
    UDivider,
    UCardBody,
    UToolbar,
    UTab,
    UTabs,
    UCard,
  },
};
</script>

<style scoped></style>
