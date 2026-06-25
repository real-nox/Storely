import { useState } from "react";
import Category from "./Category";
import Offres from "./Offres";
import Bar from "./Bar";

export default function Center() {
    const [category, setCategory] = useState("")
    return (
        <div className="Center">
            <Offres />
            <Bar setCategory={setCategory} />
            <Category category_name={category} />
        </div>
    )
}