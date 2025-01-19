import React, { useState } from "react";
import { PlusCircle, Edit2, Trash2, Calendar, Save, X } from "lucide-react";

const HealthRecordPage = () => {
  const [records, setRecords] = useState([
    {
      id: "1",
      date: "2024-01-18",
      title: "Regular Checkup",
      description: "Blood pressure normal, slight arthritis in left knee.",
      category: "general",
    },
    {
      id: "2",
      date: "2024-01-18",
      title: "New Medication",
      description: "Started blood pressure medication - 10mg daily.",
      category: "medication",
    },
    {
      id: "3",
      date: "2024-01-18",
      title: "Sleep Monitoring",
      description:
        "Noticed improved sleep patterns after adjusting pillow height.",
      category: "sleep",
    },
    {
      id: "4",
      date: "2024-01-19",
      title: "Physical Activity Update",
      description: "Walked 5,000 steps, with 30 minutes of light exercise.",
      category: "activity",
    },
    {
      id: "5",
      date: "2024-01-19",
      title: "Flu Shot",
      description: "Received annual flu vaccination at local clinic.",
      category: "vaccination",
    },
    {
      id: "6",
      date: "2024-01-19",
      title: "Specialist Visit",
      description:
        "Consulted with a cardiologist; follow-up scheduled for April 1.",
      category: "appointment",
    },
    {
      id: "7",
      date: "2024-01-19",
      title: "Dietary Adjustment",
      description:
        "Added more leafy greens and reduced sodium intake as advised.",
      category: "nutrition",
    },
    {
      id: "8",
      date: "2024-01-19",
      title: "Medication Adjustment",
      description: "Reduced dosage of arthritis medication to 5mg daily.",
      category: "medication",
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newRecord, setNewRecord] = useState({
    date: new Date().toISOString().split("T")[0],
    title: "",
    description: "",
    category: "general",
  });

  const handleAdd = () => {
    if (newRecord.title && newRecord.description) {
      setRecords([
        {
          ...newRecord,
          id: Date.now().toString(),
        },
        ...records,
      ]);
      setIsAdding(false);
      setNewRecord({
        date: new Date().toISOString().split("T")[0],
        title: "",
        description: "",
        category: "general",
      });
    }
  };

  const handleEdit = (id) => {
    const record = records.find((r) => r.id === id);
    if (record) {
      setRecords(
        records.map((r) => (r.id === id ? { ...record, ...newRecord } : r))
      );
      setEditingId(null);
    }
  };

  const handleDelete = (id) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  const startEdit = (record) => {
    setEditingId(record.id);
    setNewRecord({
      date: record.date,
      title: record.title,
      description: record.description,
      category: record.category,
    });
  };

  const categoryColors = {
    general: "bg-blue-50 text-blue-700",
    medication: "bg-purple-50 text-purple-700",
    symptoms: "bg-yellow-50 text-yellow-700",
    vitals: "bg-green-50 text-green-700",
    sleep: "bg-indigo-50 text-indigo-700",
    activity: "bg-pink-50 text-pink-700",
    vaccination: "bg-red-50 text-red-700",
    appointment: "bg-orange-50 text-orange-700",
    nutrition: "bg-teal-50 text-teal-700",
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Health History</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <PlusCircle className="w-5 h-5" />
          Add Record
        </button>
      </div>

      {isAdding && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-900">
              New Health Record
            </h3>
            <button
              onClick={() => setIsAdding(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={newRecord.date}
                onChange={(e) =>
                  setNewRecord({ ...newRecord, date: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={newRecord.category}
                onChange={(e) =>
                  setNewRecord({ ...newRecord, category: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="general">General</option>
                <option value="medication">Medication</option>
                <option value="symptoms">Symptoms</option>
                <option value="vitals">Vitals</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={newRecord.title}
              onChange={(e) =>
                setNewRecord({ ...newRecord, title: e.target.value })
              }
              placeholder="Enter record title"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={newRecord.description}
              onChange={(e) =>
                setNewRecord({ ...newRecord, description: e.target.value })
              }
              placeholder="Enter record details"
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Save className="w-5 h-5" />
              Save Record
            </button>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {records.map((record) => (
          <div
            key={record.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            {editingId === record.id ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="date"
                      value={newRecord.date}
                      onChange={(e) =>
                        setNewRecord({ ...newRecord, date: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category
                    </label>
                    <select
                      value={newRecord.category}
                      onChange={(e) =>
                        setNewRecord({ ...newRecord, category: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="general">General</option>
                      <option value="medication">Medication</option>
                      <option value="symptoms">Symptoms</option>
                      <option value="vitals">Vitals</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    value={newRecord.title}
                    onChange={(e) =>
                      setNewRecord({ ...newRecord, title: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newRecord.description}
                    onChange={(e) =>
                      setNewRecord({
                        ...newRecord,
                        description: e.target.value,
                      })
                    }
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleEdit(record.id)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {record.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {new Date(record.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        categoryColors[record.category]
                      }`}
                    >
                      {record.category.charAt(0).toUpperCase() +
                        record.category.slice(1)}
                    </span>
                    <button
                      onClick={() => startEdit(record)}
                      className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(record.id)}
                      className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">{record.description}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthRecordPage;
