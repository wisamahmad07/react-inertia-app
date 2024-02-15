import HeadBar from "../navbar/HeadBar";

export default function Show({ products }) {
    return (
        <>
            <HeadBar />
            <h1>{products.title}</h1>
        </>
    );
}
