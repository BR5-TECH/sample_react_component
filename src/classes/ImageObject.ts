
export const imageObject = (data: string, width = -1, height = -1, id = "") => ({
    id: id,
    data: data,
    width: width,
    height: height,
})

export type ImageObject = ReturnType<typeof imageObject>