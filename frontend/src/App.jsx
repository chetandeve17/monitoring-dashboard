import { useEffect, useMemo, useState } from "react";

function App() {
  const [logs, setLogs] = useState([]);
  const [search, setSearch] = useState("");
  const [violationFilter, setViolationFilter] = useState("");
  const [severityFilter, setSeverityFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/logs")
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredLogs = useMemo(() => {
    return logs.filter((log) => {
      const candidateMatch = (log.candidate || "")
        .toLowerCase()
        .includes(search.toLowerCase());

      const violationMatch =
        violationFilter === "" ||
        log.violation === violationFilter;

      const severityMatch =
        severityFilter === "" ||
        log.severity === severityFilter;

      return (
        candidateMatch &&
        violationMatch &&
        severityMatch
      );
    });
  }, [logs, search, violationFilter, severityFilter]);

  const totalLogs = logs.length;

  const highSeverity = logs.filter(
    (log) => log.severity === "High"
  ).length;

  const mediumSeverity = logs.filter(
    (log) => log.severity === "Medium"
  ).length;

  const lowSeverity = logs.filter(
    (log) => log.severity === "Low"
  ).length;

  const totalCandidates = new Set(
    logs.map((log) => log.candidate)
  ).size;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-600";

      case "Medium":
        return "bg-yellow-100 text-yellow-700";

      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">

        <div>
          <h1 className="text-4xl font-bold text-slate-800">
            AI Monitoring Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Real-time candidate monitoring and violation tracking system
          </p>
        </div>

        <div className="mt-4 lg:mt-0 bg-white shadow-lg rounded-2xl px-6 py-4">
          <p className="text-sm text-gray-500">
            System Status
          </p>

          <div className="flex items-center gap-2 mt-1">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

            <span className="font-semibold text-green-600">
              Monitoring Active
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-blue-500">
          <p className="text-gray-500 font-medium">
            Total Logs
          </p>

          <h2 className="text-5xl font-bold mt-4 text-blue-600">
            {totalLogs}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-red-500">
          <p className="text-gray-500 font-medium">
            High Severity
          </p>

          <h2 className="text-5xl font-bold mt-4 text-red-500">
            {highSeverity}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-yellow-500">
          <p className="text-gray-500 font-medium">
            Medium Severity
          </p>

          <h2 className="text-5xl font-bold mt-4 text-yellow-500">
            {mediumSeverity}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-green-500">
          <p className="text-gray-500 font-medium">
            Candidates
          </p>

          <h2 className="text-5xl font-bold mt-4 text-green-600">
            {totalCandidates}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <input
            type="text"
            placeholder="Search Candidate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <select
            value={violationFilter}
            onChange={(e) =>
              setViolationFilter(e.target.value)
            }
            className="border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              All Violations
            </option>

            <option value="Looking Away">
              Looking Away
            </option>

            <option value="Mobile Phone Detected">
              Mobile Phone Detected
            </option>

            <option value="No Face Detected">
              No Face Detected
            </option>

            <option value="Tab Switching">
              Tab Switching
            </option>

            <option value="Multiple Faces Detected">
              Multiple Faces Detected
            </option>

            <option value="Background Noise Detected">
              Background Noise Detected
            </option>

            <option value="Face Not Centered">
              Face Not Centered
            </option>

            <option value="Camera Disabled">
              Camera Disabled
            </option>

            <option value="Microphone Disabled">
              Microphone Disabled
            </option>

            <option value="Unauthorized Person Detected">
              Unauthorized Person Detected
            </option>

            <option value="Screen Minimized">
              Screen Minimized
            </option>

            <option value="Suspicious Eye Movement">
              Suspicious Eye Movement
            </option>

            <option value="Phone Usage Detected">
              Phone Usage Detected
            </option>

            <option value="Audio Tampering">
              Audio Tampering
            </option>

            <option value="Internet Disconnected">
              Internet Disconnected
            </option>
          </select>

          <select
            value={severityFilter}
            onChange={(e) =>
              setSeverityFilter(e.target.value)
            }
            className="border border-gray-300 rounded-xl p-4 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">
              All Severity
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>
          </select>
        </div>
      </div>

      {/* Logs Table */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

        <div className="px-6 py-5 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Monitoring Logs
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Live candidate activity and AI-detected violations
            </p>
          </div>

          <div className="mt-3 md:mt-0 bg-slate-100 px-4 py-2 rounded-xl">
            <span className="font-semibold text-slate-700">
              {filteredLogs.length} Records
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>
                <th className="text-left p-5 font-semibold text-slate-700">
                  Candidate
                </th>

                <th className="text-left p-5 font-semibold text-slate-700">
                  Violation
                </th>

                <th className="text-left p-5 font-semibold text-slate-700">
                  Severity
                </th>

                <th className="text-left p-5 font-semibold text-slate-700">
                  Timestamp
                </th>
              </tr>
            </thead>

            <tbody>

              {loading ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-10 text-lg"
                  >
                    Loading monitoring logs...
                  </td>
                </tr>
              ) : filteredLogs.length === 0 ? (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-10 text-gray-500"
                  >
                    No logs found
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b hover:bg-slate-50 transition duration-200"
                  >
                    <td className="p-5 font-medium text-slate-700">
                      {log.candidate || "Unknown"}
                    </td>

                    <td className="p-5 text-slate-600">
                      {log.violation}
                    </td>

                    <td className="p-5">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${getSeverityColor(
                          log.severity
                        )}`}
                      >
                        {log.severity}
                      </span>
                    </td>

                    <td className="p-5 text-gray-500">
                      {log.timestamp}
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default App;