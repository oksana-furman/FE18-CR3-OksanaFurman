export interface IProducts {
    name: string,
    category: string,
    ingridients: string,
    vegan: boolean,
    spicy?: boolean,
    price?: number,
    photo: string,
    description: string
}