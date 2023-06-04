import * as React from 'react';
import { Button, Stack, Tooltip } from '@strapi/design-system';
import styled from 'styled-components';
import Bold from './Icons/Bold';
import ClearFormat from './Icons/ClearFormat';
import { execCommand } from '../utils/commands';

const Toolbar = ({ className, onHandleClearFormat }) => {
  const onHandleClearFormatAction = () => {
    if (onHandleClearFormat) onHandleClearFormat();
  };

  return (
    <Stack spacing={2} horizontal className={className}>
      <Tooltip description="Bold">
        <ToolbarAction variant="tertiary" onClick={() => execCommand('bold')}>
          <Bold size={16} />
        </ToolbarAction>
      </Tooltip>
      <Tooltip description="Clear format">
        <ToolbarAction onClick={onHandleClearFormatAction} variant="tertiary">
          <ClearFormat size={16} />
        </ToolbarAction>
      </Tooltip>
    </Stack>
  );
};

const ToolbarAction = styled(Button)`
  width: 1rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Toolbar;
