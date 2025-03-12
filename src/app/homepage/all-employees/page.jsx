"use client";
import { useState, useEffect } from "react";
import Card from "@/app/components/Card";
import Button from "@/app/components/Button";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import eye from "@/assets/open-eye.png";
import pencil from "@/assets/pen.png";
import icon from "@/assets/delete.png";

export default function EmployeeTable() {
  const [search, setSearch] = useState("");
  const [tableData, setTableData] = useState([]);
  console.log("tableData:", tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const fetchData = async (page) => {
    try {
      const data = await fetch(`/api/employees?page=${page}`);
      const response = await data.json();
      if (response) {
        setTableData(response.data);
        setCurrentPage(response.currentPage);
        setTotalPages(response.totalPages);
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const getPagination = () => {
    const pagination = [];
    const maxButtons = 4;
    const halfMax = Math.floor(maxButtons / 2);
    let startPage = Math.max(1, currentPage - halfMax);
    let endPage = Math.min(totalPages, currentPage + halfMax);
    if (currentPage <= halfMax) {
      endPage = Math.min(totalPages, maxButtons);
    }
    if (currentPage > totalPages - halfMax) {
      startPage = Math.max(1, totalPages - maxButtons + 1);
    }
    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }
    return pagination;
  };

  const handlePagination = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-4 bg-white h-screen thin-scrollbar overflow-y-scroll">
      <Card className="p-4 bg-white shadow-md rounded-lg border">
        <div className="flex relative justify-between mb-4">
          <Search className="absolute left-3 top-3 text-gray-500" size={18} />
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-100"
          />
          <Button
            className="bg-purple-600 text-white"
            onClick={() =>
              router.push("/homepage/add-new-user/personal-information-form")
            }
          >
            Add New Employee
          </Button>
        </div>
        <table className="w-full border-collapse border-gray-300 text-[13px]">
          <thead>
            <tr className="bg-white text-gray-400 font-[400]">
              <td className="p-3">Employee Name</td>
              <td className="p-3 w-[120px]">Employee ID</td>
              <td className="p-3">Department</td>
              <td className="p-3">Designation</td>
              <td className="p-3">Type</td>
              <td className="p-3">Status</td>
              <td className="p-3">Action</td>
            </tr>
          </thead>
          <tbody>
            {tableData.map((emp, index) => (
              <tr key={index} className="border">
                <td className="p-2 flex items-center gap-2">
                  <Image
                    src={emp.image}
                    alt={emp.first_name}
                    width={30}
                    height={30}
                    className="rounded-full border"
                  />
                  {emp.first_name} {emp.last_name}
                </td>
                <td className="border p-2">{emp.employee_id}</td>
                <td className="border p-2">{emp.department}</td>
                <td className="border p-2">{emp.designation}</td>
                <td className="border p-2">{emp.employee_type}</td>
                <td className="border p-2 text-purple-600 font-semibold">
                  permanent
                </td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <Image
                      src={eye}
                      alt="eyeicon"
                      width={16}
                      height={16}
                      onClick={() =>
                        router.push(
                          `/homepage/view-user/personal-information/${emp.id}`
                        )
                      }
                    />
                    <Image src={pencil} alt="editicon" width={16} height={16} />
                    <Image src={icon} alt="deleteicon" width={16} height={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="arrow"
            onClick={() => handlePagination(1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          <button
            className="arrow"
            onClick={() => handlePagination(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lsaquo;
          </button>
          {getPagination().map((page) => (
            <button
              key={page}
              className={`px-3 py-1 ${
                currentPage === page
                  ? "text-purple-600 font-bold border-2 rounded-lg border-purple-600"
                  : ""
              }`}
              onClick={() => handlePagination(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="arrow"
            onClick={() => handlePagination(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &rsaquo;
          </button>
          <button
            className="arrow"
            onClick={() => handlePagination(totalPages)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </Card>
    </div>
  );
}
