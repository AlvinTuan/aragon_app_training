export interface ExploreItem {
    id: number;
    avatar: string;
    title: string;
    author: string;
    desc: string;
    gendes: { id: number; item: string }[];
}

export interface ModalProps {
    open: boolean;
    handleClose: () => void;
}
