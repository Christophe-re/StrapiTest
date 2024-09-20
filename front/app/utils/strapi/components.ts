import type { ComponentProps as ReactComponentProps } from "react";
import type * as Components from "~/components/strapiSlices";
import { StrapiSlicesZoneComponentType } from "./StrapiSlicesZoneComponent";
export type ComponentName = keyof typeof Components;

export type ComponentProps<T extends ComponentName> = ReactComponentProps<
  (typeof Components)[T]
>;

export type ComponentMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [K in ComponentName]: StrapiSlicesZoneComponentType<any>;
};
