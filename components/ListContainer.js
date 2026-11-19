import React, { useState, useMemo, useEffect } from "react";
import List from "./List";

export default function ListContainer({ loadItems }) {
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const results = await loadItems();
        if (active) setItems(results);
      } catch (loadError) {
        if (active) {
          setError(loadError.message);
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [loadItems]);

  const data = useMemo(() => {
    const normalizedFilter = filter.trim().toLowerCase();
    return items
      .filter((item) => item.toLowerCase().includes(normalizedFilter))
      .sort((a, b) => (asc ? a.localeCompare(b) : b.localeCompare(a)))
      .map((value, index) => ({ key: `${index}-${value}`, value }));
  }, [items, filter, asc]);

  return (
    <List
      data={data}
      asc={asc}
      loading={loading}
      error={error}
      onFilter={setFilter}
      onSort={() => setAsc((currentAsc) => !currentAsc)}
    />
  );
}