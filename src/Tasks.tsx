import React from "react";
import {DataType} from "./App";

type TasksPropsType = {
    data: DataType
}

export function Tasks(props: TasksPropsType) {
    return (
        <div>
            <li>{props.data.title}</li>
            <li>{props.data.students}</li>
        </div>
    )
}