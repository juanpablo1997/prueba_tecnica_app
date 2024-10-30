import React, { useState } from 'react';

interface Item {
  id: number;
  amount: string;
  category: string;
  description: string;
  date: string; // Date string formatted as "D de mes YYYY"
}

interface FilterComponentProps {
  items: Item[];
  onFilter: (filteredItems: Item[]) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({ items, onFilter }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  // Obtener categorías únicas
  const categories = Array.from(new Set(items.map(item => item.category)));

  // Función para manejar el filtrado
  const handleFilter = () => {
    const filteredItems = items.filter(item => {
      const itemDate = new Date(item.date);
      const isCategoryMatch = selectedCategory ? item.category === selectedCategory : true;
      const isStartDateMatch = startDate ? itemDate >= new Date(startDate) : true;
      const isEndDateMatch = endDate ? itemDate <= new Date(endDate) : true;

      return isCategoryMatch && isStartDateMatch && isEndDateMatch;
    });

    onFilter(filteredItems);
  };

  return (
    <div className="filter-component mb-4">
      <div className="row">
        <div className="col-md-4">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Seleccione una categoría</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            type="date"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleFilter}>
        Filtrar
      </button>
    </div>
  );
};

export default FilterComponent;
