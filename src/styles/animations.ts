import { trigger, transition, style, animate } from '@angular/animations';

export const fadeInOut = trigger(
    'fadeInOut',
    [
        transition(
            ':enter',
            [
                style({ opacity: 0 }),
                animate('0.2s ease-out',
                    style({ opacity: 1 }))
            ]
        ),
        transition(
            ':leave', [
            style({ opacity: 1 }),
            animate('0.2s ease-in',
                style({ opacity: 0 }))
        ]
        )
    ]
);

export const highlightInOut = trigger(
    'highlightInOut',
    [
        transition(
            ':enter',
            [
                style({ opacity: 0, transform: 'translateY(-8px)' }),
                animate('0.2s ease-out',
                    style({ opacity: 1, transform: 'translateY(0px)' }))
            ]
        ),
        transition(
            ':leave', [
            style({ opacity: 1 }),
            animate('0.2s ease-in',
                style({ opacity: 0, transform: 'translateY(-16px)' }))
        ]
        )
    ]
);
