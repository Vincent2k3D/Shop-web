import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

// Import icons
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  FileText,
  Settings,
  Bell,
  LogOut,
  Menu,
  ChevronDown,
  Search,
  User
} from "lucide-react";

// Dữ liệu mẫu cho biểu đồ
const data = [
  { name: "T1", doanhthu: 4000, chiphi: 2400, loinhuan: 1600 },
  { name: "T2", doanhthu: 3000, chiphi: 1398, loinhuan: 1602 },
  { name: "T3", doanhthu: 2000, chiphi: 9800, loinhuan: -7800 },
  { name: "T4", doanhthu: 2780, chiphi: 3908, loinhuan: -1128 },
  { name: "T5", doanhthu: 1890, chiphi: 4800, loinhuan: -2910 },
  { name: "T6", doanhthu: 2390, chiphi: 3800, loinhuan: -1410 },
  { name: "T7", doanhthu: 3490, chiphi: 4300, loinhuan: -810 },
  { name: "T8", doanhthu: 5000, chiphi: 2300, loinhuan: 2700 },
  { name: "T9", doanhthu: 6000, chiphi: 3300, loinhuan: 2700 },
  { name: "T10", doanhthu: 7000, chiphi: 4300, loinhuan: 2700 },
  { name: "T11", doanhthu: 5500, chiphi: 2500, loinhuan: 3000 },
  { name: "T12", doanhthu: 8000, chiphi: 4000, loinhuan: 4000 }
];

const pieData = [
  { name: "Sản phẩm A", value: 400 },
  { name: "Sản phẩm B", value: 300 },
  { name: "Sản phẩm C", value: 300 },
  { name: "Sản phẩm D", value: 200 },
  { name: "Sản phẩm E", value: 100 }
];

// Dữ liệu chỉ số KPI
const kpiData = [
  {
    title: "Tổng doanh thu",
    value: "48,050,000đ",
    change: "+12%",
    color: "bg-blue-500",
    icon: <FileText className="text-blue-500" />
  },
  {
    title: "Tổng chi phí",
    value: "27,798,000đ",
    change: "+5%",
    color: "bg-red-500",
    icon: <FileText className="text-red-500" />
  },
  {
    title: "Tổng lợi nhuận",
    value: "20,252,000đ",
    change: "+18%",
    color: "bg-green-500",
    icon: <FileText className="text-green-500" />
  },
  {
    title: "Khách hàng mới",
    value: "1,234",
    change: "+22%",
    color: "bg-purple-500",
    icon: <Users className="text-purple-500" />
  }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSidebarItem, setActiveSidebarItem] = useState("dashboard");

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-15"
        } bg-gray-900 text-white transition-all duration-300 ease-in-out relative`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-800">
          <button
            onClick={toggleSidebar}
            className="text-gray-300 hover:text-white"
          >
            <Menu size={20} />
          </button>
          {sidebarOpen ? (
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
          ) : (
            <></>
          )}
        </div>

        <nav className="mt-5 px-2">
          <div className="space-y-1">
            {/* Sidebar menu items */}
            <button
              className={`${
                activeSidebarItem === "dashboard"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("dashboard")}
            >
              <Home className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`} />
              {sidebarOpen && <span>Tổng quan</span>}
            </button>

            <button
              className={`${
                activeSidebarItem === "employees"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("employees")}
            >
              <Users
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Quản lý nhân viên</span>}
            </button>

            <button
              className={`${
                activeSidebarItem === "orders"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("orders")}
            >
              <FileText
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Quản lý đơn hàng</span>}
            </button>

            <button
              className={`${
                activeSidebarItem === "inventory"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("inventory")}
            >
              <Package
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Quản lý kho</span>}
            </button>

            <button
              className={`${
                activeSidebarItem === "purchasing"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("purchasing")}
            >
              <ShoppingCart
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Quản lý đặt hàng</span>}
            </button>
          </div>

          <div className="pt-6 mt-6 border-t border-gray-800">
            <button
              className={`${
                activeSidebarItem === "settings"
                  ? "bg-gray-800 text-white"
                  : "text-gray-300 hover:bg-gray-700"
              } 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200`}
              onClick={() => setActiveSidebarItem("settings")}
            >
              <Settings
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Cài đặt</span>}
            </button>

            <button
              className="text-gray-300 hover:bg-gray-700 
                group flex items-center px-2 py-2 text-base font-medium rounded-md w-full transition-all duration-200"
            >
              <LogOut
                className={`${sidebarOpen ? "mr-3" : "mx-auto"} h-5 w-5`}
              />
              {sidebarOpen && <span>Đăng xuất</span>}
            </button>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top header */}
        <header className="bg-white shadow-sm z-10">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 pr-12"
                    placeholder="Tìm kiếm..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <button className="bg-gray-100 p-1 rounded-full text-gray-600 hover:text-gray-900 focus:outline-none">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                  </button>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                      <User size={16} />
                    </div>
                    {sidebarOpen && (
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">
                          Trần Văn A
                        </p>
                        <p className="text-xs text-gray-500">Admin</p>
                      </div>
                    )}
                  </div>
                  <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4">
          <div className="max-w-7xl mx-auto">
            {/* Page header with tabs */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">
                Bảng điều khiển
              </h1>
              <div className="flex mt-4 border-b">
                <button
                  className={`px-4 py-2 mr-2 ${
                    activeTab === "overview"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("overview")}
                >
                  Tổng quan
                </button>
                <button
                  className={`px-4 py-2 mr-2 ${
                    activeTab === "sales"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("sales")}
                >
                  Doanh số
                </button>
                <button
                  className={`px-4 py-2 mr-2 ${
                    activeTab === "products"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab("products")}
                >
                  Sản phẩm
                </button>
              </div>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {kpiData.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <div
                      className={`${kpi.color} rounded-full p-3 mr-4 bg-opacity-20`}
                    >
                      {kpi.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{kpi.title}</h3>
                      <div className="flex items-baseline">
                        <p className="text-xl font-bold">{kpi.value}</p>
                        <span
                          className={`ml-2 text-sm ${
                            kpi.change.startsWith("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {kpi.change}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {activeTab === "overview" && (
              <>
                {/* Line Chart and Bar Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Doanh thu và Chi phí theo tháng
                      </h2>
                      <select className="border rounded-md px-2 py-1 text-sm">
                        <option>12 tháng qua</option>
                        <option>6 tháng qua</option>
                        <option>3 tháng qua</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="doanhthu"
                          stroke="#4F46E5"
                          activeDot={{ r: 8 }}
                          name="Doanh thu"
                        />
                        <Line
                          type="monotone"
                          dataKey="chiphi"
                          stroke="#F59E0B"
                          name="Chi phí"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Lợi nhuận theo tháng
                      </h2>
                      <select className="border rounded-md px-2 py-1 text-sm">
                        <option>12 tháng qua</option>
                        <option>6 tháng qua</option>
                        <option>3 tháng qua</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                          dataKey="loinhuan"
                          fill="#10B981"
                          name="Lợi nhuận"
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Area Chart and Pie Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Xu hướng doanh thu
                      </h2>
                      <select className="border rounded-md px-2 py-1 text-sm">
                        <option>Doanh thu</option>
                        <option>Chi phí</option>
                        <option>Lợi nhuận</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="doanhthu"
                          stroke="#4F46E5"
                          fill="#4F46E5"
                          fillOpacity={0.2}
                          name="Doanh thu"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">
                        Phân bổ doanh số theo sản phẩm
                      </h2>
                      <select className="border rounded-md px-2 py-1 text-sm">
                        <option>Theo doanh số</option>
                        <option>Theo số lượng</option>
                      </select>
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) =>
                            `${name}: ${(percent * 100).toFixed(0)}%`
                          }
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Pie
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </>
            )}

            {activeTab === "sales" && (
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Chi tiết doanh số bán hàng
                  </h2>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Lọc theo:</span>
                    <select className="border rounded-md px-2 py-1 text-sm">
                      <option>Tất cả khu vực</option>
                      <option>Miền Bắc</option>
                      <option>Miền Trung</option>
                      <option>Miền Nam</option>
                    </select>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart
                    data={data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar
                      dataKey="doanhthu"
                      stackId="a"
                      fill="#4F46E5"
                      name="Doanh thu"
                    />
                    <Bar
                      dataKey="chiphi"
                      stackId="a"
                      fill="#F59E0B"
                      name="Chi phí"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === "products" && (
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Phân tích sản phẩm</h2>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">
                      Xuất báo cáo
                    </button>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={140}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {pieData.map((entry, index) => (
                        <Pie
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend
                      layout="vertical"
                      align="right"
                      verticalAlign="middle"
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
