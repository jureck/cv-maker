import React from "react";
import { Document } from "@react-pdf/renderer";

import Template0 from "./Template0";
import Template1 from "./Template1";

const CvDocument = (props) => {
    let choosenTemplate;
    if (props.template.number === "0")
        choosenTemplate = <Template0 {...props} />;
    if (props.template.number === "1")
        choosenTemplate = <Template1 {...props} />;
    return <Document>{choosenTemplate}</Document>;
};

export default CvDocument;
