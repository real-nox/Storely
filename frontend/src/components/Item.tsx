interface Category {
    name: string
}

interface Items {
    category: Category
    name: string
    description: string
    qte: number
    price: number
    isPromo: boolean
}

export default function Item({ item } : { item : Items }) {
    item.price = 5
}