import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Веб-админка" },
    { name: "Тут описание", content: "Тут содержимое" },
  ];
};

export default function Index() {
  return (
    <div>
      Ты на домашней странице
    </div>
  )
}
