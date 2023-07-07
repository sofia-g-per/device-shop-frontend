import { useState } from "react";
import { SideBarContainer, SortHeader } from "../../shared/UI";
import { ProductGrid } from "../../entities/Product/UI/ProductGrid/ProductGrid";
import React from "react";
import { ProductFilters } from "../../features";

export function ProductGridWithFilters(){

    const [products, setProducts] = useState();

    function handleProductsChange(products){
        setProducts(products);
    }
    return (
        <SideBarContainer
            sidebarContent={
                <ProductFilters
                    onSubmit={handleProductsChange(products)}
                />
            }

            mainContent={
                <React.Fragment>
                    <SortHeader onSubmit={handleProductsChange(products)} />
                    <ProductGrid products={products} />
                </React.Fragment>
            }
        />
    )
}