"use client";
import { useState, useEffect } from "react";
import MDEditor from '@uiw/react-md-editor';
import axios from "@/app/utils/axios";
import Swal from 'sweetalert2'

export default function CreateDivision() {

    const initialFormData = {
        name: '',
        localizationName: '',
        localizationLink: '',
        managers: [],
        days: []
    };

    const [formData, setFormData] = useState(initialFormData);
    const [mdValue, setMdValue] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Add a manager
    const addManager = () => {
        setFormData(prevState => ({
            ...prevState,
            managers: [...prevState.managers, { postTitle: '', fullName: '' }]
        }));
    };

    // Remove a manager
    const removeManager = (index) => {
        setFormData(prevState => ({
            ...prevState,
            managers: prevState.managers.filter((_, i) => i !== index)
        }));
    };

    // Handle change for managers
    const handleManagerChange = (e, index) => {
        const { name, value } = e.target;
        const updatedManagers = [...formData.managers];
        updatedManagers[index][name] = value;
        setFormData(prevState => ({
            ...prevState,
            managers: updatedManagers,
        }));
    };

    // Add a day
    const addDay = () => {
        setFormData(prevState => ({
            ...prevState,
            days: [...prevState.days, { day: '', startTime: '', endTime: '' }]
        }));
    };

    // Remove a day
    const removeDay = (index) => {
        setFormData(prevState => ({
            ...prevState,
            days: prevState.days.filter((_, i) => i !== index)
        }));
    };

    // Handle change for days
    const handleDayChange = (e, index) => {
        const { name, value } = e.target;
        const updatedDays = [...formData.days];
        updatedDays[index][name] = value;
        setFormData(prevState => ({
            ...prevState,
            days: updatedDays,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        formData['description'] = mdValue
        axios
            .post("/divisions", formData)
            .then((response) => {
                Swal.fire("Cree avec success", "", "success");
                setLoading(false)
                setFormData(initialFormData);
                setMdValue("")
            })
            .catch((error) => {
                Swal.fire("Server error!", "", "error");
                setLoading(false)
            });
    };

    const resetFormData = () => {
        setFormData(initialFormData);
        setMdValue("")

    };

    return (
        <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="bg-white rounded-md py-6 px-4">
                <h2 className="text-2xl font-medium ">Nom de la division administratif * </h2>
                <div className="flex gap-3 mt-6">
                    <input type="text" className="input-default"
                        placeholder="Enter le nom de la division "
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <select className="input-default">
                        <option>lang 1</option>
                        <option>lang 2</option>
                    </select>
                </div>
            </div>
            <div className="bg-white rounded-md py-6 px-4">
                <h2 className="text-2xl font-medium ">Description * </h2>
                <div className="mt-6 ">
                    <MDEditor
                        className="z-0"
                        placeholder="Décrivez cette division  ..."
                        value={mdValue}
                        onChange={setMdValue}
                        required
                    />
                </div>
            </div>
            <div className="bg-white rounded-md py-6 px-4">
                <h2 className="text-2xl font-medium ">Les responsables de la division  *  </h2>
                {formData.managers.map((manager, index) => (
                    <div className="flex gap-3 mt-6">
                        <input type="text"
                            className="input-default"
                            placeholder="Enter le titre du poste "
                            name="postTitle"
                            value={manager.postTitle}
                            onChange={(e) => handleManagerChange(e, index)}
                            required
                        />
                        <input type="text"
                            className="input-default"
                            placeholder="Enter le nom du responsable "
                            name="fullName"
                            value={manager.fullName}
                            onChange={(e) => handleManagerChange(e, index)}
                            required
                        />
                    </div>
                ))}
                <button className="text-sm text-blue-500 underline m-4" type="button" onClick={addManager}>Ajouter un autre responsable </button>
            </div>
            <div className="bg-white rounded-md py-6 px-4">
                <h2 className="text-2xl font-medium ">Jours de réception et horaires d’ouvertures </h2>
                {formData.days.map((day, index) => (
                    <div className="flex gap-3 mt-6 items-end">
                        <div className="w-full">
                            <label className="font-medium">Date de début </label>
                            <input
                                type="date"
                                className="input-default h-16 mt-4"
                                name="day"
                                value={day.day}
                                onChange={(e) => handleDayChange(e, index)}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-[#383A42]">De </label>
                            <input
                                type="time"
                                className="input-default h-11"
                                name="startTime"
                                value={day.startTime}
                                onChange={(e) => handleDayChange(e, index)}
                            />
                        </div>
                        <div className="w-full">
                            <label className="text-xs text-[#383A42]">A </label>
                            <input
                                type="time"
                                className="input-default h-11"
                                name="endTime"
                                value={day.endTime}
                                onChange={(e) => handleDayChange(e, index)}
                            />
                        </div>
                    </div>
                ))}
                <button className="text-sm text-blue-500 underline m-4" type="button" onClick={addDay}>Ajouter un autre jour  </button>
            </div>
            <div className="bg-white rounded-md py-6 px-4">
                <h2 className="text-2xl font-medium ">Adresse de la division </h2>
                <div className="mt-6">
                    <div className="w-1/2">
                        <label className="font-medium">Nom de la localisation   * </label>
                        <input
                            type="text"
                            className="input-default mt-4"
                            placeholder="Enter le nom de la localisation  "
                            name="localizationName"
                            value={formData.localizationName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mt-4 w-1/2">
                        <label className="font-medium">Lien de la Localisation  * </label>
                        <input
                            type="text"
                            className="input-default mt-4"
                            placeholder="Enter le lien de la localisation  "
                            name="localizationLink"
                            value={formData.localizationLink}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end gap-3">
                <button className="btn-seconadry px-8" type="button" onClick={() => resetFormData()}>Réinitialiser</button>
                <button className="btn-default px-8" type="submit">Publier</button>
            </div>
        </form>
    );
}
