import { type PropsWithChildren } from "react";
import { Written } from "./Written.tsx";

export interface CustomH3Props extends PropsWithChildren {
  title?: boolean;
  writtenAt?: string;
}

export function CustomH3(props: CustomH3Props) {
  return (
    <div className={`flex flex-col relative mb-8 ${!props.title && "mt-8"}`}>
      <h1 className="mb-1!">{props.children}</h1>
      <div className="h-0.5 w-120 h3-underline"></div>
      {props.writtenAt && (
        <div className="absolute top-2 right-2 text-gray-400">
          {props.writtenAt && <Written date={props.writtenAt} />}
        </div>
      )}
    </div>
  );
}
