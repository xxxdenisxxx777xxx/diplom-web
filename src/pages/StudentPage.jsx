import DropGroups from "../components/DropGroups"
import { useState } from "react";
import StudentsTable from "../components/StudentsTable"

export default function StudentPage() {
    const [selectedGroup, setSelectedGroup] = useState("Всі групи");
    return (
        <>
            <div className="p-10 ">
                <div className="flex items-center justify-between gap-5">
                    <div className="w-full">
                        <DropGroups selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroup} />
                        <StudentsTable selectedGroup={selectedGroup} />
                    </div>
                </div>
            </div>
        </>
    )
}