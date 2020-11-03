import ImageObject from "./ImageObject";


class FeaturedMessage {
    constructor(public id: number, public title: string, public message: string, public date: number, public image?: ImageObject) { }
}

export default FeaturedMessage