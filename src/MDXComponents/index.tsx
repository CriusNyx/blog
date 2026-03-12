import { PropsWithChildren } from "react";
import { Col } from "./Col.tsx";
import { Frame } from "./Frame.tsx";
import { Row } from "./Row.tsx";
import { CustomH3 } from "./CustomHeaders.tsx";

export const MDXComponents = {
  Col,
  Row,
  Frame,
  Title: (props: PropsWithChildren) => <CustomH3 title {...props} />,
} as const;
