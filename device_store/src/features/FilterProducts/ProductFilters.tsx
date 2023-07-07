import { useState } from "react";
import { CheckboxList } from "../../shared/UI";
import { RangeSelect } from "../../shared/UI/RangeSelect/RangeSelect";
import { getProducts } from "../../entities";

export function ProductFilters(props){
    // fix!! find min and max price in props.products 
    // fix!! make filter categories dynamic 

    const [formData, setFormData] = useState(new FormData());

    function handleFormValueChange(formKey: string, value: any){
        const newForm = formData;
        newForm.set(formKey, value);
        setFormData(newForm);
    }

    async function handleSubmit(){
        const products = await getProducts(formData);
        props.onSubmit(products);
    }

    return (
        <div>
            {/* make collapsable */}
            <button className="catalogue-btn filter-btn strong">
                Фильтр
            </button>
            <div className="filters-wrapper">
                <form className="filters-form"  onSubmit={handleSubmit}>
                    <hr className="filter-line"/>
                    <div className="filter__option">
                        <RangeSelect onValueChange={value => handleFormValueChange("price", value)}
                            displayName="Стоимость"
                            minAmount={minPrice}
                            maxAmount={maxPrice}
                        ></RangeSelect>
                    </div>
                    <hr className="filter-line"/>
                    <div className="filter__option">
                            <CheckboxList 
                                onValueChange={value => handleFormValueChange("color", value)}
                                options={colorOptions}
                                categoryName="Color"
                                displayName="Цвет"
                                
                            />
                    </div>
                    <button className="line-through-btn" type="submit">Показать</button>
                </form>
            </div>
        </div>
    )
}