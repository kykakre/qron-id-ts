export interface ISupport {
  id: number;
  text: string;
  sendTime: string;
  clientId: number;
  userId: number;
  isSupport: boolean;
  attachments: Attachments[];
}
interface Attachments {
  id: number;
  url: string;
  supportMessageId: number;
}
