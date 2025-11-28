import React, { useState, useEffect } from "react";
import "./LManageSubject.css";
import icLeaf from "../../assets/images/ic-leaf.png";

export default function LManageSubject() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [contentOpen, setContentOpen] = useState(true); // for dropdown
  const [query, setQuery] = useState("");

  const subjects = [
    { id: 1, name: "Altest", topics: 1 },
    { id: 2, name: "Avengers", topics: 6 },
    { id: 3, name: "Captain America", topics: 2 },
    { id: 4, name: "Data Structure", topics: 2 },
    { id: 5, name: "English -2", topics: 6 },
    { id: 6, name: "Mathematics", topics: 4 },
    { id: 7, name: "Physics", topics: 3 },
  ];

  const filtered = subjects.filter(
    (s) =>
      s.name.toLowerCase().includes(query.trim().toLowerCase()) ||
      String(s.id).includes(query.trim())
  );

// close sidebar when clicking outside
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
         e.stopPropagation(); // stop the outside click handler
         setSidebarOpen((s) => !s);
       }}
       >
               ☰
        </button>

          <div className="header-title">Manage Subject/Topic</div>
          <div className="header-actions">
            <span className="icon">友</span> {/* language */}
            <span className="icon">👤</span> {/* profile */}
            <span className="icon">⚙️</span> {/* settings */}
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

          <section className="card">
            <h3 className="card-title">
              <span className="attachment">🔗</span> Manage Subject/Topic
            </h3>

            <div className="table-wrap">
              <table className="subject-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Subject Name</th>
                    <th>Topics Count</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((s) => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.name}</td>
                      <td>{s.topics}</td>
                      <td>
                        <a href="#!" className="edit-link">
                          Edit
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
