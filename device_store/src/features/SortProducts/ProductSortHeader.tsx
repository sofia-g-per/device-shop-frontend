import { useState } from "react";
import { SortHeader } from "../../shared/UI";
import { getProducts } from "../../entities";
export async function ProductSortHeader(props){
    const options = [
        {
            displayName: "По цене",
            name: "price"
        },
        {
            displayName: "По типу",
            name: "type"
        },
        {
            displayName: "По популярности",
            name: "popularity"
        }
    ];

    const [sortOption, setSortOption] = useState("popularity");
    const [sortDirection, setSortDirection] = useState("DESC");
    const [sortedProducts, setSortedProducts] = useState(await getProducts({sort: sortOption, sortDirection: sortDirection}));
    
    async function handleChangeSortDirection(newDirection:string){
        if(newDirection !== sortDirection){
            if(await changeSort(sortOption, newDirection)){
                setSortDirection(newDirection);
            };
        }
    }

    async function handleChangeSortOption(newOption:string) {
        if(newOption !== sortOption){
            if(await changeSort(newOption, sortDirection)){
                setSortOption(newOption);
            };
        }
    }

    async function changeSort(sortOption:string, direction:string){
        setSortedProducts(await getProducts({
            sort: sortOption,
            sortDirection: sortDirection                
        }));
        props.onChangeSort(sortedProducts);
        return true;
    }

    return (
        <SortHeader 
            onChangeSortDirection={handleChangeSortDirection}
            onChangeSortOption={handleChangeSortOption}
            sortOptions={options}
            activeSortOptions={sortOption}
            activeSortDirection={sortDirection}
        />
    )
}
