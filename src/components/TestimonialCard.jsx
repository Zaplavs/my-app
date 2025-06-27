export default function TestimonialCard({ name, role, text }) {
  return (
    <div className="bg-gray-800 p-6 rounded border border-red-700 shadow-md">
      <p className="italic text-gray-300 mb-4">"{text}"</p>
      <div>
        <h5 className="font-bold text-white">{name}</h5>
        <p className="text-sm text-gray-400">{role}</p>
      </div>
    </div>
  );
}