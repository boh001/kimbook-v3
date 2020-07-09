import React from "react";
import { GlobalStyles } from "GlobalStyle";
import { global } from "@storybook/design-system";
import { MemoryRouter } from "react-router-dom";

global.fontUrl =
  "https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap";

const Layout = ({ children }) => (
  <html>
    <head>
      <link href={global.fontUrl} rel="stylesheet" />
    </head>
    <body>
      <MemoryRouter>
        <GlobalStyles />
        {children}
      </MemoryRouter>
    </body>
  </html>
);

export default Layout;
