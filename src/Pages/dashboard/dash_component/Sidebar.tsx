// components/dashboard/Sidebar.tsx
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const items = [
  { name: "Overview", icon: "📊", link: "overview" },
  { name: "Leads", icon: "📋", link: "leads" },
  { name: "Inbox", icon: "📨", badge: 4, link: "inbox" },
  { name: "Clients", icon: "👥", link: "clients" },
  { name: "Settings", icon: "⚙️", link: "settings" },
  { name: "Add Business", icon: "➕", link: "add-business" },
  { name: "Business", icon: "📊", link: "business" },
];

const Sidebar = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Overlay for small screens */}
      <div
        className={clsx(
          "fixed inset-0 bg-purple bg-opacity-30 z-40 transition-opacity sm:hidden",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-purple-300 to-purple-500 z-50 shadow-lg transform transition-transform duration-300 sm:static sm:translate-x-0 sm:flex-shrink-0 sm:h-auto sm:w-56 sm:rounded-lg sm:shadow p-3 overflow-y-auto",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="space-y-4">
          {items.map((item, idx) => (
            <button
              key={idx}
              className="flex w-full items-center text-lg rounded-lg py-3 px-5 font-medium text-purple-700 hover:bg-white transition"
              onClick={() => {
                navigate(`/dash/${item.link}`);
                onClose(); // Close sidebar after navigation on small screen
              }}
            >
              <span className="text-xl mr-3">{item.icon}</span>
              <span>{item.name}</span>
              {item.badge && (
                <span className="ml-auto text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
