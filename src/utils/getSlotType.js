export function getSlotType(vm, name, split) {
  if (vm.$slots[name] && vm.$scopedSlots[name] && vm.$scopedSlots[name].name) {
    return split ? "v-slot" : "scoped";
  }
  if (vm.$slots[name]) return "normal";
  if (vm.$scopedSlots[name]) return "scoped";
}
