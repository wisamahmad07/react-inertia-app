import { InertiaLink } from "@inertiajs/inertia-react";
import HeadBar from "../navbar/HeadBar";
import { router } from "@inertiajs/react";
import { useState } from "react";

const Index = ({ products }) => {
    const [productList, setProductList] = useState(products); // Use a different name for the state variable to avoid conflict with the prop name
    function deleteProduct(item) {
        alert("sure?");
        setProductList(productList.filter((p) => p.id !== item.id));
        router.delete(`/products/${item.id}`);
    }
    return (
        <>
            <HeadBar />

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Sr no.</th>
                        <th>Title</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productList &&
                        productList.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>
                                    <InertiaLink
                                        className="btn btn-outline-success"
                                        href={`products/${item.id}/edit`}
                                    >
                                        EDIT
                                    </InertiaLink>
                                    <button
                                        className="btn btn-outline-danger"
                                        type="button"
                                        onClick={() => deleteProduct(item)}
                                    >
                                        DELETE
                                    </button>
                                    <InertiaLink
                                        className="btn btn-outline-secondary"
                                        href={`products/${item.id}`}
                                    >
                                        SHOW
                                    </InertiaLink>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    );
};

export default Index;
