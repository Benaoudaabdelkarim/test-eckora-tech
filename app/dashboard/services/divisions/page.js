"use client";
import { useState, useEffect } from "react";
import axios from "../../../utils/axios";
import Dropdown from "@/app/components/Dropdown"
export default function Divisions() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("/divisions/pagination")
      .then((response) => {
        console.log(response.data.data.list);
        setList(response.data.data.list);
        setLoading(false);
      })
      .catch((error) => {
        console.error();
      });
  }, []);

  return (
    <div className="p-6 bg-white rounded-[10px]">
      <div className="relative">
        <Dropdown/>
      </div>
      <table className="w-full text-left ">
        <thead className="">
          <tr>
            <th className="py-4">
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              ></input>
            </th>
            <th className="py-4">Division administratives {selectAll}</th>
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
                <input type="checkbox"></input>
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
                <p>{item.createdAt}</p>{" "}
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
              <td className="py-2"> actions </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
