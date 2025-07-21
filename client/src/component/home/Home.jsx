import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaEye, FaEdit, FaTrash, FaCopy } from "react-icons/fa";

import { FaBox, FaList, FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const products = [
    {
        id: 1,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 2,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 3,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 4,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 5,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 6,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 7,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 8,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 9,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
    {
        id: 10,
        title: "Enamul Hossen Firoz",
        price: "10000.00 Tk",
        sell: "10000.00 Tk",
        image:
            "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
    },
];

const Home = () => {
    const [page, setPage] = useState(1);
    const [selectedRows, setSelectedRows] = useState([]);
    const rowsPerPage = 10;

    const handlePageChange = (value) => {
        setPage(value);
    };

    const handleSelectRow = (id) => {
        setSelectedRows((prev) =>
            prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
        );
    };

    const handleSelectAllRows = (e) => {
        if (e.target.checked) {
            setSelectedRows(products.map((p) => p.id));
        } else {
            setSelectedRows([]);
        }
    };

    return (
        <div className="min-h-screen p-4 border border-neutral-200 bg-white">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8">
                {[
                    {
                        title: "Total Stock",
                        value: "1,280",
                        unit: "Pcs",
                        color: "blue",
                        icon: <FaBox />,
                    },
                    {
                        title: "Total Items",
                        value: "20",
                        unit: "Items",
                        color: "green",
                        icon: <FaList />,
                    },
                    {
                        title: "Complete Order",
                        value: "280",
                        unit: "Order",
                        color: "orange",
                        icon: <FaCheckCircle />,
                    },
                    {
                        title: "New Order",
                        value: "280",
                        unit: "Order",
                        color: "teal",
                        icon: <FaShoppingCart />,
                    },
                ].map((card, i) => (
                    <div
                        key={i}
                        className={`p-6 from-white  border border-neutral-300 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
                    >
                        <div className="flex items-center justify-between space-x-3">
                            <div>
                                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                    {card.title}
                                </p>
                                <div className="flex  items-center mt-2 space-x-2">
                                    <h2 className={`text-2xl font-extrabold text-neutral-900  `}>
                                        {card.value}
                                    </h2>
                                    <span className={`text-sm font-semibold text-neutral-800 `}>
                                        {card.unit}
                                    </span>
                                </div>
                            </div>
                            <div className={`text-2xl text-sky-800 `}>{card.icon}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search & Actions */}
            <div className="flex flex-wrap justify-between items-center mb-4 gap-3">
                <div className="relative w-full sm:w-80">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="border border-neutral-300 outline-0 px-3 py-2 rounded w-full "
                    />
                    <FaSearch className="absolute right-4  top-3 text-gray-400 cursor-pointer" />
                </div>

                <div className="flex gap-3">
                    <button
                        disabled={selectedRows.length === 0}
                        className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
                    >
                        Delete Selected
                    </button>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded">
                        Add New Product
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto ">
                <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                        <tr>
                            <th className="p-4  flex items-center justify-center">
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAllRows}
                                    checked={selectedRows.length === products.length}
                                    className="accent-sky-700 w-4 h-4 block"
                                />
                            </th>
                            <th className="p-4 text-base text-neutral-800">Product Title</th>
                            <th className="p-4 text-base text-neutral-800">Price</th>
                            <th className="p-4 text-base text-neutral-800">Sell</th>
                            <th className="p-4 text-base text-neutral-800 text-center">
                                Image
                            </th>
                            <th className="p-4 text-base text-neutral-800">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products
                            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                            .map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition">
                                    <td className="p-4 text-center">
                                        <input
                                            type="checkbox"
                                            checked={selectedRows.includes(product.id)}
                                            onChange={() => handleSelectRow(product.id)}
                                            className="accent-sky-700 w-4 h-4"
                                        />
                                    </td>
                                    <td className="p-4 text-neutral-700 text-[16px] font-medium">
                                        {product.title}
                                    </td>
                                    <td className="p-4 text-neutral-700 text-[16px]">
                                        {product.price}
                                    </td>
                                    <td className="p-4 text-neutral-700 text-[16px]">
                                        {product.sell}
                                    </td>
                                    <td className="p-4 text-neutral-700 text-[16px] text-center">
                                        {product.image ? (
                                            <img
                                                src={product.image}
                                                alt="product"
                                                className="w-auto h-16 object-cover rounded mx-auto"
                                            />
                                        ) : (
                                            <span className="text-neutral-700 text-[16px] text-center">
                                                No image
                                            </span>
                                        )}
                                    </td>
                                    <td className="p-4 space-x-3">
                                        <Link to="/product-details">
                                            <button
                                                title="View"
                                                className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                                            >
                                                <FaEye />
                                            </button>
                                        </Link>
                                        <button
                                            title="Edit"
                                            className="text-yellow-500 hover:text-yellow-700 transition cursor-pointer"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            title="Delete"
                                            className="text-red-600 hover:text-red-800 transition cursor-pointer"
                                        >
                                            <FaTrash />
                                        </button>
                                        <button
                                            title="Copy"
                                            className="text-gray-500 hover:text-gray-700 transition cursor-pointer"
                                        >
                                            <FaCopy />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
                <p className="text-sm text-gray-500">
                    Showing {Math.min(rowsPerPage, products.length)} of {products.length}{" "}
                    products
                </p>

                <div className="flex flex-wrap gap-2">
                    {[...Array(Math.ceil(products.length / rowsPerPage)).keys()].map(
                        (num) => (
                            <button
                                key={num}
                                onClick={() => handlePageChange(num + 1)}
                                className={`px-4 py-1.5 text-sm font-medium rounded-md border transition-all
                                        ${page === num + 1
                                        ? "bg-blue-600 text-white border-blue-600"
                                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                                    }
        `}
                            >
                                {num + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
