<template>
  <div id="app" class="p-16 flex flex-col gap-2">
    <div class="flex gap-2">
      <u-button> ffjdks </u-button>
      <u-button variant="primary">
        <u-badge animated />
        ffjdks
      </u-button>
      <u-button variant="danger"> ffjdks </u-button>
      <u-button variant="success"> ffjdks </u-button>
      <u-button variant="warning"> ffjdks </u-button>
      <u-button variant="info"> ffjdks </u-button>
    </div>

    <div class="flex gap-2">
      <u-button text> ffjdks </u-button>
      <u-button text variant="primary"> ffjdks </u-button>
      <u-button text variant="danger"> ffjdks </u-button>
      <u-button text variant="success"> ffjdks </u-button>
      <u-button text variant="warning"> ffjdks </u-button>
      <u-button text variant="info"> ffjdks </u-button>
    </div>

    <div class="flex flex-col gap-2">
      <u-alert closable icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad ducimus
        impedit minima mollitia pariatur tempore? Accusantium animi esse
        possimus quod voluptate! Ab at cumque doloribus dolorum in, modi
        ratione.
      </u-alert>

      <u-alert closable variant="primary" icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus
        accusantium animi beatae commodi deserunt dolores fugit id in incidunt
        inventore, maxime minima nisi perspiciatis quae reprehenderit tempora ut
        vero?
      </u-alert>

      <u-alert closable variant="danger" icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
        delectus dicta dolorem dolorum fuga hic nam nobis obcaecati reiciendis.
        Aspernatur dolorem explicabo laboriosam necessitatibus, pariatur quaerat
        reiciendis velit vitae?
      </u-alert>

      <u-alert closable variant="success" icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
        delectus dicta dolorem dolorum fuga hic nam nobis obcaecati reiciendis.
        Aspernatur dolorem explicabo laboriosam necessitatibus, pariatur quaerat
        reiciendis velit vitae?
      </u-alert>

      <u-alert closable variant="info" icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
        delectus dicta dolorem dolorum fuga hic nam nobis obcaecati reiciendis.
        Aspernatur dolorem explicabo laboriosam necessitatibus, pariatur quaerat
        reiciendis velit vitae?
      </u-alert>

      <u-alert closable variant="warning" icon="mdi-alert">
        <u-alert-title>dkjfsld</u-alert-title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto at
        delectus dicta dolorem dolorum fuga hic nam nobis obcaecati reiciendis.
        Aspernatur dolorem explicabo laboriosam necessitatibus, pariatur quaerat
        reiciendis velit vitae?
      </u-alert>
    </div>
  </div>
</template>

<script>
import UButton from "@/components/UButton/UButton";
import UAlert from "@/components/UAlert/UAlert";
import UAlertTitle from "@/components/UAlert/UAlertTitle";
import UBadge from "@/components/UBadge/UBadge";
export default {
  name: "App",
  components: { UBadge, UAlertTitle, UAlert, UButton },
};
</script>
