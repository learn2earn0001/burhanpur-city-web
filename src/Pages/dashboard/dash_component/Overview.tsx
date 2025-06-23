const Overview = () => {
  const taskStats = [
    { name: "Prioritized Tasks", value: 83, color: "from-blue-200 to-blue-500" },
    { name: "Additional Tasks", value: 56, color: "from-blue-500 to-blue-200" },
  ];

  return (
    <div className="px-4 py-6">
      <h1 className="text-center text-xl sm:text-2xl font-bold mb-8 sm:mb-10">
        Overview
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {taskStats.map((task, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${task.color} rounded-2xl text-white shadow-md p-5 sm:p-6 transition-transform duration-300 hover:scale-105`}
          >
            <div className="text-sm sm:text-base mb-1">{task.name}</div>
            <div className="text-2xl sm:text-3xl font-bold">{task.value}%</div>
            <div className="text-xs sm:text-sm mt-1">Avg. Completed</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
