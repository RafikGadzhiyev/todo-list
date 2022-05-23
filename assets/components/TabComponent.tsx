import { ITabProps } from "../types/Props.type";
import {
    Tab,
    TabButton
} from "./StyledComponents";


export const TabComponent: React.FC<ITabProps> = (props) => {
    return <Tab>
        <TabButton
            onClick={() => props.setCurrentTab(() => ({
                tab: props.tabValue,
                index: props.tabIndex
            }))}
        >
            {props.tabValue}
        </TabButton>
    </Tab>
}