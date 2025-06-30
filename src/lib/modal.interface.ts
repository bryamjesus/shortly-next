export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface ModalPropsUrl {
  codeUrl: string;
  isOpen: boolean;
  onClose: () => void;
}
