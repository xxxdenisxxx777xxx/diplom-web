import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const groups = [
    { id: 1, name: 'Всі групи' },
    { id: 2, name: 'КН 20-1' },
    { id: 3, name: 'КН 20-2' },
    { id: 4, name: 'КН 21-1' },
    { id: 5, name: 'КН 21-2' },
    { id: 6, name: 'КН 22-1' },
    { id: 7, name: 'КН 22-2' },
    { id: 8, name: 'КН 23-1' },
    { id: 9, name: 'КН 23-2' },
    { id: 10, name: 'КН 24-1' },
    { id: 11, name: 'КН 24-2' },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function DropGroups({ selectedGroup, setSelectedGroup }) {
    return (
        <Listbox value={selectedGroup} onChange={setSelectedGroup}>
            {({ open }) => (
                <>
                    <div className=''>
                        <Listbox.Label className="block text-md font-medium leading-6 text-gray-900">Оберіть курс</Listbox.Label>
                        <div className="relative mt-2">
                            <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-2.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{selectedGroup}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>
                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {groups.map((group) => (
                                        <Listbox.Option
                                            key={group.id}
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                                )
                                            }
                                            value={group.name}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <div className="flex items-center">
                                                        <span
                                                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                                        >
                                                            {group.name}
                                                        </span>
                                                    </div>
                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-indigo-600',
                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </div>
                </>
            )}
        </Listbox>
    );
}
