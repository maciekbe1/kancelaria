import { AgentCartProps } from "components";

type AgentContactProps = Omit<AgentCartProps, "isImageRight"> & {
  className?: string;
};
export const AgentContact: React.FC<AgentContactProps> = ({
  agent,
  className,
}) => {
  return (
    <div className={className}>
      <p className="mt-4 text-xl font-bold">Email</p>
      <a
        className="items-center font-serif text-xl hover:text-gold w-max"
        href={`mailto:${agent.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {agent.email}
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
