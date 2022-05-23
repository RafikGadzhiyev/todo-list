import React from "react";
import { ICurrentTab } from "./Data.type";

export interface ITabListProps {
    currentTab: ICurrentTab,
    setCurrentTab: React.Dispatch<React.SetStateAction<ICurrentTab>>
}

export interface ITabProps {
    setCurrentTab: React.Dispatch<React.SetStateAction<ICurrentTab>>,
    tabValue: string,
    tabIndex: number,
}

export interface ITodoListProps {
    currentTab: ICurrentTab
}

export interface ITodoProps {
    content: string,
    completed: boolean,
    index: number
}

export interface IFormProps {
    currentTab: ICurrentTab
}