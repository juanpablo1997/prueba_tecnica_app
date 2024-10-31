import React from "react";
import "./ExpenseChart.css";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export const expenses = [
  { id: 1, amount: "45,230.50", category: "Alimentación" },
  { id: 2, amount: "120,500.00", category: "Transporte" },
  { id: 3, amount: "3,250.00", category: "Entretenimiento" },
  { id: 4, amount: "15,000.75", category: "Salud" },
  { id: 5, amount: "8,900.25", category: "Ropa" },
  { id: 6, amount: "500.00", category: "Gastos varios" },
  { id: 7, amount: "22,450.90", category: "Educación" },
  { id: 8, amount: "6,300.00", category: "Hogar" },
  { id: 9, amount: "35,780.00", category: "Viajes" },
  { id: 10, amount: "1,200.99", category: "Mascotas" },
  { id: 11, amount: "2,750.00", category: "Servicios públicos" },
  { id: 12, amount: "1,500.50", category: "Entretenimiento" },
  { id: 13, amount: "900.00", category: "Alimentación" },
  { id: 14, amount: "5,200.00", category: "Transporte" },
  { id: 15, amount: "4,500.75", category: "Salud" },
  { id: 16, amount: "2,000.00", category: "Ropa" },
  { id: 17, amount: "1,800.00", category: "Hogar" },
  { id: 18, amount: "7,000.00", category: "Viajes" },
  { id: 19, amount: "1,100.99", category: "Mascotas" },
  { id: 20, amount: "3,500.00", category: "Servicios públicos" },
  { id: 21, amount: "2,200.50", category: "Gastos varios" },
];

// Función para calcular el gasto total por categoría
const calculateTotalByCategory = (
  expenses: { amount: string; category: string }[]
) => {
  return expenses.reduce(
    (acc: { [key: string]: number }, { category, amount }) => {
      const numericAmount = parseFloat(amount.replace(/,/g, "")); // Convertir a número
      acc[category] = (acc[category] || 0) + numericAmount; // Sumar los gastos por categoría
      return acc;
    },
    {}
  );
};

const ExpenseChart: React.FC = () => {
  const totalByCategory = calculateTotalByCategory(expenses);
  const totalAmount = Object.values(totalByCategory).reduce(
    (acc, val) => acc + val,
    0
  ); // Sumar el total de gastos

  // Convertir el objeto a un array para Recharts
  const data = Object.keys(totalByCategory).map((key) => ({
    name: key,
    value: totalByCategory[key],
  }));

  const COLORS = ["#241e4b", "#de3b8e", "#ffbb28", "#ff8042", "#0088fe", "#00c49f"];

  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="container-graph" style={{ width: "100%", height: "250px" }}> {/* Tamaño del contenedor */}
        <PieChart width={300} height={300} style={{ width: "100%", height: "350px" }}> {/* Tamaño más pequeño */}
          <Pie
            data={data}
            cx={54} // Centro horizontal del pie
            cy={130} // Centro vertical del pie
            labelLine={false} // Desactiva las líneas de etiquetas
            outerRadius={120} // Radio externo del pie
            innerRadius={60} // Radio interno para crear un gráfico de anillo
            fill="#8884d8" // Color por defecto
            dataKey="value" // Clave para los valores
            animationBegin={0} // Inicia la animación inmediatamente
            animationDuration={5000} // Duración de la animación
            animationEasing="linear" // Efecto de la animación
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]} // Colores alternativos para cada sector
                stroke="#fff" // Borde blanco alrededor de cada sector
                strokeWidth={2} // Ancho del borde
                style={{ transition: "transform 0.5s" }} // Transición suave al pasar el mouse
                onMouseOver={(e) => {
                  // Aumenta el tamaño al pasar el mouse
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseOut={(e) => {
                  // Regresa al tamaño original
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number) =>
              new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
              }).format(value)
            }
            contentStyle={{
              backgroundColor: "#de3b8e", // Color de fondo del tooltip
              border: "1px solid #de3b8e", // Borde del tooltip
              borderRadius: "5px", // Bordes redondeados
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Sombra para dar profundidad
            }}
            itemStyle={{
              color: "#FFF", // Color del texto
              fontWeight: "normal", // Peso del texto
            }}
            cursor={{ fill: "none" }} // Quitar el cursor de línea
          />
          <Legend
            layout="vertical"
            align="left"
            verticalAlign="middle"
            iconType="circle"
            iconSize={5} // Tamaño del círculo en la leyenda
            wrapperStyle={{ padding: "20px" }}
            formatter={(value) => (
              <span style={{ fontWeight: "normal", fontSize: "0.6em" }}>{value}</span> // Tamaño de fuente más pequeño
            )}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default ExpenseChart;
