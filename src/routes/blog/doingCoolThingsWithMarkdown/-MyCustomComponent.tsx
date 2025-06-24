import { PropsWithChildren } from "react";

interface MyCustomComponentProps {
  name: string;
  text: string;
}

export function MyCustomComponent(props: MyCustomComponentProps) {
  return (
    <div className="flex flex-col">
      <h3>{props.name}</h3>
      <p>{props.text}</p>
    </div>
  );
}
