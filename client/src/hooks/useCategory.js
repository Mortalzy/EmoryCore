import { useState, useEffect } from "react";
import { 
    getCategoriesApi, 
    createCategoryApi, 
    deleteCategoryApi, 
    editCategoryApi 
} from "../api/categoryApi.js";

const useCategory = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        loadCategory()
    }, [])

    const loadCategory = async () => {
        getCategoriesApi()
        .then((data) => {
            console.log(data)
            setCategories(data)
        })
        .catch(error => console.log(error))
    }

    const createCategory = async (formData) => {
        createCategoryApi(formData)
        .then((newCategory) => {
            console.log('Созданный: ', newCategory)
            setCategories([...categories, newCategory])
        })
        .catch(error => console.log(error))
    }

    const deleteCategory = async (id) => {
        deleteCategoryApi(id)
        .then((deleted) => {
            console.log('Deleted: ', deleted)
            const newCategories = categories.filter( category => category.id !== id)
            setCategories(newCategories)
        })
        .catch(error => console.log(error))
    }

    const editCategory = async (id, newData) => {
        editCategoryApi(id, newData)
        .then((edited) => {
            const newCategories = categories.map((category) => {
                return category.id === id ? edited : category
            })
            setCategories(newCategories)
            console.log("Обновленный: ", edited);
        })
        .catch(error => console.log(error))
    }
    return {
        categories,
        setCategories,
        createCategory,
        editCategory,
        deleteCategory
    }
}

export default useCategory