import { PanelOnCollapse } from 'react-resizable-panels'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import Menu from './menu'
import { Outlet } from "@remix-run/react"
import { useState } from 'react'
export default function mainPage() {
    const [getResizable, setResizable] = useState(false)
    const checkSize = () => {
        setResizable(!getResizable)
    }
    return (
        <ResizablePanelGroup
            direction='horizontal'
            className='min-h-[100vh] w-full'>
            <ResizablePanel
                minSize={12}
                maxSize={15}
                collapsedSize={3}
                collapsible
                onCollapse={checkSize}
                onExpand={checkSize}
                className={'min-w-[fit-content] max-w-[250px] ' + (!getResizable && 'max-w-[50px] transition-all duration-300 ease-in-out')}>
                <Menu resizableState={getResizable} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel className='p-5'>
                <Outlet />
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}