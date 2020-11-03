import ImageObject from "./ImageObject";


class MenuElement {
    constructor(public id: string, public link: string, public element: string|ImageObject) { }
}

export default MenuElement