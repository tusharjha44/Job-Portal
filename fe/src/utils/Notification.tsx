import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

export const showNotification = (title: string, message: string, color = 'teal') => {
  notifications.show({
    title,
    message,
    withCloseButton: true,
    icon: <IconCheck style={{ width: '90%', height: '90%' }} />,
    color,
    withBorder: true,
    className: color === 'teal' ? '!border-green-500' : '',
  });
};
