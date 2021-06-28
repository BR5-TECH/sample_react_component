import {ImageObject} from "./ImageObject";


export const featured = (title: string, message = "", image?: ImageObject,  date = Math.round(Date.now() / 1000), id = 0) => ({
    id: id,
    title: title,
    message: message,
    image: image,
    date: date,
})


export type FeaturedMessage = ReturnType<typeof featured>