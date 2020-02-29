declare module "react-elm-components" {
  import React from "react";

  export type ElmApp<Flags, Ports> =
    | { init: (options: { flags: Flags }) => { ports: Ports } }
    | { embed: (node: any, flags: Flags) => { ports: Ports } };

  export type Ports<T extends ElmApp<any, any>> = T extends ElmApp<any, infer P>
    ? P
    : never;

  export type Flags<T extends ElmApp<any, any>> = T extends ElmApp<infer F, any>
    ? F
    : never;

  export interface Props<Flags, Ports> {
    src: ElmApp<Flags, Ports>;
    flags: Flags;
    ports?: (ports: Ports) => void;
  }

  export default class Elm<Flags, Ports> extends React.Component<
    Props<Flags, Ports>
  > {}
}
