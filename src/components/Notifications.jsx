import {NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const NotificationComponent = () => {
    return (
        <div>
            <NotificationContainer />
        </div>
  ); // No necesita renderizar nada en la interfaz.
};

const createNotification = ({ type, title, message, duration = 3000 }) => {
        switch (type) {
        case 'info':
            NotificationManager.info(message, title, duration);
            break;
        case 'success':
            NotificationManager.success(message, title, duration);
            break;
        case 'warning':
            NotificationManager.warning(message, title, duration);
            break;
        case 'error':
            NotificationManager.error(message, title, duration, () => {
                alert('callback');
            });
            break;
        default:
            break;
    }
}

export { NotificationComponent, createNotification };
