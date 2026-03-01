export default function ContactDetail({ icon, text }) {
  return (
    <div className="flex mx-6 my-6 text-2xl items-start gap-2">
      <span className="flex-shrink-0">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
