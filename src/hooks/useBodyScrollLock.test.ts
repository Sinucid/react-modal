import { act, renderHook } from '@testing-library/react';
import * as utils from '../utils';
import { useBodyScrollLock } from './useBodyScrollLock';

jest.mock('../utils');

describe('useBodyScrollLock', () => {
  beforeEach(() => {
    (utils.isFirefox as jest.Mock).mockImplementation(() => false);
    document.body.style.overflow = '';
  });

  test('should toggle the state and body overflow', () => {
    const { result } = renderHook(useBodyScrollLock);

    expect(result.current[0]).toBe(false);
    expect(document.body.style.overflow).toBe('');

    act(() => result.current[1](true));

    expect(result.current[0]).toBe(true);
    expect(document.body.style.overflow).toBe('clip');
  });

  describe('when document body already has predefined overflow style', () => {
    const initialOverflow = 'hidden';
    beforeEach(() => {
      document.body.style.overflow = initialOverflow;
    });
    test('should persist the initial value', () => {
      document.body.style.overflow = initialOverflow;
      const { result } = renderHook(useBodyScrollLock);

      act(() => result.current[1](true));
      expect(document.body.style.overflow).toBe('clip');

      act(() => result.current[1](false));
      expect(document.body.style.overflow).toBe(initialOverflow);
    });
  });

  describe('when isFirefox true', () => {
    beforeEach(() => {
      (utils.isFirefox as jest.Mock).mockImplementation(() => true);
    });

    test("should restore 'auto' value for overflow style", () => {
      const { result } = renderHook(useBodyScrollLock);

      act(() => result.current[1](true));
      expect(document.body.style.overflow).toBe('clip');

      act(() => result.current[1](false));
      expect(document.body.style.overflow).toBe('auto');
    });
  });
});
