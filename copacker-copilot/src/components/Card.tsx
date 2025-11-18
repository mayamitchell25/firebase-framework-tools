import { LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  value: string;
  icon: React.ReactElement<LucideIcon>;
}

const Card: React.FC<CardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="text-gray-500">{icon}</div>
    </div>
  );
};

export default Card;
