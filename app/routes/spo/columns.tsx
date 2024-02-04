import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table"
import { Model, Optional } from "sequelize";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export type SPO = {
    id: number
    abbreviation: string
    name: string
    shortName: string
    actualAddress: string
    email: string
    site: string
    phone: string
    type: string
    directorName: string
}

export interface SPOAttributes extends Optional<SPO, 'id'> {}
export interface SPOInstance extends Model<SPO, SPOAttributes>, SPO {}

export const SPOCols = {
  email: "Почта",
  site: "Сайт",
  directorName: "Директор",
  abbreviation: "Наименование",
  actions: "Действия",
}

export const columns: ColumnDef<unknown, SPO>[] = [
    {
        accessorKey: "abbreviation",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Наименование
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
    },
    {
        accessorKey: "email",
        header: "Почта"
    },
    {
        accessorKey: "site",
        header: "Сайт",
    },
    {
        accessorKey: "directorName",
        header: "Директор",
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const spo = row.original as unknown as SPO
     
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Открыть меню</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Действия</DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(spo.id.toString())}
                >
                  Копировать SPO ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Посмотреть подробнее</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
]