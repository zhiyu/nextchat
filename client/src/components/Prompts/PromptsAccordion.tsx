import PromptSidePanel from '~/components/Prompts/Groups/GroupSidePanel';
import AutoSendPrompt from '~/components/Prompts/Groups/AutoSendPrompt';
import FilterPrompts from '~/components/Prompts/Groups/FilterPrompts';
import ManagePrompts from '~/components/Prompts/ManagePrompts';
import { usePromptGroupsNav } from '~/hooks';

export default function PromptsAccordion() {
  const groupsNav = usePromptGroupsNav();
  return (
    <div className="flex h-full w-full flex-col">
      <PromptSidePanel className="lg:w-full xl:w-full" {...groupsNav}>
        <div className="flex items-center">
          <FilterPrompts setName={groupsNav.setName} className="items-center justify-center px-2" />
          <ManagePrompts className="select-none" />
        </div>
      </PromptSidePanel>
    </div>
  );
}
