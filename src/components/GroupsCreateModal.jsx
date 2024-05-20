import React, { useState } from 'react';


function GroupsCreateModal({ isOpen, onClose, onSubmit }) {
    const [groupName, setGroupName] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('1 курс');


    const handleSubmit = () => {
        onSubmit(groupName, selectedCourse);
        setGroupName('');
        setSelectedCourse('1 курс');
        onClose();
    };
    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-md">
                        <h2 className="text-2xl font-bold mb-4">Создать новую группу</h2>
                        <input
                            type="text"
                            placeholder="Название группы"
                            className="border border-gray-300 rounded-md px-4 py-2 mb-4"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                        />
                        <div className="mb-4">
                            <label htmlFor="course" className="block text-sm font-medium text-gray-700">Выберите курс:</label>
                            <select
                                id="course"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={selectedCourse}
                                onChange={(e) => setSelectedCourse(e.target.value)}
                            >
                                <option>1 курс</option>
                                <option>2 курс</option>
                                <option>3 курс</option>
                                <option>4 курс</option>
                            </select>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                                onClick={handleSubmit}
                            >
                                Создать
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                                onClick={onClose}
                            >
                                Отмена
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default GroupsCreateModal;
