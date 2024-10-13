import { Input } from "@/components/ui/input";

const WebLink = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-0">
        <h4>Personalized Web Link</h4>
        <small>Create a custom link for your profile or leave as it is</small>
      </div>

      <div className="bg-neutral-800 rounded-3xl p-4 shadow-md space-y-2">
        <small>
          AccessCard: <span className="text-blue-500">Available</span>
        </small>
        <Input placeholder="First name" defaultValue="Shohan" />
      </div>
    </div>
  );
};

export default WebLink;
