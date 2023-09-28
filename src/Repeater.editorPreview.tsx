import { Fragment, ReactElement, createElement } from "react";

import { parseStyle } from "./preview/parse-style";
import { RepeaterPreviewProps } from "../typings/RepeaterProps";

export function preview(props: RepeaterPreviewProps): ReactElement {
    return (
        <div style={parseStyle(props.style)} className={props.class}>
            {["1", "2", "3"].map((item, index) => (
                <Fragment key={`item_${index}`}>
                    <props.content.renderer caption={`Repeater item content ${item}`}>
                        <div>{`Repeater item content ${item}`}</div>
                    </props.content.renderer>
                </Fragment>
            ))}
            <props.emptyPlaceholder.renderer caption="Empty content">
                <div />
            </props.emptyPlaceholder.renderer>
        </div>
    );
}
