import { PropsWithChildren } from "react";

interface FrameProps extends PropsWithChildren {
  title: string;
}

export function Frame(props: FrameProps) {
  return (
    <div className="relative border-1 border-white rounded-xl p-5 mt-6">
      {props.title && (
        <p className="absolute -top-7 bg-black border-1 border-white rounded-md p-1">
          {props.title}
        </p>
      )}
      {props.children}
    </div>
  );
}
