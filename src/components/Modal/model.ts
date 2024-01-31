import { ReactNode } from "react";

export interface ModalComponent {
    /**
     * Indicates whether the modal is open.
     */
    open?: boolean;

    /**
     * Content for the header section.
     */
    header?: ReactNode;
  
    /**
     * Content for the footer section.
     */
    footer?: ReactNode;

    /**
     * Prevent closing of the modal by click on backdrop area.
     */
    preventCloseByBackdrop?: boolean;

    /**
     * Callback that is called when modal window is closed.
     */
    onClose?: () => void;
  }