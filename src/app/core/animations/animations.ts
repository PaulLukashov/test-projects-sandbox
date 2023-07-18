import { AUTO_STYLE, animate, state, style, transition, trigger } from "@angular/animations";

export const animations = [
  trigger('spoiler', [
    state('open', style({
      height: 'auto',
      opacity: 1,
      transition: 'all 0.3s ease-in-out'
    })),
    state('closed', style({
      height: 0,
      opacity: 0,
      overflow: 'hidden',
      transition: 'all 0.3s ease-in-out'
    })),
    transition('closed => open', [
      animate('0.3s ease-in-out')
    ]),
    transition('open => closed', [
      animate('0.3s ease-in-out')
    ])
  ]),
  trigger('collapse', [
    state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
    state('true', style({ height: '0', visibility: 'hidden' })),
    transition('false => true', animate('300ms ease-in')),
    transition('true => false', animate('300ms ease-out'))
  ])
]
