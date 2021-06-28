import {ImageObject} from "./ImageObject";


export const menuElement = (link: string, element: string|ImageObject, id = "") => ({
    id: id,
    link: link,
    element: element,
})

export type MenuElement = ReturnType<typeof menuElement>