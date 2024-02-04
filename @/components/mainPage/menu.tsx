import { ScrollArea } from "@radix-ui/react-scroll-area"
import { Button } from "../ui/button"
import {
    AvatarIcon,
    CardStackIcon,
    HomeIcon,
    BackpackIcon,
    CalendarIcon,
    GlobeIcon
} from "@radix-ui/react-icons"
import { Link, useLocation } from "@remix-run/react"
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

const menuItems = [
    {
        name: "Домашняя страница",
        to: "/",
        selected: true,
        avatar: (<HomeIcon />)
    },
    {
        name: "Учебные заведения",
        to: "/spo",
        avatar: (<GlobeIcon />)
    },
    {
        name: "Преподаватели",
        to: "/prepod",
        avatar: (<BackpackIcon />)
    },
    {
        name: "Группы",
        to: "/group",
        avatar: (<CardStackIcon />)
    },
    {
        name: "Студенты",
        to: "/student",
        avatar: (<AvatarIcon />)
    },
    {
        name: "Расписание",
        to: "/schedule",
        avatar: (<CalendarIcon />)
    }
]

export default function Menu({ resizableState }: { resizableState: boolean }) {
    const currPath = useLocation().pathname
    return (
        <ScrollArea className="flex flex-col gap-2 m-2">
            {menuItems.map((item) => (
                <TooltipProvider key={item.name}>
                    <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" className={"justify-start " + (currPath.indexOf(item.to) > -1 && item.to != "/" || currPath == item.to ? "bg-muted" : "")} asChild>
                                <Link to={item.to}>
                                    <div className="min-w-[fit-content] flex items-center">
                                        <div className={"h-4 w-4 " + (resizableState ? "mr-2" : "")}>{item.avatar}</div>
                                        {resizableState ? item.name : ""}
                                    </div>
                                </Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="right" className={"flex items-center gap-4 " + (resizableState ? "hidden" : "")}>
                            <p>{item.name}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
        </ScrollArea>
    )
}