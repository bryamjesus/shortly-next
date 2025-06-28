export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ModalPropsUrl {
  shortUrl: string;
  isOpen: boolean;
  onClose: () => void;
}
