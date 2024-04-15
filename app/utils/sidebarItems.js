import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

export const sidebarItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Tablero",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Clientes",
        path: "/dashboard/clients",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Inventario",
        path: "/dashboard/inventory",
        icon: <MdShoppingBag />,
      },
      {
        title: "Pedidos",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Estadísticas",
    list: [
      {
        title: "Ganancias",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reportes",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Equipo",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "Usuario",
    list: [
      {
        title: "Configuraciones",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Ayuda",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
