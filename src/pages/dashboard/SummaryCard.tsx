
interface SummaryCardPorps {
    title: string;
  value: number;
}

const SummaryCard = ({ title, value }: SummaryCardPorps) => {
  return (
    <div>
        <div className="bg-white p-4 border-3 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    </div>
  )
}

export default SummaryCard