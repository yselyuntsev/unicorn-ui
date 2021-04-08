import UCard from "./UCard";
import { createFunctionalComponent } from "@/utils/createFunctionalComponent";

const UCardTitle = createFunctionalComponent("u-card__title");
const UCardBody = createFunctionalComponent("u-card__body");
const UCardActions = createFunctionalComponent("u-card__actions");

export { UCard, UCardTitle, UCardBody, UCardActions };
