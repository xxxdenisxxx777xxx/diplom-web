import DropCourse from "../components/DropCourse"
import { PlusIcon } from '@heroicons/react/20/solid'
import GroupsCreateModal from "../components/GroupsCreateModal";
import { useState } from "react";

export default function GroupsPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [groups, setGroups] = useState([]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleCreateGroup = (groupName) => {
        // Создаем новую группу
        const newGroup = { id: groups.length + 1, name: groupName };
        // Обновляем список групп
        setGroups([...groups, newGroup]);
        // Закрываем модальное окно
        closeModal();
    };

    const handleDeleteGroup = (id) => {
        // Фильтруем группы, оставляя только те, у которых id не совпадает с id удаляемой группы
        const updatedGroups = groups.filter(group => group.id !== id);
        // Обновляем список групп
        setGroups(updatedGroups);
    };

    return (
        <>
            <div className="p-10 ">
                <div className="flex items-center justify-between gap-5">
                    <div className="w-full">
                        <DropCourse />
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3 lg:gap-8 text-center ">
                    <div className="h-64 rounded-lg bg-gray-200 flex justify-center items-center">
                        <button
                            type="button"
                            className="relative block w-full h-64 rounded-lg border-2 border-dashed bg-white p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={openModal}
                        >
                            <svg
                                className="mx-auto h-12 w-12 cursor-pointer z-50 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
                                />
                            </svg>
                            <span className="mt-7 block text-sm font-semibold">Створити нову группу</span>
                        </button>
                    </div>

                    {groups.map((group) => (
                        <div key={group.id} className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                            <svg
                                className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                                onClick={() => handleDeleteGroup(group.id)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="text-2xl text-slate-600">{group.name}</div>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
            <GroupsCreateModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleCreateGroup} />
        </>
    );
}
