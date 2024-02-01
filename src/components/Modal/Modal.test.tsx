import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  const header = 'Modal header';
  const content = 'Modal content';
  const footer = 'Modal footer';

  describe('when modal is rendered', () => {
    test('should render the content', () => {
      render(<Modal {...{ header }}>{content}</Modal>);

      screen.getByText(content);
      screen.getByText(header);
      screen.getByText(/OK/i);
    });

    describe('and header is not provided', () => {
      test('should not render header element', () => {
        render(<Modal>{content}</Modal>);

        expect(screen.queryByText(header)).toBeNull();
      });
    });

    describe('and custom footer content is provided', () => {
      test('should render custom content instead of default footer', () => {
        render(<Modal {...{ footer }}>{content}</Modal>);

        screen.getByText(footer);
        expect(screen.queryByRole('footer')).toBeNull();
      });
    });

    describe('and modal is opened', () => {
      test('should set open attribute on dialog element', () => {
        render(<Modal open>{content}</Modal>);

        expect(screen.queryByRole('dialog')).toHaveAttribute('open');
      });

      describe('and backdrop is clicked', () => {
        const onClose = jest.fn();
        test('should close the modal', () => {
          render(
            <Modal open {...{ onClose }}>
              {content}
            </Modal>,
          );

          const dialog = screen.getByRole('dialog');
          fireEvent.click(dialog);

          expect(dialog).not.toHaveAttribute('open');
          //dispatches onClose event
          expect(onClose).toHaveBeenCalled();
        });

        describe('and close on backdrop click is prevented', () => {
          const onClose = jest.fn();
          test('should not close the modal', () => {
            render(
              <Modal open {...{ onClose, preventCloseByBackdrop: true }}>
                {content}
              </Modal>,
            );

            const dialog = screen.getByRole('dialog');
            fireEvent.click(dialog);

            expect(dialog).toHaveAttribute('open');
            //do not dispatch onClose event
            expect(onClose).not.toHaveBeenCalled();
          });
        });
      });
    });
  });
});
