import { PropsWithChildren } from "react";

export function Col(props: PropsWithChildren) {
  return (
    <div className="flex flex-col grow flex-1 gap-5">{props.children}</div>
  );
}
