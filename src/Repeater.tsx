import { Fragment, ReactElement, createElement } from "react";
import classNames from "classnames";

import { RepeaterContainerProps } from "../typings/RepeaterProps";

export function Repeater(props: RepeaterContainerProps): ReactElement {
    const emptyPlaceholder = props.datasource.items?.length === 0 ? props.emptyPlaceholder : null;
    return (
        <div style={props.style} className={classNames(props.class, `mx-name-${props.name}`)}>
            {props.datasource.items?.map((item, index) => (
                <Fragment key={`item_${index}`}>{props.content.get(item)}</Fragment>
            ))}
            {emptyPlaceholder}
        </div>
    );
}
