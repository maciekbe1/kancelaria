import { AgentCartProps } from "components";
import { mdiEmailOutline } from "@mdi/js";
import Icon from "@mdi/react";

type AgentContactProps = Omit<AgentCartProps, "isImageRight"> & {
  className?: string;
};
export const AgentContact: React.FC<AgentContactProps> = ({
  agent,
  className,
}) => {
  return (
    <div className={className}>
      <p className="hidden mt-4 text-xl font-bold sm:inline">Email</p>
      <a
        className="items-center hidden font-serif text-xl sm:flex hover:text-gold w-max"
        href={`mailto:${agent.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {agent.email}
      </a>
      <a
        className="flex items-center mt-2 w-max sm:hidden btn btn-outline"
        href={`mailto:${agent.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon path={mdiEmailOutline} size={1} className="mr-2" /> Napisz
        Wiadomość
      </a>
      <p className="mt-4 text-xl font-bold">Telefon</p>
      <a
        className="flex items-center text-xl hover:text-gold w-max font-raleway"
        href={`tel:${agent.phoneNumber}`}
      >
        {agent.phoneNumber}
      </a>
    </div>
  );
};
