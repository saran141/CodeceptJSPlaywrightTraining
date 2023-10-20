/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type PlaywrightHelper = import('./playwrighthelper_helper.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, PlaywrightHelper {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
