import { createFunctionalComponent } from "@/utils/createFunctionalComponent";

import UList from "@/components/UList/UList";
import UListItem from "@/components/UList/UListItem";
import UListItemIcon from "@/components/UList/UListItemIcon";
import UListItemAction from "@/components/UList/UListItemAction";
import UListItemAvatar from "@/components/UList/UListItemAvatar";

const UListItemActionText = createFunctionalComponent(
  "u-list-item__action-text",
  "span"
);
const UListItemContent = createFunctionalComponent(
  "u-list-item__content",
  "div"
);
const UListItemTitle = createFunctionalComponent("u-list-item__title", "div");
const UListItemSubtitle = createFunctionalComponent(
  "u-list-item__subtitle",
  "div"
);

export {
  UList,
  UListItem,
  UListItemIcon,
  UListItemContent,
  UListItemActionText,
  UListItemTitle,
  UListItemSubtitle,
  UListItemAvatar,
  UListItemAction,
};
