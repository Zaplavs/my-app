export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 bg-gray-800 rounded border border-red-700 text-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h4 className="text-xl font-bold mb-2 uppercase tracking-wide">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}