export interface NotificationMessage {
  message: string;
  type: NotificationType;
}

export enum NotificationType {
  Success = 'success',
  Error = 'error'
}
