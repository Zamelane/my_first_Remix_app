import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable'
import { Separator } from '../ui/separator'
import Menu from './menu'
import { Outlet } from "@remix-run/react"
import { useState } from 'react'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function mainPage() {
    const [getResizable, setResizable] = useState(false)
    const checkSize = () => {
        setResizable(!getResizable)
    }
    return (
        <>
            <div className='p-5'>
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>Сервер</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                Настроить
                            </MenubarItem>
                            <MenubarSub>
                                <MenubarSubTrigger>poo.tomedu.ru</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Обновить</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Только обновить</MenubarItem>
                                            <MenubarItem disabled>Обновить и перезапустить</MenubarItem>
                                        </MenubarSubContent>
                                        <MenubarItem>
                                            Проверить версию...
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem disabled>Перезапустить</MenubarItem>
                                    </MenubarSub>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSub>
                                <MenubarSubTrigger>diary.kopchan7.keenetic.link</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Обновить</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Только обновить</MenubarItem>
                                            <MenubarItem disabled>Обновить и перезапустить</MenubarItem>
                                        </MenubarSubContent>
                                        <MenubarItem>
                                            Проверить версию...
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem disabled>Перезапустить</MenubarItem>
                                    </MenubarSub>
                                </MenubarSubContent>
                            </MenubarSub>
                            <MenubarSub>
                                <MenubarSubTrigger>diary.zm.noho.st</MenubarSubTrigger>
                                <MenubarSubContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>Обновить</MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>Только обновить</MenubarItem>
                                            <MenubarItem disabled>Обновить и перезапустить</MenubarItem>
                                        </MenubarSubContent>
                                        <MenubarItem>
                                            Проверить версию...
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem disabled>Перезапустить</MenubarItem>
                                    </MenubarSub>
                                </MenubarSubContent>
                            </MenubarSub>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger>Воркер</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                Проверить токены
                            </MenubarItem>
                            <MenubarItem>
                                Проверить куки
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
            <Separator />
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
        </>

    )
}