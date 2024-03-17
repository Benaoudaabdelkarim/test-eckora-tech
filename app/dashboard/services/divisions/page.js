"use client";
import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import Swal from "sweetalert2";

import Dropdown from "@/app/dashboard/components/Dropdown";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Divisions() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const tableActionButtons = [{ name: "action1" }];

  const getDivisions = () => {
    axios
      .get("/divisions/pagination")
      .then((response) => {
        setList(response.data.data.list);
        setLoading(false);
      })
      .catch((error) => {
        console.error();
      });
  };

  useEffect(() => {
    setLoading(true);
    getDivisions();
  }, []);

  const handleActionOneEvent = (data) => {
    console.log("Data received from child:", data);
    // Process the data as needed
  };

  // State to manage checked rows
  const [checkedRows, setCheckedRows] = useState([]);

  // State to manage the global checkbox
  const [isAllChecked, setIsAllChecked] = useState(false);

  // Effect to handle changes in checkedRows
  useEffect(() => {
    setIsAllChecked(checkedRows.length === list.length);
  }, [checkedRows, list.length]);

  // Handle individual row checkbox changes
  const handleRowCheckChange = (id) => {
    setCheckedRows((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Handle global checkbox change
  const handleGlobalCheckChange = () => {
    if (isAllChecked) {
      setCheckedRows([]);
    } else {
      setCheckedRows(list.map((item) => item.id));
    }
    setIsAllChecked(!isAllChecked);
  };

  const handleBulkDelete = () => {
    Swal.fire({
      title: "Supprimer les division selectionnée",
      showCancelButton: true,
      confirmButtonText: "Supprimer",
      confirmButtonColor: "red",
      cancelButtonText: "Annulée",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("/divisions/many", {
            data: { ids: checkedRows },
          })
          .then((response) => {
            getDivisions();
            Swal.fire("Operation avec success", "", "success");
          })
          .catch((error) => {
            Swal.fire("Server error!", "", "error");
            console.error();
          });
      }
    });
  };

  const handleSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };

  const performSearch = () => {
    if (query) {
      axios
        .get(`divisions?name=${query}`)
        .then((response) => {
          console.log(response);
          setList(response.data.data.list);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    }
  };

  return (
    <div className="p-6 bg-white rounded-[10px]">
      <div className="flex justify-between items-center">
        <div className="relative  bg-[#F7F8F8]  ">
          <div className="absolute left-0 inset-y-0 flex justify-center items-center ml-2">
            <FontAwesomeIcon
              icon={faSearch}
              className="text-12 text-[#349F8B]"
            />
          </div>
          <input
            type="text"
            className="bg-[#F7F8F8] text-sm  pl-7 p-3 rounded-md"
            placeholder="Recherchez nos services par nom ou par mots-clés"
            value={query}
            onChange={handleSearchInputChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <div className="flex items-center gap-3 ">
          <button
            className="text-sm text-red-500 font-medium border border-red-500 rounded-md py-2 px-4"
            onClick={() => handleBulkDelete()}
          >
            Supprimer ({checkedRows.length})
          </button>
          <a
            className="btn-default"
            href="/dashboard/services/divisions/create"
          >
            Créer une divison
          </a>
        </div>
      </div>
      <table className="w-full text-left ">
        <thead className="">
          <tr>
            <th className="py-4">
              <input
                type="checkbox"
                checked={isAllChecked}
                onChange={handleGlobalCheckChange}
              ></input>
            </th>
            <th className="py-4">Division administratives</th>
            <th className="py-4">Utilisateur</th>
            <th className="py-4">Date de création</th>
            <th className="py-4">Statut</th>
            <th className="py-4">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {list.map((item) => (
            <tr key={item.name}>
              <td className="py-2">
                <input
                  type="checkbox"
                  checked={checkedRows.includes(item.id)}
                  onChange={() => handleRowCheckChange(item.id)}
                />
              </td>
              <td className="py-2">
                {" "}
                <p className=" font-medium">{item.name}</p>{" "}
              </td>
              <td className="py-2">
                {" "}
                <p>{item.userId}</p>{" "}
              </td>
              <td className="py-2">
                {" "}
                <p>
                  {new Date(item.createdAt).toLocaleDateString("fr-fr", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })}
                </p>{" "}
              </td>
              <td className="py-2">
                {" "}
                {item.status ? (
                  <span className="text-xs text-green-500 py-1 rounded-[5px] px-3 font-medium bg-green-100">
                    Actif
                  </span>
                ) : (
                  <span className="text-xs text-orange-500 py-1 rounded-[5px] px-3 font-medium bg-orange-100">
                    In-actif
                  </span>
                )}{" "}
              </td>
              <td className="py-2">
                <div className="relative">
                  <Dropdown
                    title="Action"
                    buttons={tableActionButtons}
                    onChildEvent={handleActionOneEvent}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div>Selected IDs: {JSON.stringify(checkedRows)}</div> */}
    </div>
  );
}
// 1763454346436529
// yahyaoui idir
