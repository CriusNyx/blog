import { PropsWithChildren } from "react";

export function Float(props: PropsWithChildren) {
  return <div className="float">{props.children}</div>;
}
