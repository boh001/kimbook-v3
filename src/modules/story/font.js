import { global } from "@storybook/design-system";

const fontLink = document.createElement("link");

fontLink.href = global.fontUrl;
console.log(global.fontUrl);

fontLink.rel = "stylesheet";

document.head.appendChild(fontLink);
