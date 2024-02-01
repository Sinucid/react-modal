import React, { MouseEvent, PropsWithChildren, useEffect, useRef } from 'react';
import { ModalComponent } from './model';
import { useBodyScrollLock } from '../../hooks';
import { Button, ButtonComponentSchemas } from '../Button';
import styles from './Modal.module.css';

const Modal: React.FC<PropsWithChildren<ModalComponent>> = ({
  open = false,
  header,
  footer,
  preventCloseByBackdrop,
  onClose,
  children,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [, scrollLock] = useBodyScrollLock();

  const toggleModal = (toggle = open): void => {
    if (toggle) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
    scrollLock(open);
  };

  const onBackdropClick = (e: MouseEvent<HTMLDialogElement>): void => {
    if (preventCloseByBackdrop || e.target !== dialogRef.current) return;

    toggleModal(false);
  };

  const close = (): void => onClose?.();

  useEffect(toggleModal, [open, scrollLock]);

  return (
    <dialog
      className={styles.root}
      ref={dialogRef}
      onClick={onBackdropClick}
      onClose={close}
    >
      <form className={styles.form} method="dialog">
        {header && <header className={styles.header}>{header}</header>}

        <section className={styles.content}>{children}</section>

        {footer ?? (
          <footer className={styles.footer}>
            <Button schema={ButtonComponentSchemas.Neutral} autoFocus>
              OK
            </Button>
          </footer>
        )}
      </form>
    </dialog>
  );
};

export default Modal;
