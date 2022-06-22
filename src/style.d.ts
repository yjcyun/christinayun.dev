import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    body: string;
    accentColor: string;
    cardImgBackground: string;
    cardContentBackground: string;
    cardTitle: string;
    text: string;
    metaText: string;
    bannerBackground: string;
    logo: string;
    border: string;
  }
}
