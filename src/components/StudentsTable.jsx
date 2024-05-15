import React, { useMemo, useState } from "react";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Avatar = ({ src, alt = "avatar" }) => (
    <img src={src} alt={alt} className="w-8 h-8 rounded-full object-cover" />
);

const InputGroup = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    decoration,
    className = "",
    inputClassName = "",
    decorationClassName = "",
    disabled,
}) => (
    <div className={`flex flex-row-reverse items-stretch w-full rounded-xl overflow-hidden bg-white shadow-[0_4px_10px_rgba(0,0,0,0.03)] ${className}`}>
        <input
            id={name}
            name={name}
            value={value}
            type={type}
            placeholder={label}
            aria-label={label}
            onChange={onChange}
            className={`peer block w-full p-3 text-gray-600 focus:outline-none focus:ring-0 appearance-none ${disabled ? "bg-gray-200" : ""} ${inputClassName}`}
            disabled={disabled}
        />
        <div className={`flex items-center pl-3 py-3 text-gray-600 ${disabled ? "bg-gray-200" : ""} ${decorationClassName}`}>
            {decoration}
        </div>
    </div>
);

const GlobalSearchFilter = ({ globalFilter, setGlobalFilter, className = "ml-10" }) => (
    <InputGroup
        name="search"
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        label="Search"
        decoration={<FaSearch size="1rem" className="text-gray-400" />}
        className={className}
    />
);

const StudentsList = () => {
    const [globalFilter, setGlobalFilter] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const data = useMemo(
        () => [
            { name: "Игорь Селезнев", image: "https://via.placeholder.com/150", accountNumber: "КН20-1", accountName: "+380 99 122 21 23", amount: "2020-2024" },
            { name: "Виктор Павлов", image: "https://via.placeholder.com/150", accountNumber: "КН20-1", accountName: "+380 99 122 21 23", amount: "2020-2024" },
            { name: "Виталий Филатов", image: "https://via.placeholder.com/150", accountNumber: "КН20-2", accountName: "+380 99 122 21 23", amount: "2020-2024" },
            { name: "Алексей Иванов", image: "https://via.placeholder.com/150", accountNumber: "КН21-1", accountName: "+380 99 122 21 23", amount: "2021-2025" },
            { name: "Анатолий Краснов", image: "https://via.placeholder.com/150", accountNumber: "КН21-2", accountName: "+380 99 122 21 23", amount: "2021-2025" },
            { name: "Леонид Кривошеев", image: "https://via.placeholder.com/150", accountNumber: "КН22-1", accountName: "+380 99 122 21 23", amount: "2022-2026" },
            { name: "Виктор Наумов", image: "https://via.placeholder.com/150", accountNumber: "КН22-2", accountName: "+380 99 122 21 23", amount: "2022-2026" },
            { name: "Денис Розумовский", image: "https://via.placeholder.com/150", accountNumber: "КН23-1", accountName: "+380 99 122 21 23", amount: "2023-2027" },
            { name: "Александр Романов", image: "https://via.placeholder.com/150", accountNumber: "КН23-2", accountName: "+380 99 122 21 23", amount: "2023-2027" },
            { name: "Григорий Карпов", image: "https://via.placeholder.com/150", accountNumber: "КН24-1", accountName: "+380 99 122 21 23", amount: "2024-2028" },
            { name: "Захар Прилепин", image: "https://via.placeholder.com/150", accountNumber: "КН24-2", accountName: "+380 99 122 21 23", amount: "2024-2028" },
        ],
        []
    );

    const filteredData = data.filter((item) => item.name.toLowerCase().includes(globalFilter.toLowerCase()));

    const pageCount = Math.ceil(filteredData.length / itemsPerPage);
    const currentPageData = filteredData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const changePage = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row mt-3  justify-between gap-2">
                <GlobalSearchFilter
                    className="w-full border mt-3 mb-3"
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                />
                <button className="bg-sky-700 h-12 mt-3 w-14 text-2xl rounded-lg text-white">+</button>
            </div>
            <div className="w-full min-w-[30rem] border p-4 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.03)]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="px-3 text-start text-xs font-light uppercase">Name</th>
                            <th className="px-3 text-start text-xs font-light uppercase">Group</th>
                            <th className="px-3 text-start text-xs font-light uppercase">Phone</th>
                            <th className="px-3 text-start text-xs font-light uppercase">Period</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentPageData.map((row, i) => (
                            <tr key={i} className="hover:bg-gray-100">
                                <td className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg">
                                    <div className="flex gap-2 items-center">
                                        <Avatar src={row.image} alt={`${row.name}'s Avatar`}>
                                        </Avatar>
                                        <div>{row.name}</div>
                                    </div>
                                </td>
                                <td className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg">
                                    {row.accountNumber}
                                </td>
                                <td className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg">
                                    {row.accountName}
                                </td>
                                <td className="p-3 text-sm font-normal text-gray-700 first:rounded-l-lg last:rounded-r-lg">
                                    {row.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center">
                <ul className="flex gap-2">
                    <li>
                        <button
                            onClick={() => changePage(0)}
                            disabled={currentPage === 0}
                            className={`px-3 py-1 rounded-lg ${currentPage === 0 ? "text-gray-300" : "text-sky-700 hover:bg-sky-700 hover:text-white"
                                }`}
                        >
                            <FaChevronLeft className="mt-1" />
                        </button>
                    </li>
                    {Array.from({ length: pageCount }, (_, index) => (
                        <li key={index}>
                            <button
                                onClick={() => changePage(index)}
                                className={`px-3 py-1 rounded-lg ${index === currentPage ? "bg-sky-700 text-white" : "text-sky-700 hover:bg-sky-700 hover:text-white"
                                    }`}
                            >
                                {index + 1}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => changePage(pageCount - 1)}
                            disabled={currentPage === pageCount - 1}
                            className={`px-3 py-1 rounded-lg ${currentPage === pageCount - 1 ? "text-gray-300" : "text-sky-700 hover:bg-sky-700 hover:text-white"
                                }`}
                        >
                            <FaChevronRight className="mt-1" />
                        </button>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default StudentsList;
