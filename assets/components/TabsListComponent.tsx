import { useRef } from 'react';
import { ITab } from './../types/Data.type'
import { ITabListProps } from './../types/Props.type'
import { TabComponent } from './TabComponent';
import { TabList } from './StyledComponents';

export const TabListComponent: React.FC<ITabListProps> = (props) => {
    const idGenerator = require('short-id');
    const TABS = useRef<Array<ITab>>([
        {
            value: 'All',
            id: idGenerator.generate()
        },
        {
            value: "Active",
            id: idGenerator.generate()
        },
        {
            value: "Completed",
            id: idGenerator.generate()
        }
    ])
    return <TabList
        tabIndex={props.currentTab.index}
    >
        {
            TABS.current.map((e: ITab, i: number) => <TabComponent
                key={e.id}
                tabIndex={i}
                tabValue={e.value}
                setCurrentTab={props.setCurrentTab}
            />)
        }
    </TabList>
}