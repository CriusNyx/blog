import { useMemo } from "react";
import * as Luxon from "luxon";

interface WrittenProps {
  date: string;
}

export function Written(props: WrittenProps) {
  const dateString = useMemo(
    () => Luxon.DateTime.fromFormat(props.date, "M/d/y").toLocaleString(),
    [props.date],
  );
  return <span className="text-gray-300">Written: {dateString}</span>;
}
