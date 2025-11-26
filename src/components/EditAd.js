import React, { useState, useRef, useEffect } from "react";
import "./EditAd.css";

/**
 * Small accessible dropdown (click to open, click option to select)
 * Props:
 *  - label, options [{value,label}], value, onChange, placeholder
 */
function Dropdown({ label, options = [], value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div className="dd-wrap" ref={ref}>
      {label && <div className="dd-label">{label}</div>}

      <button
        type="button"
        className={`dd-button ${open ? "open" : ""}`}
        onClick={() => setOpen((s) => !s)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={`dd-value ${value ? "has-val" : ""}`}>
          {value || placeholder}
        </span>
        <span className="dd-caret">▾</span>
      </button>

      {open && (
        <ul className="dd-list" role="listbox">
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.label}
              className={`dd-item ${value === opt.label ? "selected" : ""}`}
              onClick={() => {
                onChange(opt.label);
                setOpen(false);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function EditAd() {
  const categoryOptions = [
    { value: "land_vehicle", label: "Land Vehicle" },
    { value: "property", label: "Property" },
    { value: "electronics", label: "Electronics" },
  ];
  const subCategoryOptions = [
    { value: "sedan", label: "Sedan" },
    { value: "suv", label: "SUV" },
    { value: "hatch", label: "Hatchback" },
  ];
  const makeOptions = [
    { value: "bmw", label: "BMW" },
    { value: "audi", label: "Audi" },
    { value: "mercedes", label: "Mercedes" },
  ];
  const yearOptions = Array.from({ length: 16 }, (_, i) => {
    const y = 2024 - i;
    return { value: String(y), label: String(y) };
  });
  const engineOptions = [
    { value: "1000", label: "1000 cc" },
    { value: "1500", label: "1500 cc" },
    { value: "2000", label: "2000 cc" },
  ];
  const fuelOptions = [
    { value: "petrol", label: "Petrol" },
    { value: "diesel", label: "Diesel" },
    { value: "electric", label: "Electric" },
  ];
  const damageOptions = [
    { value: "no", label: "No" },
    { value: "yes", label: "Yes" },
  ];
  const cityOptions = [
    { value: "chennai", label: "Chennai" },
    { value: "bangalore", label: "Bangalore" },
    { value: "mumbai", label: "Mumbai" },
    { value: "los angeles", label: "Los Angeles" },
  ];
  const countryOptions = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
  ];

  const [form, setForm] = useState({
    category: "",
    subCategory: "",
    name: "",
    make: "",
    model: "",
    year: "",
    engine: "",
    fuel: "",
    damages: "",
    owners: "1",
    city: "",
    country: "",
    address: "",
    description: "",
  });
  const [submitting, setSubmitting] = useState(false);

  function handleChange(field, value) {
    setForm((s) => ({ ...s, [field]: value }));
  }

  function validate() {
    const err = {};
    if (!form.category) err.category = "Category required";
    if (!form.name) err.name = "Name required";
    return err;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        alert("Saved (demo)\n\n" + JSON.stringify(form, null, 2));
      }, 700);
    } else {
      // basic UX: scroll to top so user can see errors (if you add them later)
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="edit-page">
      <form className="edit-card" onSubmit={handleSubmit} noValidate>
        <div className="content-box">
          {/* header */}
          <div className="edit-header">
            <div className="left">
              <button type="button" className="icon-back" aria-label="back">
                ‹
              </button>
              <div className="title">Edit Ad</div>
            </div>

            <div className="right">
              <div className="step">1/3</div>
              <button type="button" className="icon-close" aria-label="close">
                ⨉
              </button>
            </div>
          </div>

          {/* small info */}
          <div className="info-line">
            SAR <strong>8</strong> Were utilized for posting Ads
          </div>

          {/* form grid */}
          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Category"
                options={categoryOptions}
                value={form.category}
                onChange={(v) => handleChange("category", v)}
                placeholder="Select category"
              />
            </div>

            <div className="col">
              <Dropdown
                label="Sub - Category"
                options={subCategoryOptions}
                value={form.subCategory}
                onChange={(v) => handleChange("subCategory", v)}
                placeholder="Select sub-category"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col col-span-2">
              <label className="field-label">Name</label>
              <input
                className="text-input"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Ad title"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Make"
                options={makeOptions}
                value={form.make}
                onChange={(v) => handleChange("make", v)}
                placeholder="Select make"
              />
            </div>

            <div className="col">
              <label className="field-label">Model</label>
              <input
                className="text-input"
                value={form.model}
                onChange={(e) => handleChange("model", e.target.value)}
                placeholder="Model"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Year"
                options={yearOptions}
                value={form.year}
                onChange={(v) => handleChange("year", v)}
                placeholder="Select year"
              />
            </div>

            <div className="col">
              <Dropdown
                label="Engine Size"
                options={engineOptions}
                value={form.engine}
                onChange={(v) => handleChange("engine", v)}
                placeholder="Select engine"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Fuel Type"
                options={fuelOptions}
                value={form.fuel}
                onChange={(v) => handleChange("fuel", v)}
                placeholder="Select fuel"
              />
            </div>

            <div className="col">
              <Dropdown
                label="Damages"
                options={damageOptions}
                value={form.damages}
                onChange={(v) => handleChange("damages", v)}
                placeholder="Have a Damages ?"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Owners"
                options={[
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
                value={form.owners}
                onChange={(v) => handleChange("owners", v)}
                placeholder="Owners"
              />
            </div>

            <div className="col">
              <Dropdown
                label="City"
                options={cityOptions}
                value={form.city}
                onChange={(v) => handleChange("city", v)}
                placeholder="Select city"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col">
              <Dropdown
                label="Country"
                options={countryOptions}
                value={form.country}
                onChange={(v) => handleChange("country", v)}
                placeholder="Select country"
              />
            </div>

            <div className="col">
              {/* empty column to keep alignment if needed */}
            </div>
          </div>

          <div className="grid-row">
            <div className="col col-span-2">
              <label className="field-label">Address</label>
              <textarea
                className="text-area"
                rows="4"
                value={form.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder="Address"
              />
            </div>
          </div>

          <div className="grid-row">
            <div className="col col-span-2">
              <label className="field-label">Description</label>
              <textarea
                className="text-area"
                rows="4"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Description"
              />
            </div>
          </div>

          <div className="action-area">
            <button className="primary-btn" type="submit" disabled={submitting}>
              {submitting ? "Saving..." : "Continue"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
