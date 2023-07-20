export default function WhyChooseGyanGuruCard({ data }: any) {
    const {name, icon} = data || {};
  return (
    <div className="p-6 bg-zinc-100 rounded-2xl space-y-6 max-w-xs w-full sm:w-72 lg:even:w-64 hover:scale-105 transition">
      <span className="material-icons-outlined">{icon}</span>
      <h4 className="font-medium">{name}</h4>
    </div>
  );
}
