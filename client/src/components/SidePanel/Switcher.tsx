import { isAssistantsEndpoint, isAgentsEndpoint } from 'librechat-data-provider';
import type { SwitcherProps } from '~/common';
import AssistantSwitcher from './AssistantSwitcher';
import AgentSwitcher from './AgentSwitcher';
import ModelSwitcher from './ModelSwitcher';

import { cn } from '~/utils';

export default function Switcher(props: SwitcherProps) {
  const itemClass = cn(
    'sticky left-0 right-0 top-0 z-[100] flex h-[64px] flex-wrap items-center justify-center bg-background',
    props.isCollapsed ? 'h-[64px]' : 'px-2',
  );

  if (isAssistantsEndpoint(props.endpoint) && props.endpointKeyProvided) {
    return (
      <div className={itemClass}>
        <AssistantSwitcher {...props} />
      </div>
    );
  } else if (isAgentsEndpoint(props.endpoint) && props.endpointKeyProvided) {
    // return (
    //   <div className={itemClass}>
    //     <AgentSwitcher {...props} />
    //   </div>
    // );
    return <div className="mt-2"></div>;
  } else if (isAssistantsEndpoint(props.endpoint)) {
    return <div className="mt-2"></div>;
  }

  return (
    <div className={itemClass}>
      <ModelSwitcher {...props} />
    </div>
  );
}
