import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { useLocalize, useCustomLink } from '~/hooks';
import { Button } from '~/components/ui';
import { cn } from '~/utils';
import store from '~/store';

export default function ManagePrompts({ className }: { className?: string }) {
  const localize = useLocalize();
  const setPromptsName = useSetRecoilState(store.promptsName);
  const setPromptsCategory = useSetRecoilState(store.promptsCategory);
  const clickCallback = useCallback(() => {
    setPromptsName('');
    setPromptsCategory('');
  }, [setPromptsName, setPromptsCategory]);

  const clickHandler = useCustomLink('/d/prompts', clickCallback);

  return (
    <Button variant="ghost" className={cn(className, 'bg-transparent')} onClick={clickHandler}>
      {localize('com_ui_manage')}
    </Button>
  );
}
