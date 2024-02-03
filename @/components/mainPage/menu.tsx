import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList
} from "@/components/ui/command"
import {
    AvatarIcon,
    CardStackIcon,
    HomeIcon,
    BackpackIcon,
    CalendarIcon
} from "@radix-ui/react-icons"

export default function Menu() {
    return (
        <Command className="rounded-lg border shadow-md">
            <CommandInput placeholder="Введите действие..." />
            <CommandList>
                <CommandEmpty>Ничего не найдено.</CommandEmpty>
                <CommandGroup heading="По базе">
                    <CommandItem>
                        <HomeIcon className="mr-2 h-4 w-4" />
                        <span>Учебные заведения</span>
                    </CommandItem>
                    <CommandItem>
                        <BackpackIcon className="mr-2 h-4 w-4" />
                        <span>Преподаватели</span>
                    </CommandItem>
                    <CommandItem>
                        <CardStackIcon className="mr-2 h-4 w-4" />
                        <span>Группы</span>
                    </CommandItem>
                    <CommandItem>
                        <AvatarIcon className="mr-2 h-4 w-4" />
                        <span>Студенты</span>
                    </CommandItem>
                    <CommandItem>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Расписание</span>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}