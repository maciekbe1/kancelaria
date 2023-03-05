import { AgentHelp } from "components/AgentHelp/AgentHelp";
import useHeaderState from "hooks/useHeaderState";
import dynamic from "next/dynamic";

const AgentSwiper = dynamic(() =>
  import("./AgentSwiper").then((module) => module.AgentSwiper)
);
export const AgentSection = () => {
  const { isMobile } = useHeaderState();
  return (
    <div>
      {!isMobile && <AgentSwiper className="hidden sm:block" />}
      <AgentHelp />
    </div>
  );
};
