export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 group">
      <div className="mb-5 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h4 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
        {title}
      </h4>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}