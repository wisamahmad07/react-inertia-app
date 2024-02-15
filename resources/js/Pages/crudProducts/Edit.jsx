import React, { useState } from "react";
import { router } from "@inertiajs/react";
import HeadBar from "../navbar/HeadBar";

export default function Edit({ products }) {
    const [values, setValues] = useState({
        // Form fields
        title: products.title,
    });
    const [saved, setSaved] = useState(false);

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.put(`/products/${products.id}`, values);
        setSaved(true);
        setTimeout(() => {
            setSaved(false);
        }, 2000);
    }

    return (
        <>
            <HeadBar />
            <h1>Edit Product</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={values.title}
                    onChange={handleChange}
                />

                <button type="submit">Update</button>
            </form>
            {saved && <div className="bg-success text-white">Updated</div>}
        </>
    );
}
