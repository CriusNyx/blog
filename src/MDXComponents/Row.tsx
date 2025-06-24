import { PropsWithChildren } from "react";

export function Row(props: PropsWithChildren) {
  return (
    <div className="flex flex-row justify-stretch items-stretch flex-1 gap-5">
      {props.children}
    </div>
  );
}
