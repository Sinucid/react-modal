export interface ModalComponent {
    /**
     * Indicates whether the modal is open.
     */
    open?: boolean;

    /**
     * Content for the header section.
     */
    header?: string;
  
    /**
     * Content for the footer section.
     */
    footer?: boolean;

    /**
     * Prevent closing of the modal by click on backdrop area.
     */
    preventCloseByBackdrop?: boolean;

    /**
     * Callback that is called when modal window is closed.
     */
    onClose?: () => void;
  }