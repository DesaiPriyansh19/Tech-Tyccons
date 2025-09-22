declare module "locomotive-scroll" {
  export interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    multiplier?: number;
    class?: string;
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: string, callback: () => void): void;
    update(): void;
    destroy(): void;
    scrollTo(target: number | string | HTMLElement, options?: any): void;
    scroll: {
      instance: {
        scroll: {
          y: number;
        };
      };
    };
  }
}
