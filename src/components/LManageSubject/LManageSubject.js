import React, { useState, useEffect } from "react";
import "./LManageSubject.css";
import icLeaf from "../../assets/images/ic-leaf.png";

import DataTable from "react-data-table-component";

export default function LManageSubject() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true);
  const [query, setQuery] = useState("");

  const subjects = [
  { id: 1, name: "Altest", topics: 1 },
  { id: 2, name: "Avengers", topics: 6 },
  { id: 3, name: "Captain America", topics: 2 },
  { id: 4, name: "Data Structure", topics: 2 },
  { id: 5, name: "English -2", topics: 6 },
  { id: 6, name: "Mathematics", topics: 4 },
  { id: 7, name: "Physics", topics: 3 },

  // ---- Add more rows below ----
  { id: 8, name: "Biology", topics: 5 },
  { id: 9, name: "Chemistry", topics: 7 },
  { id: 10, name: "Java Programming", topics: 10 },
  { id: 11, name: "Web Development", topics: 8 },
  { id: 12, name: "Networking", topics: 4 },
  { id: 13, name: "Operating Systems", topics: 6 },
  { id: 14, name: "DBMS", topics: 12 },
  { id: 15, name: "Cloud Computing", topics: 5 },
  { id: 16, name: "Machine Learning", topics: 9 },
  { id: 17, name: "AI Basics", topics: 7 },
  { id: 18, name: "Cyber Security", topics: 6 },
  { id: 19, name: "Android Development", topics: 11 },
  { id: 20, name: "Data Science", topics: 13 },
  { id: 21, name: "C Programming", topics: 3 },
  { id: 22, name: "Discrete Math", topics: 5 },
  { id: 23, name: "Compiler Design", topics: 2 },
  { id: 24, name: "Electrical Basics", topics: 3 },
  { id: 25, name: "Human Values", topics: 1 },
  { id: 26, name: "Soft Skills", topics: 4 },
  { id: 27, name: "Robotics", topics: 6 },
  { id: 28, name: "Embedded Systems", topics: 5 },
  { id: 29, name: "IoT", topics: 8 },
  { id: 30, name: "Statistics", topics: 7 }
  ];

  const filtered = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      String(s.id).includes(query.trim())
  );

  // close sidebar on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      const sidebar = document.getElementById("sidebar");
      const hamburger = document.getElementById("hamburger");

      if (
        sidebar &&
        !sidebar.contains(e.target) &&
        hamburger &&
        !hamburger.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // DATATABLE COLUMNS
  const columns = [
    {
      name: "S.No",
      selector: (row) => row.id,
      sortable: true,
      width: "90px",
    },
    {
      name: "Subject Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Topics Count",
      selector: (row) => row.topics,
      sortable: true,
      width: "150px",
    },
    {
      name: "Action",
      cell: (row) => <a href="#!" className="edit-link">Edit</a>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      width: "120px",
    },
  ];

  return (
    <div className="page-wrapper">
      {/* Sidebar */}
      <aside
        className={`sidebar ${sidebarOpen ? "open" : "closed"}`}
        id="sidebar"
      >
        <div className="brand">
          <img src={icLeaf} alt="brand" className="brand-logo" />
        </div>

        <nav className="menu">
          <div className="menu-group">
            <div
              className="menu-heading"
              onClick={() => setContentOpen((prev) => !prev)}
            >
              Content <span className="arrow">{contentOpen ? "▲" : "▼"}</span>
            </div>

            {contentOpen && (
              <ul>
                <li className="active">Subject/Topic</li>
                <li>Question Bank</li>
                <li>E-Resources</li>
              </ul>
            )}
          </div>

          <div className="menu-group">
            <ul>
              <li>📅 Exam Setup</li>
              <li>📝 Assignments</li>
              <li>⚙️ Tasks</li>
              <li>🎓 Training</li>
              <li>🔒 Access Control</li>
              <li>🏢 Meeting Room</li>
              <li>📊 Reports</li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main area */}
      <div className="main-area">
        {/* Header */}
        <header className="header">
          <button
            id="hamburger"
            className="hamburger"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen((s) => !s);
            }}
          >
            ☰
          </button>

          <div className="header-title">Manage Subject/Topic</div>

          <div className="header-actions">
            <span className="icon">友</span>
            <span className="icon">👤</span>
            <span className="icon">⚙️</span>
          </div>
        </header>

        {/* Content */}
        <main className="content">
          <div className="page-controls">
            <button className="create-btn">＋ Create Subject / Topic</button>

            <div className="search-wrap">
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button onClick={() => setQuery("")}>✕</button>
            </div>
          </div>

          {/* CARD + DATATABLE */}
          <section className="card">
            <h3 className="card-title">
              <span className="attachment">🔗</span> Manage Subject/Topic
            </h3>

            <DataTable
              columns={columns}
              data={filtered}
              pagination
              highlightOnHover
              striped
            />

            <div className="card-footer">...</div>
          </section>
        </main>
      </div>
    </div>
  );
}
