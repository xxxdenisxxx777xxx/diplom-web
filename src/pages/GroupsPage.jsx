import DropGroups from "../components/DropGroups"
import { PlusIcon } from '@heroicons/react/20/solid'

export default function GroupsPage() {
    return (
        <>
            <div className="p-10 ">
                <div className="flex items-center justify-between gap-5">
                    <div className="w-full">
                        <DropGroups />
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-4 pt-10 lg:grid-cols-3 lg:gap-8 text-center ">
                    <div className="h-64 rounded-lg bg-gray-200 flex justify-center items-center">
                        <button
                            type="button"
                            className="relative block w-full h-64 rounded-lg border-2 border-dashed bg-white p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            <svg
                                className="mx-auto h-12 w-12 text-gray-400"
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
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 20-1</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 20-2</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 21-1</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 21-2</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 22-1</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 22-2</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 23-1</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 23-2</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 24-1</div>
                        </div>
                    </div>
                    <div className="h-64 rounded-lg border-2 hover:border-sky-600 bg-gray-50 relative">
                        <svg
                            className="absolute top-2 right-2 h-6 w-6 text-slate-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="text-2xl text-slate-600">КН 24-2</div>
                        </div>
                    </div>

                </div>



            </div>
        </>
    );
}
