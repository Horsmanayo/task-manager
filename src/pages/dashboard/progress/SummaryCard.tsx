interface SummaryCardProps {
  activeTasks: number;
  pendingTasks: number;
  upcomingDeadlines: number;
}

function SummaryCard({
  activeTasks,
  pendingTasks,
  upcomingDeadlines,
}: SummaryCardProps) {
  return (
    <div className="bg-white p-6 border-3 rounded-lg shadow-md w-[320px]">
      <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
      <div className="space-y-2">
        <div>
          <p className="text-lg font-medium">Active Tasks:</p>
          <p className="text-2xl font-bold">{activeTasks}</p>
        </div>
        <div>
          <p className="text-lg font-medium">Pending Tasks:</p>
          <p className="text-2xl font-bold">{pendingTasks}</p>
        </div>
        <div>
          <p className="text-lg font-medium">Upcoming Deadlines:</p>
          <p className="text-2xl font-bold">{upcomingDeadlines}</p>
        </div>
      </div>
    </div>
  );
}

export default SummaryCard;
